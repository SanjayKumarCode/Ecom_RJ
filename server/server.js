const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
// app.use(cors());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT;
const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.post("/pay", async (req, res) => {
  try {
    console.log(req.body.token);
    // Create a charge using the Stripe API
    const charge = await Stripe.charges.create({
      source: req.body.token.id,
      amount: req.body.amount,
      currency: "inr",
    });

    // If the charge was successful, send a success response
    res.json({ success: true, message: "Payment successful", charge });
  } catch (error) {
    // If there was an error, send an error response
    console.error("Payment error:", error);
    res.status(500).json({ success: false, message: "Payment failed", error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});




