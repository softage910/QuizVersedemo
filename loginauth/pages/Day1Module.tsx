// import "./Day1Module.css";
// import { useState } from "react";
// import Topic1 from "./Day1/Topic1";
// import Topic2 from "./Day1/Topic2";
// import Topic3 from "./Day1/Topic3";
// import Topic4 from "./Day1/Topic4";
// import Topic5 from "./Day1/Topic5";
// import Topic6 from "./Day1/Topic6";
// import Topic7 from "./Day1/Topic7";
// import Topic8 from "./Day1/Topic8";
// import Topic9 from "./Day1/Topic9";

// export default function Day1Module() {
//   const [selectedTopic, setSelectedTopic] = useState<number | null>(null);

//   const topics = [
//     { id: 1, title: "Objective : Understanding The Importance Of Data In Model Training", component: <Topic1 /> },
//     { id: 2, title: "Why is data important for model training?", component: <Topic2 /> },
//     { id: 3, title: "Examples of data to train the models", component: <Topic3 /> },
//     { id: 4, title: "The evolving nature of data collection to train and test different versions of the models", component: <Topic4 /> },
//     { id: 5, title: "Future Trends in Prompting AI Agents", component: <Topic5 /> },
//     { id: 6, title: "Our data collection outline for model training (datacategories and model training)", component: <Topic6 /> },
//     { id: 7, title: "What works and what does not?", component: <Topic7 /> },
//     { id: 8, title: "Model Evaluation", component: <Topic8 /> },
//     { id: 9, title: "Glossary", component: <Topic9 /> },
//   ];

//   return (
//     <div className="Day1-Main">
//       <div className="Header">
//         <h1 className="h1">Day 1: The Importance Of Data In Model Training</h1>
//       </div>

//       <div className="MainContent">
//         <h2 className="h2">Topics</h2>

//         <ol className="ol">
//           {topics.map((topic) => (
//             <li key={topic.id}>
//               <button onClick={() => setSelectedTopic(topic.id)} className="underline hover:text-blue-500">
//                 {topic.title}
//               </button>
//             </li>
//           ))}
//         </ol>

//         <div className="topic-content">
//           {selectedTopic !== null && topics.find((topic) => topic.id === selectedTopic)?.component}
//         </div>
//       </div>
//     </div>
//   );
// }



// import "./Day1Module.css";
// import { useState } from "react";
// import Topic1 from "./Day1/Topic1";
// import Topic2 from "./Day1/Topic2";
// import Topic3 from "./Day1/Topic3";
// import Topic4 from "./Day1/Topic4";
// import Topic5 from "./Day1/Topic5";
// import Topic6 from "./Day1/Topic6";
// import Topic7 from "./Day1/Topic7";
// import Topic8 from "./Day1/Topic8";
// import Topic9 from "./Day1/Topic9";

// export default function Day1Module() {
//   const [selectedTopic, setSelectedTopic] = useState<number | null>(null);

//   const topics = [
//     { id: 1, title: "Data in the context of AI model training", component: <Topic1 /> },
//     { id: 2, title: "Why is data important for model training?", component: <Topic2 /> },
//     { id: 3, title: "Examples of data to train the models", component: <Topic3 /> },
//     { id: 4, title: "The evolving nature of data collection to train and test different versions of the models", component: <Topic4 /> },
//     { id: 5, title: "Future Trends in Prompting AI Agents", component: <Topic5 /> },
//     { id: 6, title: "Our data collection outline for model training (datacategories and model training)", component: <Topic6 /> },
//     { id: 7, title: "What works and what does not?", component: <Topic7 /> },
//     { id: 8, title: "Model Evaluation", component: <Topic8 /> },
//     { id: 9, title: "Glossary", component: <Topic9 /> },
//   ];

//   const selectedTopicContent = topics.find((topic) => topic.id === selectedTopic)?.component;

//   return (
//     <div className="Day1-Main">
//       <div className="Header">
//         <h1 className="h1">Day 1: The Importance Of Data In Model Training</h1>
//       </div>

