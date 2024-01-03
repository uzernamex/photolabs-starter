// REACT HOOK: 'useApplicationData'

import React, { useReducer } from "react";

// ACTION TYPES:
export const ACTIONS = {
  TOGGLE_FAV_PHOTO: "TOGGLE_FAV_PHOTO",
  SET_SELECTED_PHOTO: "SET_SELECTED_PHOTO",
  CLOSE_PHOTO_DETAILS_MODAL: "CLOSE_PHOTO_DETAILS_MODAL",
  ON_TOPIC_CLICK: "ON_TOPIC_CLICK",
  ON_LOAD_TOPIC: "ON_LOAD_TOPIC",
};

const initialState = {
  favourites: [],
  selectedPhoto: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_FAV_PHOTO:
      if (state.favourites.includes(action.payload.photoId)) {
        return {
          ...state,
          favourites: state.favourites.filter(
            (id) => id !== action.payload.photoId
          ),
        };
      } else {
        return {
          ...state,
          favourites: [...state.favourites, action.payload.photoId],
        };
      }
    case ACTIONS.SET_SELECTED_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload.photoData,
      };
    case ACTIONS.CLOSE_PHOTO_DETAILS_MODAL:
      return {
        ...state,
        selectedPhoto: null,
      };
    case ACTIONS.ON_TOPIC_CLICK:
      console.log(`topic clicked with id ${action.payload.topicId}`);
      return state;
    case ACTIONS.ON_LOAD_TOPIC:
      console.log(`onLoadTopic`);
      return state;
    default:
      throw new Error(`Action type is unsupported for ${action.type}`);
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // ACTION CREATORS

  const updateFavs = (photoId) => {
    dispatch({ type: ACTIONS.TOGGLE_FAV_PHOTO, payload: { photoId } });
  };

  const setSelectedPhoto = (photoData) => {
    dispatch({ type: ACTIONS.SET_SELECTED_PHOTO, payload: { photoData } });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS_MODAL });
  };
  const onPhotoClick = (photoData) => {
    dispatch({ type: ACTIONS.SET_SELECTED_PHOTO, payload: { photoData } });
  };

  const toggleFavouriteState = (photoId) => {
    dispatch({ type: ACTIONS.TOGGLE_FAV_PHOTO, payload: { photoId } });
  };
  const onTopicClick = (topicId) => {
    dispatch({ type: ACTIONS.ON_TOPIC_CLICK, payload: { topicId } });
  };

  const onLoadTopic = () => {
    dispatch({ type: ACTIONS.ON_LOAD_TOPIC });
  };

  return {
    state,
    updateFavs,
    setSelectedPhoto,
    onClosePhotoDetailsModal,
    onPhotoClick,
    toggleFavouriteState,
    onTopicClick,
    onLoadTopic,
  };
};

export default useApplicationData;
