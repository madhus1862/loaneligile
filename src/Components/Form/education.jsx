import React, { useState } from 'react';
import './form.css'; // Import CSS file for styling

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
    admissionDocuments: [],
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
    console.log(formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Education Loan Application</h2>
        {/* Personal Information Section */}
        <div className="form-section">
          <h3>Personal Information:</h3>
          <label>Student's Name:</label>
          <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} required />

          <label>Guardian's Name:</label>
          <input type="text" name="guardianName" value={formData.guardianName} onChange={handleChange} required />

          <label>Student's Date of Birth:</label>
          <input type="date" name="studentDOB" value={formData.studentDOB} onChange={handleChange} required />

          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label>Guardian's Contact Number:</label>
          <input type="text" name="guardianContactNumber" value={formData.guardianContactNumber} onChange={handleChange} required />

          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />

          <label>Address:</label>
          <textarea name="address" value={formData.address} onChange={handleChange} required />

          <label>City:</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />

          <label>State:</label>
          <input type="text" name="state" value={formData.state} onChange={handleChange} required />

          <label>PIN:</label>
          <input type="text" name="pin" value={formData.pin} onChange={handleChange} required />
        </div>

        {/* Education Details Section */}
        <div className="form-section">
          <h3>Education Details:</h3>
          <label>Educational Institution:</label>
          <input type="text" name="educationalInstitution" value={formData.educationalInstitution} onChange={handleChange} required />

          <label>Course Details:</label>
          <input type="text" name="courseDetails" value={formData.courseDetails} onChange={handleChange} required />

          <label>Course Fee:</label>
          <input type="number" name="courseFee" value={formData.courseFee} onChange={handleChange} required />

          <label>Loan Amount Required:</label>
          <input type="number" name="loanAmount" value={formData.loanAmount} onChange={handleChange} required />

          <label>Academic Records:</label>
          <textarea name="academicRecords" value={formData.academicRecords} onChange={handleChange} required />

          <label>Admission Documents:</label>
          <input type="file" name="admissionDocuments" onChange={handleChange} multiple required />
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
            Identity Proof          </label>

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
            Mark sheets
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

export default EducationLoanForm;