import React from "react";
import '../styles/PhotoListItem.scss'
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
  const { id, imageSource, location, username, profile } = props.data;
  return (
  <section className="photo-list__item">
    <img src={imageSource} alt={`Photo${id}`} />
    <PhotoFavButton/>
    <div className="photo-list__user-info">
      <img src={profile} alt={`Source ${id.profile}`} />
      <p>{`Photographer: ${username}`}</p>
      </div>
      </section>
      );
    };

export default PhotoListItem;