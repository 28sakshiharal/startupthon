import React from "react";
import "../styles/ProTips.css";

const ProTips = () => {
  return (
    <div className="pro-tips">
      <div className="pro-tips-content">
        <h2>
          Work Smart, Win Big: Pro Tips from Swapnil Sharma, CTO of SongGPT
        </h2>
        <h3 className="subheading">(A Startupathon Success)</h3>
        <p>
          Learn invaluable insights and strategies from Swapnil Sharma's journey
          to success.
        </p>
      </div>

      <div className="pro-tips-video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ProTips;
