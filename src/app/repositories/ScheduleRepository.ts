import { Schedule } from '../entities/schedule';

export interface UpdateScheduleRequest {
  day_of_week?: number;
  opening_time?: Date;
  closing_time?: Date;
}

export interface ScheduleRepository {
  create(schedule: Schedule): Promise<void>;
  find(scheduleId: string): Promise<Omit<Schedule, 'props'>>;
  delete(scheduleId: string): Promise<void>;
  update(data: UpdateScheduleRequest, scheduleId: string): Promise<void>;
  index(): Promise<Omit<Schedule, 'props'>[]>;
  findRestaurantScheduleByDayOfWeek(
    restaurantId: string,
    day: number
  ): Promise<Omit<Schedule, 'props'>[]>;
  findRestaurantSchedules(
    restaurantId: string
  ): Promise<Omit<Schedule, 'props'>[]>;
}
