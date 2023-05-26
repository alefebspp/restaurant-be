import { RestaurantRepository } from 'src/app/repositories/RestaurantRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class ListRestaurantsUseCase {
  constructor(
    @inject('PrismaRestaurantRepository')
    private restaurantRepository: RestaurantRepository
  ) {}

  async execute() {
    const restaurants = await this.restaurantRepository.index();

    return restaurants;
  }
}
