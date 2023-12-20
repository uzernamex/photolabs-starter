//APP.JSX

import React, { useState } from "react";
import photos from "mocks/photos";
import TopicList from "./components/TopicList";
import "./App.scss";
import topics from "mocks/topics";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

const App = () => {
  const {
    state,
    updateFavs,
    // setPhotoSelected,
    setSelectedPhoto,
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
    selectedPhoto={state.selectedPhoto}
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