//       <div className="MainContent">
//         {selectedTopicContent ? (
//           <div>
//             <button className="Topic-Button" onClick={() => setSelectedTopic(null)}>
//               🔙 Back to Topics
//             </button>

//             {selectedTopicContent}
//             <div className='Read-Button'>
//                         <button>Next Topic</button>
//                     </div>
//           </div>
//         ) : (
//           <ol className="Topic-list">
//             {topics.map((topic) => (
//               <li key={topic.id}>
//                 <button className="Topic-Button" onClick={() => setSelectedTopic(topic.id)}>
//                   {topic.title}
//                 </button>
//               </li>
//             ))}
//           </ol>
//         )}
//       </div>
//     </div>
//   );
// }


// import "./Day1Module.css";
// import { useState } from "react";
// import Topic1 from "./Day1/Topic1";
// import Topic2 from "./Day1/Topic2";
// import Topic3 from "./Day1/Topic3";
// import Topic4 from "./Day1/Topic4";
// import Topic5 from "./Day1/Topic5";
// import Topic6 from "./Day1/Topic6";
// import Topic7 from "./Day1/Topic7";
// import Topic8 from "./Day1/Topic8";
// import Topic9 from "./Day1/Topic9";

// export default function Day1Module() {
//   const [selectedTopic, setSelectedTopic] = useState<number | null>(null);

//   const topics = [
//     { id: 1, title: "Data in the context of AI model training", component: <Topic1 /> },
//     { id: 2, title: "Why is data important for model training?", component: <Topic2 /> },
//     { id: 3, title: "Examples of data to train the models", component: <Topic3 /> },
//     { id: 4, title: "The evolving nature of data collection to train and test different versions of the models", component: <Topic4 /> },
//     { id: 5, title: "Future Trends in Prompting AI Agents", component: <Topic5 /> },
//     { id: 6, title: "Our data collection outline for model training (datacategories and model training)", component: <Topic6 /> },
//     { id: 7, title: "What works and what does not?", component: <Topic7 /> },
//     { id: 8, title: "Model Evaluation", component: <Topic8 /> },
//     { id: 9, title: "Glossary", component: <Topic9 /> },
//   ];

//   const selectedTopicIndex = topics.findIndex((topic) => topic.id === selectedTopic);
//   const selectedTopicContent = selectedTopic !== null ? topics[selectedTopicIndex].component : null;

//   const handleNextTopic = () => {
//     if (selectedTopic !== null && selectedTopicIndex < topics.length - 1) {
//       setSelectedTopic(topics[selectedTopicIndex + 1].id);
//     }
//   };

//   return (
//     <div className="Day1-Main">
//       <div className="Header">
//         <h1 className="h1">Day 1: The Importance Of Data In Model Training</h1>
//       </div>

//       <div className="MainContent">
//         {selectedTopicContent ? (
//           <div>
//             <button className="Topic-Button" onClick={() => setSelectedTopic(null)}>
//               🔙 Back to Topics
//             </button>

//             {selectedTopicContent}

//             {selectedTopicIndex < topics.length - 1 && (
//                 <div className="Toggle-Topic">
//                                   <div className="Read-Button">
//                 <button onClick={handleNextTopic}>Next Topic →</button>
//               </div>
//               <div className="Read-Button">
//                 <button onClick={handleNextTopic}>Previous Topic </button>
//               </div>
//                 </div>
//             )}
//           </div>
//         ) : (
//           <ol className="Topic-list">
//             {topics.map((topic) => (
//               <li key={topic.id}>
//                 <button className="Topic-Button" onClick={() => setSelectedTopic(topic.id)}>
//                   {topic.title}
//                 </button>
//               </li>
//             ))}
//           </ol>
//         )}
//       </div>
//     </div>
//   );
// }




