//TopicListItem

import {React, useState} from "react";
import "../styles/TopicListItem.scss";
import useApplicationData from "hooks/useApplicationData";

// Render topic categories for photos

const TopicListItem = ({ topic, onTopicClick }) => {
  const handleClick = () => {
    onTopicClick(topic.id);
  };
  return (
    <div className="topic-list__item span" onClick={() => handleClick()}>
      <div className="topic-list__item">{topic.title}</div>
    </div>
  );
};

export default TopicListItem;