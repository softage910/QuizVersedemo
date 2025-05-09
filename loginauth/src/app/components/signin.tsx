// "use client";
// import React, { useState } from "react";
// import { auth, database } from "../firebase/firebaseconfig";
// import { signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
// import Link from 'next/link';
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { ref, set, get } from "firebase/database";
// import { useRouter } from "next/navigation"; // Import useRouter

// import { Provider, useDispatch } from "react-redux";
// import { setUser } from "../../../userSlice"; // Import the action
// import { store } from "../../../store";




// export default function SignInPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [generatedOtp, setGeneratedOtp] = useState(null);
//   const [SignUperror, setSignUpError] = useState<string | null>(null);
//   const [Loginerror, setLoginError] = useState<string | null>(null);
//   const [Loginmessage, setLoginMessage] = useState<string | null>(null);
//   const [SignUpmessage, setSignUpMessage] = useState<string | null>(null);
//   const [showOtpField, setShowOtpField] = useState(false);
//   const [showSigninField, setshowSigninField] = useState(true);
//   const [showSignupField, setshowSignupField] = useState(false);
//   const [FullName, setFullName] = useState("");
//   const [UserEmail, setUserEmail] = useState("");
//   const [UserPassword, setUserPassword] = useState("");
//   const [ConfirmPassword, setConfirmPassword] = useState("");

//   const [EmpCode, setEmpCode] = useState("");

//   const router = useRouter();


//   const verifyOtp = () => {
//     const enteredOtp = otp.join(""); // Convert array to string

//     if (enteredOtp === generatedOtp) {
//       const sessionExpireTime = new Date().getTime() + 60 * 60 * 1000;
//       localStorage.setItem("sessionExpireTime", sessionExpireTime.toString());

//       // Redirect to dashboard with user details
//       router.push(`/dashboard?name=${encodeURIComponent(FullName)}&id=${encodeURIComponent(EmpCode)}`);
//     } else {
//       setLoginError("Invalid OTP. Please try again.");
//     }
//   };




//   const toggle = () => {
//     setshowSignupField(true);
//     setshowSigninField(false);
//   }

//   const toggleback = () => {
//     setshowSignupField(false);
//     setshowSigninField(true);
//   }

//   // const handleSignIn = async (e: React.FormEvent) => {
//   //   e.preventDefault();
//   //   setLoginError(null);
//   //   setLoginMessage(null);

//   //   try {
//   //     const userCredential = await signInWithEmailAndPassword(auth, email, password);
//   //     const user = userCredential.user;

//   //     if (user.emailVerified) {
//   //       // Fetch user details from Firebase Realtime Database
//   //       const userRef = ref(database, `users/${user.uid}`);
//   //       const userSnapshot = await get(userRef);

//   //       if (userSnapshot.exists()) {
//   //         const userData = userSnapshot.val();


//   //         // dispatch(setUserDetails({ name: user.displayName, uid: user.uid }));

//   //         // Store user details and session expiration time in localStorage
//   //         localStorage.setItem("userDetails", JSON.stringify(userData));
//   //         const sessionExpireTime = new Date().getTime() + 60 * 60 * 1000; // 1-minute session
//   //         localStorage.setItem("sessionExpireTime", sessionExpireTime.toString());

//   //         const response = await fetch("/api/send-otp", {
//   //           method: "POST",
//   //           headers: { "Content-Type": "application/json" },
//   //           body: JSON.stringify({ email }),
//   //         });

//   //         const data = await response.json();
//   //         if (response.ok) {
//   //           setShowOtpField(true);
//   //           setshowSigninField(false);
//   //           setGeneratedOtp(data.otp); // Store OTP for verification
//   //           setLoginMessage("OTP sent to your email. Please enter the OTP to proceed.");
//   //         } else {
//   //           setLoginError(data.error);
//   //         }
//   //       }
//   //     } else {
//   //       setLoginMessage("Email Not Verified");
//   //     }
//   //   } catch (err) {
//   //     setLoginError("Invalid email or password. Please try again.");
//   //     console.error("Login error:", err);
//   //   }
//   // };





//   const dispatch = useDispatch();

// const handleSignIn = async (e: React.FormEvent) => {
//   e.preventDefault();
//   setLoginError(null);
//   setLoginMessage(null);

//   try {
//     const userCredential = await signInWithEmailAndPassword(auth, email, password);
//     const user = userCredential.user;

//     if (user.emailVerified) {
//       // Fetch user details from Firebase Realtime Database
//       const userRef = ref(database, `users/${user.uid}`);
//       const userSnapshot = await get(userRef);