// import "./Day1Module.css";
// import { useState } from "react";
// import Topic1 from "./Day1/Topic1";
// import Topic2 from "./Day1/Topic2";
// import Topic3 from "./Day1/Topic3";
// import Topic4 from "./Day1/Topic4";
// import Topic5 from "./Day1/Topic5";
// import Topic6 from "./Day1/Topic6";
// import Topic7 from "./Day1/Topic7";
// import Topic8 from "./Day1/Topic8";
// import Topic9 from "./Day1/Topic9";

// export default function Day1Module() {
//     const [selectedTopic, setSelectedTopic] = useState<number | null>(null);

//     const topics = [
//         { id: 1, title: "Data in the context of AI model training", component: <Topic1 /> },
//         { id: 2, title: "Why is data important for model training?", component: <Topic2 /> },
//         { id: 3, title: "Examples of data to train the models", component: <Topic3 /> },
//         { id: 4, title: "The evolving nature of data collection to train and test different versions of the models", component: <Topic4 /> },
//         { id: 5, title: "Future Trends in Prompting AI Agents", component: <Topic5 /> },
//         { id: 6, title: "Our data collection outline for model training (datacategories and model training)", component: <Topic6 /> },
//         { id: 7, title: "What works and what does not?", component: <Topic7 /> },
//         { id: 8, title: "Model Evaluation", component: <Topic8 /> },
//         { id: 9, title: "Glossary", component: <Topic9 /> },
//     ];

//     const selectedTopicIndex = topics.findIndex((topic) => topic.id === selectedTopic);
//     const selectedTopicContent = selectedTopic !== null ? topics[selectedTopicIndex].component : null;

//     const handleNextTopic = () => {
//         if (selectedTopic !== null && selectedTopicIndex < topics.length - 1) {
//             setSelectedTopic(topics[selectedTopicIndex + 1].id);
//         }
//     };

//     const handlePreviousTopic = () => {
//         if (selectedTopic !== null && selectedTopicIndex > 0) {
//             setSelectedTopic(topics[selectedTopicIndex - 1].id);
//         }
//     };

//     return (
//         <div className="Day1-Main">
//             <div className="Header">
//                 <h1 className="h1">Day 1: The Importance Of Data In Model Training</h1>
//             </div>

//             <div className="MainContent">
//                 {selectedTopicContent ? (
//                     <div>
//                         <button className="Topic-Button" onClick={() => setSelectedTopic(null)}>
//                             🔙 Back to Topics
//                         </button>

//                         {selectedTopicContent}

//                         <div className="Toggle-Topic">
//                             {selectedTopicIndex > 0 && (
//                                 <div className="Read-Button">
//                                     <button onClick={handlePreviousTopic}>← Previous Topic</button>
//                                 </div>
//                             )}

//                             {selectedTopicIndex < topics.length - 1 && (
//                                 <div className="Read-Button">
//                                     <button onClick={handleNextTopic}>Next Topic →</button>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 ) : (
//                     <ol className="Topic-list">
//                         {topics.map((topic) => (
//                             <li key={topic.id}>
//                                 <button className="Topic-Button" onClick={() => setSelectedTopic(topic.id)}>
//                                     {topic.title}
//                                 </button>
//                             </li>
//                         ))}
//                     </ol>
//                 )}
//             </div>
//         </div>
//     );
// }



// import "./Day1Module.css";
// import { useState, useEffect } from "react";
// import { firestore, auth } from "../src/app/firebase/firebaseconfig";
// import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

// import Topic1 from "./Day1/Topic1";
// import Topic2 from "./Day1/Topic2";
// import Topic3 from "./Day1/Topic3";
// import Topic4 from "./Day1/Topic4";
// import Topic5 from "./Day1/Topic5";
// import Topic6 from "./Day1/Topic6";
// import Topic7 from "./Day1/Topic7";
// import Topic8 from "./Day1/Topic8";
// import Topic9 from "./Day1/Topic9";


// export default function Day1Module() {
//   const [selectedTopic, setSelectedTopic] = useState<number | null>(null);
//   const [completedTopics, setCompletedTopics] = useState<number[]>([]);
//   const user = auth.currentUser;

