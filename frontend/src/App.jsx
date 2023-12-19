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
  const {
    state,
    updateFavs,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    onLoadTopic,
  } = useApplicationData();

const [modalOpen, setModalOpen] = useState(false);


  // const toggleModal = () => {
  //   setModalOpen(!isModalOpen);
  // };
  
  return (
    <div className="App">
    {modalOpen && (
    <PhotoDetailsModal
    selectedPhoto={sampleDataForPhotoList[0]}
    // similarImages={similarImages} //
    // onClose={handleCloseModal}
    // onPhotoClick={handlePhotoClick}
    // onClose={onClosePhotoDetailsModal}
    modalOpen={modalOpen}
    // toggleModal={toggleModal}
    // isPhotoClicked={isPhotoClicked}
    />
    )}
      {/* <TopicList /> */}
      <HomeRoute
          setModalOpen={setModalOpen}
          // {toggleModal}
          topics={topics}
        state={state}
        updateFavs={updateFavs}
        // setSelectedPhoto={setSelectedPhoto}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
        // onLoadTopic={onLoadTopic}
        // similarImages={similarImages}
      
        />


        </div>
  );
};

export default App;