const functions = require("firebase-functions");
const admin = require("firebase-admin");

require("dotenv").config();
const serviceAccountKey = require("./serviceAccountKey.json");

const express = require("express");
const app = express();

app.use(express.json());

// cross origin
const cors = require("cors");
app.use(cors({origin: true}));
app.use((req, res, next) => {
  res.set("Access-control-Allow-Origin", "*");
  next();
});

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
});

app.get("/", (req, res) => {
  return res.send("hello world");
});

const dataRoute = require("./routes/formData");

app.use("/api/formdata/", dataRoute);

exports.app = functions.https.onRequest(app);
