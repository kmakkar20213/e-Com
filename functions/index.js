const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51KrUQeSCwLb7eGXTnAEebtTJWNHMYOK3gWtmTZjY2CFD5dHPpkoIgi2wtnhhcQL6a8VnLMv4educDZHN8ht04UwK00YsLgJAuk"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("Hello People"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });
});
exports.api = functions.https.onRequest(app);
