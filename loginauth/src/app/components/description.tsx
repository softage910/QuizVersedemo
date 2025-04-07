// components/DescriptionSection.js

import React from "react";
import Image from "next/image";
import Logo from "../../../public/Logo.png";

export default function DescriptionSection() {
  return (
    <div className="container">
      <div className="Logo">
        <Image src={Logo} alt="Logo" width={250} height={50} />
      </div>
      <div className="description-section">
      <h1 className="Welcome-Heading">Welcome to the</h1>
        <div className="heading">
          {/* <h1 className="typingeffect">Welcome to the<br/><span>AI Operations</span>Team</h1> */}
        <h1 className="typing">AI Operations Team</h1>
        </div>
        <div className="main-content">
          <ul>
            <li>The training program provides a well-rounded curriculum that takes you step by step through the learning process.</li>
            <li>Starting with fundamental concepts and gradually moving toward advanced topics in AI data creation.</li>
            <li>Build a strong foundation while progressively tackling more complex challenges, giving you a thorough understanding of the subject matter.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}



