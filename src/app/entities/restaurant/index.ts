import { randomUUID } from 'node:crypto';

interface RestaurantProps {
  name: string;
  cnpj: string;
  segment: string;
}

export class Restaurant {
  private props: RestaurantProps;
  private _id: string;

  constructor(props: RestaurantProps) {
    this.props = props;
    this._id = randomUUID();
  }

  public get id() {
    return this._id;
  }

  public get name() {
    return this.props.name;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get cnpj() {
    return this.props.cnpj;
  }

  public set cnpj(cnpj: string) {
    this.props.cnpj = cnpj;
  }

  public get segment() {
    return this.props.segment;
  }

  public set segment(segment: string) {
    this.props.segment = segment;
  }
}
