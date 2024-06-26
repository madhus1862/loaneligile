import React, { useState } from 'react';
import './form.css';

function BusinessLoanForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    loanAmount: '',
    businessDetails: '',
    businessPlan: '',
    age: '',
    gender: '',
    netMonthlyIncome: '',
    creditScore: '',
    hasBusinessPlan: false
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
    const formDataCopy = { ...formData };
    formDataCopy.loanAmount = parseFloat(formData.loanAmount);
    formDataCopy.netMonthlyIncome = parseFloat(formData.netMonthlyIncome);
    formDataCopy.creditScore = parseFloat(formData.creditScore);

    try {
      const response = await fetch('http://127.0.0.1:5000/apply/business-loan', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDataCopy),
      });

      const result = await response.json();
      if (response.ok) {
        alert(`Success: ${result.message}`);
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      alert(`Error: ${error}`);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Business Loan Application</h2>
        <div className="form-section">
          <h3>Personal Information:</h3>
          <label>Full Name:</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />

          <label>Loan Amount Required:</label>
          <input type="number" name="loanAmount" value={formData.loanAmount} onChange={handleChange} required />

          <label>Business Details:</label>
          <textarea name="businessDetails" value={formData.businessDetails} onChange={handleChange} required />

          <label>Business Plan:</label>
          <textarea name="businessPlan" value={formData.businessPlan} onChange={handleChange} required />

          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />

          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label>Net Monthly Income:</label>
          <input type="number" name="netMonthlyIncome" value={formData.netMonthlyIncome} onChange={handleChange} required />

          <label>Credit Score:</label>
          <input type="number" name="creditScore" value={formData.creditScore} onChange={handleChange} required />

          <label>
            <input
              type="checkbox"
              name="hasBusinessPlan"
              checked={formData.hasBusinessPlan}
              onChange={handleChange}
            />
            Business Plan
          </label>
        </div>

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}

export default BusinessLoanForm;
