const mongoose = require("mongoose");

const price = new mongoose.Schema({
        name:{
         type:String
        },
        base_unit: {
          type: String,
        },
        quote_unit: {
          type: String,
        },
        low: {
          type: String,
        },
        high: {
          type: String,
        },
        last: {
          type: String,
        },
        type: {
          type: String,
        },
        open: {
          type: String,
        },
        volume: {
          type: String,
        },
        sell: {
          type: String,
        },
        buy: {
          type: String,
        },
        at: {
          type: Number,
        },
        name1: {
          type: String,
        },
});

module.exports = mongoose.model("prices",price);