// useApplicationData.jsx

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
  const setPhotoSelected = (photoData) => {
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
  return {
    state,
    updateFavs,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    onLoadTopic,
  };
};

export default useApplicationData;
