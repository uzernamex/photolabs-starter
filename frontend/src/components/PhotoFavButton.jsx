// Use FUNCTION 'toggleFavouriteState' to favourite photos
// Use COMPONENT 'FavIcon' for visual representation

import React from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = ({ photoID, toggleFavouriteState, isFavourited }) => {
  const handleButtonClick = () => {
    toggleFavouriteState(photoID);
  };
  return (
    <div className="photo-list-item">
      <div
        className={`photo-list__fav-icon-svg ${
          isFavourited ? "photo-list__fav-icon" : ""
        } `}
        onClick={handleButtonClick}
      >
        <FavIcon selected={isFavourited} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
