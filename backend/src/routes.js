import { Router } from 'express';

// CONTROLLERS IMPORT
import UserController from './app/controllers/UserCOntroller';

const routes = new Router();

routes.post('/users', UserController.store);

export default routes;
