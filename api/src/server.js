import express from "express";

import { artists } from "../../fe/src/assets/database/artists.js";
import { songs } from "../../fe/src/assets/database/songs.js";

const app = express();
const port = 5174;

app.get("/artists", (request, response) => {
  response.send(artists);
});

app.get("/songs", (request, response) => {
  response.send(songs);
});

app.listen(port, () => {
  console.log(`🔥 Server started at http://localhost:${port}`);
});
