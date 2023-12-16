const express = require("express");
const { resolver } = require("../utils/errorHandle");
const listRouter = require("./autoList");
const botRouter = express.Router();
const mainRouter = require("./main");

botRouter.use("/main", resolver(mainRouter));
botRouter.use("/list", resolver(listRouter));

module.exports = botRouter;
