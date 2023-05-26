import { CreateRestaurantDTO } from 'src/app/dtos/CreateRestaurantDTO';
import { Restaurant } from 'src/app/entities/restaurant';
import { RestaurantRepository } from 'src/app/repositories/RestaurantRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CreateRestaurantUseCase {
  constructor(
    @inject('PrismaRestaurantRepository')
    private restaurantRepository: RestaurantRepository
  ) {}

  async execute(data: CreateRestaurantDTO) {
    const restaurant = new Restaurant({
      name: data.name,
      cnpj: data.cnpj,
      segment: data.segment
    });

    await this.restaurantRepository.create(restaurant);
  }
}
