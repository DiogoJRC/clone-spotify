import axios from "axios";
import shuffle from "./shuffle";

const url = "http://localhost:5174";

const artistsResponse = await axios.get(`${url}/artists`);
const songsResponse = await axios.get(`${url}/songs`);

export const artists = shuffle(artistsResponse.data);
export const songs = shuffle(songsResponse.data);
