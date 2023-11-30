//APP.JSX
import React, {useState} from "react";
import photos from "mocks/photos";
import PhotoListItem from "./components/PhotoListItem";
import TopicList from "./components/TopicList";
import "./App.scss";
import TopNavigation from "./components/TopNavigationBar";
import topics from "mocks/topics";
import HomeRoute from "routes/HomeRoute";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoDetailsModal from "routes/PhotoDetailsModal";


const App = () => {
  const [selected, setSelected] = useState(null); //currently selected photo
  const [favorites, setFavourites] = useState([]); //favourite photos
 
  const handlePhotoClick = (photoData) => {
    console.log("Photo modial clicked")
    setSelected(photoData);
  };

  const closedModal = () => {
    setSelected(null);
  };

  const favouriteThisPhoto = (photoId) => {
    setFavourites((previousFavourites) => {
      if (previousFavourites.includes(photoId)) {
        return previousFavourites.filter((id) => id !== photoId);
      } else {
        return [...previousFavourites, photoId]
      }
    });

  };

  return (
    <div className="App">
      <TopicList />
      <HomeRoute photos={photos} topics={topics} />
      {/* ///*** */}
      { selected && (
      <PhotoDetailsModal 
      selectedPhoto={selected}
      // similarImages={}
      isFavourite={favorites.includes(selected.id)}
      onClose={closeModal}
      favouriteThisPhoto={favouriteThisPhoto}
/>
      )}
  </div>
  )
};  


export default App;