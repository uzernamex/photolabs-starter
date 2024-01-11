import React, { useState, useEffect } from "react";
import FavBadge from "./FavBadge";
import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";

// Navigation bar

const TopNavigation = ({ topics, favouritesCount, onTopicClick }) => {
  const [hasFavouritedPhotos, setHasFavouritedPhotos] = useState(false);
  // const [selectedTopic, setSelectedTopic] = useState();

  // const handleTopicClick = async (topics) => {
  //   try {
  //     const response = await fetch('http://localhost:8001/api/topics'
  //     );
  //     const data = await response.json();
  //   } catch (error) {
  //     console.error("Unable to retrieve requested photos:", error);
  //   }
  //   setSelectedTopic(topics);
  // };

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
