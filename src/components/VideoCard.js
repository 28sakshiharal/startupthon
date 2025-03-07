import React from "react";
import { FaClock, FaEye, FaComment, FaLink, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/VideoCard.css";

const VideoCard = () => {
  return (
    <div className="video-card">
      <div className="video-header">
        <span className="video-title">Building Billion-Dollar Companies: Startup-A-Thon Insights</span>
      </div>
      <div className="video-thumbnail">
        <button className="play-button">▶</button>
      </div>
      <div className="video-info">
        <span><FaClock /> 14 min</span>
        <span><FaEye /> 6.06K views</span>
      </div>
      <div className="video-footer">
        <span><FaComment /> 11</span>
        <span><FaLink /></span>
        <span><FaExternalLinkAlt /></span>
      </div>
    </div>
  );
};

export default VideoCard;
