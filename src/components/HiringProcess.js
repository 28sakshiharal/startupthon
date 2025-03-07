import React from "react";
import "../styles/HiringProcess.css";
// import videoThumbnail from "./video-thumbnail.jpg"; // Replace with your actual image

const HiringProcess = () => {
  return (
    <div className="hiring-process">
      <div className="video-section">
        <div className="video-thumbnail">
          {/* <img src={videoThumbnail} alt="Hiring Process Video" /> */}
          <div className="overlay">
            <button className="play-button">▶</button>
            <div className="video-info">
              <p className="video-title">How We Empower Leaders Without...</p>
              <div className="video-stats">
                <span>⏳ 10 min</span>
                <span>👁 5.48K views</span>
                <span>💬 107</span>
              </div>
            </div>
            <div className="speed-info">
              <p>⚡ 1.2×</p>
              <p className="time-left">8 min 23 sec</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-section">
        <h2>Our Hiring Process: Shared Through Candidate Stories</h2>
        <h3 className="subheading">Real Experiences, Real Journeys</h3>
        <p>
          Discover our hiring process through the stories of candidates who
          navigated each stage, sharing insights, challenges, and successes
          along the way.
        </p>
      </div>
    </div>
  );
};

export default HiringProcess;
