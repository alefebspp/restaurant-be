import { Request, Response } from 'express';
import { ListRestaurantsUseCase } from 'src/app/use-cases/restaurant/list-restaurants/ListRestaurantsUseCase';
import { container } from 'tsyringe';

export class ListRestaurantsController {
  async handle(request: Request, response: Response) {
    const listRestaurants = container.resolve(ListRestaurantsUseCase);

    const restaurants = await listRestaurants.execute();

    return response.json(restaurants);
  }
}
