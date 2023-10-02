import { Router } from 'express';
import { getWelcomeMessage } from '../Controllers/wellcome';

export const routes = Router();

// Rota para teste 
routes.get('/', getWelcomeMessage.index)
