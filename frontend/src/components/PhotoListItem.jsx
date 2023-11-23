import React from "react";
import '../styles/PhotoListItem.scss'
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = function ({data}) {
  const {id, imageSource, location, urls, username, profile } = data; 

    return (
    <div className="photo-list__item">
      <img src={imageSource} alt={`Photo${id}`} />
     <PhotoFavButton/>
      <div className="photo-list__user-info">
        <img src={profile} alt={`Photographer ${username}`} />
        <p>{`Photographer: ${username}`}</p>
        </div>
        </div>
    );
  };

export default PhotoListItem;