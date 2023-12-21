import React, { useState, useEffect } from "react";
import PhotoListItem from "components/PhotoListItem";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = ({
  data,
  onClick,
  selectedPhoto,
  similarImages,
  onClose,
  onPhotoClick,
  isModalOpen,
  state,
  setSelectedPhoto,
}) => {
  const { urls } = selectedPhoto || {};
  const { regular } = urls || {};
  const [onPhotoClickState, setPhotoClicked] = useState(isModalOpen);
  // console.log(selectedPhoto);

  const handlePhotoClick = () => {
     setPhotoClicked(true);
    onPhotoClick();
  };

  const handleCloseButtonClick = () => {
    setPhotoClicked(false);
    onClose();
  };

  return (
    <div
      className={`photo-details-modal ${
        onPhotoClickState ? "photo-details-modal" : ""
      }`}
    >
      <div className="photo-details-modal__top-bar">
        {" "}
        {onPhotoClickState && (
          <button
            className="photo-details-modal__close-button"
            onClick={handleCloseButtonClick}
          >
            <img src={closeSymbol} alt="close symbol" />
          </button>
        )}
      </div>
      <div className={`photo-details-modal__images`}>
        <PhotoFavButton />
        <img
          className="photo-details-modal__image"
          src={regular} //send selected photo as prop
          onClick={handlePhotoClick}
        />
        <div className="photo-details-modal__photographer-details">
          <img className="photo-list__user-profile" />
          <div className="photo-list__user-info">
            <div className="photo-list__user-location"></div>
          </div>
        </div>
      </div>
      <div className="photo-details-modal__similar-photos-list">
        <h2>Similar Photos</h2>

        <PhotoList
          photos={similarImages}
          // toggleFavouriteState={updateFavs}
          favourites={state.favourites}
          // onPhotoClick={handlePhotoClick}
          // onPhotoClick={(photoData) => setSelectedPhoto(photoData)}
          // onClose={handleCloseModal}
          // toggleModal={toggleModal}
          // setModalOpen={setModalOpen}
          // setSelectedPhoto={setSelectedPhoto}
        />
      </div>
    </div>
  );
};
export default PhotoDetailsModal;
