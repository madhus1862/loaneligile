import React, { useState } from 'react';
import './form.css'; // Import CSS file for styling

function Form() {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    age: '',
    gender: '',
    contactNumber: '',
    email: '',
    currentAddress: '',
    permanentAddress: '',
    citizenshipStatus: '',
    maritalStatus: '',
    dependents: '',
    employmentType: '',
    employerName: '',
    designation: '',
    monthlyIncome: '',
    additionalIncome: '',
    coBorrowerName: '',
    coBorrowerContactNumber: '',
    loanAmount: '',
    loanPurpose: '',
    propertyAddress: '',
    propertyType: '',
    propertyValue: '',
    downPayment: '',
    loanTenure: '',
    interestRateType: '',
    existingLoans: '',
    creditScore: '',
    declarationAccuracy: false,
    consentVerification: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
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
        <h2>Home Loan Application Form</h2>
        
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

          <label>Current Address:</label>
          <textarea name="currentAddress" value={formData.currentAddress} onChange={handleChange} />

          <label>Permanent Address:</label>
          <textarea name="permanentAddress" value={formData.permanentAddress} onChange={handleChange} />

          <label>Citizenship Status:</label>
          <select name="citizenshipStatus" value={formData.citizenshipStatus} onChange={handleChange}>
            <option value="">Select Citizenship Status</option>
            <option value="citizen">Citizen</option>
            <option value="permanent_resident">Permanent Resident</option>
            <option value="visa_holder">Visa Holder</option>
          </select>

          <label>Marital Status:</label>
          <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange}>
            <option value="">Select Marital Status</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </select>

          <label>Dependents:</label>
          <input type="number" name="dependents" value={formData.dependents} onChange={handleChange} />
        </div>

        {/* Employment Details Section */}
        <div className="form-section">
          <h3>Employment Details:</h3>
          <label>Employment Type:</label>
          <select name="employmentType" value={formData.employmentType} onChange={handleChange}>
            <option value="">Select Employment Type</option>
            <option value="salaried">Salaried</option>
            <option value="self_employed">Self-Employed</option>
            <option value="business_owner">Business Owner</option>
            {/* Add more options as needed */}
          </select>

          <label>Employer Name:</label>
          <input type="text" name="employerName" value={formData.employerName} onChange={handleChange} />

          <label>Employment Duration:</label>
          <div>
            <input type="number" name="employmentDurationMonths" value={formData.employmentDurationMonths} onChange={handleChange} />
          </div>

          <label>Designation/Position:</label>
          <input type="text" name="designation" value={formData.designation} onChange={handleChange} />

          <label>Monthly Income:</label>
          <input type="number" name="monthlyIncome" value={formData.monthlyIncome} onChange={handleChange} />

          <label>Additional Sources of Income:</label>
          <input type="text" name="additionalIncome" value={formData.additionalIncome} onChange={handleChange} />

          <label>Details of Co-Borrower:</label>
          <input type="text" name="coBorrowerName" placeholder="Name" value={formData.coBorrowerName} onChange={handleChange} />
          <input type="text" name="coBorrowerContactNumber" placeholder="Contact Number" value={formData.coBorrowerContactNumber} onChange={handleChange} />
        </div>

        {/* Financial Details Section */}
        <div className="form-section">
          <h3>Financial Details:</h3>
          <label>Loan Amount Requested:</label>
          <input type="number" name="loanAmount" value={formData.loanAmount} onChange={handleChange} />

          <label>Loan Purpose:</label>
          <select name="loanPurpose" value={formData.loanPurpose} onChange={handleChange}>
            <option value="">Select Loan Purpose</option>
            <option value="purchase">Purchase of a New Home</option>
            <option value="renovation">Home Renovation</option>
            {/* Add more options as needed */}
          </select>

          <label>Property Details:</label>
          <input type="text" name="propertyAddress" placeholder="Address" value={formData.propertyAddress} onChange={handleChange} />
          <input type="text" name="propertyType" placeholder="Type of Property" value={formData.propertyType} onChange={handleChange} />

          <label>Estimated Property Value:</label>
          <input type="number" name="propertyValue" value={formData.propertyValue} onChange={handleChange} />

          <label>Down Payment Amount:</label>
          <input type="number" name="downPayment" value={formData.downPayment} onChange={handleChange} />

          <label>Loan Tenure:</label>
          <input type="number" name="loanTenure" value={formData.loanTenure} onChange={handleChange} />

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

        {/* Declaration Section */}
        <div className="form-section">
          <h3>Declaration:</h3>
          <label>
            <input
              type="checkbox"
              name="declarationAccuracy"
              checked={formData.declarationAccuracy}
              onChange={handleChange}
            />
            Declaration of accuracy of provided information
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="consentVerification"
              checked={formData.consentVerification}
              onChange={handleChange}
            />
            Consent for verification of details
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

export default Form;
