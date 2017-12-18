const express = require("express"),
  session = require("express-session"),
  { json } = require("body-parser"),
  cors = require("cors"),
  axios = require('axios');

const { 
    austinRecap,
    dfwRecap,
    denverRecap,
    houstonRecap,
    kcRecap,
    lvRecap,
    losReblesRecap,
    nashRecap,
    northernVirginiaRecap,
    stLucieRecap,
    sanAntonioRecap,
    orlandoRecap,
    sanJoseRecap,
    drucRecap,
    mccucRecap
    } = require("./controller/sheetController");


const app = express();
app.use(json());
app.use(cors());

//ReST Endpoints Accessing Contollers
app.get("/api/recap/austin",austinRecap);
app.get("/api/recap/dfw", dfwRecap);
app.get("/api/recap/denver", denverRecap);
app.get("/api/recap/houston", houstonRecap);
app.get("/api/recap/kc", kcRecap);
app.get("/api/recap/lv", lvRecap);
app.get("/api/recap/los_robles", losReblesRecap);
app.get("/api/recap/nash", nashRecap);
app.get("/api/recap/north_virginia", northernVirginiaRecap);
app.get("/api/recap/st_lucie", stLucieRecap);
app.get("/api/recap/san_antonio", sanAntonioRecap);
app.get("/api/recap/orlando", orlandoRecap);
app.get("/api/recap/san_jose", sanJoseRecap);
app.get("/api/recap/druc", drucRecap);
app.get("/api/recap/mccuc", mccucRecap);

const port = 3000;
app.listen(port,()=>{console.log(`Listening On Port ${port}`)});