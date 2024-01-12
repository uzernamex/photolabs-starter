import React, { useState, useEffect } from "react";
import FavBadge from "./FavBadge";
import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import "../styles/PhotoFavButton.scss";

const TopNavigation = ({
  topics,
  favouritesCount,
  onTopicClick,
  isFavourited,
}) => {
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
      <div>
        <FavBadge
          isFavPhotoExist={hasFavouritedPhotos}
          selected={isFavourited}
        />
      </div>
    </div>
  );
};

export default TopNavigation;
