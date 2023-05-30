import { FindRestaurantSchedulesUseCase } from 'src/app/use-cases/schedule/find-restaurant-schedules/FindRestaurantSchedulesUseCase';
import { container } from 'tsyringe';
import { Response, Request } from 'express';

export class FindRestaurantSchedulesController {
  async handle(request: Request, response: Response) {
    const { restaurantId } = request.params;

    const findRestaurantSchedules = container.resolve(
      FindRestaurantSchedulesUseCase
    );

    const restaurants = await findRestaurantSchedules.execute(restaurantId);

    return response.json(restaurants);
  }
}
