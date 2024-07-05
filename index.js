const express = require('express');
const bodyParser = require("body-parser");
var cors = require("cors");
const connectToMongo = require('./config/db')
const cost  = require('./routes/cost');
const app = express();

connectToMongo()

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }))

require("dotenv").config();
app.get("/", (req, res) => {
    res.send("hi buddy ji");
  });

app.use("/api/cost",cost);

app.listen(process.env.PORT,()=>{
  console.log("connect",process.env.PORT);
  })