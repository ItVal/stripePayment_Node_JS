import stripe from 'stripe'
import dotenv from 'dotenv';
stripe(process.env.STRIPE_SECRET_KEY);
dotenv.config({});

export const postStripePayment = async (req, res, next) => {
	try {
        const {product} = req.body;
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
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
            success_url: "http://localhost:5173/success",
            cancel_url: "http://localhost:5173/cancel"
        });
        res.status(201).json({id: session.id});
	} catch (error) {
		const err = new Error('Internal error');
		res.statusCode = 500;
		return next(error);
	}
};