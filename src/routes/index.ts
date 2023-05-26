import { Router } from 'express';
import restaurantsRoutes from './restaurant.routes';

const routes = Router();

routes.use('/restaurants', restaurantsRoutes);

export default routes;
