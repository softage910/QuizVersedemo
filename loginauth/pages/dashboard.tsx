// "use client";
// import { useEffect, useState } from "react";
// import "../src/app/components/UserDashboard.css";
// import router from "next/router";
// import { signOut } from "firebase/auth";
// import { auth } from "../src/app/firebase/firebaseconfig";
// import Image from "next/image";
// import Logo from "../public/Logo.png";
// import ComingSoon from "./ComingSoon";



// export default function Dashboard() {
//     const [userDetails, setUserDetails] = useState<{ name: string; uid: string } | null>(null);
//     // const router = useRouter();
//     const [selectedSection, setSelectedSection] = useState<string | null>(null); // Track selected section


//     useEffect(() => {
//         const sessionExpireTime = localStorage.getItem("sessionExpireTime");
//         const userData = localStorage.getItem("userDetails");
//         const currentTime = new Date().getTime();

//         if (!sessionExpireTime || currentTime > Number(sessionExpireTime)) {
//             handleLogout(); // Logout if session expired
//         } else {
//             const remainingTime = Number(sessionExpireTime) - currentTime;
//             setTimeout(handleLogout, remainingTime); // Auto logout after remaining time
//         }

//         if (userData) {
//             setUserDetails(JSON.parse(userData)); // Set user details
//         }
//     }, []);




//     const handleLogout = async () => {
//         try {
//             await signOut(auth); // Firebase sign-out
//             localStorage.removeItem("sessionExpireTime"); // Clear session time
//             sessionStorage.clear(); // Clear all session data
//             router.push("/"); // Redirect to login page

//             // Ensure no back navigation to dashboard
//             setTimeout(() => {
//                 window.location.reload();
//             }, 100);
//         } catch (error) {
//             console.error("Logout error:", error);
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

//                     <li className={selectedSection === "Dashboard" ? "active" : ""}>
//                         <a href="#" onClick={() => setSelectedSection("Dashboard")}>
//                             <span className="material-symbols-outlined"> dashboard </span>Dashboard
//                         </a>
//                     </li>

//                     <h4>
//                         <span>Training / Assessment</span>
//                     </h4>

//                     {Array.from({ length: 7 }, (_, i) => {
//                         const day = `Day ${i + 1}`;
//                         return (
//                             <li key={i} className={selectedSection === day ? "active" : ""}>
//                                 <a href="#" onClick={() => setSelectedSection(day)}>
//                                     <span className="material-symbols-outlined"> overview </span>{day}
//                                 </a>
//                             </li>
//                         );
//                     })}
//                 </ul>
//                 <div className="user-account">
//                     <div className="user-profile">
//                         <div className="user-detail">
//                             <h3>{userDetails?.name}</h3>
//                             <span>{userDetails?.uid}</span>
//                         </div>
//                         <div className="Logout-button">
//                             <a href="#" onClick={handleLogout}><span className="material-symbols-outlined"> logout </span>Logout</a>
//                         </div>
//                     </div>
//                 </div>
//             </aside>

//             <div className="InnerDashboard">
//                 {selectedSection ? <ComingSoon /> : <ComingSoon />}
//             </div>
//         </div>
//     );
// }








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
// // import Day2 from "./pages/Day2";
// // import Day3 from "./pages/Day3";
// // Add more imports as needed

// export default function Dashboard() {
//     const [userDetails, setUserDetails] = useState<{ name: string; uid: string } | null>(null);
//     const [selectedSection, setSelectedSection] = useState<string | null>(null);
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

//     // Map sections to their respective components
//     const renderContent = () => {
//         switch (selectedSection) {
//             case "Day 1":
//                 return <Day1Module />;
//             case "Day 2":
//                 return <></>;
//             case "Day 3":
//                 return <></>;
//             // Add cases for other days
//             default:
//                 return <ComingSoon />;
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
//                     <li className={selectedSection === "Dashboard" ? "active" : ""}>
//                         <a href="#" onClick={() => setSelectedSection("Dashboard")}>
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
//                             <li key={i} >
//                                 <a href="#" onClick={() => setOpenDay(isOpen ? null : i)}>
//                                     <span className="material-symbols-outlined"> expand_more </span>{day}
//                                 </a>

//                                 {/* Show dropdown only if there are modules available for this day */}
//                                 {isOpen && dayModules[day].length > 0 && (
//                                     <ul className="dropdown-menu">
//                                         {dayModules[day].map((module, index) => (
//                                             <li key={index} className={selectedSection === day ? "active" : ""}>
//                                                 <a href="#" onClick={() => setSelectedSection(day)}>
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

