import { injectable, inject } from 'tsyringe';
import {
  ScheduleRepository,
  UpdateScheduleRequest
} from 'src/app/repositories/ScheduleRepository';

@injectable()
export class UpdateScheduleUseCase {
  constructor(
    @inject('PrismaScheduleRepository')
    private scheduleRepository: ScheduleRepository
  ) {}

  async execute(data: UpdateScheduleRequest, scheduleId: string) {
    await this.scheduleRepository.update(
      {
        day_of_week: data.day_of_week,
        opening_time: data.opening_time,
        closing_time: data.closing_time
      },
      scheduleId
    );
  }
}
