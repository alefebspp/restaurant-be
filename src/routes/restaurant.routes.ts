import { Router } from 'express';
import { CreateRestaurantController } from 'src/http/controllers/restaurant/CreateRestaurantController';
import { DeleteRestaurantController } from 'src/http/controllers/restaurant/DeleteRestaurantController';
import { ListRestaurantsController } from 'src/http/controllers/restaurant/ListRestaurantsController';
import { FindRestaurantController } from 'src/http/controllers/restaurant/FindRestaurantController';
import { UpdateRestaurantController } from 'src/http/controllers/restaurant/UpdateRestaurantController';

const restaurantsRoutes = Router();

const createRestaurantController = new CreateRestaurantController();
const listRestaurantsController = new ListRestaurantsController();
const deleteRestaurantController = new DeleteRestaurantController();
const findRestaurantController = new FindRestaurantController();
const updateRestaurantController = new UpdateRestaurantController();

restaurantsRoutes.get('/', listRestaurantsController.handle);
restaurantsRoutes.get('/:restaurantId', findRestaurantController.handle);
restaurantsRoutes.delete('/:restaurantId', deleteRestaurantController.handle);
restaurantsRoutes.post('/', createRestaurantController.handle);
restaurantsRoutes.patch('/:restaurantId', updateRestaurantController.handle);

export default restaurantsRoutes;
