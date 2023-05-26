import { CreateRestaurantDTO } from '../dtos/CreateRestaurantDTO';
import { Restaurant } from '../entities/restaurant';

export interface UpdateRestaurantRequest {
  name?: string;
  cnpj?: string;
  segment?: string;
}

export interface RestaurantRepository {
  create(restaurant: Restaurant): Promise<void>;
  find(restaurantId: string): Promise<Omit<Restaurant, 'props'>>;
  delete(restaurantId: string): Promise<void>;
  update(data: UpdateRestaurantRequest, restaurantId: string): Promise<void>;
  index(): Promise<Omit<Restaurant, 'props'>[]>;
}
