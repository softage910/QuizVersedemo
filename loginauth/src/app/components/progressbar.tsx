"use client";
import React, { useEffect, useState } from "react";
import { ref, onValue, query, get } from "firebase/database";
import "./progressbar.css";
import { database } from "../firebase/firebaseconfig";

// type User = {
//   type: string;
//   uid: string;
// };

const ProgressBar = () => {
  const [progressData, setProgressData] = useState<Record<string, Record<string, boolean>> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const totalTasks = 15;
  const [currentDayTasks, setCurrentDayTasks] = useState<Record<string, boolean>>({});
  const [userDetails, setUserDetails] = useState<{ name: string; uid: string } | null>(null);
  const [userID, setUserID] = useState<string>("");


  useEffect(() => {
    const userData = localStorage.getItem("userDetails");
    const invitedUsers = sessionStorage.getItem("invitedUsers");

    if (userData) {
      setUserDetails(JSON.parse(userData));
    }

    if(invitedUsers){
      setUserID(invitedUsers);
    }
  }, []);

  // useEffect(() => {
  //   const fetchProgress = async () => {
  //     if (userDetails && userDetails.uid) {
  //       const usersRef = ref(database, 'users');
  //       const userQuery = query(usersRef, orderByChild('uid'), equalTo(userDetails.uid));

  //       try {
  //         const snapshot = await get(userQuery);
  //         if (snapshot.exists()) {
  //           const userData = snapshot.val();
  //           const autoGeneratedId = Object.keys(userData)[0];

  //           const progressRef = ref(database, `users/${autoGeneratedId}/progress`);

  //           onValue(progressRef, (snapshot) => {
  //             if (snapshot.exists()) {
  //               setProgressData(snapshot.val());
  //                       // Find the current day
  //                       for (const [tasks] of Object.entries(snapshot.val())) {
  //                         if (Object.values(tasks).includes(false)) {
  //                           setCurrentDayTasks(tasks);
  //                           break;
  //                         }
  //                       }
  //             } else {
  //               setProgressData({});
  //             }
  //             setTimeout(() => setIsLoading(false), 2000); // Smooth transition
  //           });
  //           } else {
  //           console.log("User not found in database.");
  //         }
  //       } catch (error) {
  //         console.error("Error fetching user data:", error);
  //       }
  //     }
  //   };


  //   fetchProgress();
  // }, [userDetails]);

  useEffect(() => {
    const UserEmail = sessionStorage.getItem("userEmail");

    const fetchProgress = async () => {
      if (userID) {
        const usersRef = ref(database, `invitedUsers`);
        const userQuery = query(usersRef);

        try {
          const snapshot = await get(userQuery);
          if (snapshot.exists()) {
            const userData = snapshot.val();
            const autoGeneratedId = Object.keys(userData).find(
              (key) => userData[key].email === UserEmail
          );
            const progressRef = ref(database, `invitedUsers/${autoGeneratedId}/progress`);

            onValue(progressRef, (snapshot) => {
              if (snapshot.exists()) {
                const progressData = snapshot.val();

                if (progressData) { // ✅ Ensure it's not null
                  setProgressData(progressData);

       
                  for (const [, tasks] of Object.entries(progressData)) {
                    if (
                      tasks &&
                      typeof tasks === "object" &&
                      !Array.isArray(tasks) &&
                      Object.values(tasks as Record<string, boolean>).includes(false)
                    ) {
                      setCurrentDayTasks(tasks as Record<string, boolean>);
                      break;
                    }
                  }

                }
              } else {
                setProgressData({});
              }

              setTimeout(() => setIsLoading(false), 2000);
            });
          } else {
            console.log("User not found in database.");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchProgress();
  }, [userDetails]);



  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p className="loading-text">Fetching Progress<span className="dots"></span></p>
      </div>
    );
  }

  // Calculate completed tasks
  const completedTasks = progressData
    ? Object.values(progressData).reduce(
      (count, day) => count + Object.values(day).filter((task) => task === true).length,
      0
    )
    : 0;

  const progressPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  let currentDay = "Day1"; // Default to Day1 if no data exists

  if (progressData) {
    const allDays = Object.keys(progressData);
    const lastDay = allDays[allDays.length - 1]; // Get the last available day

    let foundIncomplete = false;

    for (const [day, tasks] of Object.entries(progressData)) {
      if (Object.values(tasks).includes(false)) {
        currentDay = `${day}`;
        foundIncomplete = true;
        break;
      }
    }

    // If all tasks are completed, show the last topic
    if (!foundIncomplete) {
      currentDay = `${lastDay}`;
    }
  }

  return (
    <div className="container">
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped"
          role="progressbar"
          style={{
            width: `${progressPercentage}%`,
            backgroundColor: "#0281d4",
          }}
        >
          <div style={{ color: '#f8b400' }}>{progressPercentage.toFixed(2)}%</div>
          <div className="triangle"></div>
          <div className="progress-value">
            <span className="glowing-text">{currentDay}</span>
          </div>
        </div>
      </div>

      <div className="task-cards">
        {Object.entries(currentDayTasks)
          .sort(([taskA], [taskB]) => {
            if (taskA === "Module") return -1; // Keep "Module" first
            if (taskB === "Module") return 1;

            // Extract numeric parts from "Assessment" names for proper sorting
            const numA = parseInt(taskA.match(/\d+/)?.[0] || "0", 10);
            const numB = parseInt(taskB.match(/\d+/)?.[0] || "0", 10);

            return numA - numB; // Sort assessments numerically (1 → 2 → 3)
          })
          .map(([taskName, isCompleted], index) => (
            <div
              key={taskName}
              className={`task-card ${isCompleted ? "completed" : "pending"} fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3>{taskName}</h3>
              <p>{isCompleted ? "✅" : "❌"}</p>
            </div>
          ))}


      </div>
    </div>
  );
};

export default ProgressBar;
