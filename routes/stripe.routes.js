import express from 'express';
const route = express.Router();
import { post } from '../controllers/stripe.controllers.js';

route.post('/', post);

export default route;
