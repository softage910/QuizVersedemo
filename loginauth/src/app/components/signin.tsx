"use client";
import React, { useState } from "react";
import { auth, database } from "../firebase/firebaseconfig";
import { signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import Link from 'next/link';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set, get } from "firebase/database";
import { useRouter } from "next/navigation"; // Import useRouter





export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [SignUperror, setSignUpError] = useState<string | null>(null);
  const [Loginerror, setLoginError] = useState<string | null>(null);
  const [Loginmessage, setLoginMessage] = useState<string | null>(null);
  const [SignUpmessage, setSignUpMessage] = useState<string | null>(null);
  const [showOtpField, setShowOtpField] = useState(false);
  const [showSigninField, setshowSigninField] = useState(true);
  const [showSignupField, setshowSignupField] = useState(false);
  const [FullName, setFullName] = useState("");
  const [UserEmail, setUserEmail] = useState("");
  const [UserPassword, setUserPassword] = useState("");
  const [EmpCode, setEmpCode] = useState("");

  const router = useRouter();


  const verifyOtp = () => {
    const enteredOtp = otp.join(""); // Convert array to string

    if (enteredOtp === generatedOtp) {
      const sessionExpireTime = new Date().getTime() + 60 * 60 * 1000; // 1-minute session
      localStorage.setItem("sessionExpireTime", sessionExpireTime.toString());

      // Redirect to dashboard with user details
      router.push(`/dashboard?name=${encodeURIComponent(FullName)}&id=${encodeURIComponent(EmpCode)}`);
    } else {
      setLoginError("Invalid OTP. Please try again.");
    }
  };




  const toggle = () => {
    setshowSignupField(true);
    setshowSigninField(false);
  }

  const toggleback = () => {
    setshowSignupField(false);
    setshowSigninField(true);
  }

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    setLoginMessage(null);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user.emailVerified) {
        // Fetch user details from Firebase Realtime Database
        const userRef = ref(database, `users/${user.uid}`);
        const userSnapshot = await get(userRef);

        if (userSnapshot.exists()) {
          const userData = userSnapshot.val();

          // Store user details and session expiration time in localStorage
          localStorage.setItem("userDetails", JSON.stringify(userData));
          const sessionExpireTime = new Date().getTime() + 60 * 60 * 1000; // 1-minute session
          localStorage.setItem("sessionExpireTime", sessionExpireTime.toString());

          const response = await fetch("/api/send-otp", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
          });

          const data = await response.json();
          if (response.ok) {
            setShowOtpField(true);
            setshowSigninField(false);
            setGeneratedOtp(data.otp); // Store OTP for verification
            setLoginMessage("OTP sent to your email. Please enter the OTP to proceed.");
          } else {
            setLoginError(data.error);
          }
        }
      } else {
        setLoginMessage("Email Not Verified");
      }
    } catch (err) {
      setLoginError("Invalid email or password. Please try again.");
      console.error("Login error:", err);
    }
  };



  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setSignUpError(null);
    setSignUpMessage(null);

    try {
      // Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, UserEmail, UserPassword);
      const user = userCredential.user;

      if (user) {
        // Store user details in Firebase Realtime Database
        await set(ref(database, `users/${user.uid}`), {
          uid: EmpCode,
          name: FullName,
          email: UserEmail,
          password: UserPassword, // Storing password in database is NOT recommended for security reasons
        });

        if (!user.emailVerified) {
          await sendEmailVerification(user);
          setSignUpMessage("A verification email has been sent. Please verify your email before logging in.");
        }

      }
    } catch {
      setSignUpError("Error");
    }
  };



  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;

    if (!/^\d$/.test(value)) return; // Ensure only digits are entered

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to the next input field if there's a value and it's not the last field
    if (index < 5 && value) {
      document.getElementById(`otp-input-${index + 1}`)?.focus();
    }
  };

  const handleOtpKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];

      if (!otp[index] && index > 0) {
        document.getElementById(`otp-input-${index - 1}`)?.focus();
      }

      newOtp[index] = "";
      setOtp(newOtp);
    }
  };




  return (

    <div className="flex items-center justify-center back-css p-5">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        {showSigninField && (<form onSubmit={handleSignIn} className="mt-6">
          <div className="login-heading">
            <h2>Login</h2>
          </div>
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition "
          >
            LOGIN
          </button>

          <div className="togglebutton">
            <p>Don&apost have an account?</p>
            <Link className="Link" href="" onClick={toggle}>Sign-up</Link>
          </div>
          {Loginmessage && <p className="mt-4 text-center text-green-500">{Loginmessage}</p>}
          {Loginerror && <p className="mt-4 text-center text-red-500">{Loginerror}</p>}
        </form>)}





        {showSignupField && (<form onSubmit={handleSignUp} className="mt-6">
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
              onChange={(e) => setEmpCode(e.target.value)}
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
              onChange={(e) => setUserEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition "
          >
            SIGNUP
          </button>
          <div className="togglebutton">
            <p>Already have an account?</p>
            <Link className="Link" href="" onClick={toggleback}>Sign-in</Link>
          </div>

          {SignUpmessage && <p className="mt-4 text-center text-green-500">{SignUpmessage}</p>}
          {SignUperror && <p className="mt-4 text-center text-red-500">{SignUperror}</p>}
        </form>)}

        {showOtpField && (
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
        )}
      </div>
    </div>
  );
}
