import { Request, Response } from 'express';
import { DeleteRestaurantUseCase } from 'src/app/use-cases/restaurant/delete-restaurant/DeleteRestaurantUseCase';
import { container } from 'tsyringe';

export class DeleteRestaurantController {
  async handle(request: Request, response: Response) {
    const { restaurantId } = request.params;

    const deleteRestaurant = container.resolve(DeleteRestaurantUseCase);

    await deleteRestaurant.execute(restaurantId);

    return response.json({
      message: 'Company deleted!'
    });
  }
}
