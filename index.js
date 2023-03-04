const cors = require('cors');
const express = require('express');

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
app.post('/api/pay/create', postStripePayment)

//listen server
app.listen(8900, () => {
    console.log('server is started at port : 8900');
})