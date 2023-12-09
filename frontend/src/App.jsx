//APP.JSX

import React, { useState } from "react";
import photos from "mocks/photos";
import TopicList from "./components/TopicList";
import "./App.scss";
import topics from "mocks/topics";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

const App = () => {
  const {
    state,
    updateFavs,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    onLoadTopic,
  } = useApplicationData();



  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  const openModal = (photo) => {
    setModalOpen(false);
    setPhotoSelected(null);
  };
  return (
    <div className="App">
      <TopicList />
      <HomeRoute
        // photos={photos}
        topics={topics}
        state={state}
        updateFavs={updateFavs}
        setPhotoSelected={setPhotoSelected}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
        // onLoadTopic={onLoadTopic}
        onOpenModal={toggleModal}
      />
      {state.selectedPhoto && (
        <PhotoDetailsModal
          selectedPhoto={state.selectedPhoto}
          isFavourite={state.favourites.includes(state.selectedPhoto.id)}
          onClose={onClosePhotoDetailsModal}
          favouriteThisPhoto={updateFavs}
        />
      )}
      {isModalOpen && state.selectedPhoto && (
        <PhotoDetailsModal onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
