import { container } from 'tsyringe';
import { PrismaClient } from '@prisma/client';
import prisma from 'src/prisma';
import { RestaurantRepository } from 'src/app/repositories/RestaurantRepository';
import { PrismaRestaurantRepository } from 'src/database/prisma/repositories/PrismaRestaurantsRepository';

container.register<PrismaClient>('PrismaClient', {
  useValue: prisma
});

container.registerSingleton<RestaurantRepository>(
  'PrismaRestaurantRepository',
  PrismaRestaurantRepository
);
