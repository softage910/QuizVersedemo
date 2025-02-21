"use client";
import { useEffect, useState } from "react";
import "./UserDashboard.css";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import { auth } from "../../app/firebase/firebaseconfig";
import Image from "next/image";
import Logo from "../../../public/Logo.png";




const Dashboard = () => {



    const [userDetails, setUserDetails] = useState<{ name: string; uid: string } | null>(null);



    const router = useRouter();

//   useEffect(() => {
//     const sessionExpireTime = localStorage.getItem("sessionExpireTime");
//     const currentTime = new Date().getTime();

//     if (!sessionExpireTime || currentTime > Number(sessionExpireTime)) {
//       handleLogout(); // Logout if session expired
//     } else {
//       const remainingTime = Number(sessionExpireTime) - currentTime;
//       setTimeout(handleLogout, remainingTime); // Auto logout after remaining time
//     }
//   }, []);

//   const handleLogout = async () => {
//     await signOut(auth);
//     localStorage.removeItem("sessionExpireTime");
//     router.push("/"); // Redirect to login page
//   };



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

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("sessionExpireTime");
    localStorage.removeItem("userDetails");
    router.push("/"); // Redirect to login page
  };


    return (
        // <div classNameName="DashboardComponents">
        //   {/* Sidebar */}
        //   <div classNameName={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ""}`}>
        //     {/* Sidebar Header */}
        //     <div classNameName={styles.sidebarHeader}>
        //       <h1 classNameName="text-xl font-bold">Dashboard</h1>
        //       <button onClick={() => setIsOpen(false)} classNameName="md:hidden">
        //         <FiX size={24} />
        //       </button>
        //     </div>

        //     {/* Navigation Links */}
        //     <nav classNameName="space-y-4">
        //       <Link href="/dashboard/home" classNameName={styles.navLink}>
        //         <FiHome classNameName="mr-3" /> Home
        //       </Link>
        //       <Link href="/dashboard/profile" classNameName={styles.navLink}>
        //         <FiUser classNameName="mr-3" /> Profile
        //       </Link>
        //       <Link href="/dashboard/settings" classNameName={styles.navLink}>
        //         <FiSettings classNameName="mr-3" /> Settings
        //       </Link>
        //       <button classNameName={styles.logoutButton}>
        //         <FiLogOut classNameName="mr-3" /> Logout
        //       </button>
        //     </nav>
        //   </div>

        //   {/* Main Content Area */}
        //   <div classNameName={`${styles.mainContent} ${isOpen ? styles.mainContentShift : ""}`}>
        //     {/* Top Navbar */}
        //     <div classNameName={styles.navbar}>
        //       <button onClick={() => setIsOpen(true)} classNameName="md:hidden">
        //         <FiMenu size={24} />
        //       </button>
        //       <h2 classNameName="ml-4 text-lg">Welcome to the Dashboard</h2>
        //     </div>
        //     <div><p>Page content comes here</p></div>
        //   </div>

        //   {/* Background Overlay for Mobile Sidebar */}
        //   <div classNameName={`${styles.overlay} ${isOpen ? styles.overlayVisible : ""}`} onClick={() => setIsOpen(false)}></div>
        // </div>

        <div className="Dashboard-Section">
            <aside className="sidebar">
                <div className="sidebar-header">
                <Image src={Logo} alt="Logo" width={250} height={50} />

                </div>
                <ul className="sidebar-links">
                    <h4>
                        <span>Main Menu</span>
                        {/* <div className="menu-separator"></div> */}
                    </h4>
                    <li>
                        <a href="#">
                            <span className="material-symbols-outlined"> dashboard </span>Dashboard</a
                        >
                    </li>
                    {/* <li>
          <a href="#"
            ><span className="material-symbols-outlined"> overview </span
            >Overview</a
          >
        </li>
        <li>
          <a href="#"
            ><span className="material-symbols-outlined"> monitoring </span
            >Analytic</a
          >
        </li> */}
                    <h4>
                        <span>Training / Assessment</span>
                        {/* <div className="menu-separator"></div> */}
                    </h4>
                    <li>
                        <a href="#"
                        ><span className="material-symbols-outlined"> overview </span>Modules</a
                        >
                    </li>
                    <li>
                        <a href="#"
                        ><span className="material-symbols-outlined"> flag </span>Assessment</a
                        >
                    </li>
                    {/* <li>
          <a href="#"
            ><span className="material-symbols-outlined"> move_up </span>Transfer</a
          >
        </li>
        <li>
          <a href="#"
            ><span className="material-symbols-outlined"> flag </span>All Reports</a
          >
        </li> */}
                    {/* <li>
          <a href="#"
            ><span className="material-symbols-outlined">
              notifications_active </span
            >Notifications</a
          >
        </li> */}
                    <h4>
                        <span>Account</span>
                        {/* <div className="menu-separator"></div> */}
                    </h4>
                    {/* <li>
          <a href="#"
            ><span className="material-symbols-outlined"> account_circle </span
            >Profile</a
          >
        </li>
        <li>
          <a href="#"
            ><span className="material-symbols-outlined"> settings </span
            >Settings</a
          >
        </li> */}
                    <li>
                        <a href="#"
                        ><span className="material-symbols-outlined"> logout </span>Logout</a
                        >
                    </li>
                </ul>
                <div className="user-account">
                    <div className="user-profile">
                        {/* <img src="images/profile-img.jpg" alt="Profile Image" /> */}
                        {/* <span className="material-symbols-outlined custom-account"> account_circle </span> */}
                        <div className="user-detail">
                            <h3>{userDetails?.name}</h3>
                            <span>{userDetails?.uid}</span>
                        </div>
                    </div>
                </div>
            </aside>


            <div className="Inner-Dashboard">
                <button className="Day1">Day 1</button>
                <button className="Day2">Day 2</button>
                <button className="Day3">Day 3</button>
                <button className="Day4">Day 4</button>
                <button className="Day4">Day 5</button>
                <button className="Day4">Day 6</button>
                <button className="Day4">Day 7</button>
            </div>

        </div>
    );
};

export default Dashboard;

