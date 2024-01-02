//TopicListItem

import React from "react";
import "../styles/TopicListItem.scss";
import useApplicationData from "hooks/useApplicationData";
import topics from "mocks/topics";
import TopicList from "./TopicList";

//Render topic categories for photos
const TopicListItem = ({ topic, onTopicClick }) => {

  return (
    <div className="topic-list__item span" onClick={() => onTopicClick(topic.id)}>

      <div className="topic-list__item">{topic.title}</div>
    </div>
  );
};

export default TopicListItem;
