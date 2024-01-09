// REACT COMPONENT: 'PhotoList'
// Render the list of photos
import React from "react";
import "../styles/PhotoList.scss";
import PhotoFavButton from "./PhotoFavButton";
import PhotoListItem from "./PhotoListItem";

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

const PhotoList = ({
  photos,
  toggleFavouriteState,
  favourites,
  setModalOpen,
  setSelectedPhoto,
  handlePhotoClick,
  onTopicClick,
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
            />
            <PhotoListItem
              key={photo.id}
              // photo={photo}
              data={photo}
              toggleFavouriteState={toggleFavouriteState}
              isFavourited={favourites.includes(photo.id)}
              setModalOpen={setModalOpen}
              setSelectedPhoto={setSelectedPhoto}
              handlePhotoClick={handlePhotoClick}
              onTopicClick={onTopicClick}
            />
          </div>
        ))}
    </div>
  );
};
export default PhotoList;