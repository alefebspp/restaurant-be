import { container } from 'tsyringe';
import { PrismaClient } from '@prisma/client';
import prisma from 'src/prisma';
import { RestaurantRepository } from 'src/app/repositories/RestaurantRepository';
import { PrismaRestaurantRepository } from 'src/database/prisma/repositories/PrismaRestaurantsRepository';
import { ScheduleRepository } from 'src/app/repositories/ScheduleRepository';
import { PrismaScheduleRepository } from 'src/database/prisma/repositories/PrismaScheduleRepository';

container.register<PrismaClient>('PrismaClient', {
  useValue: prisma
});

container.registerSingleton<RestaurantRepository>(
  'PrismaRestaurantRepository',
  PrismaRestaurantRepository
);

container.registerSingleton<ScheduleRepository>(
  'PrismaScheduleRepository',
  PrismaScheduleRepository
);
