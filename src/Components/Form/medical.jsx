import React, { useState } from 'react';
import './form.css';

function MedicalLoanForm() {
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
    loanType: 'Medical Loan',
    loanAmount: '',
    loanTenure: '',
    hasIdentityProof: false,
    hasAddressProof: false,
    hasBankStatement: false,
    hasSalaryProof: false,
    declaration: false,
    medicalEmergencyDetails: '',
    estimatedMedicalExpenses: '',
    hasMedicalDocuments: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/api/medicalLoanApplications', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          loanAmount: parseFloat(formData.loanAmount),
          estimatedMedicalExpenses: parseFloat(formData.estimatedMedicalExpenses),
          age: parseInt(formData.age),
          netMonthlyIncome: parseFloat(formData.netMonthlyIncome),
        }),
      });

      const result = await response.json();
      if (response.ok) {
        console.log('Success:', result.message);
      } else {
        console.log('Error:', result.error);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {/* Personal Information Section */}
        <div className="form-section">
          <h2>Medical Loan Application Form</h2>
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

        {/* Medical Emergency Details Section */}
        <div className="form-section">
          <h3>Medical Emergency Details:</h3>
          <label>Details of Medical Emergency:</label>
          <textarea name="medicalEmergencyDetails" value={formData.medicalEmergencyDetails} onChange={handleChange} required />

          <label>Estimated Medical Expenses:</label>
          <input type="number" name="estimatedMedicalExpenses" value={formData.estimatedMedicalExpenses} onChange={handleChange} required />

          <label>Loan Amount:</label>
          <input type="number" name="loanAmount" value={formData.loanAmount} onChange={handleChange} required />

          <label>
            <input
              type="checkbox"
              name="hasMedicalDocuments"
              checked={formData.hasMedicalDocuments}
              onChange={handleChange}
            />
            I have medical documents or reports to support my emergency.
          </label>
        </div>

        {/* Declaration Section */}
        <div className="form-section">
          <h3>Declaration:</h3>
          {/* Add existing declaration field here */}
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

export default MedicalLoanForm;
