//TopicListItem

import React from "react";
import "../styles/TopicListItem.scss";

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