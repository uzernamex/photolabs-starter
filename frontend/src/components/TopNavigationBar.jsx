import React, { useState, useEffect } from "react";
import FavBadge from "./FavBadge";
import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";

// Navigation bar

const TopNavigation = ({ topics, favouritesCount, onTopicClick }) => {
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
      <TopicList onTopicClick={onTopicClick} topics={topics} />
      <FavBadge isFavPhotoExist={hasFavouritedPhotos} />
    </div>
  );
};

export default TopNavigation;
