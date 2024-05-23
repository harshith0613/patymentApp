// payment.js
const stripe = require('stripe')('sk_test_51PJ9z2SEggDqVS5cCTLVV0YZpmr4hQBaHC7mJMtVsbp3fhHwQ3q7REyYwTfSZnk7qLaR1lXAwRQDi9vTcv7v12qO00GP3z6Rr1');

const processPayment = async (token, amount, email) => {
  try {
    const customer = await stripe.customers.create({
      email: email,
      source: token.id,
    });

    const charge = await stripe.charges.create({
      amount: amount,
      currency: 'usd',
      customer: customer.id,
      description: 'A SIMPLE site',
    });

    return charge;
  } catch (error) {
    throw error;
  }
};

module.exports = { processPayment };
