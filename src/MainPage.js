import React, { Component } from "react";
import Header from "./MainPageComponent/Header";
import Promotions from "./MainPageComponent/Promotion";
import SearchBar from "./MainPageComponent/SearchBar"; 
import PopularDestinations from "./MainPageComponent/PopularDestinations";
import Testimonials from "./MainPageComponent/Testimonials";
import Footer from "./MainPageComponent/Footer";
import "./MainPageComponent/PageStyle.css";
import backgroundImage from "./MainPageComponent/Assets/gf.png";

class MainPage extends Component {
    render() {
        const searchBarStyle = {
            backgroundImage: `url(${backgroundImage})`,
            height: "70vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        };

        return (
            <div className="MainPage">
                <Header />
                <div style={searchBarStyle}>
                    <SearchBar />
                </div>
                <Promotions />
                <PopularDestinations />
                <Testimonials />
                <Footer />
            </div>
        );
    }
}

export default MainPage;
