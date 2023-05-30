import { ScheduleRepository } from 'src/app/repositories/ScheduleRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class FindRestaurantSchedulesUseCase {
  constructor(
    @inject('PrismaScheduleRepository')
    private scheduleRepository: ScheduleRepository
  ) {}

  async execute(restaurantId: string) {
    const restaurants = await this.scheduleRepository.findRestaurantSchedules(
      restaurantId
    );

    return restaurants;
  }
}
