import { Request, Response } from 'express';
import { UpdateRestaurantUseCase } from 'src/app/use-cases/restaurant/update-restaurant/UpdateRestaurantUseCase';
import { container } from 'tsyringe';

export class UpdateRestaurantController {
  async handle(request: Request, response: Response) {
    const { restaurantId } = request.params;
    const { name, cnpj, segment } = request.body;

    const updateRestaurant = container.resolve(UpdateRestaurantUseCase);

    await updateRestaurant.execute({ name, cnpj, segment }, restaurantId);

    return response.json({
      message: 'Restaurant updated!'
    });
  }
}
