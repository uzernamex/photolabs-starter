import React from "react";
// import './PhotoListItem.scss'
import PhotoList from "./PhotoList";
import App from "App";
// We need to display individual photos with relevant details such as: 
//1. if the user has liked the photo; 
//2. the photographer image; 
//and 3. the photographer name.


// PhotoListItem COMPONENT
const PhotoListItem = function ({id, location, imageSource, username, profile}) {
  // render() {
    return <section>
    {/* <img src={imageSource}  */}
    <div className="photo-list__item"/>
    <div className="photo-list__user-info">
      <p>{`name: ${ username }`}</p>
      <p>{`Location: ${location.city}, ${location.country}`}</p>
      <p>{`User: ${ username }`}</p>
      <p>{`Source: ${ imageSource }`}</p>
      <p>{`ID: ${ id }`}</p>
      <p>{`URL: ${profile}`}</p>
      </div>
      </section>
      
  };



export default PhotoListItem;