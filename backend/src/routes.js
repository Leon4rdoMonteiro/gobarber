import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import authMiddleware from './app/middlewares/auth';

// CONTROLLERS IMPORT
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';

const routes = new Router();

const upload = multer(multerConfig)

// SESSION ROUTE
routes.post('/sessions', SessionController.store);

// USER ROUTES
routes.post('/users', UserController.store);
routes.put('/users', authMiddleware, UserController.update);

// PROVIDER ROUTES
routes.get('/providers', ProviderController.index);

// FILE ROUTE
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
