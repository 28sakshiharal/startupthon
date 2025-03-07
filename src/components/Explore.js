import React from "react";
import "../styles/Explore.css"; // Ensure CSS is linked

// Importing images (place them inside src/assets/explore/)
// import img1 from "../assets/explore/image1.png";
// import img2 from "../assets/explore/image2.png";
// import img3 from "../assets/explore/image3.png";
// import img4 from "../assets/explore/image4.png";

const Explore = () => {
  return (
    <div className="explore-section">
      <h2 className="explore-title">
        <span className="explore-highlight">Explore</span> with Startupathon
      </h2>

      <div className="explore-grid">
        {/* <img src={img1} alt="Group 1" className="explore-img" />
        <img src={img2} alt="Group 2" className="explore-img" />
        <img src={img3} alt="Group 3" className="explore-img" />
        <img src={img4} alt="Group 4" className="explore-img" /> */}
      </div>
    </div>
  );
};

export default Explore;
