import React, { useState } from "react";

const useApplicationData = () => {
  const [state, setState] = useState({
    selectedPhoto: null,
    favourites: [],
  });
  const updateFavs = (photoId) => {
    setState((prev) => {
      if (prev.favourites.includes(photoId)) {
        return {
          ...prev,
          favourites: prev.favourites.filter((id) => id !== photoId),
        };
      } else {
        return {
          ...prev,
          favourites: [...prev.favourites, photoId],
        };
      }
    });
  };
  const setSelectedPhoto = (photoData) => {
    setState((prev) => ({
      ...prev,
      selectedPhoto: photoData,
    }));
  };
  const onClosePhotoDetailsModal = () => {
    setState((prev) => ({
      ...prev,
      selectedPhoto: null,
    }));
  };
  const onLoadTopic = () => {};
  const onPhotoClick = (photoData) => {
    setSelectedPhoto(photoData);
  };
  const toggleFavouriteState = (photoID) => {
    setState((prevState) => ({
      ...prevState,
      favourites: prevState.favourites.includes(photoID)
        ? prevState.favourites.filter((id) => id !== photoID)
        : [...prevState.favourites, photoID],
    }));
  };

  return {
    state,
    updateFavs,
    setSelectedPhoto,
    onClosePhotoDetailsModal,
    onLoadTopic,
    onPhotoClick,
  };
};

export default useApplicationData;
