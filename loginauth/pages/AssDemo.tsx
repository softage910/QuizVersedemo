"use client";
import '../src/app/TestPage.css';
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ref, get, set } from "firebase/database"; // Import Firebase functions
import { auth, database } from "../src/app/firebase/firebaseconfig"; // Import Firebase config
import Logo from "../public/Logo.png";
import MatchTheFollowing from "@/app/components/Match";

interface Question {
    pairs: never[];
    question: string;
    type: "mcq" | "TF" | "fillblank" | "match";
    options?: string[]; // Optional, only for MCQ
    correctAnswer?: string;
    matchPairs?: { left: string; right: string }[]; // Only for Match the Following
}


const OnlineTest = () => {
    const [questions, setQuestions] = useState<Question[]>([]); // Ignore TypeScript warnings
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [questionStatus, setQuestionStatus] = useState<{ [key: number]: string }>({});
    const [timeLeft, setTimeLeft] = useState(3600);
    const [isPaused, setIsPaused] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const router = useRouter();
    const [isOut, setIsOut] = useState(false);
    const [outTime, setOutTime] = useState(0);
    const [countdownTimer, setCountdownTimer] = useState<NodeJS.Timeout | null>(null);
    const [showViolationModal, setShowViolationModal] = useState(false);
    const [isNextEnabled, setNextEnabled] = useState(false); // ✅ State to track Next button
    const [matchedPairs, setMatchedPairs] = useState<{ left: string; right: string }[]>([]); // ✅ Store matched data

    useEffect(() => {
        const fetchQuestions = async () => {
            const questionsRef = ref(database, "AssessmentContent/day2/Assessment/questions");
            const snapshot = await get(questionsRef);

            if (snapshot.exists()) {
                const fetchedQuestionsObj = snapshot.val();

                // Convert all question types into arrays
                // Convert all question types into arrays
                const multipleChoice: Question[] = fetchedQuestionsObj.multipleChoice
                    ? Object.values(fetchedQuestionsObj.multipleChoice)
                    : [];
                const fillInTheBlank: Question[] = fetchedQuestionsObj.fillInTheBlank
                    ? Object.values(fetchedQuestionsObj.fillInTheBlank)
                    : [];
                const trueFalse: Question[] = fetchedQuestionsObj.trueFalse
                    ? Object.values(fetchedQuestionsObj.trueFalse)
                    : [];
                const matchTheFollowing: Question[] = fetchedQuestionsObj.matchTheFollowing
                    ? Object.values(fetchedQuestionsObj.matchTheFollowing)
                    : [];

                // Combine all question types
                const allQuestions: Question[] = [...multipleChoice, ...fillInTheBlank, ...trueFalse, ...matchTheFollowing];

                // Shuffle all questions
                const shuffledQuestions: Question[] = allQuestions.sort(() => Math.random() - 0.5);

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
        console.log(isOut, outTime);

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
        } else {
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


    // const handle


    const handleOptionChange = (option: string) => {
        setSelectedOption(option);
    };

    const handleNextQuestion = () => {

        setQuestionStatus((prev) => ({
            ...prev,
            [currentQuestionIndex]: selectedOption ? "attempted" : "skipped",
        }));

        if (selectedOption) {
            const user = auth.currentUser; // Get the current authenticated user
            if (!user) {
                console.error("No authenticated user found!");
                return;
            }

            const userId = user.uid; // Get the actual user ID from Firebase Auth

            // Save to Firebase Realtime Database
            set(ref(database, `responses/${userId}/day2/${currentQuestionIndex}`), {
                selectedOption: selectedOption,
                question: questions[currentQuestionIndex].question,
                correctAnswer: questions[currentQuestionIndex].correctAnswer,
                isCorrect: selectedOption === questions[currentQuestionIndex].correctAnswer,
            });

            // Move to the next question
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            setSelectedOption(null);
        } else if (isNextEnabled) {
            // Move to the next question
            const user = auth.currentUser; // Get the current authenticated user
            if (!user) {
                console.error("No authenticated user found!");
                return;
            }
            const userId = user.uid; // Get the actual user ID from Firebase Auth

            set(ref(database, `responses/${userId}/day2/${currentQuestionIndex}`), matchedPairs)
                .then(() => console.log("Matched pairs saved successfully!"))
                .catch((error) => console.error("Error saving matched pairs:", error));

            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            setNextEnabled(false);
        }

        // Prevent proceeding without selection
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


    const finishQuiz = async () => {
        if (document.fullscreenElement) {
            document.exitFullscreen().catch(err => console.error("Error exiting fullscreen:", err));
        }

        const user = auth.currentUser;
        if (!user) {
            console.error("No authenticated user found!");
            return;
        }

        const userId = user.uid;
        const day = "Day2";

        router.push("/dashboard");

        try {
            await set(ref(database, `users/${userId}/progress/${day}/Assessment`), true);

            const userRef = ref(database, `users/${userId}`);
            const userSnapshot = await get(userRef);

            if (!userSnapshot.exists()) {
                throw new Error("User details not found in Firebase");
            }

            const userDetails = userSnapshot.val();

            const responsesRef = ref(database, `responses/${userId}/day2`);
            const snapshot = await get(responsesRef);

            const formattedResponses: { question: string; answer: string }[] = [];

            if (snapshot.exists()) {
                const data = snapshot.val();

                for (const key in data) {
                    const response = data[key];

                    // Match-the-following array case
                    if (Array.isArray(response)) {
                        const matchAnswer = response
                            .map(pair => `${pair.left} → ${pair.right}`)
                            .join(", ");
                        formattedResponses.push({
                            question: `Match the following (Q${key})`,
                            answer: matchAnswer,
                        });
                    } else {
                        // Handle normal MCQ or subjective
                        formattedResponses.push({
                            question: response.question || `Q${key}`,
                            answer: response.selectedOption || response.answer || "",
                        });
                    }
                }
            }

            const csvData = {
                name: userDetails.name,
                email: userDetails.email,
                EmpCode: userDetails.uid,
                Day: "Day2 - Online Test – MacOS Fundamentals",
                responses: formattedResponses,
            };

            const response = await fetch("/api/send-csv", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(csvData),
            });

            if (!response.ok) throw new Error("Failed to send CSV");
        } catch (error) {
            console.error("Error during quiz submission:", error);
            alert("There was an error submitting the quiz. Please try again.");
        }
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
                            {/* Render Component Based on Question Type */}
                            {questions[currentQuestionIndex]?.type === "mcq" && (
                                // <MultipleChoiceQuestion
                                //     question={questions[currentQuestionIndex]}
                                //     selectedOption={selectedOption}
                                //     handleOptionChange={handleOptionChange}
                                // />

                                <div className="options-section">
                                    {questions[currentQuestionIndex]?.options?.map((option: string, index: number) => (
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
                            )}
                            {questions[currentQuestionIndex]?.type === "TF" && (
                                // <TrueFalseQuestion
                                //     selectedOption={selectedOption}
                                //     handleOptionChange={handleOptionChange}
                                // />

                                <div className="options-section">
                                    {["True", "False"].map((option, index) => (
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
                            )}
                            {questions[currentQuestionIndex]?.type === "fillblank" && (
                                // <FillInTheBlankQuestion
                                //     selectedOption={selectedOption}
                                //     handleOptionChange={handleOptionChange}
                                // />

                                <div className="fill-blank-section">
                                    <textarea
                                        placeholder="Enter your answer"
                                        value={selectedOption || ""}
                                        onChange={(e) => handleOptionChange(e.target.value)}
                                        className="fill-blank-input"
                                        rows={4} // Adjust the number of rows as needed
                                    />
                                </div>
                            )}
{questions[currentQuestionIndex]?.type === "match" && (
  <MatchTheFollowing 
    question={{
      ...questions[currentQuestionIndex], 
      pairs: questions[currentQuestionIndex]?.pairs || [] // Provide an empty array if undefined
    }}  
    setNextEnabled={setNextEnabled} 
    onSaveMatch={setMatchedPairs}
  />
)}



                            <div className="actions">
                                {currentQuestionIndex < questions.length - 1 ? (
                                    <>
                                        <button className="Skip-btn" onClick={handleSkipQuestion}>Skip</button>
                                        <div className="nav-buttons">
                                            <button
                                                className="nav-btn"
                                                onClick={handleNextQuestion}
                                                disabled={!isNextEnabled && !selectedOption} // Disable if no option is selected
                                            >
                                                Next
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <div className="nav-buttons">
                                        <button
                                            className="nav-btn"
                                            onClick={finishQuiz} // Calls finishQuiz function
                                            disabled={!isNextEnabled && !selectedOption} // Disable if no option is selected
                                        >
                                            Finish
                                        </button>
                                    </div>
                                )}
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