import React from "react";
import VideoCard from "./VideoCard";
import RewardsSection from "./RewardsSection";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <div>
      <section className="hero">
        <h1>Your Chance to Build, Lead, and Succeed as a Founder</h1>
        <p>Join a thriving community...</p>
      </section>
      <VideoCard />
      <RewardsSection />
    </div>
  );
};

export default HeroSection;
