import React, { useState } from "react";
import "./App.scss";
import topics from "mocks/topics";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

const App = () => {
  const {
    toggleFavouriteState,
    updateFavs,
    setSelectedPhoto,
    onClosePhotoDetailsModal,
    handleTopicClick,
    state,
  } = useApplicationData();

  const [favourites] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const handlePhotoClick = (photoData) => {
    setModalOpen(true);
    setSelectedPhoto(photoData);
  };
  return (
    <div className="App">
      {modalOpen &&
        state.selectedPhoto &&
        state.selectedPhoto.similar_photos && (
          <PhotoDetailsModal
            similarImages={Object.values(state.selectedPhoto.similar_photos)}
            selectedPhoto={state.selectedPhoto} // Open modal (photo)
            onClose={onClosePhotoDetailsModal}
            state={state}
            setModalOpen={setModalOpen}
            toggleFavouriteState={toggleFavouriteState}
            isModalOpen={modalOpen}
            favourites={favourites}
            setSelectedPhoto={setSelectedPhoto}
          />
        )}
      <HomeRoute
        setModalOpen={setModalOpen}
        toggleFavouriteState={toggleFavouriteState}
        topics={topics}
        state={state}
        photos={state.photos}
        updateFavs={updateFavs}
        setSelectedPhoto={setSelectedPhoto}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
        handlePhotoClick={handlePhotoClick}
        favourites={state.favourites}
        onTopicClick={handleTopicClick}
      />
    </div>
  );
};

export default App;
