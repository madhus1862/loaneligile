import { Link } from "react-router-dom";
import "./Homepage.css";

const Homepage = () => {
    return (
        <div className="app"> 
                    <nav className="navbar">
                <h3 className="logo">LOAN</h3>
                <ul className="nav-links">
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/loan">Loans</Link></li>
                    <li><Link to="/service">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <h1 className="heading">LOAN ELIGIBILITY PREDICTION APP</h1>
            <h1 className="head">The App that can predict whether you will get your loan approved or not.</h1>
            
             <p className="para">This is a landing page!!!</p>
        </div>
    );
}

export default Homepage;
