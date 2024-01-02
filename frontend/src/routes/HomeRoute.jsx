import React, { useState } from "react";
import "../styles/HomeRoute.scss";
import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";
import photos from "mocks/photos";
import TopicList from "components/TopicList";

const HomeRoute = ({
  topics,
  onTopicClick,
  state,
  updateFavs,
  toggleFavouriteState,
  setSelectedPhoto,
  onClosePhotoDetailsModal,
  setModalOpen,
  handlePhotoClick,
}) => {
  const closedModal = () => {
    setSelectedPhoto(null);
    onClosePhotoDetailsModal();
    setModalOpen(false);
  };

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        favouritesCount={state.favourites.length}
      />
      <TopicList topics={topics} onTopicClick={onTopicClick} />

      <PhotoList
        state={state}
        photos={photos}
        toggleFavouriteState={updateFavs}
        favourites={state.favourites}
        setModalOpen={setModalOpen}
        setSelectedPhoto={setSelectedPhoto}
        handlePhotoClick={handlePhotoClick}
      />
    </div>
  );
};

export default HomeRoute;
