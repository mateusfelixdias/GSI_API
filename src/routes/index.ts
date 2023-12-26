import { Router } from 'express';
import { AuthController } from '../controllers/AuthController';
import { HousesController } from '../controllers/HousesController';
import {
  validateTokenMiddleware,
  validateAccessApiKeyMiddleware,
} from '../middlewares';

export const routes = Router();

routes.get(
  '/generate-token',
  validateAccessApiKeyMiddleware,
  AuthController.generateToken
);

routes.post('/houses', validateTokenMiddleware, HousesController.store);
routes.post('/houses/filter', validateTokenMiddleware, HousesController.filter);

routes.get('/houses', validateTokenMiddleware, HousesController.index);
routes.get('/houses/:id', validateTokenMiddleware, HousesController.show);

routes.put('/houses/:id', validateTokenMiddleware, HousesController.update);

routes.delete('/houses/:id', validateTokenMiddleware, HousesController.delete);
