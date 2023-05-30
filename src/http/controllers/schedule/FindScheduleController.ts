import { Request, Response } from 'express';
import { FindScheduleUseCase } from 'src/app/use-cases/schedule/find-schedule/FindScheduleUseCase';
import { container } from 'tsyringe';

export class FindScheduleController {
  async handle(request: Request, response: Response) {
    const { scheduleId } = request.params;

    const findSchedule = container.resolve(FindScheduleUseCase);

    const schedule = await findSchedule.execute(scheduleId);

    return response.json(schedule);
  }
}
