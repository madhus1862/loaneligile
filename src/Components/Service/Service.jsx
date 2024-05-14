import React from 'react'
import "./Service.css";
function Service() {
  return (
    <div className="service-page">
      <h1>Loan Eligibility Prediction Service</h1><br/>
      <div className="service-content">
        <h1>Overview</h1><br/>
        <p>
          Our loan eligibility prediction service leverages cutting-edge machine learning algorithms to assess your likelihood of obtaining a loan.
        </p>
        <h2>How It Works</h2><br/>
        <ol>
          <li>Input Information: Provide details such as personal information, employment status, financial history, and loan requirements.</li>
          <li>Machine Learning Analysis: Our platform utilizes advanced machine learning models trained on extensive datasets to analyze your input information.</li>
          <li>Instant Prediction: Receive instant feedback on your loan eligibility status, including the likelihood of approval and potential loan amount.</li>
        </ol>
        <h2>Benefits</h2><br/>
        <ul>
          <li>Save Time: Avoid lengthy application processes by knowing your eligibility upfront.</li>
          <li>Enhanced Confidence: Make informed decisions with accurate predictions tailored to your financial profile.</li>
          <li>Customized Recommendations: Receive personalized recommendations to improve your eligibility and secure better loan offers.</li>
        </ul>
      </div>
    </div>
  )
}

export default Service;