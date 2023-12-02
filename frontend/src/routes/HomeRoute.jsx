//HOME ROUTE
import React, { useState } from "react";
import "../styles/HomeRoute.scss";
import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";
import photos from "mocks/photos";

const HomeRoute = ({
  topics,
  state,
  updateFavs,
  setPhotoSelected,
  onClosePhotoDetailsModal,
}) => {
  const toggleFavouriteStatus = (photoID) => {
    updateFavs(photoID);
  };

  const handlePhotoClick = (photoData) => {
    console.log("photo modal clicked");
    setPhotoSelected(photoData);
  };
  const closedModal = () => {
    // closedModal();
    onClosePhotoDetailsModal();
  };

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        favouritesCount={state.favourites.length}
      />
      <PhotoList
        photos={photos}
        toggleFavouriteState={toggleFavouriteStatus}
        favourites={state.favourites}
        onPhotoClick={handlePhotoClick}
        onCloseModal={closedModal}
      />
    </div>
  );
};

export default HomeRoute;

{
  //   if (favourites.includes(photoID)) {
  //     setFavourites(favourites.filter((id) => id !== photoID));
  //   } else {
  //     setFavourites([...favourites, photoID]);
  //   }
  // };
  // console.log(typeof toggleFavouriteStatus);
  /* {sampleDataForPhotoList.map((photoData) => (
        <PhotoListItem
        key={photoData.id}
        data={photoData}
        onClick={handlePhotoClick} 
        />
      ))} */
}
