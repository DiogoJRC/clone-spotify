import { Link, useParams } from "react-router-dom";

import { artists } from "../assets/database/artists";
import { songs } from "../assets/database/songs";

import Player from "../components/Player";

const Song = () => {
  const { id } = useParams();

  const {
    image,
    name,
    duration,
    artist: artistName,
  } = songs.filter((song) => song.id === Number(id))[0];

  const artist = artists.filter((artist) => artist.name === artistName)[0];

  const artistSongs = songs.filter((song) => song.artist === artistName);

  let currentSongIndex = artistSongs.findIndex(
    (song) => song.id === Number(id)
  );

  //   if (!arrowNav) {
  //     // removes the current song and inserts it to the beginning of the array
  //     const currentSong = artistSongs.splice(currentSongIndex, 1);
  //     artistSongs.unshift(currentSong);
  //     currentSongIndex = 0;
  //   }

  const prevSongId = artistSongs[currentSongIndex - 1]?.id;
  const nextSongId =
    currentSongIndex === artistSongs.length - 1
      ? undefined
      : artistSongs[currentSongIndex + 1].id;

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={`Imagem da música ${name}`} />
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${artist.id}`} className="song__artist-image">
          <img
            width={75}
            height={75}
            src={artist.image}
            alt={`Imagem do Artista ${artist}`}
          />
        </Link>

        <Player
          duration={duration}
          prevSongId={prevSongId}
          nextSongId={nextSongId}
        />

        <div>
          <p className="song__name">{name}</p>
          <p>{artistName}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
