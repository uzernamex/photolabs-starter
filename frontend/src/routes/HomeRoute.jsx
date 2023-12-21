import React, { useState } from "react";
import "../styles/HomeRoute.scss";
import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";
import photos from "mocks/photos";
import PhotoDetailsModal from "./PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

const HomeRoute = ({
  topics,
  state,
  updateFavs,
  setSelectedPhoto,
  // similarImages,
  // onClose,
  // onPhotoClick,
  // isModalOpen,
  onClosePhotoDetailsModal,
  setModalOpen,
  // onOpenModal
}) => {
  // const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhotos] = useState(null);

  // const toggleModal = () => {
  //   setModalOpen(!isodalOpen);
  // };

  const toggleFavouriteStatus = (photoID) => {
    updateFavs(photoID);
  };

  // const handlePhotoClick = () => {
  //   // setSelectedPhoto(photoData);
  //   toggleModal();
  // };
  const handlePhotoClick = (photoData) => {
    setModalOpen(true);
    // onClick(data);
    onPhotoClick(photoData);
    setSelectedPhoto(photoData);
    setModalOpen(photoData);
  };

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
        //onClose={handleCloseModal}
        // toggleModal={toggleModal}
        setModalOpen={setModalOpen}
        setSelectedPhoto={setSelectedPhoto}
      />
      {/* {selectedPhoto && isModalOpen && <PhotoDetailsModal/>} */}
    </div>
  );
};

export default HomeRoute;
