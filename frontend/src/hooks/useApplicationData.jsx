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
      console.log(action.payload);

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

    // case ACTIONS.ON_TOPIC_CLICK:
    //   const topicId = action.payload.topicId;
    //   const selectedTopic = state.topics.find((topic) => topic.id === topicId);
    //   const photosForTopic = state.photos.filter(
    //     (photo) => photo.topicID === topicId
    //   );
    //   return {
    //     ...state,
    //     selectedTopic: topicId,
    //     photosByTopic: {
    //       ...state.photosByTopic,
    //       [topicId]: photosForTopic,
    //     },
    //   };
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


  // ACTION CREATORS
  const handleTopicClick = async (topicId) => {
    fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
      .then((response) => {
        console.log("response received");
        return response.json();
      })

      .then((photoData) => {
        console.log("dispatching action");
        console.log(photoData);
        dispatch({ type: ACTIONS.SET_PHOTOS, payload: photoData });
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
      const { slug, photo } = selectedTopic;
      dispatch({ type: ACTIONS.ON_TOPIC_CLICK, payload: { topicId } });
    } else {
      console.error(`Topic with id ${topicId} not found.`);
    }
  };
  // onTopicClick(topics.ACTIONS.id);

  // const onLoadTopic = (topicData) => {
  //   dispatch({ type: ACTIONS.ON_LOAD_TOPIC, payload: topicData });
  // };

  // const onLoadTopic = async (topicId) => {
  //   dispatch({ type: ACTIONS.ON_LOAD_TOPIC });
  //   try {
  //     const photosForTopic = await fetchPhotosForTopic(topicId);
  //     dispatch({
  //       type: ACTIONS.FETCH_PHOTOS_FOR_TOPIC,
  //       payload: { topicId, photosForTopic },
  //     });
  //   } catch (error) {
  //     console.error("Error loading topic:", error);
  //   }
  // };
  // const fetchPhotosForTopic = async (topicId) => {
  //   try {
  //     const response = await fetch(
  //       `http://localhost:8001/api/topics/photos/${topicId}`
  //     );
  //     const data = await response.json();
  //     return data;
  //   } catch (error) {
  //     console.error("Error fetching photos:", error);
  //     throw error;
  //   }
  // };
  console.log("state in application");
  console.log(state.photos);

  useEffect(() => {
    fetch("http://localhost:8001/api/photos")
      .then((response) => response.json())
      .then((photoData) => {
        dispatch({ type: ACTIONS.SET_PHOTOS, payload: photoData });
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8001/api/topics")
      .then((response) => response.json())
      .then((topicData) => {
        dispatch({ type: ACTIONS.ON_LOAD_TOPIC, payload: topicData });
      });
  }, []);

  return {
    state,
    // dispatch,
    updateFavs,
    setSelectedPhoto,
    onClosePhotoDetailsModal,
    onPhotoClick,
    toggleFavouriteState,
    // onTopicClick,
    handleTopicClick, 
    // handleButtonClick,
    onLoadTopic,
    handleTopicClick,
  };
};

export default useApplicationData;
