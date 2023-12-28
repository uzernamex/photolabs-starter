import React, { useState } from "react";
import "../styles/HomeRoute.scss";
import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";
import photos from "mocks/photos";
import PhotoDetailsModal from "./PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";
import App from "App";

const HomeRoute = ({
  topics,
  state,
  updateFavs,
  setSelectedPhoto,
  onClosePhotoDetailsModal,
  setModalOpen,
  handlePhotoClick,
}) => {
  const [selectedPhoto, setSelectedPhotos] = useState(null);

  const toggleFavouriteStatus = (photoID) => {
    updateFavs(photoID);
  };

  // const handlePhotoClick = (photoData) => {
  //   setModalOpen(true);
  //   setSelectedPhoto(photoData);

    //  onPhotoClick(photoData);
    //  handlePhotoClick(photoData)
  // };

  const closedModal = () => {
    setSelectedPhoto(null);
    onClosePhotoDetailsModal();
    setModalOpen(false);
  };

  //   const onLoadTopic = () => {
  //  similarImages(null);
  //   };

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        favouritesCount={state.favourites.length}
      />
      <PhotoList
        state={state}
        photos={photos}
        toggleFavouriteState={updateFavs}
        favourites={state.favourites}
        onPhotoClick={handlePhotoClick}
        setModalOpen={setModalOpen}
        setSelectedPhoto={setSelectedPhoto}
      />
    </div>
  );
};

export default HomeRoute;
