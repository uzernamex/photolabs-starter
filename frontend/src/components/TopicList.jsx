import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

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

// Map through array of photos, sorted by topic (nav bar organization)

const TopicList = (topics, onTopicClick) => {
  return (
    <div className="top-nav-bar__topic-list">
      {sampleDataForTopicList.map((topic) => (
        <TopicListItem
          key={topic.id}
          topic={topic}
          onClick={() => onTopicClick(topic.id)}
        />
      ))}
    </div>
  );
};

export default TopicList;
