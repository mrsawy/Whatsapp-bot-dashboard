const express = require("express");
const Data = require("../model/data");
const mainRouter = express.Router();



mainRouter.put("/", async (req, res) => {
  let { main } = req.body;
  const filter = { identifier: "basic" };
  const update = {
    mainMessage: main,
  };
  const options = {
    new: true,
  };
  const updatedDocument = await Data.findOneAndUpdate(filter, update, options);

  res.json({ main: updatedDocument?.mainMessage });
});
// 
mainRouter.get("/", async (req, res) => {
  const filter = { identifier: `basic` };
  const foundDocument = await Data.findOne(filter);
  res.json({ main: foundDocument?.mainMessage });
});

module.exports = mainRouter;