//       if (userSnapshot.exists()) {
//         const userData = userSnapshot.val();

//         // Dispatch user data to Redux store
//         dispatch(setUser(userData));

//         // Send OTP
//         const response = await fetch("/api/send-otp", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ email }),
//         });

//         const data = await response.json();
//         if (response.ok) {
//           setShowOtpField(true);
//           setshowSigninField(false);
//           setGeneratedOtp(data.otp);
//           setLoginMessage("OTP sent to your email. Please enter the OTP to proceed.");
//         } else {
//           setLoginError(data.error);
//         }
//       }
//     } else {
//       setLoginMessage("Email Not Verified");
//     }
//   } catch (err) {
//     setLoginError("Invalid email or password. Please try again.");
//     console.error("Login error:", err);
//   }
// };




//   const initializeUserProgress = {
//     "Day1": { "Module": true },
//     "Day2": { "Module": false, "Assessment": false },
//     "Day3": { "Module": false, "Assessment": false },
//     "Day4": { "Module": false, "Assessment 1": false, "Assessment 2": false, "Assessment 3": false },
//     "Day5": { "Module 1": false, "Module 2": false, "Module 3": false, "Assessment": false },
//     "Day6": { "Module": false },
//     "Day7": { "Assessment 1": false },
//     "Day8": { "Module": false },
//   };

//   const handleSignUp = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setSignUpError(null);
//     setSignUpMessage(null);
  
//     if (UserPassword !== ConfirmPassword) {
//       setSignUpError("Passwords do not match.");
//       return;
//     }
  
//     if (!UserEmail.endsWith("@softage.ai")) {
//       setSignUpError("Email must end with @softage.ai.");
//       return;
//     }
  
//     try {
//       // Create user in Firebase Authentication
//       const userCredential = await createUserWithEmailAndPassword(auth, UserEmail, UserPassword);
//       const user = userCredential.user;
  
//       if (user) {
//         // Get the current date and time
//         const signUpDate = new Date().toLocaleString("en-US", {
//           year: "numeric",
//           month: "long",
//           day: "numeric",
//           hour: "2-digit",
//           minute: "2-digit",
//           second: "2-digit",
//           hour12: true, // Ensures AM/PM format
//         });


//         await set(ref(database, `users/${user.uid}`), {
//           uid: EmpCode,
//           name: FullName,
//           email: UserEmail,
//           role: "user", // Default role, change if needed
//           signUpDate: signUpDate,
//           progress: initializeUserProgress // Store signup timestamp
//       });
    
      
  
//         if (!user.emailVerified) {
//           await sendEmailVerification(user);
//           setSignUpMessage("A verification email has been sent. Please verify your email before logging in.");
//         }
//       }
//     } catch (error) {
//       console.error("Signup error:", error);
//       setSignUpError("Error signing up. Please try again.");
//     }
//   };
  
  

//   const [otp, setOtp] = useState<string[]>(Array(6).fill(""));

//   const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
//     const value = e.target.value;
  
//     if (!/^\d$/.test(value)) return; // Ensure only digits are entered
  
//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);
  
//     // Move focus to the next input field if there's a value and it's not the last field
//     if (index < 5 && value) {
//       document.getElementById(`otp-input-${index + 1}`)?.focus();
//     }
//   };
  
//   const handleOtpKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
//     if (e.key === "Backspace") {
//       const newOtp = [...otp];
  
//       if (!otp[index] && index > 0) {
//         document.getElementById(`otp-input-${index - 1}`)?.focus();
//       }
  
//       newOtp[index] = "";
//       setOtp(newOtp);
//     }
//   };
  
//   const handleOtpPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
//     e.preventDefault();
//     const pasteData = e.clipboardData.getData("text").trim();
    
//     if (/^\d{6}$/.test(pasteData)) { // Ensure it's exactly 6 digits
//       const newOtp = pasteData.split("");
//       setOtp(newOtp);
  
//       // Move focus to the last OTP input field
//       document.getElementById(`otp-input-5`)?.focus();
//     }
//   };
  


//   const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const confirmPassword = e.target.value;
//     setConfirmPassword(confirmPassword);

//     // Check if confirm password matches the original password
//     if (UserPassword && confirmPassword !== UserPassword) {
//         setSignUpError("Passwords do not match");
//     } else {
//       setSignUpError(""); // Clear error if passwords match
//     }
// };


// const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const email = e.target.value;
//   setUserEmail(email);

