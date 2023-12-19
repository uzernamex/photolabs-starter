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
}) => {
  const {urls} = data || {};
  const {regular} = urls || {};
  const [onPhotoClickState, setPhotoClicked] = useState(isModalOpen);

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
  };
  
  // useEffect(()=>{
  //   console.log("loaded photo")
  // },[]);
  // const { urls } = selectedPhoto[0];
  
  return (  

    <div className={`photo-details-modal ${
      onPhotoClickState ? "photo-details-modal" : ""
      }`}
    >
      <div className="photo-details-modal__top-bar"></div>
      <div className={`photo-details-modal__image`}>
        <img
          src={`Image-1-Full.jpeg`}
          alt={`${selectedPhoto.id}`}
          onClick={handlePhotoClick}
        />
      </div>
  {/* return (
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
      <div className="photo-details-modal__similar-photos"> */}
        <h2>Similar Photos</h2>



        
        <div className="photo-details-modal__similar-photos-list">
          {similarImages &&similarImages.map((photo) => (
            <PhotoListItem key={photo.id} data={photo} onClick={() => {}} />
          ))}
          </div>
      </div>
      /* {onPhotoClickState && (
        <button
          className="photo-details-modal__close-button"
          onClick={handleCloseButtonClick}
        >
          <img src={closeSymbol} alt="close symbol" />
        </button>
      )} */
// </div>
// </div>
    // </div>
     );

      };
export default PhotoDetailsModal;