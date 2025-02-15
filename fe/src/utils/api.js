import axios from "axios";

const url = "http://localhost:5174";

const artistsResponse = await axios.get(`${url}/artists`);
const songsResponse = await axios.get(`${url}/songs`);

export const artists = artistsResponse.data;
export const songs = songsResponse.data;