//   // Validate if email ends with @softage.ai
//   if (email && !email.endsWith("@softage.ai")) {
//     setSignUpError("Email must end with @softage.ai");
//   } else {
//     setSignUpError(""); // Clear error if valid
//   }
// };


//   return (
//     <div className="flex items-center justify-center back-css p-5">
//       <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
//         {showSigninField && (<form onSubmit={handleSignIn} className="mt-6">
//           <div className="login-heading">
//             <h2>Login</h2>
//           </div>
//           <div>
//             <label className="block text-gray-600">Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mt-4">
//             <label className="block text-gray-600">Password</label>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full mt-6 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition "
//           >
//             LOGIN
//           </button>

//           <div className="togglebutton">
//             <p>Don&apos;t have an account?</p>
//             <Link className="Link" href="" onClick={toggle}>Sign-up</Link>
//           </div>
//           {Loginmessage && <p className="mt-4 text-center text-green-500">{Loginmessage}</p>}
//           {Loginerror && <p className="mt-4 text-center text-red-500">{Loginerror}</p>}
//         </form>)}





//         {showSignupField && (<form onSubmit={handleSignUp} className="mt-6">
//           <div className="login-heading">
//             <h2>Sign Up</h2>
//           </div>
//           <div className="mt-4">
//             <label className="block text-gray-600">Full Name</label>
//             <input
//               type="text"
//               placeholder="Enter your full name"
//               className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               value={FullName}
//               onChange={(e) => setFullName(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mt-4">
//             <label className="block text-gray-600">Employee ID</label>
//             <input
//               type="text"
//               placeholder="Enter your ID"
//               className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               value={EmpCode}
//               onChange={(e) => setEmpCode(e.target.value.toUpperCase())}
//               required
//             />
//           </div>
//           <div className="mt-4">
//             <label className="block text-gray-600">Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               value={UserEmail}
//               onChange={handleEmailChange}
//               required
//             />
//           </div>
//           <div className="mt-4">
//             <label className="block text-gray-600">Password</label>
//             <input
//               type="password"
//               placeholder="create password"
//               className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               value={UserPassword}
//               onChange={(e) => setUserPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mt-4">
//             <label className="block text-gray-600">Confirm Password</label>
//             <input
//               type="password"
//               placeholder="Confirm your password"
//               className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               onChange={handleConfirmPasswordChange}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full mt-6 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition "
//           >
//             SIGNUP
//           </button>
//           <div className="togglebutton">
//             <p>Already have an account?</p>
//             <Link className="Link" href="" onClick={toggleback}>Sign-in</Link>
//           </div>

//           {SignUpmessage && <p className="mt-4 text-center text-green-500">{SignUpmessage}</p>}
//           {SignUperror && <p className="mt-4 text-center text-red-500">{SignUperror}</p>}
//         </form>)}

//         {showOtpField && (
//           <div className="mt-4 p-5">
//             <label className="block text-gray-600">Enter OTP</label>

// <div className="flex justify-center space-x-2 mt-2">
//   {otp.map((digit, index) => (
//     <input
//       key={index}
//       id={`otp-input-${index}`}
//       type="text"
//       maxLength={1}
//       className="w-12 h-12 text-center text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//       value={digit}
//       onChange={(e) => handleOtpChange(e, index)}
//       onKeyDown={(e) => handleOtpKeyDown(e, index)}
//       onPaste={handleOtpPaste} // Add paste handling here
//     />
//   ))}
// </div>
//             <button
//               onClick={verifyOtp}
//               className="w-full mt-4 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
//             >
//               Verify OTP
//             </button>
//           </div>
          
          

//         )}
//       </div>
//     </div>
//   );
// }
// function dispatch(arg0: any) {
//   throw new Error("Function not implemented.");
// }


"use client";
import React, { useState } from "react";
import { auth, database, googleProvider } from "../firebase/firebaseconfig";
import { signInWithEmailAndPassword, sendEmailVerification, signInWithPopup } from "firebase/auth";
import Link from 'next/link';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set, get } from "firebase/database";
import { useRouter } from "next/navigation"; // Import useRouter
import NotificationMessage from "./NotificationMessage";





