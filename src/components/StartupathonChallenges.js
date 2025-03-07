import React from "react";
import "../styles/StartupathonChallenges.css";
// import user1 from "./user1.jpg"; // Replace with actual image path
// import user2 from "./user2.jpg";
// import user3 from "./user3.jpg";

const challenges = [
  {
    name: "P.V.Chaitanya",
    title: "Leader, VideotoGif.",
    salary: "$10500",
    description:
      "Software that automatically converts videos into captioned GIFs by segmenting transcriptions, enabling quick and creative...",
    // image: user1,
    icon: "💼",
  },
  {
    name: "Pushpak Hinglaspure",
    title: "Leader, AI Animator.",
    salary: "$10500",
    description:
      "A web app that animates two combined photos, using AI tools like Klingi or Runway ML.",
    // image: user2,
    icon: "🎨",
  },
  {
    name: "Mukul Rawat",
    title: "Leader, Market Maker Bot.",
    salary: "$10500",
    description:
      "A trading bot that identifies wallets trading only a specific cryptocurrency, tracks transactions, and buys/sells to profit from...",
    // image: user3,
    icon: "💼",
  },
];

const StartupathonChallenges = () => {
  return (
    <section className="startupathon">
      <h2>
        <span className="highlight">Completed</span> Startupathon Challenges
      </h2>
      <p className="description">
        People like you have conquered Startupathon challenges and are now
        leading thriving startups. Their journey started here{" "}
        <span className="cta">are you next?</span>
      </p>

      <div className="challenge-cards">
        {challenges.map((challenge, index) => (
          <div className="card" key={index}>
            <div className="card-header">
              <span className="icon">{challenge.icon}</span>
              <h3>{challenge.name}</h3>
            </div>
            <div className="card-body">
              <img src={challenge.image} alt={challenge.name} />
              <h4>{challenge.name}</h4>
              <p className="title">{challenge.title}</p>
              <p className="salary">CTC: <strong>{challenge.salary}</strong></p>
              <p className="desc">{challenge.description}</p>
              <button className="details-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StartupathonChallenges;
