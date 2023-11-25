import React from 'react';
import { createContext, useContext, useState } from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

const likedPhoto = createContext();

const HomeRoute = ({photos, topics}) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics}/>
      <PhotoList photos={photos}/>
      </div>
      );
    };
    
    export default HomeRoute;