import "./Day1Module.css";
import { useState, useEffect } from "react";
import { database, auth } from "../src/app/firebase/firebaseconfig";
import { ref, get, update } from "firebase/database";

import Topic1 from "./Day5/Topic1";
import Topic2 from "./Day5/Topic2";



export default function Day5Module1() {
  const [selectedTopic, setSelectedTopic] = useState<number>(1); // Start from Topic 1
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);
  const userId = auth.currentUser?.uid;

  const topics = [
    { id: 1, key: "Topic1", component: <Topic1 /> },
    { id: 2, key: "Topic2", component: <Topic2 /> }
  ];

  useEffect(() => {
    if (!userId) return;
    const userProgressRef = ref(database, `userProgress/${userId}/day5/module`);

    get(userProgressRef).then((snapshot) => {
      if (snapshot.exists()) {
        setCompletedTopics(Object.keys(snapshot.val()));
      }
    });
  }, [userId]);

  const selectedTopicIndex = topics.findIndex((topic) => topic.id === selectedTopic);
  const selectedTopicKey = topics[selectedTopicIndex]?.key;
  const selectedTopicContent = topics[selectedTopicIndex]?.component;

  const handleNextTopic = async () => {
    if (!selectedTopicKey || !userId) return;

    const userProgressRef = ref(database, `userProgress/${userId}/day5/module`);

    if (!completedTopics.includes(selectedTopicKey)) {
      await update(userProgressRef, { [selectedTopicKey]: true });
      setCompletedTopics([...completedTopics, selectedTopicKey]);
    }

    if (selectedTopicIndex < topics.length - 1) {
      setSelectedTopic(topics[selectedTopicIndex + 1].id);
    }
  };

  const handlePreviousTopic = () => {
    if (selectedTopicIndex > 0) {
      setSelectedTopic(topics[selectedTopicIndex - 1].id);
    }
  };

  const markTopicCompleted = async () => {
    if (!selectedTopicKey || !userId) return;

    const userProgressRef = ref(database, `users/${userId}/progress/Day5`);
    await update(userProgressRef, { ["Module 1"]: true });

    setCompletedTopics([...completedTopics, selectedTopicKey]);
  };

  return (
    <div className="Day1-Main">
      <div className="Header">
        <h1 className="h1">Day 5: Fluxe & Engine</h1>
      </div>

      <div className="MainContent">
        {selectedTopicContent}

        <div className="Toggle-Topic">
        {selectedTopicIndex > 0 && (
            <button className="Read-Button-Previous" onClick={handlePreviousTopic}>
              ← Previous Topic
            </button>
          )}

          {selectedTopicIndex < topics.length - 1 ? (
            <button className="Read-Button-Next" onClick={handleNextTopic}>
              {selectedTopicIndex === 0 ? "Let's Get Started →" : "Next Topic →"}
              </button>
          ) : (
            <button className="Read-Button" onClick={markTopicCompleted}>
              ✅ Mark Completed
            </button>
          )}
        </div>
      </div>
    </div>
  );
}