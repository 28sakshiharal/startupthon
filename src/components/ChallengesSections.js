import React from "react";
import "../styles/ChallengesSections.css";

const challenges = [
  {
    title: "VideoVerse",
    ctc: "13000",
    description:
      "Seeking a Creative AI Developer to build innovative video and music generation tools using APIs for an exciting project at Startupathon.",
    image: "/images/videoverse-icon.png",
  },
  {
    title: "VeneersAI",
    ctc: "10500",
    description:
      "Build a SaaS AI tool for veneers visualization, earn equity, salary, and launch your entrepreneurial journey with world-class support.",
    image: "/images/veneersai-icon.png",
  },
  {
    title: "RhinoplastyAI",
    ctc: "13000",
    description:
      "Develop an innovative Rhinoplasty AI tool to visualize nose reshaping outcomes, with the opportunity to become a founder, earn equity, and receive funding and resources.",
    image: "/images/rhinoplastyai-icon.png",
  },
];

const ChallengesSection = () => {
  return (
    <section className="challenges-container">
      <h2>
        Ongoing Startupathon <span className="highlight">Challenges</span>
      </h2>
      <p>
        Start your journey—tackle live challenges, earn equity, and lead the
        future. Compete with top innovators, solve real-world problems, and
        unlock exclusive rewards as you build the next big thing.
      </p>

      <div className="challenges-grid">
        {challenges.map((challenge, index) => (
          <div key={index} className="challenge-card">
            <img src={challenge.image} alt={challenge.title} className="challenge-icon" />
            <h3>{challenge.title}</h3>
            <span className="ctc">CTC: {challenge.ctc} 💰</span>
            <p>{challenge.description}</p>
            <button className="view-details-btn">View Details</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChallengesSection;
