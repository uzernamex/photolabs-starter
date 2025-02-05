import React, { useState, useEffect } from "react";
import TopNavigation from "components/TopNavigationBar";
import "../styles/HomeRoute.scss";
import PhotoList from "components/PhotoList";
import PhotoListItem from "components/PhotoListItem";

const HomeRoute = ({
  state,
  topics,
  photos,
  toggleFavouriteState,
  setSelectedPhoto,
  onTopicClick,
  handlePhotoClick,
  setModalOpen,
  fetchPhotosByTopic,
  favourites,
}) => {
  useEffect(() => {
    if (state.selectedTopic) {
      onLoadTopic(state.selectedTopic.id);
    }
  }, [state.selectedTopic]);

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        favouritesCount={favourites.length}
        fetchPhotosByTopic={fetchPhotosByTopic}
        onTopicClick={onTopicClick}
      />
      <PhotoList
        state={state}
        photos={photos}
        toggleFavouriteState={toggleFavouriteState}
        favourites={state.favourites}
        setModalOpen={setModalOpen}
        setSelectedPhoto={setSelectedPhoto}
        handlePhotoClick={handlePhotoClick}
      />
    </div>
  );
};

export default HomeRoute;
