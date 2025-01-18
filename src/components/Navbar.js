import React from 'react';
import "../styles/nav.css";
import logo from "../data/data.json";  // Import the JSON file (containing the logo URL)

const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
  <path d="M541.82 603.47V311.85c0-66.258-53.699-119.979-119.95-119.979H84.68c-2.601 0-4.705 2.094-4.705 4.667v406.93c0 2.573 2.104 4.658 4.705 4.658h90.066a4.693 4.693 0 0 0 4.705-4.687V284.048a4.7 4.7 0 0 1 4.706-4.695h193.68c36.367 0 65.865 29.479 65.865 65.855v258.22a4.69 4.69 0 0 0 4.688 4.688h88.744c2.58 0 4.689-2.091 4.689-4.66"/>
</svg>;

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <a href="/">
          <img id="logoImage" src={logo.logo} alt="Mi Logo" />
        </a>
      </div>

      <a className="navlinks" href="/miphones">Mi Phones</a>
      <a className="navlinks" href="/redmiphones">Redmi Phones</a>
      <a className="navlinks" href="/tv">TV</a>
      <a className="navlinks" href="/laptops">Laptops</a>
      <a className="navlinks" href="/lifestyle">Fitness & Lifestyle</a>
      <a className="navlinks" href="/home">Home</a>
      <a className="navlinks" href="/audio">Radio</a>
      <a className="navlinks" href="/accessories">Accessories</a>

      <div className="searchbox">
        <input type="text" name="search" placeholder="Search Products" />
        {searchIcon}
      </div>
    </div>
  );
}

export default Navbar;
