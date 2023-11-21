import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [isClicked, setIsClicked] = useState(notClicked);

  const handleClick = () => {
    setIsClicked((previousClickState) => (previousClickState === 'clicked' ? 'notClicked' : 'clicked'));
  };
  
  return (
  <div onClick={handleClick} className={`photo-list__fav-icon`}>
    {isClicked === 'clicked' && (
    <div className="photo-list__fav-icon-svg">

    </div>)}
    </div>
  );
}

export default PhotoFavButton;