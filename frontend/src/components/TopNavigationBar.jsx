import React, { useState, useEffect } from "react";
import FavBadge from "./FavBadge";
import "../styles/TopNavigationBar.scss";

const TopNavigation = ({ topics, favouritesCount }) => {
  const [hasFavouritedPhotos, setHasFavouritedPhotos] = useState(false);

  useEffect(() => {
    const checkFavouritedPhotos = () => {
      setHasFavouritedPhotos(favouritesCount > 0);
    };

    checkFavouritedPhotos();
  }, [favouritesCount]);

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <FavBadge isFavPhotoExist={hasFavouritedPhotos} />
    </div>
  );
};

export default TopNavigation;