export default function SignInPage() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [generatedOtp, setGeneratedOtp] = useState(null);
  const [SignUperror, setSignUpError] = useState<string | null>(null);
  const [Loginerror, setLoginError] = useState<string | null>(null);
  const [Loginmessage, setLoginMessage] = useState<string | null>(null);
  const [SignUpmessage, setSignUpMessage] = useState<string | null>(null);
  // const [showOtpField, setShowOtpField] = useState(false);
  // const [showSigninField, setshowSigninField] = useState(true);
  // const [showSignupField, setshowSignupField] = useState(false);
  // const [FullName, setFullName] = useState("");
  // const [UserEmail, setUserEmail] = useState("");
  // const [UserPassword, setUserPassword] = useState("");
  // const [ConfirmPassword, setConfirmPassword] = useState("");
  // const [showNotification, setShowNotification] = useState(false);


  // const [EmpCode, setEmpCode] = useState("");

  const router = useRouter();


  const handleGoogleSignIn = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;

        // Check if the user exists in the invitedUsers database
        const invitedUsersRef = ref(database, "invitedUsers");
        const invitedUsersSnapshot = await get(invitedUsersRef);

        if (!invitedUsersSnapshot.exists()) {
            setLoginError("Access denied. No invited users found.");
            return;
        }

        const invitedUsers = invitedUsersSnapshot.val();
        const invitedUserKey = Object.keys(invitedUsers).find(
            (key) => invitedUsers[key].email === user.email
        );

        if (!invitedUserKey) {
            setLoginError("Access denied. Your email is not invited.");
            return;
        }

        const userData = invitedUsers[invitedUserKey];

        // If the user is logging in for the first time, update their details
        if (userData.status !== "Joined") {

            // const joinDate = new Date().toLocaleString("en-US", options); // Readable format
            const joinDate = new Date().toLocaleDateString("en-GB"); // "12/03/2025"


            await set(ref(database, `invitedUsers/${invitedUserKey}`), {
                ...userData,
                status: "Joined",
                joiningdate: joinDate,
                name: user.displayName,
            });


        }

        sessionStorage.setItem("sessionExpireTime", (Date.now() + 24 * 60 * 60 * 1000).toString());
        sessionStorage.setItem("userName", user.displayName || "");
        sessionStorage.setItem("userEmail", user.email || "");
        sessionStorage.setItem("userType", userData.type || "");
        sessionStorage.setItem("invitedUsers", invitedUsers || "");
        // sessionStorage.setItem("userType", userData.type || "");
        sessionStorage.setItem("userAutoID", invitedUserKey || "");

        localStorage.setItem("userDetails", JSON.stringify(userData));
        localStorage.setItem("sessionExpireTime", (new Date().getTime() + 60 * 60 * 1000).toString());


        // ✅ Redirect based on user type
            router.push("/dashboard");

        setLoginMessage("Redirecting...");
    } catch (error) {
        console.error("Google Sign-In failed:", error);
        setLoginError("Google Sign-In failed. Please try again.");
    }
};


  // const verifyOtp = () => {
  //   const enteredOtp = otp.join(""); // Convert array to string
    

  //   if (enteredOtp === generatedOtp) {
  //     const sessionExpireTime = new Date().getTime() + 24 * 60 * 60 * 1000;
  //     localStorage.setItem("sessionExpireTime", sessionExpireTime.toString());

  //     // Redirect to dashboard with user details
  //     router.push(`/dashboard?name=${encodeURIComponent(FullName)}&id=${encodeURIComponent(EmpCode)}`);
  //   } else {
  //     setLoginError("Invalid OTP. Please try again.");
  //   }
  // };

  // const toggle = () => {
  //   setshowSignupField(true);
  //   setshowSigninField(false);
  // }

  // const toggleback = () => {
  //   setshowSignupField(false);
  //   setshowSigninField(true);
  // }

  // const [loading, setLoading] = useState(false); // Loading state
  // const [loadingVerify, setLoadingVerify] = useState(false); // Loading state


  // const handleSignIn = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setLoginError(null);
  //   setLoginMessage(null);
  //   setLoading(true); // Start loading
  
  //   try {
  //     const userCredential = await signInWithEmailAndPassword(auth, email, password);
  //     const user = userCredential.user;
  
  //     if (user.emailVerified) {
  //       const userRef = ref(database, `users/${user.uid}`);
  //       const userSnapshot = await get(userRef);
  
  //       if (userSnapshot.exists()) {
  //         const userData = userSnapshot.val();
  //         const autoGeneratedId = Object.keys(userData)[0];
  
  //         localStorage.setItem("userDetails", JSON.stringify(userData));
  //         localStorage.setItem("sessionExpireTime", (new Date().getTime() + 60 * 60 * 1000).toString());
  //         localStorage.setItem("AutoUser", autoGeneratedId);
  
  //         const response = await fetch("/api/send-otp", {
  //           method: "POST",
  //           headers: { "Content-Type": "application/json" },
  //           body: JSON.stringify({ email }),
  //         });
  
  //         const data = await response.json();
  //         if (response.ok) {
  //           setShowOtpField(true);
  //           setshowSigninField(false);
  //           setGeneratedOtp(data.otp);
  //           setLoginMessage("OTP sent to your email. Please enter the OTP to proceed.");
  //         } else {
  //           setLoginError(data.error);
  //         }
  //       }
  //     } else {
  //       setLoginError("Email Not Verified");
  //     }
  //   } catch (err) {
  //     setLoginError("Invalid email or password. Please try again.");
  //     console.error("Login error:", err);
  //   } finally {
  //     setLoading(false); // Stop loading
  //   }
  // };
  
  

  // const initializeUserProgress = {
  //   "Day1": { "Module": false },
  //   "Day2": { "Module": false, "Assessment": false },
  //   "Day3": { "Module": false, "Assessment": false },
  //   "Day4": { "Module": false, "Assessment 1": false, "Assessment 2": false, "Assessment 3": false },
  //   "Day5": { "Module 1": false, "Module 2": false, "Assessment": false },
  //   "Day6": { "Module": false },
  //   "Day7": { "Assessment 1": false },
  //   "Day8": { "Module": false },
  // };

  // const handleSignUp = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setSignUpError(null);
  //   setSignUpMessage(null);
  //   setLoadingVerify(true); // Start loading

  
  //   if (UserPassword !== ConfirmPassword) {
  //     setSignUpError("Passwords do not match.");
  //     return;
  //   }
  
  //   if (!UserEmail.endsWith("@softage.ai")) {
  //     setSignUpError("Email must end with @softage.ai.");
  //     return;
  //   }
  
  //   try {
  //     // Create user in Firebase Authentication
  //     const userCredential = await createUserWithEmailAndPassword(auth, UserEmail, UserPassword);
  //     const user = userCredential.user;
  
  //     if (user) {
  //       // Get the current date and time
  //       const signUpDate = new Date().toLocaleString("en-US", {
  //         year: "numeric",
  //         month: "long",
  //         day: "numeric",
  //         hour: "2-digit",
  //         minute: "2-digit",
  //         second: "2-digit",
  //         hour12: true, // Ensures AM/PM format
  //       });


  //       await set(ref(database, `users/${user.uid}`), {
  //         uid: EmpCode,
  //         name: FullName,
  //         email: UserEmail,
  //         role: "user", // Default role, change if needed
  //         signUpDate: signUpDate,
  //         progress: initializeUserProgress // Store signup timestamp
  //     });
    
      
  
  //       if (!user.emailVerified) {
  //         await sendEmailVerification(user);
  //         setSignUpMessage("A verification email has been sent. Please verify your email before logging in.");
  //       }
  //     }
  //   } catch  {
  //     setSignUpError("Error signing up. Please try again.");
  //   }finally{
  //     setLoadingVerify(false); // Start loading

  //   }

  //   setshowSigninField(true);
  //   setshowSignupField(false);

  // };
  
  

  // const [otp, setOtp] = useState<string[]>(Array(6).fill(""));

  // const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
  //   const value = e.target.value;
  
  //   if (!/^\d$/.test(value)) return; // Ensure only digits are entered
  
  //   const newOtp = [...otp];
  //   newOtp[index] = value;
  //   setOtp(newOtp);
  
  //   // Move focus to the next input field if there's a value and it's not the last field
  //   if (index < 5 && value) {
  //     document.getElementById(`otp-input-${index + 1}`)?.focus();
  //   }
  // };
  
  // const handleOtpKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
  //   if (e.key === "Backspace") {
  //     const newOtp = [...otp];
  
  //     if (!otp[index] && index > 0) {
  //       document.getElementById(`otp-input-${index - 1}`)?.focus();
  //     }
  
  //     newOtp[index] = "";
  //     setOtp(newOtp);
  //   }
  // };
  
  // const handleOtpPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   const pasteData = e.clipboardData.getData("text").trim();
    
  //   if (/^\d{6}$/.test(pasteData)) { // Ensure it's exactly 6 digits
  //     const newOtp = pasteData.split("");
  //     setOtp(newOtp);
  
  //     // Move focus to the last OTP input field
  //     document.getElementById(`otp-input-5`)?.focus();
  //   }
  // };
  


