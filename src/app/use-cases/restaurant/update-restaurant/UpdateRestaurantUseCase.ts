import { injectable, inject } from 'tsyringe';
import {
  RestaurantRepository,
  UpdateRestaurantRequest
} from '../../../repositories/RestaurantRepository';

@injectable()
export class UpdateRestaurantUseCase {
  constructor(
    @inject('PrismaRestaurantRepository')
    private restaurantRepository: RestaurantRepository
  ) {}

  async execute(data: UpdateRestaurantRequest, restaurantId: string) {
    await this.restaurantRepository.update(
      {
        name: data.name,
        cnpj: data.cnpj,
        segment: data.segment
      },
      restaurantId
    );
  }
}
