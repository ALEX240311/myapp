import React from "react";
import images from "../../Assets/Images";
import "./HeaderStyle.css";

const Header = () => {
    console.log(images);
    return (
        <header>
            <div className="logo">
                <img src={images.logo} alt="" />
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Flights</a>
                    </li>
                    <li>
                        <a href="#">Login</a>
                    </li>
                    <li>
                        <a href="#">Register</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
