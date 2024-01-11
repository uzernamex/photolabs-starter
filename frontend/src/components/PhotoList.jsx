// REACT COMPONENT: 'PhotoList'
// Render the list of photos
import React from "react";
import "../styles/PhotoList.scss";
import PhotoFavButton from "./PhotoFavButton";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({
  photos,
  toggleFavouriteState,
  favourites,
  setModalOpen,
  setSelectedPhoto,
  handlePhotoClick,
  onTopicClick,
  handleButtonClick,
}) => {
  return (
    <div className="photo-list">
      {Array.isArray(photos) &&
        photos.map((photo) => (
          <div key={photo.id} className="photo-list__item">
            <PhotoFavButton
              photoID={photo.id}
              toggleFavouriteState={toggleFavouriteState}
              isFavourited={favourites.includes(photo.id)}
              handleButtonClick={handleButtonClick}
            />
            <PhotoListItem
              data={photo}
              toggleFavouriteState={toggleFavouriteState}
              isFavourited={favourites.includes(photo.id)}
              setModalOpen={setModalOpen}
              setSelectedPhoto={setSelectedPhoto}
              handlePhotoClick={handlePhotoClick}
              handleButtonClick={handleButtonClick}
              onTopicClick={onTopicClick}
            />
          </div>
        ))}
    </div>
  );
};
export default PhotoList;
