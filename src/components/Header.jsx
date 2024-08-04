import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faUser, faCogs, faBriefcase, faEnvelope, faBlog, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../utils/ThemeContext.jsx';

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [brandName, setBrandName] = useState("Shivajee");
  const [menuLinks, setMenuLinks] = useState([
    { title: 'Home', link: '/home', icon: faHome, id: 1 },
    { title: 'About', link: '/about', icon: faUser, id: 2 },
    { title: 'Portfolio', link: '/portfolio', icon: faBriefcase, id: 4 },
    { title: 'Contact', link: '/contact', icon: faEnvelope, id: 5 },
    { title: 'My Blogs', link: '/blogs', icon: faBlog, id: 6 },
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
        <button onClick={toggleDarkMode} className="ml-4 transform transition-transform duration-200 hover:scale-110">
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className={`w-6 h-10 ${darkMode? 'text-yellow-400' : 'text-black' }`} />
        </button>
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="ml-4 py-2 px-5 rounded-full transform transition-transform duration-300 hover:scale-110">
            <FontAwesomeIcon icon={faBars} className={`w-7 h-7 ${darkMode? 'text-yellow-400' : 'text-black'}`} />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2">
              {menuLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.link}
                  className={`px-4 py-2 rounded-full flex items-center mb-3 ${darkMode ? 'text-3xl text-yellow-400' : 'text-3xl '} transform transition-transform duration-300 hover:scale-110`}
                  onClick={handleLinkClick}>
                  {link.icon && <FontAwesomeIcon icon={link.icon} className="w-4 sm:w-6" />}
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
