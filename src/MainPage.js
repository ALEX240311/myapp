import React from "react";
import Header from "./MainPageComponent/Header";
import Promotions from "./MainPageComponent/Promotion";
import SearchBar from "./MainPageComponent/SearchBar";
import PopularDestinations from "./MainPageComponent/PopularDestinations";
import Testimonials from "./MainPageComponent/Testimonials";
import Footer from "./MainPageComponent/Footer";
import "./MainPageComponent/PageStyle.css";
const MainPage = () => {
    return (
    <div className="MainPage">
        <Header></Header>
        <SearchBar></SearchBar>
        <Promotions></Promotions>
        <PopularDestinations></PopularDestinations>
        <Testimonials></Testimonials>
        <Footer></Footer>
    </div>
    );
  }
  
  export default MainPage;