import React, { useState } from 'react';
import './form.css'; // Import CSS file for styling

function TravelForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    age: '',
    gender: '',
    contactNumber: '',
    email: '',
    address: '',
    city: '',
    state: '',
    pin: '',
    employmentType: '',
    employerName: '',
    netMonthlyIncome: '',
    loanAmount: '',
    hasIdentityProof: false,
    hasAddressProof: false,
    hasBankStatement: false,
    hasSalaryProof: false,
    declaration: false,
    // New fields for travel details
    purposeOfTravel: '',
    travelItinerary: '',
    travelCostEstimates: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
    console.log(formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
      <h2>Travel Loan Application Form</h2>
       {/* Personal Information Section */}
        <div className="form-section">
          <h3>Personal Information:</h3>
          <label>Full Name:</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />

          <label>Date of Birth:</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} />

          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} />

          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label>Contact Number:</label>
          <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />

          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />

          <label>Address:</label>
          <textarea name="address" value={formData.address} onChange={handleChange} />

          <label>City:</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} />

          <label>State:</label>
          <input type="text" name="state" value={formData.state} onChange={handleChange} />

          <label>PIN:</label>
          <input type="text" name="pin" value={formData.pin} onChange={handleChange} />
        </div>

        {/* Employment Details Section */}
        {/* <div className="form-section">
          <h3>Employment Details:</h3>
          <label>Employment Type:</label>
          <input type="text" name="employmentType" value={formData.employmentType} onChange={handleChange} />

          <label>Employer Name:</label>
          <input type="text" name="employerName" value={formData.employerName} onChange={handleChange} />

          <label>Net Monthly Income:</label>
          <input type="number" name="netMonthlyIncome" value={formData.netMonthlyIncome} onChange={handleChange} />
        </div> */}


        {/* Travel Details Section */}
        <div className="form-section">
          <h3>Travel Details:</h3>
          <label>Purpose of Travel:</label>
          <input type="text" name="purposeOfTravel" value={formData.purposeOfTravel} onChange={handleChange} />

          <label>Travel Itinerary:</label>
          <textarea name="travelItinerary" value={formData.travelItinerary} onChange={handleChange} />

          <label>Travel Cost Estimates:</label>
          <input type="text" name="travelCostEstimates" value={formData.travelCostEstimates} onChange={handleChange} />

          <label>Loan Amount Required:</label>
          <input type="number" name="loanAmount" value={formData.loanAmount} onChange={handleChange} />
        </div>
{/* Loan Details Section */}
<div className="form-section">
          <h3>Loan Details:</h3>
          <label>Loan Amount:</label>
          <input type="number" name="loanAmount" value={formData.loanAmount} onChange={handleChange} required />

          <label>Loan Purpose:</label>
          <input type="text" name="loanPurpose" value={formData.loanPurpose} onChange={handleChange} required />
          <label>Interest Rate Type:</label>
          <select name="interestRateType" value={formData.interestRateType} onChange={handleChange}>
            <option value="">Select Interest Rate Type</option>
            <option value="fixed">Fixed</option>
            <option value="variable">Variable</option>
          </select>
        </div>

        {/* Documents Required Section */}
        <div className="form-section">
          <h3>Documents Required:</h3>
          <label>
            <input
              type="checkbox"
              name="hasIdentityProof"
              checked={formData.hasIdentityProof}
              onChange={handleChange}
            />
            Identity Proof / Address Proof
          </label>

          <label>
            <input
              type="checkbox"
              name="hasAddressProof"
              checked={formData.hasAddressProof}
              onChange={handleChange}
            />
            Address Proof
          </label>

          <label>
            <input
              type="checkbox"
              name="hasBankStatement"
              checked={formData.hasBankStatement}
              onChange={handleChange}
            />
            Bank Statement
          </label>

          <label>
            <input
              type="checkbox"
              name="hasSalaryProof"
              checked={formData.hasSalaryProof}
              onChange={handleChange}
            />
            Salary Proof
          </label>
        </div>

        {/* Declaration Section */}
        <div className="form-section">
          <h3>Declaration:</h3>
          <label>
            <input
              type="checkbox"
              name="declaration"
              checked={formData.declaration}
              onChange={handleChange}
            />
            I declare that the information provided above is true to the best of my knowledge.
          </label>
        </div>

        {/* Button Group */}
        <div className="button-group">
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </div>
  );
}

export default TravelForm;