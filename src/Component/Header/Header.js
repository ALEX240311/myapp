import React from "react";
import images from "../../Assets/Images";
import "./HeaderStyle.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to="/" className="logo">
                <img src={images.logo} alt="" />
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">Flights</Link>
                    </li>
                    <li>
                        <Link to="/">Login</Link>
                    </li>
                    <li>
                        <Link to="/">Register</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
