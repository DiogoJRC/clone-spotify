import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SongItem = ({ index, song }) => {
  return (
    <Link to={`/song/${song.id}`} className="song-item">
      <div className="song-item__number-album">
        <p>{index + 1}</p>

        <div className="song-item__album">
          <img
            src={song.image}
            alt={`Imagem da Música ${song.name}`}
            className="song-item__image"
          />

          <p className="song-item__name">{song.name}</p>
        </div>
      </div>

      <p>{song.duration}</p>
    </Link>
  );
};

SongItem.propTypes = {
  index: PropTypes.number.isRequired,
  song: PropTypes.shape().isRequired,
};

export default SongItem;
