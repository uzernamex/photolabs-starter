//HOME ROUTE

import React from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';
import TopNavigation from 'components/TopNavigationBar';
import photos from "mocks/photos";
import { useState } from 'react';

const HomeRoute = ({ topics }) => {
  //set state with array as default state
  const [favourites, setFavourites] = useState([])
  return (
    <div className="home-route">
      <TopNavigation topics={topics}/>
      <PhotoList photos={photos}/>
      </div>
      );
    };
    
    export default HomeRoute;