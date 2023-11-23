import React, { useState } from 'react';

 import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = () => {
  const [isClicked, setIsClicked] = useState(false);
  
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (<button className={`photo-fav-button ${isClicked ? 'liked' : ''}`}
  onClick={handleButtonClick}
  ><FavIcon/>
    </button>
  );
};

  //   setIsClicked((previousClickState) => (previousClickState === 'clicked' ? 'notClicked' : 'clicked'));
  // };
  
  // return (
  // <div onClick={handleClick} className={`photo-list__fav-icon`}>
  //   {isClicked === 'clicked' && (
  //   <div className="photo-list__fav-icon-svg">

  //   </div>)}
  //   </div>
  // );


export default PhotoFavButton;