//HOME ROUTE

import React from "react";
import "../styles/HomeRoute.scss";
import PhotoList from "components/PhotoList";
import PhotoListItem from "components/PhotoListItem";
import TopNavigation from "components/TopNavigationBar";
import photos from "mocks/photos";
import { useState } from "react";

const HomeRoute = ({ topics }) => {
  //set state with array as default state
  const [favourites, setFavourites] = useState([]);

  //manage likes and favourites state
  const toggleFavouriteStatus = (photoID) => {
    if (favourites.includes(photoID)) {
      setFavourites(favourites.filter((id) => id !== photoID));
    } else {
      setFavourites([...favourites, photoID]);
    }
  };
console.log(typeof toggleFavouriteStatus); 

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favouritesCount={favourites.length} />
      <PhotoList
        photos={photos}
        toggleFavouriteState={toggleFavouriteStatus}
        favourites={favourites}
      />
    </div>
  );
};

export default HomeRoute;