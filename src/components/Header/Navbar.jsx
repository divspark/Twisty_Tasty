import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "./Header.scss";
import { MdNoFood } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { PiBowlFoodBold } from "react-icons/pi";


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  // const handleScroll = () => {
  //   const offset = window.scrollY;
  //   if (offset > 60) {
  //     setScrolled(true);
  //   } else {
  //     setScrolled(false);
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  // })

  const handleLoginClick = () => {
    navigate('/login');  // Use navigate to programmatically navigate to the login page
  };

  return (
    <nav className={`navbar bg-orange flex items-center `}>
      <div className='container w-screen'>
          <div className='navbar-content flex justify-between items-center w-full'>
            {/* Left side: Tasty Hub Brand */}
            <div className='navbar-brand-container flex items-center'>
              <img src="/trans_bg.png" alt="Brand Logo" className="w-10 h-10 object-contain" />
              <span className='navbar-brand-text fw-7 ml-2'>Tasty Bites</span>
            </div>

            {/* Right side: Login Button */}
            <div className='navbar-btns'>
              <button
                type="button"
                className="navbar-show-btn text-white flex align-center"
                onClick={handleLoginClick}  // Use onClick to trigger navigation
              >
                <FaRegUserCircle className="text-4xl" />
                <span className="text-3xl ml-2">Login</span>
              </button>
            </div>
          </div>
      </div>
    </nav>
  )
}

export default Navbar;
