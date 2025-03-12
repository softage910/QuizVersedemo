// "use client";
// import "./RoadMap.css";


// export default function Dashboard() {
//   return (
// <div className="progress-container">
//   <div className="Xyz">
//   <div className="progressbar">
//             <span className="title timer" data-from="0" data-to="85" data-speed="1800">100</span>
//             <div className="overlay"></div>
//             <div className="left"></div>
//             <div className="right"></div>
//         </div>
//         <h3>Day 1</h3>
//   </div>
//   <div className="Xyz">
//   <div className="progressbar">
//             <span className="title timer" data-from="0" data-to="85" data-speed="1800">85</span>
//             <div className="overlay"></div>
//             <div className="left"></div>
//             <div className="right"></div>
//         </div>
//         <h3>Day 2</h3>

//   </div>  
//   <div className="Xyz">
//   <div className="progressbar">
//             <span className="title timer" data-from="0" data-to="85" data-speed="1800">85</span>
//             <div className="overlay"></div>
//             <div className="left"></div>
//             <div className="right"></div>
//         </div>
//         <h3>Day 3</h3>

//   </div>  
//   <div className="Xyz">
//   <div className="progressbar">
//             <span className="title timer" data-from="0" data-to="85" data-speed="1800">85</span>
//             <div className="overlay"></div>
//             <div className="left"></div>
//             <div className="right"></div>
//         </div>
//         <h3>Day 4</h3>

//   </div>  
//   <div className="Xyz">
//   <div className="progressbar">
//             <span className="title timer" data-from="0" data-to="85" data-speed="1800">85</span>
//             <div className="overlay"></div>
//             <div className="left"></div>
//             <div className="right"></div>
//         </div>
//         <h3>Day 5</h3>

//   </div>  
//   <div className="Xyz">
//   <div className="progressbar">
//             <span className="title timer" data-from="0" data-to="85" data-speed="1800">85</span>
//             <div className="overlay"></div>
//             <div className="left"></div>
//             <div className="right"></div>
//         </div>
//         <h3>Day 6</h3>

//   </div>  
//   <div className="Xyz">
//   <div className="progressbar">
//             <span className="title timer" data-from="0" data-to="85" data-speed="1800">85</span>
//             <div className="overlay"></div>
//             <div className="left"></div>
//             <div className="right"></div>
//         </div>
//         <h3>Day 7</h3>

//   </div>  
//   <div className="Xyz">
//   <div className="progressbar">
//             <span className="title timer" data-from="0" data-to="85" data-speed="1800">85</span>
//             <div className="overlay"></div>
//             <div className="left"></div>
//             <div className="right"></div>
//         </div>
//         <h3>Day 8</h3>

//   </div>
//     <div className="Xyz">
//   <div className="progressbar">
//             <span className="title timer" data-from="0" data-to="0" data-speed="1800">85</span>
//             <div className="overlay"></div>
//             <div className="left"></div>
//             <div className="right"></div>
//         </div>
//         <h3>Day 9</h3>

//   </div>
//     </div>
//   );
// }


// "use client";
// import "./RoadMap.css";
// import { useState, useEffect } from "react";
// import { database, auth } from "../src/app/firebase/firebaseconfig";
// import { ref, get } from "firebase/database";
// import { onAuthStateChanged } from "firebase/auth";

// export default function Dashboard() {
//   const [progressData, setProgressData] = useState<{ [key: string]: number }>({});
//   const [userId, setUserId] = useState<string | null>(null); // Store user ID separately
//   const days = Array.from({ length: 8 }, (_, i) => `day${i + 1}`);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUserId(user.uid); // Set userId when authentication is ready
//       }
//     });

//     return () => unsubscribe(); // Cleanup listener
//   }, []);

//   useEffect(() => {
//     if (!userId) return; // Wait until userId is set

//     const fetchProgress = async () => {
//       const userProgressRef = ref(database, `userProgress/${userId}`);

//       try {
//         const snapshot = await get(userProgressRef);

