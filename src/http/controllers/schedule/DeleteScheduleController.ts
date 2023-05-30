import { Request, Response } from 'express';
import { DeleteScheduleUseCase } from 'src/app/use-cases/schedule/delete-schedule/DeleteScheduleUseCase';
import { container } from 'tsyringe';

export class DeleteScheduleController {
  async handle(request: Request, response: Response) {
    const { scheduleId } = request.params;

    const deleteSchedule = container.resolve(DeleteScheduleUseCase);

    await deleteSchedule.execute(scheduleId);

    return response.json({
      message: 'Schedule deleted!'
    });
  }
}
