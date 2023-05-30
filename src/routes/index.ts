import { Router } from 'express';
import restaurantsRoutes from './restaurant.routes';
import scheduleRoutes from './schedule.routes';

const routes = Router();

routes.use('/restaurants', restaurantsRoutes);
routes.use('/schedules', scheduleRoutes);

export default routes;
