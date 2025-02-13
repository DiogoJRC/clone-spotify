import PropTypes from "prop-types";

import SingleItem from "./SingleItem";

const ItemList = ({ title, items }) => {
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title}</h2>
        <a className="item-list__link" href="/">
          Mostrar tudo
        </a>
      </div>
      <div className="item-list__container">
        {Array(items)
          .fill()
          .map((item, index) => (
            <SingleItem
              key={index}
              title="Jorge & Mateus"
              image="https://i.scdn.co/image/ab6761610000517477937baabc49dea13c17c706"
              type="Artista"
            />
          ))}
      </div>
    </div>
  );
};

ItemList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.number.isRequired,
};

export default ItemList;
