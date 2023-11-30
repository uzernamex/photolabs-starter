import React from "react";
import PhotoListItem from "components/PhotoListItem";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import photos from "mocks/photos";

const PhotoDetailsModal = ({ selectedPhoto, similarImages }) => {
  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__selected-photo">
        <img src={selectedPhoto.urls.full} alt={`${selectedPhoto.id}`} />
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
