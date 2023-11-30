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
  const [select, setSelect] = useState(null);
 
  const handlePhotoClick = (photoData) => {
    console.log("Photo modial clicked")
    setSelect(photoData);
  };

  const closedModal = () => {
    setSelect(null);
  };

  return (
    <div className="App">
      <TopicList />
      <HomeRoute photos={photos} topics={topics} />
{/* 
      {sampleDataForPhotoList.map((photoData) => (
        <PhotoListItem
        key={photoData.id}
        data={photoData}
        onClick={handlePhotoClick}
        closedModal={closedModal}
        />
      ))}
      { select && <PhotoDetailsModal photoData={select} />} */}
    </div>
  );
};

export default App;
