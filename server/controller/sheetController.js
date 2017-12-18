const axios = require("axios");

module.exports = {
  austinRecap: (req, res, next) => {
    const myURL = `https://sheetsu.com/apis/v1.0bu/02a760cfcd61/sheets/austin_recap`;
    axios
      .get(myURL)
      .then(response => res.send(response.data))
      .catch(console.log);
  },
  dfwRecap: (req, res, next) => {
    const myURL = `https://sheetsu.com/apis/v1.0bu/02a760cfcd61/sheets/dfw_recap`;
    axios
      .get(myURL)
      .then(response => res.send(response.data))
      .catch(console.log);
  },
  denverRecap: (req, res, next) => {
    const myURL = `https://sheetsu.com/apis/v1.0bu/02a760cfcd61/sheets/denver_recap`;
    axios
      .get(myURL)
      .then(response => res.send(response.data))
      .catch(console.log);
  },
  houstonRecap: (req, res, next) => {
    const myURL = `https://sheetsu.com/apis/v1.0bu/02a760cfcd61/sheets/houston_recap`;
    axios
      .get(myURL)
      .then(response => res.send(response.data))
      .catch(console.log);
  },
  kcRecap: (req, res, next) => {
    const myURL = `https://sheetsu.com/apis/v1.0bu/02a760cfcd61/sheets/houston_recap`;
    axios
      .get(myURL)
      .then(response => res.send(response.data))
      .catch(console.log);
  },
  lvRecap: (req, res, next) => {
    const myURL = `https://sheetsu.com/apis/v1.0bu/02a760cfcd61/sheets/lv_recap`;
    axios
      .get(myURL)
      .then(response => res.send(response.data))
      .catch(console.log);
  },
  losReblesRecap: (req, res, next) => {
    const myURL = `https://sheetsu.com/apis/v1.0bu/02a760cfcd61/sheets/los_robles_recap`;
    axios
      .get(myURL)
      .then(response => res.send(response.data))
      .catch(console.log);
  },
  nashRecap: (req, res, next) => {
    const myURL = `https://sheetsu.com/apis/v1.0bu/02a760cfcd61/sheets/nash_recap`;
    axios
      .get(myURL)
      .then(response => res.send(response.data))
      .catch(console.log);
  },
  northernVirginiaRecap: (req, res, next) => {
    const myURL = `https://sheetsu.com/apis/v1.0bu/02a760cfcd61/sheets/northern_virginia_recap`;
    axios
      .get(myURL)
      .then(response => res.send(response.data))
      .catch(console.log);
  },
  stLucieRecap: (req, res, next) => {
    const myURL = `https://sheetsu.com/apis/v1.0bu/02a760cfcd61/sheets/port_st_lucie_recap`;
    axios
      .get(myURL)
      .then(response => res.send(response.data))
      .catch(console.log);
  },
  sanAntonioRecap: (req, res, next) => {
    const myURL = `https://sheetsu.com/apis/v1.0bu/02a760cfcd61/sheets/san_antonio_recap`;
    axios
      .get(myURL)
      .then(response => res.send(response.data))
      .catch(console.log);
  },
  orlandoRecap: (req, res, next) => {
    const myURL = `https://sheetsu.com/apis/v1.0bu/02a760cfcd61/sheets/orlando_recap`;
    axios
      .get(myURL)
      .then(response => res.send(response.data))
      .catch(console.log);
  },
  sanJoseRecap: (req, res, next) => {
    const myURL = `https://sheetsu.com/apis/v1.0bu/02a760cfcd61/sheets/san_jose_recap`;
    axios
      .get(myURL)
      .then(response => res.send(response.data))
      .catch(console.log);
  },
  drucRecap: (req, res, next) => {
    const myURL = `https://sheetsu.com/apis/v1.0bu/02a760cfcd61/sheets/druc_recap`;
    axios
      .get(myURL)
      .then(response => res.send(response.data))
      .catch(console.log);
  },
  mccucRecap: (req, res, next) => {
    const myURL = `https://sheetsu.com/apis/v1.0bu/02a760cfcd61/sheets/mccuc_recap`;
    axios
      .get(myURL)
      .then(response => res.send(response.data))
      .catch(console.log);
  }
};