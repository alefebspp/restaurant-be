import { PrismaClient } from '@prisma/client';
import { Schedule } from 'src/app/entities/schedule';
import {
  ScheduleRepository,
  UpdateScheduleRequest
} from 'src/app/repositories/ScheduleRepository';
import { inject, injectable } from 'tsyringe';
import { createDateWithSpecificHour } from 'src/shared/utils/createDate';

@injectable()
export class PrismaScheduleRepository implements ScheduleRepository {
  constructor(
    @inject('PrismaClient')
    private prismaClient: PrismaClient
  ) {}

  async findRestaurantScheduleByDayOfWeek(
    restaurantId: string,
    day: number
  ): Promise<Omit<Schedule, 'props'>[]> {
    const schedule = await this.prismaClient.schedule.findMany({
      where: {
        AND: [
          {
            restaurant_id: restaurantId
          },
          {
            day_of_week: day
          }
        ]
      }
    });

    return schedule;
  }
  async findRestaurantSchedules(
    restaurantId: string
  ): Promise<Omit<Schedule, 'props'>[]> {
    const restaurants = await this.prismaClient.schedule.findMany({
      where: {
        restaurant_id: restaurantId
      },
      orderBy: {
        day_of_week: 'asc'
      }
    });

    return restaurants;
  }
  async create(schedule: Schedule): Promise<void> {
    const openingTimeDate = createDateWithSpecificHour(schedule.opening_time);
    const closingTimeDate = createDateWithSpecificHour(schedule.closing_time);
    await this.prismaClient.schedule.create({
      data: {
        id: schedule.id,
        day_of_week: schedule.day_of_week,
        restaurant_id: schedule.restaurant_id,
        opening_time: openingTimeDate,
        closing_time: closingTimeDate
      }
    });
  }
  async find(scheduleId: string): Promise<Omit<Schedule, 'props'>> {
    const schedule = await this.prismaClient.schedule.findUnique({
      where: {
        id: scheduleId
      }
    });

    return schedule;
  }
  async delete(scheduleId: string): Promise<void> {
    await this.prismaClient.schedule.delete({
      where: {
        id: scheduleId
      }
    });
  }
  async update(data: UpdateScheduleRequest, scheduleId: string): Promise<void> {
    await this.prismaClient.schedule.update({
      where: {
        id: scheduleId
      },
      data: {
        day_of_week: data.day_of_week,
        opening_time: data.opening_time,
        closing_time: data.closing_time
      }
    });
  }
  index(): Promise<Omit<Schedule, 'props'>[]> {
    throw new Error('Method not implemented.');
  }
}
