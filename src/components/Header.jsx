import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [brandName, setBrandName] = useState("Shivajee");
  const [menuLinks, setMenuLinks] = useState([
    { title: 'Home', link: '/home', id: 1 },
    { title: 'About', link: '/about', id: 2 },
    { title: 'Skills', link: '/skills', id: 3 },
    { title: 'Portfolio', link: '/portfolio', id: 4 },
    { title: 'Contact', link: '/contact', id: 5 },
    { title: 'My Blogs', link: '/blogs', id: 6 },
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
        <h1 className='text-4xl font-bold hover:text-rose-900'>
          <Link to={menuLinks[0].link}>{brandName.toUpperCase()}</Link>
        </h1>
      </div>
      <div className="relative" ref={dropdownRef}>
        <button onClick={toggleDropdown} className="text-balance bg-auto hover:bg-auto border-2 border-rose-800 py-2 px-4 rounded-lg shadow-md focus:outline-none">
          Menu
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg z-10">
            {menuLinks.map((links) => (
              <Link
                key={links.id}
                to={links.link}
                className='block px-4 py-2 mb-1 text-white bg-gray-700 hover:bg-rose-400 hover:text-white transition-colors duration-300 rounded-md'
                onClick={handleLinkClick}
              >
                {links.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
