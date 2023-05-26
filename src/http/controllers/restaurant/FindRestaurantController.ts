import { Request, Response } from 'express';
import { FindRestaurantUseCase } from 'src/app/use-cases/restaurant/find-restaurant/FindRestaurantUseCase';
import { container } from 'tsyringe';

export class FindRestaurantController {
  async handle(request: Request, response: Response) {
    const { restaurantId } = request.params;

    const findRestaurant = container.resolve(FindRestaurantUseCase);

    const restaurant = await findRestaurant.execute(restaurantId);

    return response.json(restaurant);
  }
}
