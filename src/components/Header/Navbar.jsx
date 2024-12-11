import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "./Header.scss";
import { MdNoFood } from "react-icons/md";
import { MdLogin } from "react-icons/md";

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
        <div className='navbar-content text-white'>
          <div className='brand-and-toggler flex justify-between items-center w-screen'>
            {/* Left side: Tasty Hub Brand */}
            <div className='navbar-brand-container flex items-center'>
              <MdNoFood size={30} />
              <span className='navbar-brand-text fw-7 ml-2'>Tasty Hub</span>
            </div>

            {/* Right side: Login Button */}
            <div className='navbar-btns'>
              <button
                type="button"
                className="navbar-show-btn text-white flex align-center"
                onClick={handleLoginClick}  // Use onClick to trigger navigation
              >
                <MdLogin className="mr-2" />
                <span className="ml-2">Login</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
