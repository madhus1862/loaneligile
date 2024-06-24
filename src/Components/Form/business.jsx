import React, { useState } from 'react';
import './form.css'; // Import CSS file for styling

function BusinessLoanForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '', 
    age: '',
    gender: '',
    contactNumber: '',
    email: '',
    address: '',
    city: '',
    state: '',
    pin: '',
    businessName: '',
    businessType: '',
    businessRegistrationNumber: '',
    businessStartDate: '',
    businessIncome: '',
    businessExpenses: '',
    businessAssets: '',
    businessLiabilities: '',
    loanType: 'Business Loan',
    loanAmount: '',
    loanPurpose: '',
    hasBusinessPlan: false,
    hasFinancialStatements: false,
    hasBusinessRegistrationDocs: false,
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
      const response = await fetch('http://127.0.0.1:5000/api/businessLoanApplications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          loanAmount: parseFloat(formData.loanAmount),
          businessIncome: parseFloat(formData.businessIncome),
          businessExpenses: parseFloat(formData.businessExpenses),
          age: parseInt(formData.age)
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
          <h2>Business Loan Application Form</h2>
          <h3>Personal Information:</h3>
          <label>Full Name:</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />

          <label>Date of Birth:</label>
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />

          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />

          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label>Contact Number:</label>
          <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />

          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Address:</label>
          <textarea name="address" value={formData.address} onChange={handleChange} required />

          <label>City:</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />

          <label>State:</label>
          <input type="text" name="state" value={formData.state} onChange={handleChange} required />

          <label>PIN:</label>
          <input type="text" name="pin" value={formData.pin} onChange={handleChange} required />
        </div>

        {/* Business Information Section */}
        <div className="form-section">
          <h3>Business Information:</h3>
          <label>Business Name:</label>
          <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} required />

          <label>Business Type:</label>
          <input type="text" name="businessType" value={formData.businessType} onChange={handleChange} required />

          <label>Business Registration Number:</label>
          <input type="text" name="businessRegistrationNumber" value={formData.businessRegistrationNumber} onChange={handleChange} />

          <label>Business Start Date:</label>
          <input type="date" name="businessStartDate" value={formData.businessStartDate} onChange={handleChange} />

          <label>Business Income:</label>
          <input type="number" name="businessIncome" value={formData.businessIncome} onChange={handleChange} required />

          <label>Business Expenses:</label>
          <input type="number" name="businessExpenses" value={formData.businessExpenses} onChange={handleChange} required />

          <label>Business Assets:</label>
          <input type="text" name="businessAssets" value={formData.businessAssets} onChange={handleChange} />

          <label>Business Liabilities:</label>
          <input type="text" name="businessLiabilities" value={formData.businessLiabilities} onChange={handleChange} />

          <label>Loan Amount:</label>
          <input type="number" name="loanAmount" value={formData.loanAmount} onChange={handleChange} required />

          <label>Loan Purpose:</label>
          <textarea name="loanPurpose" value={formData.loanPurpose} onChange={handleChange} required />

          <label>
            <input
              type="checkbox"
              name="hasBusinessPlan"
              checked={formData.hasBusinessPlan}
              onChange={handleChange}
            />
            I have a detailed business plan.
          </label>

          <label>
            <input
              type="checkbox"
              name="hasFinancialStatements"
              checked={formData.hasFinancialStatements}
              onChange={handleChange}
            />
            I have financial statements for the last 3 years.
          </label>

          <label>
            <input
              type="checkbox"
              name="hasBusinessRegistrationDocs"
              checked={formData.hasBusinessRegistrationDocs}
              onChange={handleChange}
            />
            I have business registration documents.
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

export default BusinessLoanForm;
