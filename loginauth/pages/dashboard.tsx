"use client";
import { useEffect, useState } from "react";
import "../src/app/components/UserDashboard.css";
import router from "next/router";
import { signOut } from "firebase/auth";
import { auth } from "../src/app/firebase/firebaseconfig";
import Image from "next/image";
import Logo from "../public/Logo.png";
import Day1Module from "./Day1Module";
import RoadMap from "./RoadMap";
import Day2Module from "./Day2Module";
import Day3Module from "./Day3Module";
import Day4Module from "./Day4Module";
import Day8Module from "./Day8Module";
import FirstAssessment from "./Assessment1";
import SecondAssessment from "./Assessment2";
import SeventhAssessment from "./Assessment7";
import SixthAssessment from "./Assessment6";
import ThirdAssessment from "./Assessment3";
import FourthAssessment from "./Assessment4";
import FifthAssessment from "./Assessment5";
import Day5Module1 from "./Day5Module1";
import { database } from "../src/app/firebase/firebaseconfig"; 
import { get, onValue, query, ref } from "firebase/database";
import Day5Module2 from "./Day5Module2";
import Day6Module from "./Day6Module";
import NotificationMessage from "@/app/components/NotificationMessage";
import AdminPage from "./Admin";


type ModuleInfo = {
  day: string;
  module: string;
  component: React.ComponentType;
  customname: string;
};

interface TopicCompletion {
  [key: string]: boolean;
}

interface DayData {
  Module?: TopicCompletion;
  Assessment?: TopicCompletion;
  "Assessment 1"?: TopicCompletion;
  "Assessment 2"?: TopicCompletion;
  "Assessment 3"?: TopicCompletion;
  "Module 1"?: TopicCompletion;
  "Module 2"?: TopicCompletion;
}

interface UserData {
  Day1?: DayData;
  Day2?: DayData;
  Day3?: DayData;
  Day4?: DayData;
  Day5?: DayData;
  Day6?: DayData;
  Day7?: DayData;
  Day8?: DayData;
}

// type User = {
//   type: string;
//   uid: string;
// };

// type DayData = {
//   Module?: Record<string, boolean>;
//   Assessment?: Record<string, boolean>;
//   [key: string]: Record<string, boolean> | undefined; // Allows "Assessment 1", "Assessment 2", etc.
// };

// type UserData = {
//   [day: string]: DayData; // Allows "Day1", "Day2", etc.
// };


