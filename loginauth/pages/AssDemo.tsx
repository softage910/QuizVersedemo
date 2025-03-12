"use client";

import "./TestPage.css";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ref, get, set } from "firebase/database"; // Import Firebase functions
import { auth, database } from "../src/app/firebase/firebaseconfig"; // Import Firebase config
import Logo from "../public/Logo.png";


const OnlineTest = () => {
    const [questions, setQuestions] = useState<any[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [visitedQuestions, setVisitedQuestions] = useState<number[]>([]);
    const [questionStatus, setQuestionStatus] = useState<{ [key: number]: string }>({});
    const [timeLeft, setTimeLeft] = useState(3600);
    const [isPaused, setIsPaused] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();
    const [isOut, setIsOut] = useState(false);
const [outTime, setOutTime] = useState(0);
const [countdownTimer, setCountdownTimer] = useState<NodeJS.Timeout | null>(null);
const [showViolationModal, setShowViolationModal] = useState(false);

    

    useEffect(() => {
        const fetchQuestions = async () => {
            const questionsRef = ref(database, "AssessmentContent/day2/Assessment/questions/multipleChoice");
            const snapshot = await get(questionsRef);
        
            if (snapshot.exists()) {
                const fetchedQuestions = snapshot.val();
                const shuffledQuestions = fetchedQuestions.sort(() => Math.random() - 0.5); // Shuffle questions
                setQuestions(shuffledQuestions);
            }
        };
        fetchQuestions();
    }, []);



    
    const [violations, setViolations] = useState(0);


    // Handle Timer Pause/Resume
    useEffect(() => {
        let timer: NodeJS.Timeout;

    if (!isPaused && timeLeft > 0) {
        timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);
    }

    return () => clearInterval(timer); // Cleanup on unmount

    }, [timeLeft, isPaused]);


    const startOutTimer = () => {
        setIsOut(true);
        setOutTime(0);
        if (countdownTimer) clearInterval(countdownTimer); // Reset any existing timer
    
        const timer = setInterval(() => {
            setOutTime((prev) => {
                if (prev >= 9) { // After 10 seconds
                    clearInterval(timer);
                    setShowViolationModal(true); // Show violation popup
                    return prev;
                }
                return prev + 1;
            });
        }, 1000);
    
        setCountdownTimer(timer);
    };

    const resetOutTimer = () => {
        setIsOut(false);
        setOutTime(0);
        if (countdownTimer) clearInterval(countdownTimer);
    };

    // Exit fullscreen and redirect
const handleViolationExit = () => {
    if (document.fullscreenElement) {
        document.exitFullscreen().catch(err => console.error("Error exiting fullscreen:", err));
    }
    router.push("/dashboard"); // Redirect
};

    const enterFullscreen = () => {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().catch((err) => {
                console.error("Fullscreen request failed:", err);
            });
        }
        setShowModal(false); 
        setIsPaused(false); // Resume timer
        resetOutTimer(); // Reset 10s timer on re-enter

        // Hide modal once fullscreen is activated
    };

    const handleFullscreenExit = () => {
        if (!document.fullscreenElement) {
            setViolations((prev) => prev + 1);
            setIsPaused(true); // Pause timer
            setShowModal(true); // Show modal when user exits fullscreen
            startOutTimer(); // Start 10s timer


            if (violations >= 3) {
                alert("Test is being submitted due to multiple violations.");
                router.push("/dashboard");
            }
        }
    };



    const handleTabSwitch = () => {
        if (document.visibilityState === "hidden") {
            setViolations((prev) => prev + 1);
            setIsPaused(true); // Pause timer

            setShowModal(true); // Show modal if tab is switched
            startOutTimer(); // Start 10s timer


            if (violations >= 3) {
                alert("Test is being submitted due to multiple tab switches.");
                router.push("/dashboard");
            }
        }else{
            resetOutTimer(); // Reset 10s timer on re-enter

        }
    };

    useEffect(() => {
        document.addEventListener("fullscreenchange", handleFullscreenExit);
        document.addEventListener("visibilitychange", handleTabSwitch);

        return () => {
            document.removeEventListener("fullscreenchange", handleFullscreenExit);
            document.removeEventListener("visibilitychange", handleTabSwitch);
        };
    }, [violations]);

    
    

    const handleOptionChange = (option: string) => {
        setSelectedOption(option);
    };























    
    const handleNextQuestion = () => {

        setQuestionStatus((prev) => ({
            ...prev,
            [currentQuestionIndex]: selectedOption ? "attempted" : "skipped",
        }));

        if (!selectedOption) return; // Prevent proceeding without selection

        const user = auth.currentUser; // Get the current authenticated user
        if (!user) {
            console.error("No authenticated user found!");
            return;
        }

        const userId = user.uid; // Get the actual user ID from Firebase Auth

        // Save to Firebase Realtime Database
        set(ref(database, `responses/${userId}/${currentQuestionIndex}`), {
            selectedOption: selectedOption,
            question: questions[currentQuestionIndex].question,
            correctAnswer: questions[currentQuestionIndex].correctAnswer,
            isCorrect: selectedOption === questions[currentQuestionIndex].correctAnswer,
        });

        // Move to the next question
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setSelectedOption(null);
    };

    const handleQuestionClick = (index: number) => {
        setVisitedQuestions((prev) => [...new Set([...prev, currentQuestionIndex])]); // Mark current question as visited
        setCurrentQuestionIndex(index);
        setSelectedOption(null);
    };


    const handleSkipQuestion = () => {
        setQuestionStatus((prev) => ({
            ...prev,
            [currentQuestionIndex]: "skipped",
        }));

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
            setSelectedOption(null);
        }
    };

    // useEffect(() => {
    //     if (timeLeft === 0) {
    //         router.push("/dashboard"); // Redirect when time is up
    //         return;
    //     }

    //     const timer = setInterval(() => {
    //         setTimeLeft((prevTime) => prevTime - 1);
    //     }, 1000);

    //     return () => clearInterval(timer); // Cleanup on unmount
    // }, [timeLeft, router]);


    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        return {
            hours: String(hours).padStart(2, "0"),
            minutes: String(minutes).padStart(2, "0"),
            seconds: String(secs).padStart(2, "0"),
        };
    };


    const { hours, minutes, seconds } = formatTime(timeLeft);


    const finishQuiz = () => {
        if (document.fullscreenElement) {
            document.exitFullscreen().catch(err => console.error("Error exiting fullscreen:", err));
        }
    
        const user = auth.currentUser; 
        if (!user) {
            console.error("No authenticated user found!");
            return;
        }
    
        const userId = user.uid;
    
        // Store quiz status under the correct day
        set(ref(database, `users/${userId}/progress/Day2/Assessment`), true);
    
        router.push("/dashboard"); 
    };
    


    return (
        <div className="Demo">

{(showModal || showViolationModal) && (
    <div className="modal-overlay">
        <div className="modal">
            <h2>{showViolationModal ? "Unwanted Activity Detected" : "Attention Required"}</h2>
            <p>
                {showViolationModal
                    ? "You have violated the test conditions by leaving the screen for more than 10 seconds."
                    : "You have switched tabs or exited fullscreen. Please return to continue the test."}
            </p>
            <button className="fullscreen-btn" onClick={showViolationModal ? handleViolationExit : enterFullscreen}>
                {showViolationModal ? "Back to Dashboard" : "Re-enter Fullscreen"}
            </button>
        </div>
    </div>
)}


            <div className="Test-Section">
                <div className="TestPage-Logo">
                    <Image src={Logo} alt="Logo" width={250} height={50} />
                </div>
                <div>
                    <h1 className="online-test-title">Online Test – MacOS Fundamentals</h1>
                </div>
                <div className="online-test-container">
                    {questions.length > 0 ? (
                        <>
                            <div className="question-section">
                                <h2 className="question-title">Question {currentQuestionIndex + 1}</h2>
                                <p className="question-text">{questions[currentQuestionIndex]?.question}</p>
                            </div>
                            <div className="options-section">
                                {questions[currentQuestionIndex]?.options.map((option: string, index: number) => (
                                    <label key={index} className="option-label">
                                        <input
                                            type="radio"
                                            name="question"
                                            value={option}
                                            checked={selectedOption === option}
                                            onChange={() => handleOptionChange(option)}
                                            className="option-input"
                                        />
                                        {option}
                                    </label>
                                ))}
                            </div>


                            <div className="actions">
                                <button className="Skip-btn" onClick={handleSkipQuestion}>Skip</button>
                                <div className="nav-buttons">
                                    <button
                                        className="nav-btn"
                                        onClick={handleNextQuestion}
                                        disabled={!selectedOption} // Disable if no option is selected
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <p>Loading questions...</p>
                    )}
                </div>

            </div>
            <div className="info-section">
                <div className="timer">
                    <h3 className="info-title">Time Left</h3>
                    <div className="time-display">
                        <div>
                            <span className="time-number">{hours}</span>
                            <span className="time-label">hours</span>
                        </div>
                        <div>
                            <span className="time-number">{minutes}</span>
                            <span className="time-label">minutes</span>
                        </div>
                        <div>
                            <span className="time-number">{seconds}</span>
                            <span className="time-label">seconds</span>
                        </div>
                    </div>
                </div>
                <div className="sections">
                    <h3 className="info-title">Questions</h3>
                    <div className="grid">
                        {questions.map((_, index) => (
                            <button
                                key={index}
                                className={`grid-btn ${index === currentQuestionIndex
                                        ? "active"
                                        : questionStatus[index] === "attempted"
                                            ? "attempted"
                                            : questionStatus[index] === "skipped"
                                                ? "skipped"
                                                : ""
                                    }`}
                                
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="SubmitQuiz">
                    <button className="submit-btn" onClick={finishQuiz}>Submit Test</button>
                </div>
            </div>
        </div>
    );
};

export default OnlineTest;
