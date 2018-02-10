const express = require("express"),
  { json } = require("body-parser"),
  cors = require("cors"),
  axios = require('axios');

const app = express();
app.use(json());
app.use(cors());


const port = 3000;
app.listen(port,()=>{console.log(`Listening On Port ${port}`)});