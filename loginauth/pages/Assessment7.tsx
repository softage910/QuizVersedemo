"use client";

import "./Assessment1.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ref, get } from "firebase/database";
import { auth, database } from "../src/app/firebase/firebaseconfig";

export default function FirstAssessment() {
    const router = useRouter();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying] = useState(false);
    const [direction, setDirection] = useState("next"); // Track direction
    const [quizAttempted, setQuizAttempted] = useState(false);


    const slides = [
        {
            image: "/images/internet.png",
            title: "Internet Connectivity",
            description: "Ensure that you have a stable internet connection with a minimum speed of 512 kbps."
        },
        {
            image: "/images/refresh.png",
            title: "Don’t Refresh",
            description: "\"Don’t refresh the webpage during the assessment. This will lead to immediate submission of your responses.\""
        },
        {
            image: "Images/notabswitching.png",
            title: "No Screen Switching",
            description: "Screen switching is not allowed during the quiz. If you switch tabs or windows more than 3 times, your attempt will be auto-submitted."
        },
        {
            image: "Images/leave-screen.png", // replace with your actual image name
            title: "Stay on Screen",
            description:
                "You must stay on the quiz screen at all times. If you're away from the screen for more than 10 seconds, your attempt will be automatically submitted.",
        }
    ];


    useEffect(() => {
        const fetchQuizStatus = async () => {
            const user = auth.currentUser;
            if (!user) return;

            const userId = user.uid;
            const statusRef = ref(database, `users/${userId}/progress/Day7/Assessment 1`);
            const snapshot = await get(statusRef);

            if (snapshot.exists()) {
                setQuizAttempted(snapshot.val());
            }
        };

        fetchQuizStatus();
    }, []);

    const startQuiz = () => {
        if (!quizAttempted) {
                enterFullScreen();
                router.push("/ASS7"); // Redirects to assessment1.tsx page
        }
            };

        
            const enterFullScreen = () => {
                const elem = document.documentElement;
                if (elem.requestFullscreen) {
                    elem.requestFullscreen().catch(err => console.error("Error enabling fullscreen:", err));
                }
            };
        

    const nextSlide = () => {
        setDirection("next");
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setDirection("prev");
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        let interval: string | number | NodeJS.Timeout | undefined;
        if (isPlaying) {
            interval = setInterval(nextSlide, 3000);
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    return (
        <div className="Main-Assessment">
            <div className="AssessmentDetails">
                <div>
                 <div>
                     <p>Welcome to</p>
                     <h2>Detailed Quiz</h2>
                 </div>
                 <div>
                     <table className="Assessment-Table">
                         <thead>
                             <tr>
                                 <th>Number of Question</th>
                                <th>Duration</th>
                             </tr>
                         </thead>
                        <tbody>
                             <tr>
                                <td>36</td>
                                 <td>60 Minutes</td>
                             </tr>
                         </tbody>
                    </table>
                 </div>
                 <div className="start-container">
                 <button
                className={`start-button ${quizAttempted ? "disabled" : ""}`}
                onClick={startQuiz}
                disabled={quizAttempted}
            >
                {quizAttempted ? "Attempted" : "Start Quiz"}
            </button> 
            </div>                </div>
              </div>

            <div className="Assessment-Section">
                <div className="Slideshow">
                    <button className="nav-button left" onClick={prevSlide}>❮</button>
                    
                    <div className={`Slide ${direction === "next" ? "slide-in-right" : "slide-in-left"}`}>
                        <img src={slides[currentSlide].image} alt={slides[currentSlide].title} />
                        <h3>{slides[currentSlide].title}</h3>
                        <p>{slides[currentSlide].description}</p>
                    </div>
                    
                    <button className="nav-button right" onClick={nextSlide}>❯</button>
                    <div className="controls">
                    {slides.map((_, index) => (
                        <span 
                            key={index} 
                            className={`dot ${index === currentSlide ? "active" : ""}`} 
                            onClick={() => setCurrentSlide(index)}
                        ></span>
                    ))}
                </div>
                </div>
                
            </div>
        </div>
    );
}
