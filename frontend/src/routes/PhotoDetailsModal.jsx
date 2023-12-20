import React, { useState, useEffect } from "react";
import PhotoListItem from "components/PhotoListItem";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = ({
  data,
  onClick,
  selectedPhoto,
  similarImages,
  onClose,
  onPhotoClick,
  isModalOpen,
  setSelectedPhoto,
}) => {
  // const { urls } = data || {};
  const { urls } = selectedPhoto || {};
  const { regular } = urls || {};
  const [onPhotoClickState, setPhotoClicked] = useState(isModalOpen);
  // console.log(selectedPhoto);

  // useEffect(() => {
  //   setPhotoClicked(isModalOpen);
  // }, [isModalOpen]);

  const handlePhotoClick = () => {
    setPhotoClicked(true);
    onPhotoClick();
    // if (!selectedPhoto || !selectedPhoto[0]) {
    //   return null;
    // }
  }
  // const handlePhotoClick = () => {
  //   setPhotoClicked(!onPhotoClick);
  // };
  const handleCloseButtonClick = () => {
    setPhotoClicked(false);
    onClose();
    // setSelectedPhoto(false);
  };

  // useEffect(()=>{
  //   console.log("loaded photo")
  // },[]);
  // const { urls } = selectedPhoto[0];

  return (
    <div className={`photo-details-modal ${
        onPhotoClickState ? "photo-details-modal" : ""}`}>
      <div className="photo-details-modal__top-bar"></div>
      <div className={`photo-details-modal__image`}>
        <img
          src={regular} //send selected photo as prop
          onClick={handlePhotoClick}
          // alt={`${selectedPhoto.id}`}
        />
        {onPhotoClickState && (
          <button
            className="photo-details-modal__close-button"
            onClick={handleCloseButtonClick}
            >
            <img src={closeSymbol} alt="close symbol" />
          </button>
        )}
      </div>

      <div className="photo-details-modal__similar-photos-list">
        <h2>Similar Photos</h2>

        {similarImages &&
          similarImages.map((photo) => (
            <PhotoListItem 
            key={photo.id} 
            data={photo} 
            onClick={() => {}}
            setSelectedPhoto={setSelectedPhoto} 
            />
          ))}
      </div>
    </div>
  );
};
export default PhotoDetailsModal;
