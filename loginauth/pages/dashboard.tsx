"use client";
import { useEffect, useState } from "react";
import "../src/app/components/UserDashboard.css";
import router from "next/router";
import { signOut } from "firebase/auth";
import { auth } from "../src/app/firebase/firebaseconfig";
import Image from "next/image";
import Logo from "../public/Logo.png";
import ComingSoon from "./ComingSoon";



export default function Dashboard() {
    const [userDetails, setUserDetails] = useState<{ name: string; uid: string } | null>(null);
    // const router = useRouter();
    const [selectedSection, setSelectedSection] = useState<string | null>(null); // Track selected section


    useEffect(() => {
        const sessionExpireTime = localStorage.getItem("sessionExpireTime");
        const userData = localStorage.getItem("userDetails");
        const currentTime = new Date().getTime();

        if (!sessionExpireTime || currentTime > Number(sessionExpireTime)) {
            handleLogout(); // Logout if session expired
        } else {
            const remainingTime = Number(sessionExpireTime) - currentTime;
            setTimeout(handleLogout, remainingTime); // Auto logout after remaining time
        }

        if (userData) {
            setUserDetails(JSON.parse(userData)); // Set user details
        }
    }, []);

    // const handleLogout = async () => {
    //     await signOut(auth);
    //     localStorage.removeItem("sessionExpireTime");
    //     localStorage.removeItem("userDetails");
    //     router.push("/"); // Redirect to login page
    // };


    const handleLogout = async () => {
        try {
          await signOut(auth); // Firebase sign-out
          localStorage.removeItem("sessionExpireTime"); // Clear session time
          sessionStorage.clear(); // Clear all session data
          router.push("/"); // Redirect to login page
      
          // Ensure no back navigation to dashboard
          setTimeout(() => {
            window.location.reload();
          }, 100);
        } catch (error) {
          console.error("Logout error:", error);
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
                    {/* <li>
                        <a href="#"><span className="material-symbols-outlined"> dashboard </span>Dashboard</a>
                    </li> */}

<li className={selectedSection === "Dashboard" ? "active" : ""}>
                        <a href="#" onClick={() => setSelectedSection("Dashboard")}>
                            <span className="material-symbols-outlined"> dashboard </span>Dashboard
                        </a>
                    </li>

                    <h4>
                        <span>Training / Assessment</span>
                    </h4>
                    {/* {Array.from({ length: 7 }, (_, i) => (
                        <li key={i}>
                            <a href="#" onClick={() => setSelectedSection(`Day ${i + 1}`)}>
                                <span className="material-symbols-outlined">overview</span>Day {i + 1}
                            </a>
                        </li>
                    ))} */}

{Array.from({ length: 7 }, (_, i) => {
        const day = `Day ${i + 1}`;
        return (
            <li key={i} className={selectedSection === day ? "active" : ""}>
                <a href="#" onClick={() => setSelectedSection(day)}>
                    <span className="material-symbols-outlined"> overview </span>{day}
                </a>
            </li>
        );
    })}

                    {/* <li>
                        <a href="/ComingSoon"
                        ><span className="material-symbols-outlined"> overview </span>Day 1</a
                        >
                    </li>
                    <li>
                        <a href="#"
                        ><span className="material-symbols-outlined"> overview </span>Day 2</a
                        >
                    </li>
                    <li>
                        <a href="#"
                        ><span className="material-symbols-outlined"> overview </span>Day 3</a
                        >
                    </li>
                    <li>
                        <a href="#"
                        ><span className="material-symbols-outlined"> overview </span>Day 4</a
                        >
                    </li>
                    <li>
                        <a href="#"
                        ><span className="material-symbols-outlined"> overview </span>Day 5</a
                        >
                    </li>
                    <li>
                        <a href="#"
                        ><span className="material-symbols-outlined"> overview </span>Day 6</a
                        >
                    </li>
                    <li>
                        <a href="#"
                        ><span className="material-symbols-outlined"> overview </span>Day 7</a
                        >
                    </li> */}
                </ul>
                <div className="user-account">
                    <div className="user-profile">
                        <div className="user-detail">
                            <h3>{userDetails?.name}</h3>
                            <span>{userDetails?.uid}</span>
                        </div>
                        <div className="Logout-button">
                            <a href="#" onClick={handleLogout}><span className="material-symbols-outlined"> logout </span>Logout</a>
                        </div>
                    </div>
                </div>
            </aside>

            <div className="InnerDashboard">
                            {selectedSection ? <ComingSoon /> : <ComingSoon/>}
                        </div>
        </div>
    );
}