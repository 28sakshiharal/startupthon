import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import EventDetails from "./components/EventDetails";
import Schedule from "./components/Schedule";
import Speakers from "./components/Speakers";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";
import RewardsSection from "./components/RewardsSection";
import ChallengesSection from "./components/ChallengesSections";
import HowItWorks from "./components/HowItWorks";
import Explore from "./components/Explore";
import ProTips from "./components/ProTips";
import HiringProcess from "./components/HiringProcess";
import StartupathonChallenges from "./components/StartupathonChallenges";
import FellowshipCTA from "./components/FellowshipCTA";
import FounderNetwork from "./components/FounderNetwork";
import SubscriptionForm from "./components/SubscriptionForm";
import "./App.css";

function App() {
  return (
    <> 
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/event-details" element={<EventDetails />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/sponsors" element={<Sponsors />} />
      </Routes>
      <RewardsSection />  {/* ✅ Add Rewards Section */}
      <ChallengesSection />  {/* ✅ Add Challenges Section */}
      <HowItWorks />
      <Explore />
      <ProTips />
      <HiringProcess />
      <StartupathonChallenges />
      <FellowshipCTA />
      <FounderNetwork />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", background: "#0c0617" }}>
      <SubscriptionForm />
      </div>
      <div style={{ background: "#0c0617", minHeight: "100vh" }}>
      <Footer />
    </div>
    </>
  );
}

export default App;
