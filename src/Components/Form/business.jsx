import React, { useState } from 'react';
import './form.css'; // Import CSS file for styling

function BusinessLoanForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '', // Corrected property name
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
    console.log(formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
       
      <h2>Business Loan Application Form</h2>
        {/* Personal Information Section */}
        <div className="form-section">
          <h3>Personal Information:</h3>
          <label>Full Name:</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />

          <label>Date of Birth:</label>
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />

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

        {/* Business Information Section */}

        <div className="form-section">
          <h3>Business Information:</h3>
          <label>Business Name:</label>
          <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} required />

          <label>Business Type:</label>
          <input type="text" name="businessType" value={formData.businessType} onChange={handleChange} required />

          <label>Business Registration Number:</label>
          <input type="text" name="businessRegistrationNumber" value={formData.businessRegistrationNumber} onChange={handleChange} required />

          <label>Business Start Date:</label>
          <input type="date" name="businessStartDate" value={formData.businessStartDate} onChange={handleChange} required />

          <label>Business Income:</label>
          <input type="number" name="businessIncome" value={formData.businessIncome} onChange={handleChange} required />

          <label>Business Expenses:</label>
          <input type="number" name="businessExpenses" value={formData.businessExpenses} onChange={handleChange} required />

          <label>Business Assets:</label>
          <input type="number" name="businessAssets" value={formData.businessAssets} onChange={handleChange} required />

          <label>Business Liabilities:</label>
          <input type="number" name="businessLiabilities" value={formData.businessLiabilities} onChange={handleChange} required />
        </div>

        <h3>Employment Details:</h3>
          <label>Employment Type:</label>
          <input type="text" name="employmentType" value={formData.employmentType} onChange={handleChange} />

          <label>Employer Name:</label>
          <input type="text" name="employerName" value={formData.employerName} onChange={handleChange} />

          <label>Net Monthly Income:</label>
          <input type="number" name="netMonthlyIncome" value={formData.netMonthlyIncome} onChange={handleChange} />
        

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

          <label>Existing Loans or Liabilities:</label>
          <input type="text" name="existingLoans" value={formData.existingLoans} onChange={handleChange} />

          <label>Credit Score:</label>
          <input type="number" name="creditScore" value={formData.creditScore} onChange={handleChange} />
        </div>

        {/* Documents Required Section */}
        <div className="form-section">
          <h3>Documents Required:</h3>
          <label>
            <input
              type="checkbox"
              name="hasBusinessPlan"
              checked={formData.hasBusinessPlan}
              onChange={handleChange}
            />
            Business Plan
          </label>

          <label>
            <input
              type="checkbox"
              name="hasFinancialStatements"
              checked={formData.hasFinancialStatements}
              onChange={handleChange}
            />
            Financial Statements
          </label>

          <label>
            <input
              type="checkbox"
              name="hasBusinessRegistrationDocs"
              checked={formData.hasBusinessRegistrationDocs}
              onChange={handleChange}
            />
            Business Registration Documents
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

export default BusinessLoanForm;