import React, { useReducer, useEffect } from "react";

// ACTION TYPES:
const ACTIONS = {
  TOGGLE_FAV_PHOTO: "TOGGLE_FAV_PHOTO",
  SET_SELECTED_PHOTO: "SET_SELECTED_PHOTO",
  CLOSE_PHOTO_DETAILS_MODAL: "CLOSE_PHOTO_DETAILS_MODAL",
  ON_TOPIC_CLICK: "ON_TOPIC_CLICK",
  ON_LOAD_TOPIC: "ON_LOAD_TOPIC",
  FETCH_PHOTOS_FOR_TOPIC: "FETCH_PHOTOS_FOR_TOPIC",
  SET_PHOTOS: "SET_PHOTOS",
  GET_PHOTOS_BY_TOPIC: "GET_PHOTOS_BY_TOPIC",
};

// REACT HOOK: 'useApplicationData'

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
    case ACTIONS.SET_PHOTOS:
      return { ...state, photos: action.payload };

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

    /////
    // ??????
    case ACTIONS.ON_TOPIC_CLICK:
      const { topicId, slug, photos } = action.payload;
      const photosForTopic = state.photos.filter(
        (photo) => photo.topicID === topicId
      );
      return {
        ...state,
        selectedTopic: topicId,
        photosByTopic: {
          ...state.photosByTopic,
          [topicId]: photosForTopic,
        },
      };

    case ACTIONS.GET_PHOTOS_BY_TOPIC:
      return {
        ...state,
        photos: action.payload,
      };

    case ACTIONS.ON_LOAD_TOPIC:
      return {
        ...state,
        topics: action.payload,
      };

    default:
      throw new Error(`Action type is unsupported for ${action.type}`);
  }
};
const initialState = {
  selectedPhoto: null,
  favourites: [],
  photos: [],
  photosByTopic: {},
  similarPhotos: [],
  topics: [],
};
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleTopicClick = async (topicId) => {
    fetch(`/api/topics/photos/${topicId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `The photos for ${topicId} cannot be displayed at this time.`
          );
        }
        return response.json();
      })
      .then((photoData) => {
        dispatch({ type: ACTIONS.SET_PHOTOS, payload: photoData });
      })
      .catch((error) => {
        console.error(error);
      });
  };

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

  const onLoadTopic = (topicId) => {
    const selectedTopic = state.topics.find((topic) => topic.id === topicId);
    if (selectedTopic) {
      const { id, slug, photo } = selectedTopic;
      dispatch({
        type: ACTIONS.ON_TOPIC_CLICK,
        payload: { topicId: id, slug, photos },
      });
    } else {
      console.error(`Topic with id ${topicId} not found.`);
    }
  };

  // useEffect(() => {
  //   fetch(`/api/photos`)
  //     .then((response) => response.json())
  //     .then((photoData) => {
  //       dispatch({ type: ACTIONS.SET_PHOTOS, payload: photoData });
  //     });
  // }, []);

  useEffect(() => {
    fetch(`/api/photos`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("The requested images are unavailable at this time.");
        }
        return response.json();
      })
      .then((photoData) => {
        dispatch({ type: ACTIONS.SET_PHOTOS, payload: photoData });
      })
      .catch((error) => {
        console.error("An error occurred during fetch:", error.message);
      });
  }, []);

  // useEffect(() => {
  //   fetch(`/api/topics`)
  //     .then((response) => response.json())
  //     .then((topicData) => {
  //       dispatch({ type: ACTIONS.ON_LOAD_TOPIC, payload: topicData });
  //     });
  // }, []);

  useEffect(() => {
    fetch(`/api/topics`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch topics.");
        }
        return response.json();
      })
      .then((topicData) => {
        dispatch({ type: ACTIONS.ON_LOAD_TOPIC, payload: topicData });
      })
      .catch((error) => {
        console.error("An error occurred during fetch:", error.message);
      });
  }, []);

  return {
    state,
    updateFavs,
    setSelectedPhoto,
    onClosePhotoDetailsModal,
    onPhotoClick,
    toggleFavouriteState,
    handleTopicClick,
    onLoadTopic,
  };
};

export default useApplicationData;
