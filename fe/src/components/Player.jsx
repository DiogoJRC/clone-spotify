import { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Link, useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faPauseCircle,
  faBackwardStep,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";

import { formatTimeInSeconds } from "../utils/formatTimeInSeconds";
import { convertStringTimeToSeconds } from "../utils/convertStringTimeToSeconds";

const Player = ({ duration, audio, prevSongId, nextSongId }) => {
  const [searchParams] = useSearchParams();
  const play = searchParams.get("play");
  const audioRef = useRef();
  const progressBar = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(formatTimeInSeconds(0));
  const durationInSeconds = convertStringTimeToSeconds(duration);

  const updatePlayerProgress = useCallback(
    (audioElementCurrentTime) => {
      setCurrentTime(formatTimeInSeconds(audioElementCurrentTime));

      progressBar.current.style.setProperty(
        "--_progress",
        `${(audioElementCurrentTime / durationInSeconds) * 100}%`
      );
    },
    [durationInSeconds]
  );

  const handleKeyPress = (event) => {
    if (event.key === " ") {
      handlePlayPauseClick();
    }
  };

  useEffect(() => {
    if (play) {
      audioRef.current.play();

      if (!audioRef.current.paused) {
        setIsPlaying(true);
      }
    }

    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    audioRef.current.volume = 0.25;

    const intervalId = setInterval(() => {
      if (isPlaying) {
        updatePlayerProgress(audioRef.current.currentTime);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isPlaying, updatePlayerProgress]);

  function handlePlayPauseClick() {
    const audioElementPaused = audioRef.current.paused;

    if (!audioElementPaused) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();

      // para evitar de pular 2 segundos quando clicar no play após estar pausado
      updatePlayerProgress(audioRef.current.currentTime);
    }

    setIsPlaying(audioElementPaused);
  }

  function resetSong() {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;

    updatePlayerProgress(0);

    if (isPlaying) {
      audioRef.current.play();
    }
  }

  return (
    <div className="player">
      <div className="player__controllers">
        <Link
          to={`/song/${prevSongId}`}
          className={prevSongId === undefined ? "disabled" : null}
          onClick={() => resetSong()}
        >
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>

        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={isPlaying ? faPauseCircle : faCirclePlay}
          onClick={handlePlayPauseClick}
        />

        <Link
          to={`/song/${nextSongId}`}
          className={nextSongId === undefined ? "disabled" : null}
          onClick={() => resetSong()}
        >
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>

      <div className="player__progress">
        <p>{currentTime}</p>

        <div className="player__bar">
          <div ref={progressBar} className="player__bar-progress"></div>
        </div>

        <p>{formatTimeInSeconds(convertStringTimeToSeconds(duration))}</p>
      </div>

      <audio ref={audioRef} src={audio}></audio>
    </div>
  );
};

Player.propTypes = {
  duration: PropTypes.string.isRequired,
  audio: PropTypes.string.isRequired,
  prevSongId: PropTypes.number,
  nextSongId: PropTypes.number,
};

export default Player;
