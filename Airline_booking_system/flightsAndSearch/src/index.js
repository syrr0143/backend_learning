const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const CityRepository = require("./repository/city-repository.js");

const setUpAndStartServer = async () => {
  // creating an app server
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, async () => {
    console.log(`server is running at port ${PORT}`);
    const repo = new CityRepository();
    repo.createCity("New delhi");
  });
};
setUpAndStartServer();
