//APP.JSX

import React, { useState } from "react";
import photos from "mocks/photos";
import TopicList from "./components/TopicList";
import "./App.scss";
import topics from "mocks/topics";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

const sampleDataForPhotoList = [
  {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    },
    user: {
      id: "1",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
  {
    id: "2",
    location: {
      city: "Toronto",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-2-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
    },
    user: {
      id: "2",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
  {
    id: "3",
    location: {
      city: "Ottawa",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-3-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
    },
    user: {
      id: "3",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
];


const App = () => {
  const { state, updateFavs, setSelectedPhoto, onClosePhotoDetailsModal } =
    useApplicationData();

  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  // const openModal = (photo) => {
  //   setModalOpen(false);

  //   setSelectedPhoto(null);
  // };

  return (
    <div className="App">
      {/* <TopicList /> */}
      <HomeRoute
        // photos={photos}
        topics={topics}
        state={state}
        updateFavs={updateFavs}
        setSelectedPhoto={setSelectedPhoto}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
        // onLoadTopic={onLoadTopic}
        // similarImages={similarImages}
        toggleModal={toggleModal}
      />
      {/* {state.selectedPhoto && !isModalOpen && ( */}
      {isModalOpen && (
        <PhotoDetailsModal
          selectedPhoto={sampleDataForPhotoList[0]}
          // similarImages={similarImages} //
          // onClose={handleCloseModal}
          // onPhotoClick={handlePhotoClick}
          // onClose={onClosePhotoDetailsModal}
          isModalOpen={isModalOpen}
          toggleModal={toggleModal}
          // isPhotoClicked={isPhotoClicked}
        />
       )} 

      {/* {state.selectedPhoto && !isModalOpen && (
        <PhotoDetailsModal
          selectedPhoto={state.selectedPhoto}
          // similarImages={similarImages}
          // onClose={handleCloseModal}
          // toggleModal={handleToggleModal}
          // onPhotoClick={handlePhotoClick}
          // isPhotoClicked={isPhotoClicked}
          //  isFavourite={state.favourites.includes(state.selectedPhoto.id)}
          // onClose={onClosePhotoDetailsModal}
          // favouriteThisPhoto={updateFavs}
           />
       )      
      } */}
      {/* // {isModalOpen && state.selectedPhoto && ( */}
      {/* // <PhotoDetailsModal onClose={onClosePhotoDetailsModal} /> */}
    </div>
  );
};

export default App;
