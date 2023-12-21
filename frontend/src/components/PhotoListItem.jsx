import React, { useState } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
// import PhotoDetailsModal from "routes/PhotoDetailsModal";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
// import HomeRoute from "routes/HomeRoute";
// import App from "App";
import useApplicationData from "hooks/useApplicationData";

const sampleDataForPhotoList = [
  {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    },
    user: {
      id: "1",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
  {
    id: "2",
    location: {
      city: "Toronto",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-2-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
    },
    user: {
      id: "2",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
  {
    id: "3",
    location: {
      city: "Ottawa",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-3-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
    },
    user: {
      id: "3",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
];

const PhotoListItem = ({
  data,
  onClick,
  closedModal,
  favouriteThisPhoto,
  setModalOpen,
  setSelectedPhoto,
}) => {
  const { id, urls, user, location } = data;
  const { full, regular: imageSource } = urls;

  const handlePhotoClick = () => {
    setSelectedPhoto(data);
  };
  //todo: setSelectedphoto to the image being clicked
  return (
    <div onClick={handlePhotoClick}>
      <img
        onClick={(urls) => setModalOpen(true)}
        className="photo-list__image"
        src={imageSource}
        alt={`Photo${id}`}
      />
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
