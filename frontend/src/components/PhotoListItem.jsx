// COMPONENT: 'PhotoListItem'
// Use the destructured 'data' PROP to display the specified image

import React, { useState } from "react";
import "../styles/PhotoListItem.scss";
// import useApplicationData from "hooks/useApplicationData";
// import photos from "mocks/photos";
// import PhotoList from "./PhotoList";

// Handle the modal (open vs close), display photos and their details.

const PhotoListItem = ({ data, setModalOpen, setSelectedPhoto }) => {
  const { id, urls, user, location } = data;
  const { full, regular: imageSource } = urls;

  const handlePhotoClick = () => {
    setSelectedPhoto(data);
    setModalOpen(true);
  };

  return (
    <div onClick={handlePhotoClick}>
      <img className="photo-list__image" src={imageSource} alt={`Photo${id}`} />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={user.profile}
          alt={`Profile${user.id}`}
        />
      </div>
      <div className="photo-list__user-info">
        <p>{` ${user.name}`}</p>
        <div className="photo-list__user-location">
          <p>{` ${location.city}, ${location.country}`}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