//   const topics = [
//     { id: 1, title: "Data in the context of AI model training", component: <Topic1 /> },
//     { id: 2, title: "Why is data important for model training?", component: <Topic2 /> },
//     { id: 3, title: "Examples of data to train the models", component: <Topic3 /> },
//     { id: 4, title: "The evolving nature of data collection to train and test different versions of the models", component: <Topic4 /> },
//     { id: 5, title: "Future Trends in Prompting AI Agents", component: <Topic5 /> },
//     { id: 6, title: "Our data collection outline for model training (datacategories and model training)", component: <Topic6 /> },
//     { id: 7, title: "What works and what does not?", component: <Topic7 /> },
//     { id: 8, title: "Model Evaluation", component: <Topic8 /> },
//     { id: 9, title: "Glossary", component: <Topic9 /> },
//   ];

//   // Fetch completed topics from Firebase
//   useEffect(() => {
//     if (!user) return;
    
//     const fetchCompletedTopics = async () => {
//       const userRef = doc(firestore, "users", user.uid);
//       const docSnap = await getDoc(userRef);

//       if (docSnap.exists()) {
//         setCompletedTopics(docSnap.data().completedTopics || []);
//       } else {
//         await setDoc(userRef, { completedTopics: [] });
//       }
//     };

//     fetchCompletedTopics();
//   }, [user]);

//   const selectedTopicIndex = topics.findIndex((topic) => topic.id === selectedTopic);
//   const selectedTopicContent = selectedTopic !== null ? topics[selectedTopicIndex].component : null;

//   // Handle "Next Topic" Click
//   const handleNextTopic = async () => {
//     if (!user || selectedTopic === null) return;

//     const nextTopicIndex = selectedTopicIndex + 1;
//     const newCompletedTopics = [...new Set([...completedTopics, selectedTopic])]; // Prevent duplicates

//     // Update UI first (Green tick appears instantly)
//     setCompletedTopics(newCompletedTopics);
//     if (nextTopicIndex < topics.length) {
//       setSelectedTopic(topics[nextTopicIndex].id); // Move to next topic instantly
//     }

//     // Update Firebase in the background (No delay in topic change)
//     const userRef = doc(firestore, "users", user.uid);
//     await updateDoc(userRef, { completedTopics: newCompletedTopics });
//   };

//   // Handle "Previous Topic" Click
//   const handlePreviousTopic = () => {
//     if (selectedTopic !== null && selectedTopicIndex > 0) {
//       setSelectedTopic(topics[selectedTopicIndex - 1].id);
//     }
//   };

//   return (
//     <div className="Day1-Main">
//       <div className="Header">
//         <h1 className="h1">Day 1: The Importance Of Data In Model Training</h1>
//       </div>

//       <div className="MainContent">
//         {selectedTopicContent ? (
//           <div>
//             <button className="Topic-Button" onClick={() => setSelectedTopic(null)}>
//               🔙 Back to Topics
//             </button>

//             {selectedTopicContent}

//             <div className="Toggle-Topic">
//               {selectedTopicIndex > 0 && (
//                 <div className="Read-Button">
//                   <button onClick={handlePreviousTopic}>← Previous Topic</button>
//                 </div>
//               )}

//               <div className="Read-Button">
//                 {selectedTopicIndex < topics.length - 1 ? (
//                   <button onClick={handleNextTopic}>Next Topic →</button>
//                 ) : (
//                   <button  disabled>Completed ✅ ?</button>
//                 )}
//               </div>
//             </div>
//           </div>
//         ) : (
//           <ol className="Topic-list">
//             {topics.map((topic) => (
//               <li key={topic.id}>
//                 <button
//                   className="Topic-Button"
//                   onClick={() => setSelectedTopic(topic.id)}
//                 >
//                   {topic.title} {completedTopics.includes(topic.id) && "✅"}
//                 </button>
//               </li>
//             ))}
//           </ol>
//         )}
//       </div>
//     </div>
//   );
// }





