import PropTypes from "prop-types";

import SingleItem from "./SingleItem";
import { Link, useLocation } from "react-router-dom";

const ItemList = ({ title, path, singleItemPath, items, itemsQty = 5 }) => {
  const { pathname } = useLocation();

  const isHome = pathname === "/";
  const filteredItems = isHome
    ? items.filter((item, index) => index < itemsQty)
    : items;

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title}</h2>
        {isHome && (
          <Link to={path} className="item-list__link">
            Mostrar tudo
          </Link>
        )}
      </div>
      <div className="item-list__container">
        {filteredItems.map((item) => (
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
