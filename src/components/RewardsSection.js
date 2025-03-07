import React from "react";
import "../styles/RewardsSections.css";
import { FaMoneyBillWave, FaBuilding, FaUserTie, FaCode, FaCloud } from "react-icons/fa";

const rewardsData = [
  { icon: <FaMoneyBillWave />, text: "Competitive salary" },
  { icon: <FaBuilding />, text: "> $10,000 USD in company funding" },
  { icon: <FaUserTie />, text: ">10% founder equity" },
  { icon: <FaCode />, text: "Access to top-tier engineering talent" },
  { icon: <FaCloud />, text: "Premium cloud credits" }
];

const RewardsSection = () => {
  return (
    <section className="rewards">
      <h2>Startupathon <span>Success</span> Comes with <br /> <span>Extraordinary Rewards</span></h2>
      <p>
        Unlock unparalleled opportunities and exclusive benefits designed to accelerate your startup journey. 
        From funding and equity to premium cloud credits—your path to success starts here!
      </p>
      <div className="rewards-grid">
        {rewardsData.map((reward, index) => (
          <div className="reward-card" key={index}>
            <div className="icon">{reward.icon}</div>
            <p>{reward.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RewardsSection;
