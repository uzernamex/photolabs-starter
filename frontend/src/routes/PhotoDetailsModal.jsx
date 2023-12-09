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

  const handlePhotoClick = () => {
    setPhotoClicked(!onPhotoClick);
  };

  return (
    <div className="photo-details-modal">
      <img
        src={selectedPhoto[0].urls.full}
        alt={`${selectedPhoto[0].id}`}
        className={onPhotoClick ? "photo-details-modal__image" : ""}
        onClick={handlePhotoClick}
      />
      {onPhotoClick && (
        <div>
          <button
            className="photo-details-modal__close-button"
            onClick={onClose}
          >
            close modal
          </button>
        </div>
      )}
      <div className="photo-details-modal__similar-photos">
        <h2>Similar Photos</h2>
        <div className="photo-details-modal__similar-photos-list">
          {similarImages.map((photo) => (
            <PhotoListItem key={photo.id} data={photo} onClick={() => {}} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
