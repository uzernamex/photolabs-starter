import React, { useState } from "react";
import "../styles/HomeRoute.scss";
import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";
import photos from "mocks/photos";
import PhotoDetailsModal from "./PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";
import App from "App";
import FavIcon from "components/FavIcon";
import PhotoListItem from "components/PhotoListItem";
import TopicList from "components/TopicList";
import TopicListItem from "components/TopicListItem";

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
