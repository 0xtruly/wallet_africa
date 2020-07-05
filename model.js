const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserWallet = new Schema({
  fullName: {
    type: String,
  },
  email: {
    type: String,
  },
  userId: {
    type: String,
  },
  createdAt: {
    type: String,
  },
  wallet_cashTag: 
  { type: String 
  },
  wallet_currency: 
  { type: String 
  },
  wallet_balance: 
  { type: String 
  },
  wallet_sent: 
  { type: String 
  },
  wallet_received: 
  { type: String 
  },
});
module.exports = UserWallet = mongoose.model("userwallet", UserWallet);
