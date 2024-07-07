import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import menu from '../assets/menu.png';
import home from '../assets/home.png';
import about from '../assets/about.png';
import skills from '../assets/skills.png';
import portfolio from '../assets/portfolio.png';
import contact from '../assets/contact.png';
import blogs from '../assets/blogs.png'; 
import { useTheme } from '../utils/ThemeContext.jsx';

const Header = () => {
  const { darkMode } = useTheme();
  const [brandName, setBrandName] = useState("Shivajee");
  const [menuLinks, setMenuLinks] = useState([
    { title: 'Home', link: '/home', icon: home, id: 1 },
    { title: 'About', link: '/about', icon: about, id: 2,}, 
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
    <div className="mt-4 h-20 items-center main flex justify-between px-4 sm:px-16 text-balance font-bold text-lg">
      <div>
        <h1 className="text-4xl font-bold hover:text-rose-900">
          <Link to={menuLinks[0].link}>{brandName.toUpperCase()}</Link>
        </h1>
      </div>
      <div className="relative" ref={dropdownRef}>
        <button 
          onClick={toggleDropdown} 
          className={`py-2 px-5 rounded-3xl ${darkMode ? 'bg-white hover:bg-slate-300' : 'bg-white hover:bg-slate-300'}`}>
          <img className="w-6 h-6 " src={menu} alt="menu icon" />
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 bg-white  rounded-3xl">
            {menuLinks.map((link) => (
              <Link
                key={link.id}
                to={link.link}
                className="px-4 py-2 mb-1 rounded-3xl flex items-center hover:bg-slate-300"
                onClick={handleLinkClick}
              >
                {link.icon && <img src={link.icon} alt={`${link.title} icon`} className="w-8 h-8 mr-2" />}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