//                 <div className="user-account">
//                     <div className="user-profile">
//                         <div className="user-detail">
//                             <h3>{userDetails?.name}</h3>
//                             <span>{userDetails?.uid}</span>
//                         </div>
//                         <div className="Logout-button">
//                             <a href="#" onClick={handleLogout}>
//                                 <span className="material-symbols-outlined"> logout </span>Logout
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </aside>

//             <div className="InnerDashboard">
//                 {renderContent()}
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
import Day1Module from "./Day1Module"; // Import your specific pages
import RoadMap from "./RoadMap";
import Day2Module from "./Day2Module";
import FirstAssessment from "./Assessment1";

export default function Dashboard() {
    const [userDetails, setUserDetails] = useState<{ name: string; uid: string } | null>(null);
    const [selectedModule, setSelectedModule] = useState<string | null>(null);
    const [openDay, setOpenDay] = useState<number | null>(null); // Track open dropdown for each day

    // Define available modules for each day
    const dayModules: { [key: string]: string[] } = {
        "Day 1": ["📖 Module"],
        "Day 2": ["📖 Module", "📝 Assessment"],
        "Day 3": ["📖 Module", "📝 Assessment"],
        "Day 4": ["📖 Module", "📝 Assessment 1", "📝 Assessment 2", "📝 Assessment 3"],
        "Day 5": ["📖 Module 1", "📖 Module 2", "📖 Module 3", "📝 Assessment"],
        "Day 6": ["📖 Module"],
        "Day 7": ["📝 Assessment 1"],
        "Day 8": ["📖 Module"]
    };

    useEffect(() => {
        const sessionExpireTime = localStorage.getItem("sessionExpireTime");
        const userData = localStorage.getItem("userDetails");
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
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            localStorage.removeItem("sessionExpireTime");
            sessionStorage.clear();
            router.push("/");
            setTimeout(() => {
                window.location.reload();
            }, 100);
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    // Map sections to their respective components
    const renderContent = () => {
        switch (selectedModule) {
            case "Day 1 - 📖 Module":
                return <Day1Module />;
            case "Day 2 - 📖 Module":
                return <Day2Module />;
            case "Day 2 - 📝 Assessment":
                return <FirstAssessment />;
            case "Day 3 - 📖 Module":
                return <ComingSoon />;
            case "Day 3 - 📝 Assessment":
                return <ComingSoon />;
            case "Day 4 - 📖 Module":
                return <ComingSoon />;
            case "Day 4 - 📝 Assessment 1":
                return <ComingSoon />;
            case "Day 4 - 📝 Assessment 2":
                return <ComingSoon />;
            case "Day 4 - 📝 Assessment 3":
                return <ComingSoon />;
            case "Day 5 - 📖 Module 1":
                return <ComingSoon />;
            case "Day 5 - 📖 Module 2":
                return <ComingSoon />;
            case "Day 5 - 📖 Module 3":
                return <ComingSoon />;
            case "Day 5 - 📝 Assessment":
                return <ComingSoon />;
            case "Day 6 - 📖 Module":
                return <ComingSoon />;
            case "Day 7 - 📝 Assessment 1":
                return <ComingSoon />;
            case "Day 8 - 📖 Module":
                return <ComingSoon />;

            default:
                return <RoadMap />; // Show RoadMap if no module is selected
        }
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

                    {/* Training / Assessment Section */}
                    <h4>
                        <span>Training / Assessment</span>
                    </h4>

                    {/* Loop through each day and add a dropdown */}
                    {Object.keys(dayModules).map((day, i) => {
                        const isOpen = openDay === i; // Check if this day's dropdown is open

                        return (
                            <li key={i}>
                                <a href="#" onClick={() => setOpenDay(isOpen ? null : i)}>
                                    <span className="material-symbols-outlined"> expand_more </span>{day}
                                </a>

                                {/* Show dropdown only if there are modules available for this day */}
                                {isOpen && dayModules[day].length > 0 && (
                                    <ul className="dropdown-menu">
                                        {dayModules[day].map((module, index) => (
                                            <li key={index} className={selectedModule === `${day} - ${module}` ? "active" : ""}>
                                                <a href="#" onClick={() => setSelectedModule(`${day} - ${module}`)}>
                                                    {module}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
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
                                <span>{userDetails?.uid}</span>
                            </div>
                            <div className="Logout-button">
                                <a href="#" onClick={handleLogout}>
                                    <span className="material-symbols-outlined"> logout </span>Logout
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="InnerDashboard">
                    {renderContent()}
                </div>
            </div>

        </div>
    );
}








