import { Router } from 'express';
import { validateAccessMiddleware } from '../middlewares';
import { AuthController } from '../controllers/AuthController';
import { HousesController } from '../controllers/HousesController';

export const routes = Router();

routes.get(
  '/generate-token',
  validateAccessMiddleware,
  AuthController.generateToken
);

routes.post('/houses', validateAccessMiddleware, HousesController.store);
routes.post(
  '/houses/filter',
  validateAccessMiddleware,
  HousesController.filter
);

routes.get('/houses', validateAccessMiddleware, HousesController.index);
routes.get('/houses/:id', validateAccessMiddleware, HousesController.show);

routes.put('/houses/:id', validateAccessMiddleware, HousesController.update);

routes.delete('/houses/:id', validateAccessMiddleware, HousesController.delete);
