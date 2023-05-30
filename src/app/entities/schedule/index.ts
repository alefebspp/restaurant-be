import { randomUUID } from 'node:crypto';

interface ScheduleProps {
  day_of_week: number;
  opening_time?: Date | string;
  closing_time?: Date | string;
  restaurant_id: string;
}

export class Schedule {
  private _id: string;
  private props: ScheduleProps;

  constructor(props: ScheduleProps) {
    this._id = randomUUID();
    this.props = props;
  }

  public get id() {
    return this._id;
  }

  public get day_of_week() {
    return this.props.day_of_week;
  }

  public set day_of_week(dayOfWeek: number) {
    this.props.day_of_week = dayOfWeek;
  }

  public get opening_time() {
    return this.props.opening_time;
  }

  public set opening_time(openingTime: Date | string) {
    this.props.opening_time = openingTime;
  }

  public get closing_time() {
    return this.props.closing_time;
  }

  public set closing_time(closingTime: Date | string) {
    this.props.closing_time = closingTime;
  }

  public get restaurant_id() {
    return this.props.restaurant_id;
  }

  public set restaurant_id(restaurantId: string) {
    this.props.restaurant_id = restaurantId;
  }
}
