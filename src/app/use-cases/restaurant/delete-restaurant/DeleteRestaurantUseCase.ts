import { RestaurantRepository } from 'src/app/repositories/RestaurantRepository';
import AppError from 'src/shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
export class DeleteRestaurantUseCase {
  constructor(
    @inject('PrismaRestaurantRepository')
    private restaurantRepository: RestaurantRepository
  ) {}

  async execute(restaurantId: string) {
    const restaurant = await this.restaurantRepository.find(restaurantId);

    if (!restaurant) {
      throw new AppError('Could not find restaurant to delete', 403);
    }

    await this.restaurantRepository.delete(restaurant.id);
  }
}
