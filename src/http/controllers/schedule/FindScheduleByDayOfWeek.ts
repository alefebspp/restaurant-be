import { Request, Response } from 'express';
import { FindScheduleByDayOfWeekUseCase } from 'src/app/use-cases/schedule/find-schedule-by-day-of-week/FindScheduleByDayOfWeek';
import { container } from 'tsyringe';

export class FindScheduleByDayOfWeekController {
  async handle(request: Request, response: Response) {
    const { restaurant_id } = request.params;
    const { day } = request.query;

    const findScheduleByDayOfWeek = container.resolve(
      FindScheduleByDayOfWeekUseCase
    );

    const schedule = await findScheduleByDayOfWeek.execute(
      restaurant_id,
      parseInt(day as string)
    );

    return response.json(schedule);
  }
}
