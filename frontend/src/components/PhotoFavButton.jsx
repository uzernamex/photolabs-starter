// REACT COMPONENT: 'PhotoFavButton'
// Use FUNCTION 'toggleFavouriteState' to favourite photos
// Use COMPONENT 'FavIcon' for visual representation

import React, { useState } from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = ({ photoID, toggleFavouriteState, isFavourited }) => {
  const handleButtonClick = () => {
    console.log("button clicked");
    toggleFavouriteState(photoID);
  };
  return (
    <div
      className={`photo-list__fav-icon-svg ${
        isFavourited ? "photo-list__fav-icon" : ""
      }`}
      onClick={handleButtonClick}
    >
      {/* Change the like button to red when clicked  */}
      <FavIcon selected={isFavourited} />
    </div>
  );
};

export default PhotoFavButton;
