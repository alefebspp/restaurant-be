import { ScheduleRepository } from 'src/app/repositories/ScheduleRepository';
import { injectable, inject } from 'tsyringe';
import AppError from 'src/shared/errors/AppError';

@injectable()
export class FindScheduleUseCase {
  constructor(
    @inject('PrismaScheduleRepository')
    private scheduleRepository: ScheduleRepository
  ) {}

  async execute(scheduleId: string) {
    const schedule = await this.scheduleRepository.find(scheduleId);

    if (!schedule) {
      throw new AppError('Could not find schedule', 403);
    }

    return schedule;
  }
}
