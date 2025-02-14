import PropTypes from "prop-types";

import SingleItem from "./SingleItem";

const ItemList = ({ title, path, singleItemPath, items, itemsQty = 5 }) => {
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title}</h2>
        <a href={path} className="item-list__link">
          Mostrar tudo
        </a>
      </div>
      <div className="item-list__container">
        {items
          .filter((item, index) => index <= itemsQty)
          .map((item) => (
            <SingleItem key={item.id} item={item} path={singleItemPath} />
          ))}
      </div>
    </div>
  );
};

ItemList.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  singleItemPath: PropTypes.string.isRequired,
  items: PropTypes.shape().isRequired,
  itemsQty: PropTypes.number,
};

export default ItemList;