// import "./Day1Module.css";
// import { useState, useEffect } from "react";
// import { database, auth } from "../src/app/firebase/firebaseconfig";
// import { ref, get, set, update } from "firebase/database";

// import Topic1 from "./Day1/Topic1";
// import Topic2 from "./Day1/Topic2";
// import Topic3 from "./Day1/Topic3";
// import Topic4 from "./Day1/Topic4";
// import Topic5 from "./Day1/Topic5";
// import Topic6 from "./Day1/Topic6";
// import Topic7 from "./Day1/Topic7";
// import Topic8 from "./Day1/Topic8";
// import Topic9 from "./Day1/Topic9";

// export default function Day1Module() {
//     const [selectedTopic, setSelectedTopic] = useState<number | null>(null);
//     const [completedTopics, setCompletedTopics] = useState<number[]>([]);
//     const userId = auth.currentUser?.uid;
  
//     const topics = [
//       { id: 1, title: "Data in the context of AI model training", component: <Topic1 /> },
//       { id: 2, title: "Why is data important for model training?", component: <Topic2 /> },
//       { id: 3, title: "Examples of data to train the models", component: <Topic3 /> },
//       { id: 4, title: "The evolving nature of data collection", component: <Topic4 /> },
//       { id: 5, title: "Future Trends in Prompting AI Agents", component: <Topic5 /> },
//       { id: 6, title: "Our data collection outline", component: <Topic6 /> },
//       { id: 7, title: "What works and what does not?", component: <Topic7 /> },
//       { id: 8, title: "Model Evaluation", component: <Topic8 /> },
//       { id: 9, title: "Glossary", component: <Topic9 /> },
//     ];
  
//     useEffect(() => {
//       if (!userId) return;
//       const userProgressRef = ref(database, `userProgress/${userId}/day1/module1`);
      
//       get(userProgressRef).then((snapshot) => {
//         if (snapshot.exists()) {
//           setCompletedTopics(Object.keys(snapshot.val()).map(Number));
//         }
//       });
//     }, [userId]);
  
//     const selectedTopicIndex = topics.findIndex((topic) => topic.id === selectedTopic);
//     const selectedTopicContent = selectedTopic !== null ? topics[selectedTopicIndex].component : null;
  
//     const handleNextTopic = () => {
//       if (selectedTopic !== null && selectedTopicIndex < topics.length - 1) {
//         const nextTopicId = topics[selectedTopicIndex + 1].id;
        
//         if (!completedTopics.includes(selectedTopic)) {
//           const userProgressRef = ref(database, `userProgress/${userId}/day1/module1`);
          
//           update(userProgressRef, {
//             [selectedTopic]: true,
//           }).then(() => {
//             setCompletedTopics([...completedTopics, selectedTopic]);
//             setSelectedTopic(nextTopicId);
//           });
//         } else {
//           setSelectedTopic(nextTopicId);
//         }
//       }
//     };

//   // Function to mark a topic as completed in Firebase Realtime Database
//   const markTopicCompleted = async (topicId: number) => {
//     if (!userId) return;

//     const newCompletedTopics = [...new Set([...completedTopics, topicId])]; // Ensure unique values
//     setCompletedTopics(newCompletedTopics); // Update UI instantly

//     const userRef = ref(database, `userProgress/${userId}/day1/module1`);
//     await set(userRef, newCompletedTopics);
//   };

//   // Handle "Previous Topic" Click
//   const handlePreviousTopic = () => {
//     if (selectedTopic !== null && selectedTopicIndex > 0) {
//       setSelectedTopic(topics[selectedTopicIndex - 1].id);
//     }
//   };

//   return (
//     <div className="Day1-Main">
//       <div className="Header">
//         <h1 className="h1">Day 1: The Importance Of Data In Model Training</h1>
//       </div>

