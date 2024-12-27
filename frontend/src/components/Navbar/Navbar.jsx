import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from "react-icons/im";
import images from '../../constants/images';
import { IoMdArrowDropdown } from "react-icons/io";
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // State for dropdown

  const location = useLocation(); // To detect current URL
  const navigate = useNavigate(); // To programmatically navigate

  // Add fixed navbar on scroll
  const handleScroll = () => {
    setIsFixed(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle navigation to homepage
  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      const section = document.querySelector('#home');
      section?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to handle scroll or redirect
  const handleNavigation = (id) => {
    if (location.pathname === '/') {
      // On the homepage, scroll smoothly
      const section = document.querySelector(id);
      if (section) {
        const offsetTop = section.getBoundingClientRect().top + window.scrollY; // Get the top position of the section
        const adjustedPosition = offsetTop - 100; // Adjust by 100px to account for the navbar height
        window.scrollTo({ top: adjustedPosition, behavior: 'smooth' });
      }
    } else {
      // On other pages, navigate to the homepage and then scroll
      navigate('/');
      setTimeout(() => {
        const section = document.querySelector(id);
        if (section) {
          const offsetTop = section.getBoundingClientRect().top + window.scrollY;
          const adjustedPosition = offsetTop - 100; // Adjust by 100px
          window.scrollTo({ top: adjustedPosition, behavior: 'smooth' });
        }
      }, 100); // Delay to ensure navigation is complete
    }
  };

  return (
    <nav
      className={`z-nav ${isFixed ? 'shadow-md' : ''} navbar bg-white `}
    >
      {/* Logo */}
      <div className=" flex items-center cursor-pointer" onClick={handleLogoClick}>
        <img
          src={images.cinegraphics}
          alt="app logo"
          className="logo  "
          style={{ marginTop: 0 }} // Inline style to remove top margin
        />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex justify-center items-center gap-20 mr-[1rem]">
        {['ABOUT US', 'PROJECTS'].map((item, index) => (
          <li
            key={index}
            className="text-black font-cairo hover:text-primary-orange cursor-pointer"
            onClick={() => handleNavigation(`#${item.toLowerCase().replace(/\s+/g, '')}`)}
          >
            {item}
          </li>
        ))}

        {/* Our Services Dropdown */}
        <li
          className="relative"
          onMouseEnter={() => setIsServicesOpen(true)} // Open dropdown on hover
          onMouseLeave={() => setIsServicesOpen(false)} // Close dropdown on hover out
        >
          <span className="text-black font-cairo flex gap-2 cursor-pointer hover:text-primary-orange"
          onClick={() => handleNavigation(`#service`)}>
            OUR SERVICES
            <IoMdArrowDropdown className='mt-2' />
          </span>
          {isServicesOpen && (
            <ul className="absolute top-full left-0 w-48 font-cairo bg-white border shadow-md mt-2 p-2 rounded-md">
              {['Walkthroughs and Cinematics', 'Interior Design', 'Creative Visualization', 'Graphic Designing', 'Game Development', 'Motion Graphics', 'Digital Marketing'].map((service, index) => (
                <li
                  key={index}
                  className="text-primary-blue hover:text-primary-orange cursor-pointer py-1"
                  onClick={() => handleNavigation(`#${service.toLowerCase().replace(/\s+/g, '')}`)}
                >
                  {service}
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Contact Us */}
        <li
          className="text-black font-cairo hover:text-primary-orange cursor-pointer"
          onClick={() => handleNavigation(`#contactus`)}
        >
          CONTACT US
        </li>
      </ul>

      {/* Hamburger Menu for Mobile */}
      <div className="ham ">
        <GiHamburgerMenu
          color="#000"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="toggle slide-bottom fixed top-0 left-0 h-screen bg-primary-black text-white flex flex-col items-center z-50">
            <ImCross
              className="absolute top-5 right-5 cursor-pointer"
              color="#fff"
              fontSize={27}
              onClick={() => setToggleMenu(false)}
            />
            <ul className="list-none mt-20 space-y-8">
              {['Home', 'Projects', 'Gallery', 'About Us'].map((item, index) => (
                <li
                  key={index}
                  className="text-2xl font-bold cursor-pointer hover:text-primary-orange"
                  onClick={() => {
                    handleNavigation(`#${item.toLowerCase().replace(/\s+/g, '')}`);
                    setToggleMenu(false); // Close menu after click
                  }}
                >
                  {item}
                </li>
              ))}
              {/* Add "Contact Us" in the mobile menu */}
              <li
                className="text-2xl font-bold cursor-pointer hover:text-primary-orange"
                onClick={() => {
                  handleNavigation(`#contactus`);
                  setToggleMenu(false); // Close menu after click
                }}
              >
                Contact Us
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
