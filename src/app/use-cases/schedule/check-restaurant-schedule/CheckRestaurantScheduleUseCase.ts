import { ScheduleRepository } from 'src/app/repositories/ScheduleRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CheckRestaurantScheduleUseCase {
  constructor(
    @inject('PrismaScheduleRepository')
    private scheduleRepository: ScheduleRepository
  ) {}

  async execute(
    restaurantId: string,
    date: string,
    opening_time: string,
    closing_time: string
  ) {
    const requestDate = new Date(date);
    const requestDay = requestDate.getDay();

    const schedule =
      await this.scheduleRepository.findRestaurantScheduleByDayOfWeek(
        restaurantId,
        requestDay
      );
    if (schedule.length == 0) {
      return false;
    }
    const scheduleOpeningTimeDate = new Date(schedule[0].opening_time);
    const scheduleClosingTimeDate = new Date(schedule[0].closing_time);

    const openingTimeHour = parseInt(opening_time.split(':')[0]);
    const closingTimeHour = parseInt(closing_time.split(':')[0]);

    if (
      openingTimeHour >= scheduleOpeningTimeDate.getHours() &&
      closingTimeHour <= scheduleClosingTimeDate.getHours()
    ) {
      return true;
    } else {
      return false;
    }
  }
}