//       <div className="MainContent">
//         {selectedTopicContent ? (
//           <div>
//             <button className="Topic-Button" onClick={() => setSelectedTopic(null)}>
//               🔙 Back to Topics
//             </button>

//             {selectedTopicContent}

//             <div className="Toggle-Topic">
//               {selectedTopicIndex > 0 && (
//                 <div className="Read-Button">
//                   <button onClick={handlePreviousTopic}>← Previous Topic</button>
//                 </div>
//               )}

//               <div className="Read-Button">
//                 {selectedTopicIndex < topics.length - 1 ? (
//                   <button onClick={handleNextTopic}>Next Topic →</button>
//                 ) : (
//                   <button onClick={() => markTopicCompleted(selectedTopic!)}>✅ Mark Completed</button>
//                 )}
//               </div>
//             </div>
//           </div>
//         ) : (
//           <ol className="Topic-list">
//             {topics.map((topic) => (
//               <li key={topic.id}>
//                 <button
//                   className="Topic-Button"
//                   onClick={() => setSelectedTopic(topic.id)}
//                 >
//                   {topic.title} {completedTopics.includes(topic.id) && "✅"}
//                 </button>
//               </li>
//             ))}
//           </ol>
//         )}
//       </div>
//     </div>
//   );
// }




// import "./Day1Module.css";
// import { useState, useEffect } from "react";
// import { database, auth } from "../src/app/firebase/firebaseconfig";
// import { ref, get, set, update } from "firebase/database";

// import Topic1 from "./Day1/Topic1";
// import Topic2 from "./Day1/Topic2";
// import Topic3 from "./Day1/Topic3";
// import Topic4 from "./Day1/Topic4";
// import Topic5 from "./Day1/Topic5";
// import Topic6 from "./Day1/Topic6";
// import Topic7 from "./Day1/Topic7";
// import Topic8 from "./Day1/Topic8";
// import Topic9 from "./Day1/Topic9";

// export default function Day1Module() {
//   const [selectedTopic, setSelectedTopic] = useState<number>(1); // Start from Topic 1
//   const [completedTopics, setCompletedTopics] = useState<number[]>([]);
//   const userId = auth.currentUser?.uid;

//   const topics = [
//     { id: 1, component: <Topic1 /> },
//     { id: 2, component: <Topic2 /> },
//     { id: 3, component: <Topic3 /> },
//     { id: 4, component: <Topic4 /> },
//     { id: 5, component: <Topic5 /> },
//     { id: 6, component: <Topic6 /> },
//     { id: 7, component: <Topic7 /> },
//     { id: 8, component: <Topic8 /> },
//     { id: 9, component: <Topic9 /> },
//   ];

//   useEffect(() => {
//     if (!userId) return;
//     const userProgressRef = ref(database, `userProgress/${userId}/day1/module1`);

//     get(userProgressRef).then((snapshot) => {
//       if (snapshot.exists()) {
//         setCompletedTopics(Object.keys(snapshot.val()).map(Number));
//       }
//     });
//   }, [userId]);

//   const selectedTopicIndex = topics.findIndex((topic) => topic.id === selectedTopic);
//   const selectedTopicContent = topics[selectedTopicIndex].component;

//   const handleNextTopic = () => {
//     if (selectedTopicIndex < topics.length - 1) {
//       const nextTopicId = topics[selectedTopicIndex + 1].id;

//       if (!completedTopics.includes(selectedTopic)) {
//         const userProgressRef = ref(database, `userProgress/${userId}/day1/module1`);

//         update(userProgressRef, {
//           [selectedTopic]: true,
//         }).then(() => {
//           setCompletedTopics([...completedTopics, selectedTopic]);
//           setSelectedTopic(nextTopicId);
//         });
//       } else {
//         setSelectedTopic(nextTopicId);
//       }
//     }
//   };

//   const handlePreviousTopic = () => {
//     if (selectedTopicIndex > 0) {
//       setSelectedTopic(topics[selectedTopicIndex - 1].id);
//     }
//   };

