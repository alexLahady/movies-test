import express from 'express';
import { defaultRoute } from './defaultRoute';

export const routes = express.Router();

routes.use(defaultRoute);
//routes.use(routes.getall())
//routes.use(routes.getId())