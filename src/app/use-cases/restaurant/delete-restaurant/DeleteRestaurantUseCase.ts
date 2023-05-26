import { RestaurantRepository } from 'src/app/repositories/RestaurantRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class DeleteRestaurantUseCase {
  constructor(
    @inject('PrismaRestaurantRepository')
    private restaurantRepository: RestaurantRepository
  ) {}

  async execute(restaurantId: string) {
    await this.restaurantRepository.delete(restaurantId);
  }
}
