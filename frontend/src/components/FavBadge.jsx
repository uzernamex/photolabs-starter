// Reusable UI to show favourtited status IF truthy.

import React from "react";
import FavIcon from "./FavIcon";
import "../styles/FavBadge.scss";

const FavBadge = ({ isFavPhotoExist, selected }) => {
  return (
    <div className="fav-badge">
      <FavIcon
        displayAlert={!!isFavPhotoExist}
        selected={!selected}
        // className="photo-list__fav-icon-svg"
      />
    </div>
  );
};

export default FavBadge;
