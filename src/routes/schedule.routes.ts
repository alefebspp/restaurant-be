import { Router } from 'express';
import { CheckRestaurantScheduleController } from 'src/http/controllers/schedule/CheckRestaurantScheduleController';
import { CreateScheduleController } from 'src/http/controllers/schedule/CreateScheduleController';
import { DeleteScheduleController } from 'src/http/controllers/schedule/DeleteScheduleController';
import { FindRestaurantSchedulesController } from 'src/http/controllers/schedule/FindRestaurantSchedulesController';
import { FindScheduleByDayOfWeekController } from 'src/http/controllers/schedule/FindScheduleByDayOfWeek';
import { FindScheduleController } from 'src/http/controllers/schedule/FindScheduleController';
import { UpdateScheduleController } from 'src/http/controllers/schedule/UpdateScheduleController';

const scheduleRoutes = Router();

const findScheduleController = new FindScheduleController();
const deleteScheduleController = new DeleteScheduleController();
const updateScheduleController = new UpdateScheduleController();
const createScheduleController = new CreateScheduleController();
const findRestaurantSchedulesController =
  new FindRestaurantSchedulesController();
const findScheduleByDayOfWeek = new FindScheduleByDayOfWeekController();
const checkRestaurantSchedule = new CheckRestaurantScheduleController();

scheduleRoutes.get('/:scheduleId', findScheduleController.handle);
scheduleRoutes.delete('/:scheduleId', deleteScheduleController.handle);
scheduleRoutes.patch('/:scheduleId', updateScheduleController.handle);
scheduleRoutes.post('/', createScheduleController.handle);
scheduleRoutes.get(
  '/restaurant/:restaurantId',
  findRestaurantSchedulesController.handle
);
scheduleRoutes.get('/week/:restaurantId', findScheduleByDayOfWeek.handle);
scheduleRoutes.get(
  '/:restaurantId/availability',
  checkRestaurantSchedule.handle
);

export default scheduleRoutes;
