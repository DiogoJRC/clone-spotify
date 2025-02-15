import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const SingleItem = ({ item, path }) => {
  const queryParam = path === "/song" ? "?play=true" : "";

  return (
    <a href={`${path}/${item._id}${queryParam}`} className="single-item">
      <div className="single-item__div-image-button">
        <div className="single-item__div-image">
          <img
            className="single-item__image"
            src={item.image}
            alt={`Imagem do Artista ${item.name}`}
          />
        </div>

        <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} />
      </div>

      <div className="single-item__texts">
        <div className="single-item__2lines">
          <p className="single-item__title">{item.name}</p>
        </div>

        <p className="single-item__type">{item.artist ?? "Artista"}</p>
      </div>
    </a>
  );
};

SingleItem.propTypes = {
  item: PropTypes.shape().isRequired,
  path: PropTypes.string.isRequired,
};

export default SingleItem;
