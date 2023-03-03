const cors = require('cors');
const express = require('express');
require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();

//Middlewares 
app.use(express.json())
app.use(cors());

//routes
app.get('/api/pay', (req, res) => {
    res.send("Hello world")
});

//listen server
app.listen(8900, () => {
    console.log('server is started at port : 8900');
})