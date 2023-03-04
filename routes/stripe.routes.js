import express from 'express';
const route = express.Router();
import postStripePayment from '../controllers/stripe.controllers.js';

route.post('/', postStripePayment);

export default route;

