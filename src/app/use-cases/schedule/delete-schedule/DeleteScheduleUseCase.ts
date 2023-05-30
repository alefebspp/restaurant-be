import { ScheduleRepository } from 'src/app/repositories/ScheduleRepository';
import AppError from 'src/shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
export class DeleteScheduleUseCase {
  constructor(
    @inject('PrismaScheduleRepository')
    private scheduleRepository: ScheduleRepository
  ) {}

  async execute(scheduleId: string) {
    const schedule = await this.scheduleRepository.find(scheduleId);

    if (!schedule) {
      throw new AppError('Could not find schedule to delete', 403);
    }

    await this.scheduleRepository.delete(schedule.id);
  }
}
