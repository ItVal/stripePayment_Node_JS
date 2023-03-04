const express = require('express');
const route = express.Router();
const postStripePayment = require('../controllers/stripe.controllers');

route.post('/', postStripePayment);

export default route;

