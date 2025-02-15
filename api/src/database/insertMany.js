const { db } = require("../connect");

const { artists } = require("./artists");
const { songs } = require("./songs");

const artistsWithoutId = artists.map((artist) => {
  const artists = { ...artist };
  delete artists.id;

  return artists;
});

const songsWithoutId = songs.map((song) => {
  const songs = { ...song };
  delete songs.id;

  return songs;
});

const insertArtists = async () =>
  await db.collection("artists").insertMany(artistsWithoutId);

const insertSongs = async () =>
  await db.collection("songs").insertMany(songsWithoutId);

insertArtists();
insertSongs();
