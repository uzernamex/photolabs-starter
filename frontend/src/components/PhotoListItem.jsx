// FILE: PhotoListItem.jsx

import React, { useState } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

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

const PhotoListItem = ({ data, onClick, closedModal, favouriteThisPhoto }) => {
  const { id, urls, user, location } = data;
  const { regular: imageSource } = urls;

  const handlePhotoClick = () => {
    onClick(data);
  };

  return (
    <div className="photo-list__items" onClick={handlePhotoClick}>
      <img className="photo-list__image" src={imageSource} alt={`Photo${id}`} />
      <div className="photo-list__user-info">
        {/* <div><img src={user}/></div> */}
        <p>{` ${user.name}`}</p>
        <p>{` ${location.city}, ${location.country}`}</p>
      </div>
      <button onClick={() => favouriteThisPhoto(id)}>x</button>
    </div>
  );
};

export default PhotoListItem;
