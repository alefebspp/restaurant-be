import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CheckRestaurantScheduleUseCase } from 'src/app/use-cases/schedule/check-restaurant-schedule/CheckRestaurantScheduleUseCase';

export class CheckRestaurantScheduleController {
  async handle(request: Request, response: Response) {
    const { restaurantId } = request.params;
    const { date, opening_time, closing_time } = request.query;

    const checkRestaurantSchedule = container.resolve(
      CheckRestaurantScheduleUseCase
    );

    const isOpen = await checkRestaurantSchedule.execute(
      restaurantId,
      date as string,
      opening_time as string,
      closing_time as string
    );

    return response.json({
      isOpen
    });
  }
}
