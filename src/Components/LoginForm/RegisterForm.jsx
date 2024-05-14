import React from 'react'
import './RegisterForm.css';
import { FaUser } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { RiLockPasswordLine } from "react-icons/ri";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
const RegisterForm = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Register</h1>
        <div className="input-box">
          <input type="text" placeholder="your Name" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="Email" placeholder="Email" required />
          <SiMinutemailer className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <RiLockPasswordLine className="icon" />
        </div>
        <div className="input-box">
          <input
            type="Confrim password"
            placeholder="Confrim Password"
            required
          />
          <RiLockPasswordFill className="icon" />
        </div>

        <button type="submit">Register</button>
        <div className='LoginPage'> <br/>        
        <p>Already Have an Account <Link to ="/login">Login</Link></p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;