import React, { useState } from "react";
import "../styles/HomeRoute.scss";
import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";
import photos from "mocks/photos";
import PhotoDetailsModal from "./PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

const HomeRoute = ({
  topics,
  state,
  updateFavs,
  setSelectedPhoto,
  onClosePhotoDetailsModal,
  // onOpenModal
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhotos] = useState(null);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const toggleFavouriteStatus = (photoID) => {
    updateFavs(photoID);
  };

  const handlePhotoClick = (photoData) => {
    setSelectedPhoto(photoData);
    toggleModal();
  };

  const closedModal = () => {
    setSelectedPhoto(null);
    onClosePhotoDetailsModal();
    setModalOpen(false);
  };

  //   const onLoadTopic = () => {
  //  similarImages(null);
  //   };

  return (
    <div className="home-route">
      
      <TopNavigation
        topics={topics}
        favouritesCount={state.favourites.length}
      />
      <PhotoList
        photos={photos}
        toggleFavouriteState={updateFavs}
        favourites={state.favourites}
        onPhotoClick={handlePhotoClick}
        // onPhotoClick={(photoData) => setSelectedPhoto(photoData)}
        onClose={handleCloseModal}
        toggleModal={toggleModal}
      />
      {selectedPhoto && isModalOpen && (
        <div className="photo-details-modal">
          <img 
          src={selectedPhoto.urls.full} 
          alt={`${selectedPhoto.id}`} 
          />
        </div>
      )}
    </div>
  );
};

export default HomeRoute;