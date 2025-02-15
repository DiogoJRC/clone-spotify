import { useState } from "react";
import PropTypes, { shape } from "prop-types";

import SongItem from "./SongItem";

const SongList = ({ songs }) => {
  const [items, setItems] = useState(5);

  return (
    <div className="song-list">
      {songs
        .filter((song, index) => index < items)
        .map((song, index) => (
          <SongItem key={song._id} index={index} song={song} />
        ))}

      <p
        className="song-list__see-more"
        onClick={() => {
          setItems(items + 5);
        }}
      >
        Ver mais
      </p>
    </div>
  );
};

SongList.propTypes = {
  songs: PropTypes.arrayOf(shape()).isRequired,
};

export default SongList;
