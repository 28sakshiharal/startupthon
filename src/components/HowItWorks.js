import React from "react";
import "../styles/HowItWorks.css"; // Ensure the CSS file exists
// import step1Image from "../assets/html-illustration.png"; // Correct path for Step 1 image
// import step2Image from "../assets/video-illustration.png"; // Correct path for Step 2 image

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <h2 className="section-title">
        Found an <span className="highlight">idea</span> that matches your skills?
      </h2>
      <p className="subtitle">
        Here's a simple guide on how the Startupathon process works once you find a project idea that suits your skills.
      </p>

      {/* Step 1: Build, Submit & Shine */}
      <div className="step">
        <div className="step-content">
          <h3 className="step-number">01</h3>
          <h2 className="step-title">Build, Submit & Shine</h2>
          <p className="step-description">
            Create a prototype and submit it with a Loom video. No complex code, just your best ideas.
          </p>
          <p className="tip">✅ Stay ahead: Submit on time or early to show your dedication!</p>
        </div>
        <div className="step-image">
          {/* <img src={step1Image} alt="HTML Illustration" /> */}
        </div>
      </div>

      {/* Step 2: Dive into the Challenge Details Video */}
      <div className="step step-reverse">
        <div className="step-image">
          {/* <img src={step2Image} alt="Challenge Details Video" /> */}
        </div>
        <div className="step-content">
          <h3 className="step-number">02</h3>
          <h2 className="step-title">Dive into the Challenge Details Video</h2>
          <p className="step-description">
            Watch a video revealing your startup task. Get inspired, align with our vision, and start strong.
          </p>
          <p className="tip">✅ Stay ahead: Submit on time or early to show your dedication!</p>
        </div>
      </div>
      {/* Step 3 */}
      <div className="howitworks-step">
        <div className="step-content">
          <h3>03</h3>
          <h2>Get Feedback, Level Up!</h2>
          <p>
            We review in three days. If you shine, you're in! If not, refine and
            submit again.
          </p>
          <p className="highlight-text">
            🔹 Stay ahead: Submit on time or early to show your dedication!
          </p>
        </div>
        {/* <img src={step3Img} alt="Get Feedback, Level Up!" className="step-image" /> */}
      </div>
      {/* Step 4 */}
      <div className="howitworks-step">
        {/* <img src={step4Img} alt="Claim Your Crown" className="step-image" /> */}
        <div className="step-content">
          <h3>04</h3>
          <h2>Claim Your Crown</h2>
          <p>
            Win the challenge to lead the project with equity, ownership, and
            great rewards.
          </p>
          <p className="highlight-text">
            🔹 Stay ahead: Submit on time or early to show your dedication!
          </p>
        </div>
      </div>
     </div>
  );
};

export default HowItWorks;
