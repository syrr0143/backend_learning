const express = require("express");
const bodyParser = require('body-parser')

const { PORT, NAME } = require("./config/serverConfig");

const setUpAndStartServer = async () => {
  // creating an app server
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(PORT , () => {
        console.log(`server is running at port ${PORT} `);
    })
};
setUpAndStartServer();