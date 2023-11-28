//APP.JSX

import React from "react";
import photos from "mocks/photos";
import PhotoListItem from "./components/PhotoListItem";
import TopicList from "./components/TopicList";
import "./App.scss";
import TopNavigation from "./components/TopNavigationBar";
import topics from "mocks/topics";
import HomeRoute from "routes/HomeRoute";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import { useState } from "react";


// const sampleDataForPhotoList = [
//   {
//     id: "1",
//     location: {
//       city: "Montreal",
//       country: "Canada",
//     },
//     urls: {
//       full: `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
//       regular: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//     },
//     user: {
//       id: "1",
//       username: "exampleuser",
//       name: "Joe Example",
//       profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
//     },
//   },
//   {
//     id: "2",
//     location: {
//       city: "Toronto",
//       country: "Canada",
//     },
//     urls: {
//       full: `${process.env.PUBLIC_URL}/Image-2-Full.jpeg`,
//       regular: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
//     },
//     user: {
//       id: "2",
//       username: "exampleuser",
//       name: "Joe Example",
//       profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
//     },
//   },
//   {
//     id: "3",
//     location: {
//       city: "Ottawa",
//       country: "Canada",
//     },
//     urls: {
//       full: `${process.env.PUBLIC_URL}/Image-3-Full.jpeg`,
//       regular: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
//     },
//     user: {
//       id: "3",
//       username: "exampleuser",
//       name: "Joe Example",
//       profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
//     },
//   },
// ];

const App = () => {
  const [modal, setModal] = useState(false);
  const handlePhotoClick = () => {
    console.log("Photo modial clicked")
    setModal(true);
  };

  return (
    <div className="App">
      <TopicList />
      <HomeRoute photos={photos} topics={topics} />
<PhotoListItem/>
      {/* {sampleDataForPhotoList.map((photoData) => (
        <PhotoListItem
        key={photoData.id}
        data={photoData}
        onClick={handlePhotoClick} 
        />
      ))} */}
      {modal && <PhotoDetailsModal/>}
    </div>
  );
};

export default App;
