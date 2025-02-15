import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faBackwardStep,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ duration, prevSongId, nextSongId }) => {
  return (
    <div className="player">
      <div className="player__controllers">
        <Link
          to={`/song/${prevSongId}`}
          className={prevSongId === undefined ? "disabled" : null}
        >
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>

        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={faCirclePlay}
        />

        <Link
          to={`/song/${nextSongId}`}
          className={nextSongId === undefined ? "disabled" : null}
        >
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>

      <div className="player__progress">
        <p>00:00</p>

        <div className="player__bar">
          <div className="player__bar-progress"></div>
        </div>

        <p>{duration}</p>
      </div>
    </div>
  );
};

Player.propTypes = {
  duration: PropTypes.string.isRequired,
  prevSongId: PropTypes.number,
  nextSongId: PropTypes.number,
};

export default Player;
