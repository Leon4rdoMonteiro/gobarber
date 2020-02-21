import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import authMiddleware from './app/middlewares/auth';

// CONTROLLERS IMPORT
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';

const routes = new Router();

const upload = multer(multerConfig)

// SESSION ROUTE
routes.post('/sessions', SessionController.store);

// MIDDLEWARE ROUTE
routes.use(authMiddleware);

// USER ROUTES
routes.post('/users', UserController.store);
routes.put('/users', UserController.update);

// PROVIDER ROUTES
routes.get('/providers', ProviderController.index);

// APPOINTMENT ROUTES
routes.get('/appointments', AppointmentController.index);
routes.post('/appointments', AppointmentController.store);

// SCHEDULE ROUTE
routes.get('/schedule', ScheduleController.index);

// FILE ROUTE
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
