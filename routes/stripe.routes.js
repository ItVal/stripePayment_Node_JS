import express from 'express';
const route = express.Router();
import {postStripePayment} from '../controllers/index.js';

route.post('/', postStripePayment);

export default route;

