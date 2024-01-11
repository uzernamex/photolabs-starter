import React, { useState, useEffect } from "react";
import TopNavigation from "components/TopNavigationBar";
import "../styles/HomeRoute.scss";
import photos from "mocks/photos";
import PhotoList from "components/PhotoList";
import TopicList from "components/TopicList";
import useApplicationData, { ACTIONS } from "hooks/useApplicationData";
import PhotoListItem from "components/PhotoListItem";

const HomeRoute = ({
  state,
  topics,
  photos,
  updateFavs,
  toggleFavouriteState,
  setSelectedPhoto,
  onClosePhotoDetailsModal,
  onTopicClick,
  
  handlePhotoClick,
  setModalOpen,
  fetchPhotosByTopic,
  favourites,
}) => {
  const closedModal = () => {
    setSelectedPhoto(null);
    onClosePhotoDetailsModal();
  };
  // const [fetchedPhotos, setFetchedPhotos] = useState([]);

  // useEffect(() => {
  //   if (state.selectedTopic) {
  //     onLoadTopic(state.selectedTopic.id);
  //   }
  // }, [state.selectedTopic]);

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        favouritesCount={favourites.length}
        fetchPhotosByTopic={fetchPhotosByTopic}
        onTopicClick={onTopicClick}
      />
      {/* <TopicList
        topics={topics}
        onTopicClick={onTopicClick} */}
      {/* // fetchPhotosByTopic={fetchPhotosByTopic} */}
      {/* /> */}

       {/* <PhotoListItem
        state={state}
        // photos={photos}
        // photos={state.setSelectedPhoto} //ackend data:?
        // photos={state.photosByTopic[state.selectedTopic]}
        toggleFavouriteState={updateFavs}
        favourites={state.favourites}
        setModalOpen={setModalOpen}
        setSelectedPhoto={setSelectedPhoto}
        handleButtonClick={handleButtonClick}
        handlePhotoClick={handlePhotoClick}
      />  */}
      <PhotoList
        // state={state} /////
        photos={photos}
        toggleFavouriteState={updateFavs}
        favourites={state.favourites}
        // photos={state.setSelectedPhoto} //ackend data:?
        setModalOpen={setModalOpen}
        setSelectedPhoto={setSelectedPhoto}
        handlePhotoClick={handlePhotoClick}
        // photos={state.photosByTopic[state.selectedTopic?.slug] || []}
      />
    </div>
  );
};

export default HomeRoute;
