import { Router } from 'express';
import { HousesController } from '../controllers/HousesController';

export const routes = Router();

routes.post('/houses', HousesController.store);
routes.post('/houses/filter', HousesController.filter);

routes.get('/houses', HousesController.index);
routes.get('/houses/:id', HousesController.show);

routes.put('/houses/:id', HousesController.update);

routes.delete('/houses/:id', HousesController.delete);
