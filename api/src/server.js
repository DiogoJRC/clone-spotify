const express = require("express");
const cors = require("cors");

const { db } = require("./connect.js");

const app = express();
const port = 5174;

app.use(cors());

app.get("/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.listen(port, () => {
  console.log(`🔥 Server started at http://localhost:${port}`);
});
