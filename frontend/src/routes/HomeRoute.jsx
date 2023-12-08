import React, { useState } from "react";
import "../styles/HomeRoute.scss";
import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";
import photos from "mocks/photos";

const HomeRoute = ({
  topics,
  state,
  updateFavs,
  setSelectedPhoto,
  onClosePhotoDetailsModal,
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const toggleFavouriteStatus = (photoID) => {
    updateFavs(photoID);
  };

  const handlePhotoClick = (photoData) => {
    setSelectedPhoto(photoData);
  };

  const closedModal = () => {
    setSelectedPhoto(null);
    onClosePhotoDetailsModal();
  };

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        favouritesCount={state.favourites.length}
      />
      <PhotoList
        photos={photos}
        toggleFavouriteState={toggleFavouriteStatus}
        favourites={state.favourites}
        onPhotoClick={handlePhotoClick}
        onCloseModal={closedModal}
      />
      {selectedPhoto && (
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