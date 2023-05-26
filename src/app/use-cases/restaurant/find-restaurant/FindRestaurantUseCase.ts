import { RestaurantRepository } from 'src/app/repositories/RestaurantRepository';
import { injectable, inject } from 'tsyringe';
import AppError from 'src/shared/errors/AppError';

@injectable()
export class FindRestaurantUseCase {
  constructor(
    @inject('PrismaRestaurantRepository')
    private restaurantRepository: RestaurantRepository
  ) {}

  async execute(restaurantId: string) {
    const restaurant = await this.restaurantRepository.find(restaurantId);

    if (!restaurant) {
      throw new AppError('Could not find restaurant', 403);
    }

    return restaurant;
  }
}
