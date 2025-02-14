import ItemList from "./ItemList";

import { artists } from "../assets/database/artists";
import { songs } from "../assets/database/songs";

const Main = () => {
  return (
    <div className="main">
      <ItemList
        title="Artistas populares"
        path="/artists"
        singleItemPath="/artist"
        items={artists}
        itemsQty={5}
      />

      <ItemList
        title="Músicas populares"
        path="/songs"
        singleItemPath="/song"
        items={songs}
        itemsQty={10}
      />
    </div>
  );
};

export default Main;
