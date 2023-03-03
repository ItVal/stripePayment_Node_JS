const cors = require('cors');
const express = require('express');
require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();

//Middlewares 
app.use(express.json())
app.use(cors());

//routes
//get
app.get('/api/pay', (req, res) => {
    res.send("Hello world")
});

//post
app.post('/api/pay/create', async (req, res) => {
    const {product} = req.body;
    const session = await stripe.checkout.sessions.create({
        payment_method: ["card"],
        line_items: [
            {
                price_data: {
                    currency: "USD",
                    product_data: {
                        name: product.name,
                    },
                    unit_amount: product.price * 100,
                },
                quantity: product.quantity,
            },
        ],
        mode: 'payment',
        success_url: "http://localhost:300/success",
        cancel_url: "http://localhost:300/cancel"
    });
    res.json({id: session.id});
})

//listen server
app.listen(8900, () => {
    console.log('server is started at port : 8900');
})