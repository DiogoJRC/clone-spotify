import PropTypes from "prop-types";

import ItemList from "./ItemList";

import { artists, songs } from "../utils/api";

const Main = ({ type = "all" }) => {
  return (
    <div className="main">
      {["artists", "all"].includes(type) && (
        <ItemList
          title="Artistas populares"
          path="/artists"
          singleItemPath="/artist"
          items={artists}
          itemsQty={8}
        />
      )}
      {["songs", "all"].includes(type) && (
        <ItemList
          title="Músicas populares"
          path="/songs"
          singleItemPath="/song"
          items={songs}
          itemsQty={16}
        />
      )}
    </div>
  );
};

Main.propTypes = {
  type: PropTypes.string,
};

export default Main;
