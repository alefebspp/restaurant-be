import { ScheduleRepository } from 'src/app/repositories/ScheduleRepository';
import AppError from 'src/shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
export class FindScheduleByDayOfWeekUseCase {
  constructor(
    @inject('PrismaScheduleRepository')
    private scheduleRepository: ScheduleRepository
  ) {}

  async execute(restaurantId: string, day: number) {
    const schedule =
      await this.scheduleRepository.findRestaurantScheduleByDayOfWeek(
        restaurantId,
        day
      );

    if (!schedule) {
      throw new AppError('Schedule not found', 403);
    }

    return schedule;
  }
}
