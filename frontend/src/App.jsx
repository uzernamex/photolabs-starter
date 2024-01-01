import React, { useState } from "react";
import photos from "mocks/photos";
import TopicList from "./components/TopicList";
import "./App.scss";
import topics from "mocks/topics";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";
import Item from "components/PhotoListItem";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";
const App = () => {
  const {
    state,
    toggleFavouriteState,
    updateFavs,
    setSelectedPhoto,
    onClosePhotoDetailsModal,
    handleButtonClick,
    // onLoadTopic,
  } = useApplicationData();

  const [favourites, setFavourites] = useState([]);
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
            similarImages={Object.values(state.selectedPhoto.similar_photos)} //get values as array
            selectedPhoto={state.selectedPhoto} //Modal open (photo)
            onClose={onClosePhotoDetailsModal}
            state={state}
            setModalOpen={setModalOpen}
            toggleFavouriteState={toggleFavouriteState}
            isModalOpen={modalOpen}
            favourites={favourites}
            handleButtonClick={handleButtonClick}
            setSelectedPhoto={setSelectedPhoto} //cloSES WIth photo click
          />
        )}

      <HomeRoute
        setModalOpen={setModalOpen}

        toggleFavouriteState={toggleFavouriteState}
        topics={topics}
        state={state}
        updateFavs={updateFavs} 
        setSelectedPhoto={setSelectedPhoto}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
        handlePhotoClick={handlePhotoClick}
        favourites={favourites}
      />
    </div>
  );
};

export default App;
