import React from 'react';
import './LoginForm.css';
import { Link } from 'react-router-dom';
const LoginForm = () => {
    return (
        <div className='internal'>
            <form action="">
                <h1> LOGIN </h1>
                <div className="input-box1">
                    <input type="text" placeholder='username' required />
                </div>
                <div className="input-box1">
                    <input type="password" placeholder='password' />
                </div>
                <div className="remember-forget">
                    <label><input type="checkbox" />Remember me</label>
                    <Link to="/login">Forget password?</Link>
                </div>
                <button type="submit">Login</button>
                <div className="register-link">
                    <p>Don't have an account? <Link to="/register">Register</Link></p>



                </div>
            </form>
        </div>
    );
};
export default LoginForm;