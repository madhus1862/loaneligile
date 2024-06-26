import React, { useState } from 'react';
import './form.css';

function EducationLoanForm() {
  const [formData, setFormData] = useState({
    studentName: '',
    guardianName: '',
    studentDOB: '',
    gender: '',
    guardianContactNumber: '',
    email: '',
    address: '',
    city: '',
    state: '',
    pin: '',
    educationalInstitution: '',
    courseDetails: '',
    courseFee: '',
    loanAmount: '',
    academicRecords: '',
    admissionDocuments: '',
    hasIdentityProof: false,
    hasAddressProof: false,
    hasBankStatement: false,
    hasMarksheets: false,
    declaration: false
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
    formDataCopy.courseFee = parseFloat(formData.courseFee);
    formDataCopy.loanAmount = parseFloat(formData.loanAmount);

    try {
      const response = await fetch('http://127.0.0.1:5000/apply/education-loan', {
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
        <h2>Education Loan Application</h2>
        <div className="form-section">
          <h3>Student Information:</h3>
          <label>Student Name:</label>
          <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} required />

          <label>Guardian Name:</label>
          <input type="text" name="guardianName" value={formData.guardianName} onChange={handleChange} required />

          <label>Date of Birth:</label>
          <input type="date" name="studentDOB" value={formData.studentDOB} onChange={handleChange} required />

          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label>Guardian Contact Number:</label>
          <input type="tel" name="guardianContactNumber" value={formData.guardianContactNumber} onChange={handleChange} required />

          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Address:</label>
          <textarea name="address" value={formData.address} onChange={handleChange} required />

          <label>City:</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />

          <label>State:</label>
          <input type="text" name="state" value={formData.state} onChange={handleChange} required />

          <label>Pin:</label>
          <input type="number" name="pin" value={formData.pin} onChange={handleChange} required />

          <h3>Course Details:</h3>
          <label>Educational Institution:</label>
          <input type="text" name="educationalInstitution" value={formData.educationalInstitution} onChange={handleChange} required />

          <label>Course Details:</label>
          <textarea name="courseDetails" value={formData.courseDetails} onChange={handleChange} required />

          <label>Course Fee:</label>
          <input type="number" name="courseFee" value={formData.courseFee} onChange={handleChange} required />

          <label>Loan Amount Required:</label>
          <input type="number" name="loanAmount" value={formData.loanAmount} onChange={handleChange} required />

          <label>Academic Records:</label>
          <input type="text" name="academicRecords" value={formData.academicRecords} onChange={handleChange} required />

          <label>Admission Documents:</label>
          <input type="text" name="admissionDocuments" value={formData.admissionDocuments} onChange={handleChange} required />

          <label>
            <input
              type="checkbox"
              name="hasIdentityProof"
              checked={formData.hasIdentityProof}
              onChange={handleChange}
            />
            Identity Proof
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
              name="hasMarksheets"
              checked={formData.hasMarksheets}
              onChange={handleChange}
            />
            Marksheets
          </label>

          <label>
            <input
              type="checkbox"
              name="declaration"
              checked={formData.declaration}
              onChange={handleChange}
            />
            Declaration
          </label>
        </div>

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}

export default EducationLoanForm;
