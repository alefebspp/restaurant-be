import { Request, Response } from 'express';
import { UpdateScheduleUseCase } from 'src/app/use-cases/schedule/update-schedule/UpdateScheduleUseCase';
import { container } from 'tsyringe';

export class UpdateScheduleController {
  async handle(request: Request, response: Response) {
    const { scheduleId } = request.params;
    const { day_of_week, opening_time, closing_time } = request.body;

    const updateSchedule = container.resolve(UpdateScheduleUseCase);

    await updateSchedule.execute(
      { day_of_week, opening_time, closing_time },
      scheduleId
    );

    return response.json({
      message: 'Schedule updated!'
    });
  }
}
