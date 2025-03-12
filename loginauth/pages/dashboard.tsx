// "use client";
// import { useEffect, useState } from "react";
// import "../src/app/components/UserDashboard.css";
// import router from "next/router";
// import { signOut } from "firebase/auth";
// import { auth } from "../src/app/firebase/firebaseconfig";
// import Image from "next/image";
// import Logo from "../public/Logo.png";
// import ComingSoon from "./ComingSoon";
// import Day1Module from "./Day1Module"; // Import your specific pages
// import RoadMap from "./RoadMap";
// import Day2Module from "./Day2Module";
// import Day3Module from "./Day3Module";
// import Day4Module from "./Day4Module";
// import Day8Module from "./Day8Module";
// import FirstAssessment from "./Assessment1";
// import Day5Module from "./Day5Module";

// export default function Dashboard() {
//     const [userDetails, setUserDetails] = useState<{ name: string; uid: string } | null>(null);
//     const [selectedModule, setSelectedModule] = useState<string | null>(null);
//     const [openDay, setOpenDay] = useState<number | null>(null); // Track open dropdown for each day


//     // Define available modules for each day
//     const dayModules: { [key: string]: string[] } = {
//         "Day 1": ["📖 Module"],
//         "Day 2": ["📖 Module", "📝 Assessment"],
//         "Day 3": ["📖 Module", "📝 Assessment"],
//         "Day 4": ["📖 Module", "📝 Assessment 1", "📝 Assessment 2", "📝 Assessment 3"],
//         "Day 5": ["📖 Module 1", "📖 Module 2", "📖 Module 3", "📝 Assessment"],
//         "Day 6": ["📖 Module"],
//         "Day 7": ["📝 Assessment 1"],
//         "Day 8": ["📖 Module"]
//     };

//     useEffect(() => {
//         const sessionExpireTime = localStorage.getItem("sessionExpireTime");
//         const userData = localStorage.getItem("userDetails");
//         const currentTime = new Date().getTime();

//         if (!sessionExpireTime || currentTime > Number(sessionExpireTime)) {
//             handleLogout();
//         } else {
//             const remainingTime = Number(sessionExpireTime) - currentTime;
//             setTimeout(handleLogout, remainingTime);
//         }

//         if (userData) {
//             setUserDetails(JSON.parse(userData));
//         }
//     }, []);



//     const handleLogout = async () => {
//         try {
//             await signOut(auth);
//             localStorage.removeItem("sessionExpireTime");
//             sessionStorage.clear();
//             router.push("/");
//             setTimeout(() => {
//                 window.location.reload();
//             }, 100);
//         } catch (error) {
//             console.error("Logout error:", error);
//         }
//     };

//     const toggleDay = (index: number) => {
//         setOpenDay(prev => (prev === index ? null : index));
//     };

//     // Map sections to their respective components
//     const renderContent = () => {
//         switch (selectedModule) {
//             case "Day 1 - 📖 Module":
//                 return <Day1Module />;
//             case "Day 2 - 📖 Module":
//                 return <Day2Module />;
//             case "Day 2 - 📝 Assessment":
//                 return <FirstAssessment />;
//             case "Day 3 - 📖 Module":
//                 return <Day3Module />;
//             case "Day 3 - 📝 Assessment":
//                 return <ComingSoon />;
//             case "Day 4 - 📖 Module":
//                 return <Day4Module />;
//             case "Day 4 - 📝 Assessment 1":
//                 return <ComingSoon />;
//             case "Day 4 - 📝 Assessment 2":
//                 return <ComingSoon />;
//             case "Day 4 - 📝 Assessment 3":
//                 return <ComingSoon />;
//             case "Day 5 - 📖 Module 1":
//                 return <Day5Module />;
//             case "Day 5 - 📖 Module 2":
//                 return <ComingSoon />;
//             case "Day 5 - 📖 Module 3":
//                 return <ComingSoon />;
//             case "Day 5 - 📝 Assessment":
//                 return <ComingSoon />;
//             case "Day 6 - 📖 Module":
//                 return <ComingSoon />;
//             case "Day 7 - 📝 Assessment 1":
//                 return <ComingSoon />;
//             case "Day 8 - 📖 Module":
//                 return <Day8Module />;

