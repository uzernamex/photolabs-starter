//TopicListItem

import React from "react";
import "../styles/TopicListItem.scss";

// const sampleDataForTopicListItem = {
//   id: "1",
//   slug: "topic-1",
//   label: "Nature",
// };

//Render topic categories for photos
const TopicListItem = ({ topic, onTopicClick }) => {
  const handleTopicClick = () => {
    onTopicClick(topic.id);
  };

  return (
    <div className="topic-list__item span" onClick={handleTopicClick}>
      <div className="topic-list__item">{topic.title}</div>
    </div>
  );
};

export default TopicListItem;