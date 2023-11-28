//PHOTO FAV BUTTON

import React, { useState } from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = ({ photoID, toggleFavouriteState, isFavourited }) => {
  const handleButtonClick = () => {
    toggleFavouriteState(photoID);//???
  };

  return (
    <div
      className={`photo-list__fav-icon-svg ${isFavourited ? "photo-list__fav-icon" : ""}`}
      onClick={handleButtonClick}>
      {/* {isFavourited ? "Favourited" : "Not Favourited"} */}
      <FavIcon isFavourited={isFavourited} />
    </div>
  );
};

export default PhotoFavButton;