export default function Dashboard() {
  const [userDetails, setUserDetails] = useState<{ name: string; uid: string;role: string } | null>(null);
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [openDay, setOpenDay] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [CompletionMessage, setCompletionMessage] = useState<string | null>(null);
  const [userID, setUserID] = useState<string>("");
  const [UserType, setUserType] = useState<string>("");
  const [userAuto, setuserAuto] = useState<string>("");


  const dayModules: { [key: string]: string[] } = {
    "Day 1": ["📖 Module"],
    "Day 2": ["📖 Module", "📝 Assessment"],
    "Day 3": ["📖 Module", "📝 Assessment"],
    "Day 4": ["📖 Module", "📝 Assessment 1", "📝 Assessment 2", "📝 Assessment 3"],
    "Day 5": ["📖 Module 1", "📖 Module 2", "📝 Assessment"],
    "Day 6": ["📖 Module"],
    "Day 7": ["📝 Assessment 1"],
    "Day 8": ["📖 Module"],
  };

  const moduleMap: { [key: string]: ModuleInfo } = {
    "Day 1 - 📖 Module": { day: "Day 1", module: "📖 Module", customname: "Module",component: Day1Module },
    "Day 2 - 📖 Module": { day: "Day 2", module: "📖 Module", customname: "Module", component: Day2Module },
    "Day 2 - 📝 Assessment": { day: "Day 2", module: "📝 Assessment", customname: "Assessment",component: FirstAssessment },
    "Day 3 - 📖 Module": { day: "Day 3", module: "📖 Module", customname: "Module",component: Day3Module },
    "Day 3 - 📝 Assessment": { day: "Day 3", module: "📝 Assessment", customname: "Assessment",component: SecondAssessment },
    "Day 4 - 📖 Module": { day: "Day 4", module: "📖 Module", customname: "Module",component: Day4Module },
    "Day 4 - 📝 Assessment 1": { day: "Day 4", module: "📝 Assessment 1", customname: "Assessment1",component: ThirdAssessment },
    "Day 4 - 📝 Assessment 2": { day: "Day 4", module: "📝 Assessment 2", customname: "Assessment2",component: FourthAssessment },
    "Day 4 - 📝 Assessment 3": { day: "Day 4", module: "📝 Assessment 3", customname: "Assessment3",component: FifthAssessment },
    "Day 5 - 📖 Module 1": { day: "Day 5", module: "📖 Module 1", customname: "Module1",component: Day5Module1 },
    "Day 5 - 📖 Module 2": { day: "Day 5", module: "📖 Module 2", customname: "Module2",component: Day5Module2 },
    "Day 5 - 📝 Assessment": { day: "Day 5", module: "📝 Assessment", customname: "Assessment",component: SixthAssessment },
    "Day 6 - 📖 Module": { day: "Day 6", module: "📖 Module", customname: "Module",component: Day6Module },
    "Day 7 - 📝 Assessment 1": { day: "Day 7", module: "📝 Assessment 1", customname: "Assessment",component: SeventhAssessment },
    "Day 8 - 📖 Module": { day: "Day 8", module: "📖 Module", customname: "Module",component: Day8Module },
    "Dashboard": { day: "", module: "Dashboard", customname: "Dashboard", component: RoadMap },
    "Admin": { day: "", module: "Admin", customname: "Admin", component: AdminPage },
  };

  const [unlockedDays, setUnlockedDays] = useState(["Day 1"]); // Day 1 is always unlocked

  useEffect(() => {
    const sessionExpireTime = localStorage.getItem("sessionExpireTime");
    const userData = localStorage.getItem("userDetails");
    const invitedUsers = sessionStorage.getItem("invitedUsers");
    const UserType = sessionStorage.getItem("userType");
    const userAutoID = sessionStorage.getItem("invitedUsers");
console.log(userAutoID);

    const currentTime = new Date().getTime();

    if (!sessionExpireTime || currentTime > Number(sessionExpireTime)) {
      handleLogout();
    } else {
      const remainingTime = Number(sessionExpireTime) - currentTime;
      setTimeout(handleLogout, remainingTime);
    }

    if (userData) {
      setUserDetails(JSON.parse(userData));
    }

    if(invitedUsers){
      setUserID(invitedUsers);
    }

    if(UserType){
      setUserType(UserType);
    }

    if(userAutoID){
      setuserAuto(userAutoID);
      console.log(userAuto);
    }
    setLoading(false);

    console.log(moduleMap[1]);

  }, []);

  useEffect(() => {
    const UserEmail = sessionStorage.getItem("userEmail");
    const fetchProgress = async () => {
      if (userID) {
        const usersRef = ref(database, 'invitedUsers');
        const userQuery = query(usersRef);
  
        try {
          const snapshot = await get(userQuery);
          if (snapshot.exists()) {
            const userData = snapshot.val();
            const autoGeneratedId = Object.keys(userData).find(
              (key) => userData[key].email === UserEmail
          );

            const userProgressRef = ref(database, `invitedUsers/${autoGeneratedId}/progress`);
  
            const unsubscribe = onValue(userProgressRef, (snapshot) => {
              const userData = snapshot.val();
              if (userData) {
                checkUnlockedDays(userData);
              } else {
                console.log("No user progress data found.");
              }
            });
  
            return () => unsubscribe();
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





    const checkUnlockedDays = (userData: UserData) => {
        const unlockedDays = ["Day 1"]; // Day 1 is always unlocked
      
        if (userData.Day1 && userData.Day1.Module) {
          const day1Module = userData.Day1.Module;
          const day1Completed = Object.values(day1Module).every(topic => topic === true);
      
          if (day1Completed) {
            unlockedDays.push("Day 2");

            if (userData.Day2 && userData.Day2.Module && userData.Day2.Assessment) {
              const day2Module = userData.Day2.Module;
              const day2Assessment = userData.Day2.Assessment;
              const day2Completed1 = Object.values(day2Module).every(topic => topic === true);
              const day2Completed2 = Object.values(day2Assessment).every(topic => topic === true);

      
              if (day2Completed1 && day2Completed2) {
                unlockedDays.push("Day 3");


      
                if (userData.Day3 && userData.Day3.Module && userData.Day3.Assessment) {
                  const day3Module = userData.Day3.Module;
                  const day3Assessment = userData.Day3.Assessment;
                  const day3Completed1 = Object.values(day3Module).every(topic => topic === true);
                  const day3Completed2 = Object.values(day3Assessment).every(topic => topic === true);

      
                  if (day3Completed1 && day3Completed2) {
                    unlockedDays.push("Day 4");




                    if (userData.Day4 && userData.Day4.Module && userData.Day4["Assessment 1"] && userData.Day4["Assessment 2"] && userData.Day4["Assessment 3"] ) {
                      const day4Module = userData.Day4.Module;
                      const day4Completed1 = Object.values(day4Module).every(topic => topic === true);
                      const day4Ass1 = userData.Day4["Assessment 1"];
                  const day4Completed2 = Object.values(day4Ass1).every(topic => topic === true);
                  const day4Ass2 = userData.Day4["Assessment 2"];
                  const day4Completed3 = Object.values(day4Ass2).every(topic => topic === true);
                  const day4Ass3 = userData.Day4["Assessment 3"];
                  const day4Completed4 = Object.values(day4Ass3).every(topic => topic === true);
                
      
                      if (day4Completed1 && day4Completed2 && day4Completed3 && day4Completed4 ) {
                        unlockedDays.push("Day 5");

      
                        if (userData.Day5 && userData.Day5["Module 1"] && userData.Day5["Module 2"] && userData.Day5.Assessment) {
                          const day5Module1 = userData.Day5["Module 1"];
                          const day5Module2 = userData.Day5["Module 2"];
                          const day5Ass = userData.Day5.Assessment;
                          const day5Completed1 = Object.values(day5Module1).every(topic => topic === true);
                          const day5Completed2 = Object.values(day5Module2).every(topic => topic === true);
                          const day5Completed3 = Object.values(day5Ass).every(topic => topic === true);

      
                          if (day5Completed1 && day5Completed2 && day5Completed3) {

                            unlockedDays.push("Day 6");


      
                            if (userData.Day6 && userData.Day6.Module) {
                              const day6Module = userData.Day6.Module;
                              const day6Completed = Object.values(day6Module).every(topic => topic === true);
      
                              if (day6Completed) {
                                unlockedDays.push("Day 7");


                                if(userData.Day7 && userData.Day7["Assessment 1"]){
                                  const day7Ass = userData.Day7["Assessment 1"];
                                  const day7completed = Object.values(day7Ass).every(topic => topic === true);

                                  if(day7completed){

                                    unlockedDays.push("Day 8");

                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      
        setUnlockedDays(unlockedDays);
      };


  //   const checkUnlockedDays = (userData: UserData) => {
  //     const unlockedDays = ["Day 1"]; // Day 1 is always unlocked
  //     let newDayUnlocked = null;
  //     const totalDays = 8; // Update this if more days are added
  
  //     for (let day = 1; day < totalDays; day++) {
  //         const currentDayKey = `Day${day}`;
  //         const nextDayKey = `Day${day + 1}`;
  
  //         if (!userData[currentDayKey]) break; // If current day data doesn't exist, stop checking further
  
  //         const currentModules = Object.values(userData[currentDayKey]?.Module || {});
  //         const currentAssessments = Object.values(userData[currentDayKey]?.Assessment || {});
  //         const additionalAssessments = Object.keys(userData[currentDayKey])
  //             .filter(key => key.startsWith("Assessment") && key !== "Assessment")
  //             .map(key => Object.values(userData[currentDayKey][key] || {}))
  //             .flat();
  
  //         // Check if all modules and assessments are completed for the current day
  //         const isDayCompleted = [...currentModules, ...currentAssessments, ...additionalAssessments].every(topic => topic === true);
  
  //         if (isDayCompleted) {
  //             unlockedDays.push(nextDayKey);
  //             newDayUnlocked = "Next Day Unlock!";
  //         } else {
  //             break; // Stop checking if any day is incomplete
  //         }
  //     }
  
  //     setUnlockedDays(unlockedDays);
  
  //     if (newDayUnlocked) {
  //         setCompletionMessage(newDayUnlocked);
  //     }
  // };
  


  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("sessionExpireTime");
      localStorage.removeItem("userDetails");
      sessionStorage.clear();
      router.push("/");
      setTimeout(() => {
        window.location.reload();
      }, 100);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const toggleDay = (index: number) => {
    setOpenDay(prev => (prev === index ? null : index));
  };

  const setSelectedModuleHandler = (key: string) => {
    if (moduleMap[key]) {
      setSelectedModule(key);
      localStorage.setItem("selectedModule", key);
      router.push(`/dashboard?${encodeURIComponent(moduleMap[key].customname)}-${encodeURIComponent(moduleMap[key].day.replace(/\s+/g, ""))}`);
      console.log(isOpen);
      setIsOpen(false);
    }
  };

  const renderContent = () => {
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (selectedModule === "Admin" && UserType !== "ADMIN") {
      return <div>Access Denied</div>;
    }
  
    if (selectedModule && moduleMap[selectedModule]) {
      const SelectedComponent = moduleMap[selectedModule].component;
      return <SelectedComponent />;
    }
  
    return <RoadMap />;
  };
  
  

  return (
    <div className="Dashboard-Section" onContextMenu={(e) => e.preventDefault()}>
      <aside className="sidebar">
        <div className="sidebar-header">
          <Image src={Logo} alt="Logo" width={250} height={50} />
        </div>
        <ul className="sidebar-links">
          <h4>
            <span>Main Menu</span>
          </h4>

          <li className={selectedModule === "Dashboard" ? "active" : ""}>
  <a href="#" onClick={() => setSelectedModuleHandler("Dashboard")}>
    <span className="material-symbols-outlined">dashboard</span> Dashboard
  </a>
</li>

{UserType === "ADMIN" && (
  <li className={selectedModule === "Admin" ? "active" : ""}>
    <a href="#" onClick={() => setSelectedModuleHandler("Admin")}>
      <span className="material-symbols-outlined">supervisor_account</span> Admin
    </a>
  </li>
)}


          <h4>
            <span>Training / Assessment</span>
          </h4>

{Object.keys(dayModules).map((day, i) => {
  const isOpen = openDay === i;
  const isUnlocked = unlockedDays.includes(day); // Check if day is unlocked

  return (
    <li key={i} className={isUnlocked ? "" : "locked-day"}> {/* Add class for styling locked days */}
      <a href="#" onClick={() => isUnlocked && toggleDay(i)}> 
        <span className="material-symbols-outlined"> 
          {isUnlocked ? "expand_more" : "lock"} 
        </span> 
        {day} 
      </a>
      {isUnlocked && isOpen && dayModules[day].length > 0 && (
        <ul className="dropdown-menu">
                    {dayModules[day].map((module, index) => (
                      <li key={index} className={selectedModule === `${day} - ${module}` ? "active" : ""}>
                        <a href="#" onClick={() => setSelectedModuleHandler(`${day} - ${module}`)}>
                          {module}
                        </a>
                      </li>
                    ))}
                  </ul>      )}
    </li>
  );
})}
        </ul>
      </aside>
      <div className="Inner-Section">
        <div className="Dashboard-Navbar">
          <div className="user-account">
            <div className="user-profile">
              <div className="user-detail">
                             <h3>{userDetails?.name}</h3>
                <span>{userDetails?.uid}</span></div>
            
              <div className="Logout-button">
                <a href="#" onClick={handleLogout}>
                  <span className="material-symbols-outlined"> logout </span>Logout
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="InnerDashboard">{renderContent()}</div>
      </div>
            {CompletionMessage && <NotificationMessage message={CompletionMessage} onClose={() => setCompletionMessage("")} color="success"/>}

    </div>
  );
}