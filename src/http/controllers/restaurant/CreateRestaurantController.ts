import { Request, Response } from 'express';
import { CreateRestaurantUseCase } from 'src/app/use-cases/restaurant/create-restaurant/CreateRestaurantUseCase';
import { container } from 'tsyringe';

export class CreateRestaurantController {
  async handle(request: Request, response: Response) {
    const { name, cnpj, segment } = request.body;

    const createRestaurant = container.resolve(CreateRestaurantUseCase);

    await createRestaurant.execute({ name, cnpj, segment });

    return response.json({
      message: 'Company created!'
    });
  }
}