//         if (snapshot.exists()) {
//           const data = snapshot.val();
//           const updatedProgress: { [key: string]: number } = {};

//           days.forEach((day) => {
//             if (data[day]) {
//               const moduleKeys = Object.keys(data[day]); // Get all modules
//               let totalCompleted = 0;
//               let totalTopics = 0;

//               moduleKeys.forEach((module) => {
//                 const topics = Object.values(data[day][module] || {});
//                 totalCompleted += topics.filter((t) => t === true).length;
//                 totalTopics = 9;
//               });

//               updatedProgress[day] = totalTopics > 0 ? Math.round((totalCompleted / totalTopics) * 100) : 0;
//             } else {
//               updatedProgress[day] = 0;
//             }
//           });

//           setProgressData(updatedProgress);
//         }
//       } catch (error) {
//         console.error("Error fetching progress:", error);
//       }
//     };

//     fetchProgress();
//   }, [userId]);

//   return (
//     <div className="progress-container">
//       {days.map((day, index) => {
//         const progress = progressData[day] || 0;

//         return (
//           <div className="Xyz" key={index}>
//             <div
//               className="progressbar"
//               style={{
//                 background: `conic-gradient(green ${progress * 3.6}deg, #212121 ${progress * 3.6}deg)`,
//               }}
//             >
//               <span className="title">{progress}%</span>
//             </div>
//             <h3>{`Day ${index + 1}`}</h3>
//           </div>
//         );
//       })}
//     </div>
//   );
// }




// "use client";
// import "./RoadMap.css";
// import { useState, useEffect } from "react";
// import { database, auth } from "../src/app/firebase/firebaseconfig";
// import { ref, get } from "firebase/database";

// export default function Dashboard() {
//   const [progressData, setProgressData] = useState<{ [key: string]: number }>({});
//   const [unlockedDays, setUnlockedDays] = useState<{ [key: string]: boolean }>({});
//   const userId = auth.currentUser?.uid;
//   const days = Array.from({ length: 8 }, (_, i) => `day${i + 1}`);

//   useEffect(() => {
//     if (!userId) return;

//     const userProgressRef = ref(database, `userProgress/${userId}`);

//     get(userProgressRef).then((snapshot) => {
//       if (snapshot.exists()) {
//         const data = snapshot.val();
//         const updatedProgress: { [key: string]: number } = {};
//         const unlocked: { [key: string]: boolean } = { day1: true }; // Unlock first day by default

//         days.forEach((day, index) => {
//           if (data[day]) {
//             const moduleKey = Object.keys(data[day])[0]; // Get module dynamically
//             const topicsCompleted = Object.keys(data[day][moduleKey] || {}).filter(
//               (topic) => data[day][moduleKey][topic] === true
//             ).length;
//             const totalTopics = 9;

//             updatedProgress[day] = Math.round((topicsCompleted / totalTopics) * 100);

//             // Unlock the next day if all topics in the current day are completed
//             if (topicsCompleted === totalTopics && index < days.length - 1) {
//               unlocked[days[index + 1]] = true;
//             }
//           } else {
//             updatedProgress[day] = 0;
//           }
//         });

//         setProgressData(updatedProgress);
//         setUnlockedDays(unlocked);
//       }
//     });
//   }, [userId]);

//   return (
//     <div className="progress-container">
//       {days.map((day, index) => {
//         const progress = progressData[day] || 0;
//         const isUnlocked = unlockedDays[day] || false;

//         return (
//           <div
//             className={`Xyz ${isUnlocked ? "" : "locked"}`}
//             key={index}
//             title={isUnlocked ? "" : "Complete previous day's topics to unlock"}
//           >
//             <div
//               className="progressbar"
//               style={{
//                 background: `conic-gradient(${isUnlocked ? "green" : "gray"} ${progress * 3.6}deg, #212121 ${progress * 3.6}deg)`,
//                 opacity: isUnlocked ? 1 : 0.5, // Dim locked days
//               }}
//             >
//               <span className="title">{progress}%</span>
//             </div>
//             <h3>{`Day ${index + 1}`}</h3>
//           </div>
//         );
//       })}
//     </div>
//   );
// }


