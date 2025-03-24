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
    // const [AssessmentDay, setAssessmentDay] = useState("");


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
            image: "/images/notabswitching.png",
            title: "No Tab Switching",
            description: "Do not switch tabs during the quiz. If you leave the tab, your attempt may be invalidated."
        }
    ];


    useEffect(() => {




        const fetchQuizStatus = async () => {
            const user = auth.currentUser;
            if (!user) return;

            const userId = user.uid;
            const statusRef = ref(database, `users/${userId}/progress/Day5/Assessment`);
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
                router.push("/ASS6"); // Redirects to assessment1.tsx page
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
                     <h2>Guidelines Quiz</h2>
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
                                <td>21</td>
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
