"use client";
import "./RoadMap.css";

const levels = [
  { id: 1, title: "Day 1: Introduction", top: "85%", left: "5%" },
  { id: 2, title: "Day 2: Basics", top: "60%", left: "30%" },
  { id: 3, title: "Day 3: Intermediate", top: "70%", left: "50%" },
  { id: 4, title: "Day 4: Advanced", top: "40%", left: "70%" },
  { id: 5, title: "Day 5: Projects", top: "20%", left: "90%" },
];

export default function Roadmap() {
  return (
    <div className="container">
      <svg viewBox="0 0 600 400" className="roadSvg">
        <path
          d="M10,350 Q150,200 300,300 T590,150"
          stroke="#333"
          strokeWidth="20"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="30,10"
        />
      </svg>

      <div className="steps">
        {levels.map((level) => (
          <div
            key={level.id}
            className="steps"
            style={{ top: level.top, left: level.left }}
          >
            <div className="marker">{level.id}</div>
            <p>{level.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
