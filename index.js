import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import Stripe from 'stripe';

const app = express()
dotenv.config()
Stripe(process.env.STRIPE_SECRET_KEY)

console.log(Stripe)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => {
   res.status(200).json({
      "msg": "SERVER IS UP"
   })
})

const port = process.env.PORT || 3000
app.listen(port, () => {
   console.log('Listening on Port:' + port)
})



// stripe(process.env.STRIPE_SECRET_KEY)
// dotenv.config()
// const app = express()
// const port = process.env.PORT || 3000

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// app.use(cors())

// app.post('/payment-sheet', async (req, res) => {
//    // Use an existing Customer ID if this is a returning customer.
//    const customer = await stripe.customers.create();
//    const ephemeralKey = await stripe.ephemeralKeys.create(
//       { customer: customer.id },
//       { apiVersion: '2024-04-10' }
//    );
//    const paymentIntent = await Stripe.paymentIntents.create({
//       amount: 1099,
//       currency: 'eur',
//       customer: customer.id,
//       // In the latest version of the API, specifying the `automatic_payment_methods` parameter
//       // is optional because Stripe enables its functionality by default.
//       automatic_payment_methods: {
//          enabled: true,
//       },
//    });

//    res.json({
//       paymentIntent: paymentIntent.client_secret,
//       ephemeralKey: ephemeralKey.secret,
//       customer: customer.id,
//       publishableKey: process.env.STRIPE_PUBLISHABLE_KEY
//    });
// });

// app.get('/', (req, res) => {
//    res.status(200).json({ 'msg': "SERVER IS UP" })
// })

// app.listen(port, () => {
//    console.log('App is listening on PORT : ' + port)
// })



