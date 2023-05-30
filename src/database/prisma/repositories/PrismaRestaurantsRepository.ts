import { Restaurant } from 'src/app/entities/restaurant';
import {
  RestaurantRepository,
  UpdateRestaurantRequest
} from 'src/app/repositories/RestaurantRepository';
import prisma from 'src/prisma';
import { inject, injectable } from 'tsyringe';

@injectable()
export class PrismaRestaurantRepository implements RestaurantRepository {
  constructor(
    @inject('PrismaClient')
    private prismaClient: typeof prisma
  ) {}
  async index(): Promise<Omit<Restaurant, 'props'>[]> {
    const restaurants = await this.prismaClient.restaurant.findMany();

    return restaurants;
  }

  async create(restaurant: Restaurant): Promise<void> {
    await this.prismaClient.restaurant.create({
      data: {
        id: restaurant.id,
        name: restaurant.name,
        cnpj: restaurant.cnpj,
        segment: restaurant.segment
      }
    });
  }

  async find(restaurantId: string): Promise<Omit<Restaurant, 'props'>> {
    const restaurant = await this.prismaClient.restaurant.findUnique({
      where: {
        id: restaurantId
      }
    });

    return restaurant;
  }

  async delete(restaurantId: string): Promise<void> {
    await this.prismaClient.restaurant.delete({
      where: {
        id: restaurantId
      }
    });
  }
  async update(
    data: UpdateRestaurantRequest,
    restaurantId: string
  ): Promise<void> {
    await this.prismaClient.restaurant.update({
      where: {
        id: restaurantId
      },
      data: {
        name: data.name,
        cnpj: data.cnpj,
        segment: data.segment
      }
    });
  }
}
