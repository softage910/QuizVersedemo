"use client";
import React, { useState, useRef, useEffect } from "react";
import "./Match.css";

type MatchPair = {
    left: string;
    right: string;
};

interface MatchProps {
    question: {
        question: string;
        pairs: MatchPair[];
    };
    setNextEnabled: (enabled: boolean) => void; 
    onSaveMatch: (matchedPairs: { left: string; right: string }[]) => void; 


}

const MatchTheFollowing: React.FC<MatchProps> = ({ question, setNextEnabled, onSaveMatch}) => {
    const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
    const [connections, setConnections] = useState<{ left: number; right: number }[]>([]);
    const [matchedPairs, setMatchedPairs] = useState<{ left: string; right: string }[]>([]); 


    const leftRefs = useRef<(HTMLDivElement | null)[]>([]);
    const rightRefs = useRef<(HTMLDivElement | null)[]>([]);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

        useEffect(() => {
            setNextEnabled(connections.length > 0);
        }, [connections, setNextEnabled]);

    const handleLeftClick = (index: number) => {
        setSelectedLeft(index);
    };


const handleRightClick = (index: number) => {
    if (selectedLeft !== null) {
        setConnections((prevConnections) => {
 
            const existingConnection = prevConnections.find(conn => conn.right === index);

            if (existingConnection) {
           
                return prevConnections.filter(conn => conn.right !== index);
            }

 
            const filteredConnections = prevConnections.filter(conn => conn.left !== selectedLeft);

        
            return [...filteredConnections, { left: selectedLeft, right: index }];
        });

        setSelectedLeft(null);
    }
};

const resetSelections = () => {
    setConnections([]); 
    setSelectedLeft(null); 
    setMatchedPairs([]);
    onSaveMatch([]);
};



    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
    
       
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
    
        connections.forEach(({ left, right }) => {
            const leftElement = leftRefs.current[left];
            const rightElement = rightRefs.current[right];
    
            if (leftElement && rightElement) {
                const leftRect = leftElement.getBoundingClientRect();
                const rightRect = rightElement.getBoundingClientRect();
    
                const startX = leftRect.right + 10; // Start at the right of left item
                const startY = leftRect.top + leftRect.height / 2;
                const endX = rightRect.left - 10; // End at the left of right item
                const endY = rightRect.top + rightRect.height / 2;
    
                ctx.beginPath();
                ctx.moveTo(startX, startY);
                ctx.lineTo(endX, endY);
                ctx.strokeStyle = "blue"; 
                ctx.lineWidth = 2;
                ctx.stroke();
    
                
                const arrowSize = 8; 
                const angle = Math.atan2(endY - startY, endX - startX);
    
                ctx.beginPath();
                ctx.moveTo(endX, endY);
                ctx.lineTo(
                    endX - arrowSize * Math.cos(angle - Math.PI / 6),
                    endY - arrowSize * Math.sin(angle - Math.PI / 6)
                );
                ctx.lineTo(
                    endX - arrowSize * Math.cos(angle + Math.PI / 6),
                    endY - arrowSize * Math.sin(angle + Math.PI / 6)
                );
                ctx.lineTo(endX, endY);
                ctx.fillStyle = "blue"; // Arrow color
                ctx.fill();
            }
        });

        const matchedData = connections.map(conn => ({
            left: question.pairs[conn.left].left,
            right: question.pairs[conn.right].right
        }));

        setMatchedPairs(matchedData);
        setNextEnabled(matchedData.length > 0); // ✅ Enable 'Next' if pairs exist
        onSaveMatch(matchedData);
    }, [connections, question.pairs, setNextEnabled, onSaveMatch]);
    

    return (
        <div className="match-container">
            
            {/* ✅ Canvas for Drawing Connections */}
            <canvas ref={canvasRef} className="match-canvas"></canvas>

            <div className="columns">
                {/* Left Side Items */}
                <div className="column">
                    {question.pairs.map((pair, index) => (
                        <div
                            key={index}
                            ref={(el) => { if (el) leftRefs.current[index] = el; }}
                            className={`match-item left-item ${selectedLeft === index ? "selected" : ""}`}
                            onClick={() => handleLeftClick(index)}
                        >
                            {pair.left}
                        </div>
                    ))}
                </div>

                {/* Right Side Items */}
                <div className="column">
                    {question.pairs.map((pair, index) => (
                        <div
                            key={index}
                            ref={(el) => { if (el) rightRefs.current[index] = el; }} // ✅ Fixed reference
                            className="match-item right-item"
                            onClick={() => handleRightClick(index)}
                        >
                            {pair.right}
                        </div>
                    ))}
                </div>
            </div>
            {/* ✅ Reset Button */}
            <button className="reset-button" onClick={resetSelections}>
                Reset
            </button>
        </div>
    );
};

export default MatchTheFollowing;




