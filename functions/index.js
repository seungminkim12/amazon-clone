const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HSEzlAb6ok7GnJn21wGIrrLhwtOhpN3JxCZUeGtuWiSz8Tk6WtUwzN2q87cx6lvF8eM1iObw25AndSQVOisY2tM00qq75lpzI"
);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Received", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  }); //Ok -created
});

// Listen command
exports.api = functions.https.onRequest(app);
