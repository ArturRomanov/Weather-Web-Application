const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const config = require("config");
const cors = require("cors");

const app = express();

// New
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
//
const cookieParser = require("cookie-parser");
app.use(cookieParser());

//BodyParser midleware
app.use(express.json());

// New

// app middlewares

app.use(morgan("dev"));
app.use(bodyParser.json());
// This is so that only specific domain could access server
app.use(cors({ origin: process.env.CLIENT_URL }));
//

//DB config
const db = config.get("mongoURI");

//Connect to mongo
mongoose.connect(
  db,
  { useUnifiedTopology: true },
  { useCreateIndex: true },
  { useNewUrlParser: true },
  { useFindAndModify: false},
  (err) => {
    if (err) console.error(err);
    else console.log("Connected to the mongodb");
  }
);

//Use Routes

app.use("/api/weather", require("./routes/api/weather"));
app.use("/api/location", require("./routes/api/location"));

//SERVE STATIC ASSETS (BUILD) IF IN PRODUCTION
if (process.env.NODE_ENV == "production") {
  // Set a static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(_dirname, "client", "build", "index.html"));
  });
}
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
