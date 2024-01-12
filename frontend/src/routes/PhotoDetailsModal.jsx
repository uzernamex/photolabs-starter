import React, { useState, useEffect } from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = ({
  selectedPhoto,
  similarImages,
  onClose,
  onPhotoClick,
  isModalOpen,
  setModalOpen,
  state,
  setSelectedPhoto,
  toggleFavouriteState,
  favourites,
  handleButtonClick,
}) => {
  const { urls } = selectedPhoto || {};
  const { regular } = urls || {};
  const [onPhotoClickState, setPhotoClicked] = useState(isModalOpen);

  const handlePhotoClick = (photoData) => {
    // setPhotoClicked(true);
    onPhotoClick(photoData);
  };

  const handleCloseButtonClick = () => {
    // setPhotoClicked(false);
    setModalOpen(false);
    onClose();
  };

  const handleFavouriteButtonClick = () => {
    toggleFavouriteState(selectedPhoto.id);
  };
  return (
    <div
      className={`photo-details-modal ${
        !isModalOpen ? "photo-details-modal" : ""
      }`}
    >
      <div className="photo-details-modal__top-bar">
        <button
          className="photo-details-modal__close-button"
          onClick={handleCloseButtonClick}
        >
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
      <div className={`photo-details-modal__images`}>
        {isModalOpen && (
          <PhotoFavButton
            photoID={selectedPhoto.id}
            toggleFavouriteState={handleFavouriteButtonClick}
            isFavourited={state.favourites.includes(selectedPhoto.id)}
          />
        )}
        <img
          className="photo-details-modal__image"
          src={regular}
          alt="photo in modal"
        />
      </div>
      <div className="photo-details-modal__photographer-details">
        <img className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <div className="photo-list__user-location"></div>
        </div>
      </div>
      <div className="photo-details-modal__similar-photos-list">
        <h2>Similar Photos</h2>
        <PhotoList
          state={state}
          photos={similarImages}
          toggleFavouriteState={toggleFavouriteState}
          favourites={state.favourites}
          onClick={handlePhotoClick}
          selectedPhoto={state.selectedPhoto}
          onClose={onClose}
          setModalOpen={setModalOpen}
          isModalOpen={isModalOpen}
          setSelectedPhoto={setSelectedPhoto}
          onPhotoClick={handlePhotoClick}
        />
      </div>
    </div>
  );
};
export default PhotoDetailsModal;
