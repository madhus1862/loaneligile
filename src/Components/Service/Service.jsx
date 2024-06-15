import React from 'react'
import "./Service.css";
import benefitsImage from '../Assets/loan8.jpg';
import OverviewImage from '../Assets/loan9.jpg';
import howitworksImage from '../Assets/loan10.jpg';
function Service() {
  return (
        <div className="service-page">
      <div className="section">
        <div className="section-content">
          <h1>Overview:</h1><br/>
          <p>
            Our loan eligibility prediction service leverages cutting-edge machine learning algorithms to assess your likelihood of obtaining a loan.<br/>
          </p>
        </div>
        <div className="section-image">
          <img src={OverviewImage}  alt="Overview" />
        </div>
      </div>

      <div className="section reverse">
        <div className="section-content">
          <h2>How It Works:</h2><br/>
          <ol>
            <li>Input Information: Provide details such as personal information, employment status, financial history, and loan requirements.</li><br/>
            <li>Machine Learning Analysis: Our platform utilizes advanced machine learning models trained on extensive datasets to analyze your input information.</li><br/>
            <li>Instant Prediction: Receive instant feedback on your loan eligibility status, including the likelihood of approval and potential loan amount.</li>
          </ol>
        </div>
        <div className="section-image">
          <img src={howitworksImage} alt="How It Works" />
        </div>
      </div>

      <div className="section">
        <div className="section-content">
          <h2>Benefits:</h2><br/>
          <ul>
            <li>Save Time: Avoid lengthy application processes by knowing your eligibility upfront.</li><br />
            <li>Enhanced Confidence: Make informed decisions with accurate predictions tailored to your financial profile.</li><br/>
            <li>Customized Recommendations: Receive personalized recommendations to improve your eligibility and secure better loan offers.</li>
          </ul>
        </div>
        <div className="section-image">
          <img src={benefitsImage} alt="Benefits" />
        </div>
      </div>
    </div>
  )
}


export default Service;