//             default:
//                 return <RoadMap />; // Show RoadMap if no module is selected
//         }
//     };

//     return (
//         <div className="Dashboard-Section">
//             <aside className="sidebar">
//                 <div className="sidebar-header">
//                     <Image src={Logo} alt="Logo" width={250} height={50} />
//                 </div>
//                 <ul className="sidebar-links">
//                     <h4>
//                         <span>Main Menu</span>
//                     </h4>
//                     <li className={selectedModule === "Dashboard" ? "active" : ""}>
//                         <a href="#" onClick={() => setSelectedModule("Dashboard")}>
//                             <span className="material-symbols-outlined"> dashboard </span>Dashboard
//                         </a>
//                     </li>

//                     {/* Training / Assessment Section */}
//                     <h4>
//                         <span>Training / Assessment</span>
//                     </h4>

//                     {/* Loop through each day and add a dropdown */}
//                     {Object.keys(dayModules).map((day, i) => {
//                         const isOpen = openDay === i; // Check if this day's dropdown is open

//                         return (
//                             <li

//                                 key={i}>
//                                 <a href="#" onClick={() => toggleDay(i)}>
//                                     <span className="material-symbols-outlined"> expand_more </span>{day}
//                                 </a>

//                                 {/* Show dropdown only if there are modules available for this day */}
//                                 {isOpen && dayModules[day].length > 0 && (
//                                     <ul className="dropdown-menu" >
//                                         {dayModules[day].map((module, index) => (
//                                             <li key={index} className={selectedModule === `${day} - ${module}` ? "active" : ""}>
//                                                 <a href="#" onClick={() => setSelectedModule(`${day} - ${module}`)}>
//                                                     {module}
//                                                 </a>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 )}
//                             </li>
//                         );
//                     })}

//                 </ul>
//             </aside>
//             <div className="Inner-Section">
//                 <div className="Dashboard-Navbar">
//                     <div className="user-account">
//                         <div className="user-profile">
//                             <div className="user-detail">
//                                 <h3>{userDetails?.name}</h3>
//                                 <span>{userDetails?.uid}</span>
//                             </div>

//                             <div className="Logout-button">
//                                 <a href="#" onClick={handleLogout}>
//                                     <span className="material-symbols-outlined"> logout </span>Logout
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="InnerDashboard">
//                     {renderContent()}
//                 </div>
//             </div>

//         </div>
//     );
// }




"use client";
import { useEffect, useState } from "react";
import "../src/app/components/UserDashboard.css";
import router from "next/router";
import { signOut } from "firebase/auth";
import { auth } from "../src/app/firebase/firebaseconfig";
import Image from "next/image";
import Logo from "../public/Logo.png";
import ComingSoon from "./ComingSoon";
import Day1Module from "./Day1Module";
import RoadMap from "./RoadMap";
import Day2Module from "./Day2Module";
import Day3Module from "./Day3Module";
import Day4Module from "./Day4Module";
import Day8Module from "./Day8Module";
import FirstAssessment from "./Assessment1";
import Day5Module1 from "./Day5Module1";
import { doc, getDoc } from "firebase/firestore";
import { database } from "../src/app/firebase/firebaseconfig"; 
import { equalTo, get, onValue, orderByChild, query, ref } from "firebase/database";
import Day5Module2 from "./Day5Module2";
import { onAuthStateChanged } from "firebase/auth";
import Day6Module from "./Day6Module";


type ModuleInfo = {
  day: string;
  module: string;
  component: React.ComponentType;
};

