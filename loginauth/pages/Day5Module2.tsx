import "./Day1Module.css";
import { useState, useEffect } from "react";
import { database, auth } from "../src/app/firebase/firebaseconfig";
import { ref, get, update } from "firebase/database";

import Topic11 from "./Day5/Topic11";
import Topic12 from "./Day5/Topic12";
import Topic13 from "./Day5/Topic13";
import Topic14 from "./Day5/Topic14";
import Topic15 from "./Day5/Topic15";
import Topic16 from "./Day5/Topic16";
import Topic17 from "./Day5/Topic17";
import Topic18 from "./Day5/Topic18";
import Topic19 from "./Day5/Topic19";
import Topic110 from "./Day5/Topic110";
import Topic111 from "./Day5/Topic111";
import Topic112 from "./Day5/Topic112";




export default function Day5Module2() {
    const [selectedTopic, setSelectedTopic] = useState<number>(1); // Start from Topic 1
    const [completedTopics, setCompletedTopics] = useState<string[]>([]);
    const userId = auth.currentUser?.uid;

    const topics = [
        { id: 1, key: "Topic11", component: <Topic11 /> },
        { id: 2, key: "Topic12", component: <Topic12 /> },
        { id: 3, key: "Topic13", component: <Topic13 /> },
        { id: 4, key: "Topic14", component: <Topic14 /> },
        { id: 5, key: "Topic15", component: <Topic15 /> },
        { id: 8, key: "Topic18", component: <Topic18 /> },
        { id: 10, key: "Topic110", component: <Topic110 /> },
        { id: 11, key: "Topic111", component: <Topic111 /> },

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

        const userProgressRef = ref(database, `users/${userId}/progress/Day5`);

        if (!completedTopics.includes(selectedTopicKey)) {
            await update(userProgressRef, { ["Module 2"]: true });
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

        const userProgressRef = ref(database, `userProgress/${userId}/day5/module`);
        await update(userProgressRef, { [selectedTopicKey]: true });

        setCompletedTopics([...completedTopics, selectedTopicKey]);
    };

    return (
        <div className="Day1-Main">
            <div className="Header">
                <h1 className="h1">Day 5: Introduction to the
                    Ecosystem and Data Creation
                    Guidelines</h1>
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
        </div>
    );
}