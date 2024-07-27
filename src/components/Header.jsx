import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import menu from '../assets/menu.png';
import home from '../assets/home.png';
import about from '../assets/about.png';
import skills from '../assets/skills.png';
import portfolio from '../assets/portfolio.png';
import contact from '../assets/contact.png';
import blogs from '../assets/blogs.png';
import lightMode from '../assets/lightMode.png';
import darkModeIcon from '../assets/darkMode.png';
import { useTheme } from '../utils/ThemeContext.jsx';

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [brandName, setBrandName] = useState("Shivajee");
  const [menuLinks, setMenuLinks] = useState([
    { title: 'Home', link: '/home', icon: home, id: 1 },
    { title: 'About', link: '/about', icon: about, id: 2 },
    { title: 'Skills', link: '/skills', icon: skills, id: 3 },
    { title: 'Portfolio', link: '/portfolio', icon: portfolio, id: 4 },
    { title: 'Contact', link: '/contact', icon: contact, id: 5 },
    { title: 'My Blogs', link: '/blogs', icon: blogs, id: 6 },
  ]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLinkClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="mt-4 h-20 flex items-center justify-between px-4 sm:px-16 font-bold text-lg">
      <div className="font-bold hover:text-rose-900 text-2xl sm:text-5xl">
        <Link to={menuLinks[0].link}>{brandName.toUpperCase()}</Link>
      </div>
      <div className="flex items-center">
        <button onClick={toggleDarkMode} className="ml-4 transform transition-transform duration-300 hover:scale-110">
          <img
            className="w-10 h-10 mr-2"
            src={darkMode ? lightMode : darkModeIcon}
            alt="Toggle dark mode"
          />
        </button>
        <div className='flex'>
          <button className='bg-indigo-800 text-white rounded-md px-3 py-1 mr-3 ml-3 hidden sm:inline-block transform transition-transform duration-300 hover:scale-110'>SignUp</button>
          <button className='ml-1 bg-indigo-800 rounded-md px-3 py-1 text-white transform transition-transform duration-300 hover:scale-110'>Login</button>
        </div>
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="ml-4 py-2 px-5 rounded-full transform transition-transform duration-300 hover:scale-110">
            <img className={`w-9 h-9 border ${darkMode ? 'border-white' : 'border-black'} rounded-full`} src={menu} alt="menu icon" />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2">
              {menuLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.link}
                  className={`px-4 py-2 rounded-full flex items-center mb-3 ${darkMode ? 'text-white border border-4 border-yellow-400 bg-gray-300 hover:bg-white' : 'border border-3 border-black text-black hover:bg-gray-300'} transform transition-transform duration-300 hover:scale-110`}
                  onClick={handleLinkClick}>
                  {link.icon && <img src={link.icon} alt={`${link.title} icon`} className="w-4 sm:w-6" />}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
