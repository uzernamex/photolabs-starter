//APP.JSX

import React, { useState } from "react";
import photos from "mocks/photos";
import TopicList from "./components/TopicList";
import "./App.scss";
import topics from "mocks/topics";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";
import PhotoListItem from "components/PhotoListItem";
import PhotoList from "components/PhotoList";

const App = () => {
  const {
    state,
    updateFavs,
    setSelectedPhoto,
    onClosePhotoDetailsModal,
    onLoadTopic,
  } = useApplicationData();

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      {modalOpen && (
        <PhotoDetailsModal
          similarImages={Object.values(state.selectedPhoto.similar_photos)} //get values as array
          selectedPhoto={state.selectedPhoto}
          onClose={onClosePhotoDetailsModal}
          state={state}
          setModalOpen={setModalOpen}
          isModalOpen={modalOpen}
        />
      )}

      <HomeRoute
        setModalOpen={setModalOpen}
        toggleFavouriteState={updateFavs}
        topics={topics}
        state={state}
        updateFavs={updateFavs}
        setSelectedPhoto={setSelectedPhoto}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
      />
    </div>
  );
};

export default App;