"use client";
import "./RoadMap.css";
import { useState, useEffect } from "react";
import { database, auth } from "../src/app/firebase/firebaseconfig";
import { ref, get } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";

export default function Dashboard() {
  const [progressData, setProgressData] = useState<{ [key: string]: number }>({});
  const [unlockedDays, setUnlockedDays] = useState<{ [key: string]: boolean }>({});
  const [userId, setUserId] = useState<string | null>(null);
  const days = Array.from({ length: 8 }, (_, i) => `day${i + 1}`);

  const topicsPerDay: { [key: string]: number } = {
    day1: 9,
    day2: 9,
    day3: 3,
    day4: 7,
    day5: 10,
    day6: 2,
    day7: 0,
    day8: 6,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!userId) return;

    const fetchProgress = async () => {
      const userProgressRef = ref(database, `userProgress/${userId}`);

      try {
        const snapshot = await get(userProgressRef);

        if (snapshot.exists()) {
          const data = snapshot.val();
          console.log(userId);
          const updatedProgress: { [key: string]: number } = {};
          const unlocked: { [key: string]: boolean } = { day1: true };

          days.forEach((day, index) => {
            if (data[day]) {
              const moduleKeys = Object.keys(data[day]); // Get all modules
              let totalCompleted = 0;
              let totalTopics = 0;

              moduleKeys.forEach((module) => {
                const topics = Object.values(data[day][module] || {});
                totalCompleted += topics.filter((t) => t === true).length;
                totalTopics = topicsPerDay[day];
              });

              updatedProgress[day] = totalTopics > 0 ? Math.round((totalCompleted / totalTopics) * 100) : 0;

              // Unlock the next day if all topics in the current day are completed
              if (totalCompleted === totalTopics && index < days.length - 1) {
                unlocked[days[index + 1]] = true;
              }
            } else {
              updatedProgress[day] = 0;
            }
          });

          setProgressData(updatedProgress);
          setUnlockedDays(unlocked);
        }
      } catch (error) {
        console.error("Error fetching progress:", error);
      }
    };

    fetchProgress();
  }, [userId]);

  return (
<div className="Progress-Section">

  <div className="ProgressbarContent">
    <h1>
    Welcome to Softage Information Technology Limited Data Team!
    </h1>
    <br/>
    <p>Greetings and welcome to the AI-Operations team at SoftAge Information Technology Limited! We are thrilled to have you join us. As a valuable member of our AI-Operations team, your primary focus will be creating data to train AI models.</p><br/>
    <p>This guideline is designed to fine-tune your data-creation skills to align with our objectives and aspirations. Upon completion, you will be paired with a mentor who will further guide your journey with us. To begin with, let’s try and understand the basics of our data creation operations.</p><br/>
    <p>Start with Day 1, and progress further after completion of each section. We wish you good luck! We are excited to have you create data for us!</p>
  </div>
  <div className="ProgressGraph">
  <div className="progress-container">
       {days.map((day, index) => {
        const progress = progressData[day] || 0;
        const isUnlocked = unlockedDays[day] || false;

        return (
          <div
            className={`Xyz ${isUnlocked ? "" : "locked"}`}
            key={index}
            title={isUnlocked ? "" : "Complete previous day's topics to unlock"}
          >
            <div
              className="progressbar"
              style={{
                background: `conic-gradient(${isUnlocked ? "green" : "gray"} ${progress * 3.6}deg, #212121 ${progress * 3.6}deg)`,
                opacity: isUnlocked ? 1 : 0.5, // Dim locked days
                filter: isUnlocked ? "none" : "blur(3px)",

              }}
            >
              <span className="title">{progress}%</span>
            </div>
            {!isUnlocked && <div className="lock-icon">🔒</div>}

            <h3>{`Day ${index + 1}`}</h3>
          </div>
        );
      })}
    </div>
    <div className="Graph-Container"><p>Graph</p></div>
  </div>
 
    </div>
  );
}