//   const markTopicCompleted = async () => {
//     if (!userId) return;

//     const newCompletedTopics = [...new Set([...completedTopics, selectedTopic])]; // Ensure unique values
//     setCompletedTopics(newCompletedTopics); // Update UI instantly

//     const userRef = ref(database, `userProgress/${userId}/day1/module1`);
//     await set(userRef, newCompletedTopics);
//   };

//   return (
//     <div className="Day1-Main">
//       <div className="Header">
//         <h1 className="h1">Day 1: The Importance Of Data In Model Training</h1>
//       </div>

//       <div className="MainContent">
//         {selectedTopicContent}

//         <div className="Toggle-Topic">
//           {selectedTopicIndex > 0 && (
//             <button className="Read-Button" onClick={handlePreviousTopic}>
//               ← Previous Topic
//             </button>
//           )}

//           {selectedTopicIndex < topics.length - 1 ? (
//             <button className="Read-Button" onClick={handleNextTopic}>
//               Next Topic →
//             </button>
//           ) : (
//             <button className="Read-Button" onClick={markTopicCompleted}>
//               ✅ Mark Completed
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }




"use client";
import "./Day1Module.css";
import { useState, useEffect } from "react";
import { database, auth } from "../src/app/firebase/firebaseconfig";
import { ref, get, update, query } from "firebase/database";

import Topic1 from "./Day1/Topic1";
import Topic2 from "./Day1/Topic2";
import Topic3 from "./Day1/Topic3";
import Topic4 from "./Day1/Topic4";
import Topic5 from "./Day1/Topic5";
import Topic6 from "./Day1/Topic6";
import Topic7 from "./Day1/Topic7";
import Topic8 from "./Day1/Topic8";
import Topic9 from "./Day1/Topic9";
import NotificationMessage from "@/app/components/NotificationMessage";

export default function Day1Module() {
  const [selectedTopic, setSelectedTopic] = useState<number>(1);
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);
  const userId = auth.currentUser?.uid;
  const [UserID, setUserID] = useState<string>("");
  const [completeMessage, setcompleteMessage] = useState<string | null>(null);


  // const handleTopicCompletion = (topicName: string) => {
  //   setCompletedTopics(prevCompletedTopics => ({ ...prevCompletedTopics, [topicName]: true }));
  //   // Call markTopicCompleted from Dashboard.tsx to update Firebase
  // };


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

    const invitedUsers = sessionStorage.getItem("invitedUsers");
    if(invitedUsers){
      setUserID(invitedUsers);
    }


    if (!userId) return;
    const userProgressRef = ref(database, `userProgress/${userId}/Day1/module1`);

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

    const userProgressRef = ref(database, `userProgress/${userId}/Day1/module1`);

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

    setcompleteMessage(null);

    if (!selectedTopicKey || !userId) return;

    const UserEmail = sessionStorage.getItem("userEmail");


          if (UserID) {
            const usersRef = ref(database, 'invitedUsers');
            const userQuery = query(usersRef);
      
            try {
              const snapshot = await get(userQuery);
              if (snapshot.exists()) {
                const userData = snapshot.val();
                const autoGeneratedId = Object.keys(userData).find(
                  (key) => userData[key].email === UserEmail
              );
    
                const userProgressRef = ref(database, `invitedUsers/${autoGeneratedId}/progress/Day1`);
                await update(userProgressRef, { ["Module"]: true });

                setcompleteMessage("Module Completed")
      
              }
            } catch (error) {
              console.error("Error fetching user data:", error);
            }
          }


    setCompletedTopics([...completedTopics, selectedTopicKey]);

    // setCompletionMessage("Let's Go! New Day unlocked...")
  };

  return (
    <div className="Day1-Main">
      <div className="Header">
        <h1 className="h1">Day 1: The Importance Of Data In Model Training</h1>
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
      {completeMessage && <NotificationMessage message={completeMessage} onClose={() => setcompleteMessage("")} color="success"  />}

    </div>
  );
}







