import React from "react";
import '../styles/PhotoListItem.scss'
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({data, toggleFavouriteState, isFavourited }) => {
   const { id, urls , user} = data;
   const {regular: imageSource} = urls;
   return (
    <div className="photo-list__item">
    <img src={imageSource} alt={`Photo${id}`} />


    </div>
);
}
    {/* // <div className="photo-list__user-info">
    //   <img src={profile} alt={`Source ${id.profile}`} />
    //   <p>{`Photographer: ${username}`}</p>
    //   </div>
    //   );
    // }; */}

export default PhotoListItem;