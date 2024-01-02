// COMPONENT: 'TopicList'
// Use COMPONENT 'TopicListItem' to render a list of topics

import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";
import useApplicationData from "hooks/useApplicationData";
import topics from "mocks/topics";
import HomeRoute from "routes/HomeRoute";

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
  {
    id: "4",
    slug: "topic-4",
    title: "Food & Drink",
  },
];
const TopicList = ({ topics = [], onTopicClick }) => {
  const handleTopicClick = (topicId) => {
    console.log("topic clicked!!!!!!!!!");
    onTopicClick(topicId);
  };
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem
          key={topic.id}
          topic={topic}
          onTopicClick={handleTopicClick}
        />
      ))}
    </div>
  );
};

export default TopicList;
