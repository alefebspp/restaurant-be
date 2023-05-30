import { CreateScheduleUseCase } from 'src/app/use-cases/schedule/create-schedule/CreateScheduleUseCase';
import { container } from 'tsyringe';
import { Request, Response } from 'express';

export class CreateScheduleController {
  async handle(request: Request, response: Response) {
    const { day_of_week, restaurant_id, opening_time, closing_time } =
      request.body;

    const createSchedule = container.resolve(CreateScheduleUseCase);

    await createSchedule.execute({
      day_of_week,
      restaurant_id,
      opening_time,
      closing_time
    });

    return response.json({
      messge: 'Schedule created!'
    });
  }
}
