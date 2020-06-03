import express from 'express';
const routes = express.Router();

import PointsController from './controllers/PointsConotroller';
import ItemsController from './controllers/ItemsController';

const pointsController =new PointsController();
const itemsController =new ItemsController();

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

 export default routes;