import "./Day1Module.css";
import { useState, useEffect } from "react";
import { database, auth } from "../src/app/firebase/firebaseconfig";
import { ref, get, update } from "firebase/database";

import Topic1 from "./Day2/Topic1";
import Topic2 from "./Day2/Topic2";
import Topic3 from "./Day2/Topic3";
import Topic4 from "./Day2/Topic4";
import Topic5 from "./Day2/Topic5";
import Topic6 from "./Day2/Topic6";
import Topic7 from "./Day2/Topic7";
import Topic8 from "./Day2/Topic8";
import Topic9 from "./Day2/Topic9";

export default function Day2Module() {
  const [selectedTopic, setSelectedTopic] = useState<number>(1); // Start from Topic 1
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);

  const userId = auth.currentUser?.uid;

  const topics = [
    { id: 1, key: "Topic1", component: <Topic1 /> },
    { id: 2, key: "Topic2", component: <Topic2 /> },
    { id: 3, key: "Topic3", component: <Topic3 /> },
    { id: 4, key: "Topic4", component: <Topic4 /> },
    { id: 5, key: "Topic5", component: <Topic5 /> },
    { id: 6, key: "Topic6", component: <Topic6 /> },
    { id: 7, key: "Topic7", component: <Topic7 /> },
    { id: 8, key: "Topic8", component: <Topic8 /> },
    { id: 9, key: "Topic9", component: <Topic9 /> },
  ];

  useEffect(() => {
    if (!userId) return;
    const userProgressRef = ref(database, `userProgress/${userId}/day2/module2`);

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

    const userProgressRef = ref(database, `userProgress/${userId}/day2/module2`);

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

    const userProgressRef = ref(database, `users/${userId}/progress/Day2`);
    await update(userProgressRef, { ["Module"]: true });
    handleNextTopic();


    setCompletedTopics([...completedTopics, selectedTopicKey]);

    // setCompletionMessage("Let's Go! New Day unlocked...")
  };

  return (
    <div className="Day1-Main">
      <div className="Header">
        <h1 className="h1">Day 2: Mac Os Fundamentals</h1>
      </div>

      <div className="MainContent">
      <div className="Text-Section">

        {selectedTopicContent}
</div>
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
      {/* {CompletionMessage && <NotificationMessage message={CompletionMessage} onClose={() => setCompletionMessage("")} color="success"/>} */}

    </div>
  );
}
