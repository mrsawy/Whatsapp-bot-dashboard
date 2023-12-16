const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  identifier: {
    type: String,
    required: true,
    unique: true,
  },
  mainMessage: {
    type: String,
    required: true,
  },
  autoList: [
    {
      id: {
        type: String,
        required: true,
      },
      body: {
        type: String,
        required: true,
      },
      reply: {
        type: String,
        required: true,
      },
      enableImg: {
        type: Boolean,
        required: true,
      },
    },
  ],
  timeRange: {
    from: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    to: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
  },
});

const Data = mongoose.model("data", DataSchema, `data`);

module.exports = Data;
