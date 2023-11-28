import React, { useState } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const PhotoListItem = ({ data }) => {
  const { id, urls, user, location } = data;
  const { regular: imageSource } = urls;
  const { username } = user;
  // const {where} = location.city;
  const [modalOpened, setModalOpened] = useState(false);

  const handlePhotoClick = () => {
    setModalOpened(true);
  };
  const closeModal = () => {
    setModalOpened(false);
  };

  return (
    <div className="photo-list__items" onClick={handlePhotoClick}>
      <img src={imageSource} alt={`Photo${id}`} />
      <div className="photo-list__user-info">
        <p>{`Photographer: ${username}`}</p>
        {/* <p>{`Location: ${where}`}</p> */}
      </div>
    </div>
  );
};

export default PhotoListItem;