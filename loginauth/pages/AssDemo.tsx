"use client"; // Ensures this runs only on the client side

import { useRouter } from "next/navigation";
import "./Assessment1.css";

export default function FirstAssessment() {
    const router = useRouter();

    const finishQuiz = () => {
        if (document.fullscreenElement) {
            document.exitFullscreen().catch(err => console.error("Error exiting fullscreen:", err));
        }
        router.push("/dashboard"); // Redirect to dashboard
    };

    return (
        <div className="Assessment-Section">
            <div className="quiz-container">
                <h2>MacOS Keyboard Shortcuts Quiz</h2>
                <div className="question">
                    <p>Which keyboard shortcut copies selected text or items in macOS?</p>
                    <div className="options">
                        <label><input type="radio" name="q1" /> A. Command+C</label>
                        <label><input type="radio" name="q1" /> B. Command+V</label>
                        <label><input type="radio" name="q1" /> C. Command+X</label>
                        <label><input type="radio" name="q1" /> D. Command+Z</label>
                    </div>
                </div>

                <div className="question">
                    <p>Which shortcut pastes the content from the clipboard?</p>
                    <div className="options">
                        <label><input type="radio" name="q2" /> A. Command+X</label>
                        <label><input type="radio" name="q2" /> B. Command+V</label>
                        <label><input type="radio" name="q2" /> C. Command+N</label>
                        <label><input type="radio" name="q2" /> D. Command+Z</label>
                    </div>
                </div>

                <div className="question">
                    <p>Which shortcut cuts selected items so you can paste them elsewhere?</p>
                    <div className="options">
                        <label><input type="radio" name="q3" /> A. Command+C</label>
                        <label><input type="radio" name="q3" /> B. Command+V</label>
                        <label><input type="radio" name="q3" /> C. Command+X</label>
                        <label><input type="radio" name="q3" /> D. Command+S</label>
                    </div>
                </div>

                <div className="question">
                    <p>Which shortcut undoes the last action?</p>
                    <div className="options">
                        <label><input type="radio" name="q4" /> A. Command+Y</label>
                        <label><input type="radio" name="q4" /> B. Command+Shift+Z</label>
                        <label><input type="radio" name="q4" /> C. Command+Shift+Y</label>
                        <label><input type="radio" name="q4" /> D. Command+Z</label>
                    </div>
                </div>

                <div className="question">
                    <p>What is the shortcut to redo an action that was just undone?</p>
                    <div className="options">
                        <label><input type="radio" name="q5" /> A. Command+Shift+Z</label>
                        <label><input type="radio" name="q5" /> B. Command+Y</label>
                        <label><input type="radio" name="q5" /> C. Command+Z</label>
                        <label><input type="radio" name="q5" /> D. Command+R</label>
                    </div>
                </div>

                <div className="question">
                    <p>Which key combination selects all items in the current window or document?</p>
                    <div className="options">
                        <label><input type="radio" name="q6" /> B. Command+A</label>
                        <label><input type="radio" name="q6" /> A. Command+S</label>
                        <label><input type="radio" name="q6" /> C. Command+O</label>
                        <label><input type="radio" name="q6" /> D. Command+P</label>
                    </div>
                </div>

                <div className="question">
                    <p>What is the keyboard shortcut to save the current document?</p>
                    <div className="options">
                        <label><input type="radio" name="q7" /> B. Command+N</label>
                        <label><input type="radio" name="q7" /> A. Command+P</label>
                        <label><input type="radio" name="q7" /> C. Command+S</label>
                        <label><input type="radio" name="q7" /> D. Command+Q</label>
                    </div>
                </div>

                <div className="question">
                    <p>What is the shortcut to quit the active application?</p>
                    <div className="options">
                        <label><input type="radio" name="q8" /> A. Command+W</label>
                        <label><input type="radio" name="q8" /> B. Command+Q</label>
                        <label><input type="radio" name="q8" /> C. Command+E</label>
                        <label><input type="radio" name="q8" /> D. Command+Option+Q</label>
                    </div>
                </div>

                {/* Finish Button */}
                <button className="finish-button" onClick={finishQuiz}>Finish</button>
            </div>
        </div>
    );
}
