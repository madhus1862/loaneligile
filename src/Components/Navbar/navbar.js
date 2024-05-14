import React, { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./main.css";
import "./Navbar.css";

function Navbar() {
    const navRef = useRef();
    const [showDropdown, setShowDropdown] = useState(false);

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    const toggleDropdown = (e) => {
        e.preventDefault();
        setShowDropdown(!showDropdown);
    };

    const handleLogin = () => {
        // Navigate to the login page by changing the window location
        window.location.href = "/LoginForm";
    };

    return (
        <header>
            <h3>LOGO</h3>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <div className="dropdown-container">
                    <a href="/#" onClick={toggleDropdown}>Domain</a>
                    {showDropdown && (
                        <div className="dropdown-content">
                            <a href="/#">Web development</a>
                            <a href="/#">Python</a>
                            <a href="/#">Machine Learning</a>
                        </div>
                    )}
                </div>
                <a href="/#">Portal Status</a>
                <a href="/#">CGPA</a>
                <a href="/#">About Us</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
            <button className="login-btn" onClick={handleLogin}>Login</button>
        </header>
    );
}

export default Navbar;