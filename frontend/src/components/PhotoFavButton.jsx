//PHOTO FAV BUTTON

import React, { useState } from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = ({ photoID, toggleFavouriteState, isFavourited }) => {
  const handleButtonClick = () => {
    toggleFavouriteState(photoID);
  };

  return (
    <button
      className={`photo-fav-button ${isFavourited ? "liked" : ""}`}
      onClick={handleButtonClick}>
      {isFavourited ? "Favourited" : "Not Favourited"}
      <FavIcon isFavourited={isFavourited} />
    </button>
  );
};

// className={`photo-fav-button ${isClicked ? 'liked' : ''}`}

export default PhotoFavButton;