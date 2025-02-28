import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

import { artists, songs } from "../utils/api";

import SongList from "../components/SongList";

const Artist = () => {
  const { id } = useParams();

  const { name, banner } = artists.filter((artist) => artist._id === id)[0];

  const artistSongs = songs.filter((song) => song.artist === name);

  const randomSongIndex = Math.floor(Math.random() * (artistSongs.length - 1));
  const randomSongId = artistSongs[randomSongIndex]._id;

  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${banner})`,
        }}
      >
        <h2 className="artist__title">{name}</h2>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>

        <SongList songs={artistSongs} />
      </div>

      <Link to={`/song/${randomSongId}?play=true`}>
        <FontAwesomeIcon
          className="single-item__icon single-item__icon--artist"
          icon={faCirclePlay}
        />
      </Link>
    </div>
  );
};

export default Artist;
