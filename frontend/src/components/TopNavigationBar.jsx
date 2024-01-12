import React, { useState, useEffect } from "react";
import FavBadge from "./FavBadge";
import FavIcon from "./FavIcon";
import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoFavButton.scss";

// Navigation bar

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
          // className="photo-list__fav-icon-svg"
          isFavPhotoExist={hasFavouritedPhotos}
          selected={isFavourited}
        />
      </div>
      {/* <FavIcon selected={!isFavourited} />  */}
    </div>
  );
};

export default TopNavigation;