//   const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const confirmPassword = e.target.value;
//     setConfirmPassword(confirmPassword);

//     // Check if confirm password matches the original password
//     if (UserPassword && confirmPassword !== UserPassword) {
//         setSignUpError("Passwords do not match");
//     } else {
//       setSignUpError(""); // Clear error if passwords match
//     }
// };


// const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const email = e.target.value;
//   setUserEmail(email);

//   // Validate if email ends with @softage.ai
//   if (email && !email.endsWith("@softage.ai")) {
//     setSignUpError("Email must end with @softage.ai");
//   } else {
//     setSignUpError(""); // Clear error if valid
//   }
// };


  return (

    <div className="flex items-center justify-center back-css p-5" onContextMenu={(e) => e.preventDefault()}>
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">

          <form className="mt-6">
  <div className="login-heading">
    <h2>Login</h2>
  </div>

  {/* {loading ? (
  <div className="flex items-center justify-center py-5">
      <svg className="animate-spin h-6 w-6 text-blue-500" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0"></path>
      </svg>
      <span className="ml-2 text-blue-600 font-semibold">Sending OTP.....</span>
    </div>
  ) : ( */}
    <>
      {/* <div>
        <label className="block text-gray-600">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading} // Disable input when loading
        />
      </div> */}
      {/* <div className="mt-4">
        <label className="block text-gray-600">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading} // Disable input when loading
        />
      </div> */}
      {/* <button
        type="submit"
        className="w-full mt-6 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition disabled:bg-gray-400"
        disabled={loading} // Disable button when loading
      >
        LOGIN
      </button>
      <div className="togglebutton">
        <p>Don&apos;t have an account?</p>
        <Link className="Link" href="" onClick={toggle}>Sign-up</Link>
      </div> */}

<button
    type="button"
    onClick={handleGoogleSignIn}
    className="custom-google w-full flex items-center justify-center border border-gray-300 rounded-full py-2 px-4  transition"
>
    <img
        src="https://developers.google.com/identity/images/g-logo.png"
        alt="Google logo"
        className="w-5 h-5 mr-2 goog-img"
    />
    <span className="text-gray-700 font-medium">Sign in with Google</span>
</button>
    </>

</form>

        {/* {showSignupField && (<form onSubmit={handleSignUp} className="mt-6">
          <div className="login-heading">
            <h2>Sign Up</h2>
          </div>
          <div className="mt-4">
            <label className="block text-gray-600">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={FullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-600">Employee ID</label>
            <input
              type="text"
              placeholder="Enter your ID"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={EmpCode}
              onChange={(e) => setEmpCode(e.target.value.toUpperCase())}
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={UserEmail}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              placeholder="create password"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={UserPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-600">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleConfirmPasswordChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition "
          >  {loadingVerify ? (
            <>
              <div className="flex items-center justify-center">
      <svg className="animate-spin h-6 w-6 text-white-500" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0"></path>
      </svg>
      <span className="ml-2 text-white-600 font-semibold">Verifying.....</span>
    </div>
            </>
          ) : (
            "SIGNUP"
          )}
          </button>
          <div className="togglebutton">
            <p>Already have an account?</p>
            <Link className="Link" href="" onClick={toggleback}>Sign-in</Link>
          </div>



        </form>)} */}

        {/* {showOtpField && (
          <div className="mt-4 p-5">
            <label className="block text-gray-600">Enter OTP</label>

<div className="flex justify-center space-x-2 mt-2">
  {otp.map((digit, index) => (
    <input
      key={index}
      id={`otp-input-${index}`}
      type="text"
      maxLength={1}
      className="w-12 h-12 text-center text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      value={digit}
      onChange={(e) => handleOtpChange(e, index)}
      onKeyDown={(e) => handleOtpKeyDown(e, index)}
      onPaste={handleOtpPaste} // Add paste handling here
    />
  ))}
</div>
            <button
              onClick={verifyOtp}
              className="w-full mt-4 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
            >
              Verify OTP
            </button>
          </div>
        )} */}
      </div>
      {SignUpmessage && <NotificationMessage message={SignUpmessage} onClose={() => setSignUpMessage("")} color="success"  />}
      {SignUperror && <NotificationMessage message={SignUperror} onClose={() => setSignUpError("")} color="error"/>}
      {Loginerror && <NotificationMessage message={Loginerror} onClose={() => setLoginError("")} color="error"/>}
      {Loginmessage && <NotificationMessage message={Loginmessage} onClose={() => setLoginMessage("")} color="success"/>}


    
    </div>
  );
}