require("dotenv").config();
const express = require("express");

const { env } = process;
const PORT = env.PORT || 4000;
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const mongoose = require('mongoose');

const botRouter = require("./routes");
const { notFound, errorHandler } = require("./utils/errorHandle");


const corsConfig = {
  origin: true,
  credentials: true,
};
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors(corsConfig));
app.options("*", cors(corsConfig));
app.use(cookieParser());
app.use(fileUpload());
app.use("/uploads", express.static("uploads"));
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});
app.use("/api", botRouter);
// 
app.use(notFound);
app.use(errorHandler);
// app.use(notFound);
// app.use(errorHandler);
mongoose
  .connect(env.mongo_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(`error =>`, e);
  });