export default function Dashboard() {
  const [userDetails, setUserDetails] = useState<{ name: string; uid: string } | null>(null);
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [openDay, setOpenDay] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);


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
    "Day 1 - 📖 Module": { day: "Day 1", module: "📖 Module", component: Day1Module },
    "Day 2 - 📖 Module": { day: "Day 2", module: "📖 Module", component: Day2Module },
    "Day 2 - 📝 Assessment": { day: "Day 2", module: "📝 Assessment", component: FirstAssessment },
    "Day 3 - 📖 Module": { day: "Day 3", module: "📖 Module", component: Day3Module },
    "Day 3 - 📝 Assessment": { day: "Day 3", module: "📝 Assessment", component: ComingSoon },
    "Day 4 - 📖 Module": { day: "Day 4", module: "📖 Module", component: Day4Module },
    "Day 4 - 📝 Assessment 1": { day: "Day 4", module: "📝 Assessment 1", component: ComingSoon },
    "Day 4 - 📝 Assessment 2": { day: "Day 4", module: "📝 Assessment 2", component: ComingSoon },
    "Day 4 - 📝 Assessment 3": { day: "Day 4", module: "📝 Assessment 3", component: ComingSoon },
    "Day 5 - 📖 Module 1": { day: "Day 5", module: "📖 Module 1", component: Day5Module1 },
    "Day 5 - 📖 Module 2": { day: "Day 5", module: "📖 Module 2", component: Day5Module2 },
    "Day 5 - 📝 Assessment": { day: "Day 5", module: "📝 Assessment", component: ComingSoon },
    "Day 6 - 📖 Module": { day: "Day 6", module: "📖 Module", component: Day6Module },
    "Day 7 - 📝 Assessment 1": { day: "Day 7", module: "📝 Assessment 1", component: ComingSoon },
    "Day 8 - 📖 Module": { day: "Day 8", module: "📖 Module", component: Day8Module },
  };

  const [unlockedDays, setUnlockedDays] = useState(["Day 1"]); // Day 1 is always unlocked



  useEffect(() => {
    const fetchProgress = async () => {
      if (userDetails && userDetails.uid) {
        const usersRef = ref(database, 'users');
        const userQuery = query(usersRef, orderByChild('uid'), equalTo(userDetails.uid));
  
        try {
          const snapshot = await get(userQuery);
          if (snapshot.exists()) {
            const userData = snapshot.val();
            const autoGeneratedId = Object.keys(userData)[0];
  
            const userProgressRef = ref(database, `users/${autoGeneratedId}/progress`);
  
            const unsubscribe = onValue(userProgressRef, (snapshot) => {
              const userData = snapshot.val();
              if (userData) {
                checkUnlockedDays(userData);
                console.log(userDetails.uid);
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



    // const checkUnlockedDays = (userData: any) => {

    //     let unlockedDays = ["Day 1"]; // Day 1 is always unlocked


    //     if (userData.day1 && userData.day1.module1) {

    //         const day1Module = userData.day1.module1;

    //         const day1Completed = Object.values(day1Module).every(topic => topic === true);


    //         if (day1Completed) {

    //             unlockedDays.push("Day 2");


    //             if (userData.day2 && userData.day2.module2) { // Assuming module1 for all days

    //                 const day2Module = userData.day2.module2;

    //                 const day2Completed = Object.values(day2Module).every(topic => topic === true);


    //                 if (day2Completed) {

    //                     unlockedDays.push("Day 3");

    //                     // ... continue for other days

    //                 }

    //             }

    //         }

    //     }


    //     // Update state with unlocked days

    //     setUnlockedDays(unlockedDays);

    // };


    const checkUnlockedDays = (userData: any) => {
        let unlockedDays = ["Day 1"]; // Day 1 is always unlocked
      
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
      
                if (userData.Day3 && userData.Day3.Module) {
                  const day3Module = userData.Day3.Module;
                //   const day3Assessment = userData.Day3.Assessment;
                  const day3Completed1 = Object.values(day3Module).every(topic => topic === true);
                //   const day3Completed2 = Object.values(day3Assessment).every(topic => topic === true);

      
                  if (day3Completed1) {
                    unlockedDays.push("Day 4");
      
                    if (userData.Day4 && userData.Day4.Module) {
                      const day4Module = userData.Day4.Module;
                      const day4Completed = Object.values(day4Module).every(topic => topic === true);
      
                      if (day4Completed) {
                        unlockedDays.push("Day 5");
      
                        if (userData.Day5 && userData.Day5.Module1 && userData.Day5.Module2) {
                          const day5Module1 = userData.Day5.Module1;
                          const day5Module2 = userData.Day5.Module2;

                          const day5Completed1 = Object.values(day5Module1).every(topic => topic === true);
                          const day5Completed2 = Object.values(day5Module2).every(topic => topic === true);

      
                          if (day5Completed1 && day5Completed2) {
                            unlockedDays.push("Day 6");
      
                            if (userData.Day6 && userData.Day6.Module) {
                              const day6Module = userData.Day6.Module;
                              const day6Completed = Object.values(day6Module).every(topic => topic === true);
      
                              if (day6Completed) {
                                unlockedDays.push("Day 7");
                                unlockedDays.push("Day 8");
      
                                // if (userData.day7 && userData.day7.module) {
                                //   const day7Module = userData.day7.module;
                                //   const day7Completed = Object.values(day7Module).every(topic => topic === true);
      
                                //   if (day7Completed) {
                                //     unlockedDays.push("Day 8");
                                //   }
                                // }
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



  useEffect(() => {
    const sessionExpireTime = localStorage.getItem("sessionExpireTime");
    const userData = localStorage.getItem("userDetails");
    const currentTime = new Date().getTime();
    const AutoUser = localStorage.getItem("AutoUser");

    if (!sessionExpireTime || currentTime > Number(sessionExpireTime)) {
      handleLogout();
    } else {
      const remainingTime = Number(sessionExpireTime) - currentTime;
      setTimeout(handleLogout, remainingTime);
    }

    if (userData) {
      setUserDetails(JSON.parse(userData));
    }
    setLoading(false);

  }, []);

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
    setSelectedModule(key);
  };

  const renderContent = () => {
    if (loading) {
      return <div>Loading...</div>;
    }

    if (selectedModule && moduleMap[selectedModule]) {
      const SelectedComponent = moduleMap[selectedModule].component;
      return <SelectedComponent />;
    }
    return <RoadMap />;
  };

  return (
    <div className="Dashboard-Section">
      <aside className="sidebar">
        <div className="sidebar-header">
          <Image src={Logo} alt="Logo" width={250} height={50} />
        </div>
        <ul className="sidebar-links">
          <h4>
            <span>Main Menu</span>
          </h4>
          <li className={selectedModule === "Dashboard" ? "active" : ""}>
            <a href="#" onClick={() => setSelectedModule("Dashboard")}>
              <span className="material-symbols-outlined"> dashboard </span>Dashboard
            </a>
          </li>
          <h4>
            <span>Training / Assessment</span>
          </h4>
          {/* {Object.keys(dayModules).map((day, i) => {
            const isOpen = openDay === i;
            return (
              <li key={i}>
                <a href="#" onClick={() => toggleDay(i)}>
                  <span className="material-symbols-outlined"> expand_more </span>
                  {day}
                </a>
                {isOpen && dayModules[day].length > 0 && (
                  <ul className="dropdown-menu">
                    {dayModules[day].map((module, index) => (
                      <li key={index} className={selectedModule === `${day} - ${module}` ? "active" : ""}>
                        <a href="#" onClick={() => setSelectedModuleHandler(`${day} - ${module}`)}>
                          {module}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })} */}







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
    </div>
  );
}