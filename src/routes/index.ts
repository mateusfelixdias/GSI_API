import { Router } from 'express';
import { getWelcomeMessage } from '../Controllers/wellcome';
import { ImoveisController } from '../Controllers/ImoveisController';

export const routes = Router();

// Rota para teste 
routes.get('/', getWelcomeMessage.index)
routes.get('/imoveis/getAll', ImoveisController.index)
routes.get('/imoveis/getOne/:id', ImoveisController.show)
routes.post('/imoveis/create', ImoveisController.store)
routes.put('/imoveis/update/:id', ImoveisController.update)
routes.delete('/imoveis/delete/:id', ImoveisController.update)
