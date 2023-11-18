import React from "react";

import "../styles/PhotoListItem.scss";


const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const PhotoListItem = (id, location, imageSource, username, profile) => {
return (
  <div className="photo-list-item">
    <img src={imageSource} alt={`Photo by ${username}`}/>
    <div className="photoData"/>
    <p>{`ID: ${id}`}</p>
    <p>{`Source: ${imageSource}`}</p>
    <p>{`Location: ${location.city}, ${location.country}`}</p>
    <p>{`User: ${username}`}</p>
    <p>{`URL: ${profile}`}</p>
  </div>
)
};

export default PhotoListItem;



