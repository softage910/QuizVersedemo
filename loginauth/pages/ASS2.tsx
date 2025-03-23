"use client";
import "./TestPage.css";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ref, get, set } from "firebase/database"; // Import Firebase functions
import { auth, database } from "../src/app/firebase/firebaseconfig"; // Import Firebase config
import Logo from "../public/Logo.png";
import MatchTheFollowing from "@/app/components/Match";


const MultipleChoiceQuestion = ({ question, selectedOption, handleOptionChange }: any) => (
    <div className="options-section">
        {question.options.map((option: string, index: number) => (
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
);

const TrueFalseQuestion = ({ selectedOption, handleOptionChange }: any) => (
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
);

const FillInTheBlankQuestion = ({ selectedOption, handleOptionChange }: any) => (
    <div className="fill-blank-section">
<textarea
    placeholder="Enter your answer"
    value={selectedOption || ""}
    onChange={(e) => handleOptionChange(e.target.value)}
    className="fill-blank-input"
    rows={4} // Adjust the number of rows as needed
/>
    </div>
);



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
const [isNextEnabled, setNextEnabled] = useState(false); // ✅ State to track Next button
const [matchedPairs, setMatchedPairs] = useState<{ left: string; right: string }[]>([]); // ✅ Store matched data



const matchQuestion = {
    title: "Match the following",
    left: ["Apple", "Banana", "Carrot"],
    right: ["Fruit", "Vegetable", "Fruit"],
};

const [selectedPairs, setSelectedPairs] = useState<{ [key: string]: string }>({});

const handleMatchChange = (updatedPairs: { [key: string]: string }) => {
    setSelectedPairs(updatedPairs);
};

    

useEffect(() => {
    const fetchQuestions = async () => {
        const questionsRef = ref(database, "AssessmentContent/day3/Assessment/questions");
        const snapshot = await get(questionsRef);
    
        if (snapshot.exists()) {
            const fetchedQuestionsObj = snapshot.val();
            
            // Convert all question types into arrays
            const multipleChoice = fetchedQuestionsObj.multipleChoice ? Object.values(fetchedQuestionsObj.multipleChoice) : [];
            const fillInTheBlank = fetchedQuestionsObj.fillInTheBlank ? Object.values(fetchedQuestionsObj.fillInTheBlank) : [];
            const trueFalse = fetchedQuestionsObj.trueFalse ? Object.values(fetchedQuestionsObj.trueFalse) : [];
            const matchTheFollowing = fetchedQuestionsObj.matchTheFollowing ? Object.values(fetchedQuestionsObj.matchTheFollowing) : [];

            // Combine all question types
            const allQuestions = [...multipleChoice, ...fillInTheBlank, ...trueFalse, ...matchTheFollowing];

            // Shuffle all questions
            const shuffledQuestions = allQuestions.sort(() => Math.random() - 0.5);

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
            set(ref(database, `responses/${userId}/day3/${currentQuestionIndex}`), {
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


            set(ref(database, `responses/${userId}/day3/${currentQuestionIndex}`), matchedPairs)
                .then(() => console.log("Matched pairs saved successfully!"))
                .catch((error) => console.error("Error saving matched pairs:", error));

            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            setNextEnabled(false);
        }

        // Prevent proceeding without selection
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


    //  const finishQuiz = async () => {
    //      if (document.fullscreenElement) {
    //          document.exitFullscreen().catch(err => console.error("Error exiting fullscreen:", err));
    //      }
     
    //      const user = auth.currentUser;
    //      if (!user) {
    //          console.error("No authenticated user found!");
    //          return;
    //      }


     
    //      const userId = user.uid;
    //      const day = "Day3"; // Dynamically set this based on the quiz day

    //      router.push("/dashboard");

     
    //      try {
    //          // Store quiz completion status in Firebase under the correct day
    //          await set(ref(database, `users/${userId}/progress/${day}/Assessment`), true);
     
    //          // Fetch user details from Firebase
    //          const userRef = ref(database, `users/${userId}`);
    //          const userSnapshot = await get(userRef);
     
    //          if (!userSnapshot.exists()) {
    //              throw new Error("User details not found in Firebase");
    //          }
     
    //          const userDetails = userSnapshot.val(); // Assuming it contains { name, empCode, email }
     
    //          // Fetch responses from Firebase
    //          const responsesRef = ref(database, `responses/${userId}/day3`);
    //          const snapshot = await get(responsesRef);
     
    //          let formattedResponses: { question: string; answer: string }[] = [];
     
    //          if (snapshot.exists()) {
    //              const data = snapshot.val();
    //              formattedResponses = Object.entries(data).map(([_, response]: any) => ({
    //                  name: userDetails.name,
    //                  email: userDetails.email,
    //                  EmpCode: userDetails.uid,
    //                  question: response.question,
    //                  answer: response.selectedOption, // Only keeping question and answer
    //              }));
    //          }
     
    //          // Combine user details with responses
    //          const csvData = {
    //              name: userDetails.name,
    //              email: userDetails.email,
    //              EmpCode: userDetails.uid,
    //              Day: "Day3 - Prompting Mastery Assessment",
    //              responses: formattedResponses, // Only question and answer columns
    //          };
     
    //          // Send CSV data to the admin
    //          const response = await fetch("/api/send-csv", {
    //              method: "POST",
    //              headers: { "Content-Type": "application/json" },
    //              body: JSON.stringify(csvData),
    //          });
     
    //          if (!response.ok) throw new Error("Failed to send CSV");
     
     
    //          // Redirect user to the dashboard
    //      } catch (error) {
    //          console.error("Error during quiz submission:", error);
    //          alert("There was an error submitting the quiz. Please try again.");
    //      }
    //  };
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
        const day = "Day3";
    
        router.push("/dashboard");
    
        try {
            await set(ref(database, `users/${userId}/progress/${day}/Assessment`), true);
    
            const userRef = ref(database, `users/${userId}`);
            const userSnapshot = await get(userRef);
    
            if (!userSnapshot.exists()) {
                throw new Error("User details not found in Firebase");
            }
    
            const userDetails = userSnapshot.val();
    
            const responsesRef = ref(database, `responses/${userId}/day3`);
            const snapshot = await get(responsesRef);
    
            let formattedResponses: { question: string; answer: string }[] = [];
    
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
                Day: "Day3 - Prompting Mastery Assessment",
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
                    <h1 className="online-test-title">Prompting Mastery Assessment</h1>
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
                                <MultipleChoiceQuestion
                                    question={questions[currentQuestionIndex]}
                                    selectedOption={selectedOption}
                                    handleOptionChange={handleOptionChange}
                                />
                            )}
                            {questions[currentQuestionIndex]?.type === "TF" && (
                                <TrueFalseQuestion
                                    selectedOption={selectedOption}
                                    handleOptionChange={handleOptionChange}
                                />
                            )}
                            {questions[currentQuestionIndex]?.type === "fillblank" && (
                                <FillInTheBlankQuestion
                                    selectedOption={selectedOption}
                                    handleOptionChange={handleOptionChange}
                                />
                            )}
                            {questions[currentQuestionIndex]?.type === "match" && (
                            <MatchTheFollowing question={questions[currentQuestionIndex]} setNextEnabled={setNextEnabled} onSaveMatch={setMatchedPairs}

                            // Pass this function
                            /> // Render MatchTheFollowing component
                            )}


                            {/* <div className="actions">
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
                            </div> */}

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
