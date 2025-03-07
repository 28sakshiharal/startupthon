import React from "react";
import "../styles/FellowshipCTA.css";
// import crystalIcon from "./crystal.png"; // Replace with actual image path

const FellowshipCTA = () => {
  return (
    <div className="fellowship-container">
      <div className="fellowship-card">
        {/* <img src={crystalIcon} alt="Icon" className="cta-icon" /> */}
        <h2>Got an Idea of Your Own? Let's Make It Happen!</h2>
        <p>
          We are always on the lookout for visionary founders with groundbreaking
          startup ideas. If you're ready to turn your vision into reality, apply below
          for our Fellowship Program and take the first step toward success.
        </p>
        <button className="cta-button">
          Apply for Fellowship <span className="arrow">↗</span>
        </button>
      </div>
    </div>
  );
};

export default FellowshipCTA;
