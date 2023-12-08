import React from "react";
import PhotoListItem from "components/PhotoListItem";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import photos from "mocks/photos";
import { useState } from "react";

const PhotoDetailsModal = ({ selectedPhoto, similarImages, onClose }) => {
  const [onPhotoClick, setPhotoClicked] = useState(false);

  if (!selectedPhoto || !selectedPhoto[0]) {
    return null;
  }
  const { urls, user, location } = selectedPhoto[0];

  const handlePhotoClick = () => {
    setPhotoClicked(true);
  };

  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal">
        <img
          src={selectedPhoto.urls.full}
          alt={`${selectedPhoto.id}`}
          className={isPhotoClicked ? "photo-details-modal" : ""}
          onClick={handlePhotoClick}
        />
      </div>
      <div className="photo-details-modal__similar-photos">
        <h2>Similar Photos</h2>
        <div className="photo-details-modal__similar-photos-list">
          {similarImages.map((photo) => (
            <PhotoListItem key={photo.id} data={photo} onClick={() => {}} />
          ))}
        </div>
      </div>
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  );
};

export default PhotoDetailsModal;