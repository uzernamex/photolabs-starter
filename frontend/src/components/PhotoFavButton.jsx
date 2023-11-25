import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = () => {
  const [isClicked, setIsClicked] = useState(false);
  
  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  };
  
  return (
  <button
  className={`'photo-fav-button' ${isClicked ? 'photo-list__fav-icon' : 'photo-list__fav-icon-svg'}`}
  onClick={handleButtonClick}>

  {isClicked ? ' clicked' : 'not clicked'}    


 <FavIcon />
</button> 
);
};

// className={`photo-fav-button ${isClicked ? 'liked' : ''}`} 


export default PhotoFavButton;