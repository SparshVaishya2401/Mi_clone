import './App.css';
import React from 'react';
import PreNavbar from './components/PreNavbar';
import Navbar from "./components/Navbar.js"
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Slider from "./components/Slider.js"
import data from "./data/data.json"
import Offers from "./components/Offers.js"
import Heading from "./components/Heading.js"
import StarProduct from "./components/StarProduct.js"
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js"
import HotAccessories from "./components/HotAccessories.js";
import ProductReviews from './components/ProductReviews.js';
import Videos from "./components/Videos.js"
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"
import NavOptions from "./components/NavOptions.js"


function App() {
  return (
    <React.Fragment>
   <Router>
    <PreNavbar/>
    <Navbar/>

    <NavOptions miPhones={data.miPhones} 
    redmiPhones={data.redmiPhones} 
    tv={data.tv} laptop={data.laptop} 
    fitnessAndLifeStyle={data.fitnessAndLifeStyle} 
    home={data.home} 
    audio={data.audio}  
    accessories={data.accessories}/>


    <Slider start = {data.banner.start}/>
    <Offers offer = {data.offer}/>

    <Heading text="STAR PRODUCTS"/>
    <StarProduct starProduct={data.starProduct} />
    <Heading text="HOT ACCESSORIES"/>
    <HotAccessoriesMenu />
     
     <Routes>
    <Route exact path="/music" element ={
     <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}  />
    }>
       </Route>
       </Routes>

       <Routes>
       <Route exact path="/smartDevice" element ={
       <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}  />
       }>
       </Route>
       </Routes>
       
       <Routes>
       <Route exact path="/home" element ={
        <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}  />
       }>
       </Route>
       </Routes>
        
        <Routes>
       <Route exact path="/lifestyle" element ={
         <HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}  />

       }>
       </Route>
       </Routes>

       <Routes>
       <Route exact path="/mobileAccessories" element={
        <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}  />

       }>
       </Route>
       </Routes>
       
       <Heading text="PRODUCT REVIEWS"/>

       <ProductReviews productReviews={data.productReviews}/>

       <Heading text="VIDEOS" />

       <Videos videos={data.videos} />

       <Heading  text="IN THE PRESS"/>

       <Banner  banner={data.banner}/>

       <Footer footer={data.footer} />




   </Router>
   </React.Fragment>
  );
}

export default App;
