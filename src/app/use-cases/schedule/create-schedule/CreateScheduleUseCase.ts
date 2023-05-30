import { CreateScheduleDTO } from 'src/app/dtos/CreateScheduleDTO';
import { Schedule } from 'src/app/entities/schedule';
import { ScheduleRepository } from 'src/app/repositories/ScheduleRepository';
import AppError from 'src/shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CreateScheduleUseCase {
  constructor(
    @inject('PrismaScheduleRepository')
    private scheduleRepository: ScheduleRepository
  ) {}

  async execute(data: CreateScheduleDTO) {
    const registeredSchedule =
      await this.scheduleRepository.findRestaurantScheduleByDayOfWeek(
        data.restaurant_id,
        data.day_of_week
      );
    if (registeredSchedule.length > 0) {
      throw new AppError(
        'This company already have a schedule registered with this day of week',
        409
      );
    }
    const schedule = new Schedule({
      restaurant_id: data.restaurant_id,
      day_of_week: data.day_of_week,
      opening_time: data.opening_time,
      closing_time: data.closing_time
    });

    await this.scheduleRepository.create(schedule);
  }
}
