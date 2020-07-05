const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const logger = require("morgan");
const mongoose = require("mongoose");
const User = require("./model");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false, limit: "5mb" }));
app.use(bodyParser.json());
app.use(logger("dev"));

const DB_USER = "ashcode";
const PASSWORD = encodeURIComponent("1Adebbanjo@");

mongoose
  .connect(`mongodb://forestbaba:Olaitan01@ds255577.mlab.com:55577/oddwyse`)
  .then(() => {
    console.log("Mongodb connected");
  });
app.get("/", (req, res) => {
  return res.status(200).json({ error: false, message: "Welcome to wallet" });
});

app.post("/api/v1/createWallet", (req, res) => {
  console.log(req.body);
  const user = new User({
    fullName: req.body.fullName,
    email: req.body.email,
    userId: req.body.userId,
    createdAt: new Date(),
    wallet_cashTag: req.body.wallet_cashTag,
    wallet_currency: req.body.wallet_currency,
    wallet_balance: req.body.wallet_balance,
    wallet_sent: req.body.wallet_sent,
    wallet_received: req.body.wallet_received,
  })
    .save()
    .then((user) => {
      return res.status(200).json({ error: false, data: user });
    })
    .catch((err) => {
      console.log("ERR: ", err);
      return res
        .status(400)
        .json({ error: true, message: "Error adding user data" });
    });
});

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
