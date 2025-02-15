const express = require("express");
const cors = require("cors");
const path = require("path");

const { db } = require("./connect.js");

const app = express();
const port = 5174;

app.use(cors());

app.get("/api/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/api/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.use(express.static(path.join(__dirname, "../../fe/dist")));

app.get("*", async (request, response) => {
  response.sendFile(path.join(__dirname, "../../fe/dist/index.html"));
});

app.listen(port, () => {
  console.log(`🔥 Server started at http://localhost:${port}`);
});
