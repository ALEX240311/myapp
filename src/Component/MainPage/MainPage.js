import React, { Component } from "react";
import Header from "../Header";
import Promotions from "../Promotion/Promotion";
import SearchBar from "../SearchBar/SearchBar";
import PopularDestinations from "../PopularDestination/PopularDestinations";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";
import "./PageStyle.css";
import images from "../../Assets/Images";

class MainPage extends Component {
    render() {
        const searchBarStyle = {
            backgroundImage: `url(${images.searchBG})`,
            height: "70vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
