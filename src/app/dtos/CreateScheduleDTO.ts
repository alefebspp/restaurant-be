export interface CreateScheduleDTO {
  day_of_week: number;
  opening_time?: Date;
  closing_time?: Date;
  restaurant_id: string;
}
