import React, { useState } from 'react';

const Header = () => {
    const [brandName, setBrandName] = useState("Shivajee");
    const [menuLinks, setMenuLinks] = useState([
        { title: 'Home', link: '/home', id: 1 },
        { title: 'About', link: '/google.com', id: 2 },
        { title: 'Skills', link: '/skills', id: 3 },
        { title: 'Portfolio', link: '/portfolio', id: 4 },
        { title: 'Contact', link: '/contact', id: 5 },
        { title: 'My Blogs', link: '/blogs', id: 6 },
    ]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <div className="mt-4 h-20 items-center main flex justify-between px-4 sm:px-16 text-balance font-bold text-lg">
                <div>
                    <h1 className='text-4xl font-bold'>{brandName.toUpperCase()}</h1>
                </div>
                <div className="relative">
                    <button onClick={toggleDropdown} className="text-balance bg-gray-700 hover:bg-gray-900 py-2 px-4 rounded-lg shadow-md focus:outline-none">
                        Menu
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48  rounded-md shadow-lg z-10">
                            {menuLinks.map((links) => (
                                <a key={links.id} href={links.link} className='block px-4 py-2 mb-1 text-white bg-gray-700 hover:bg-rose-400 hover:text-white transition-colors duration-300 rounded-md'>
                                    {links.title}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Header;
