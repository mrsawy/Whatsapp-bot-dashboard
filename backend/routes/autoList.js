const express = require("express");
const Data = require("../model/data");
const listRouter = express.Router();



listRouter.put("/", async (req, res) => {
  let { list } = req.body;
  const filter = { identifier: "basic" };
  const update = {
    autoList: list,
  };
  const options = {
    new: true,
  };
  const updatedDocument = await Data.findOneAndUpdate(filter, update, options);
  res.json({ result: updatedDocument });
});
// ____________________________________________________________
listRouter.get("/", async (req, res) => {
  const filter = { identifier: `basic` };

  const foundDocument = await Data.findOne(filter);

  res.json({ autoList: foundDocument?.autoList });
});

module.exports = listRouter;
