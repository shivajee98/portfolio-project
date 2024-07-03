import React, { useState } from 'react'

const Header = () => {


    const [brandName, setBrandName] = useState("Shivajee")
    const [menuLinks, setMenuLinks] = useState([
        {
            title: 'Home',
            link: '/home',
            id: 1,
        },
        {
            title: 'About',
            link: '/google.com',
            id: 2,
        },
        {
            title: 'Skills',
            link: '/skills',
            id: 3,
        },
        {
            title: 'Portfolio',
            link: '/portfolio',
            id: 4,
        },
        {
            title: 'Contact',
            link: '/contact',
            id: 5,
        },
        {
            title: 'My Blogs',
            link: '/blogs',
            id: 6,
        },
    ])
    const [actionButton, setActionButton] = useState({title: "Hire Me", links: '/hireMe'})


  return (
    <>
    <div className="mt-4 h-20 items-center main flex justify-between px-16 text-white font-bold text-lg ">
            <div>
                {/* brand logo */}
                <h1 className='text-4xl font-bold'>{brandName.toUpperCase()}</h1>

            </div>
            <div className='space-x-10'>
                {/* menu links */}
            { menuLinks.map((links) => (
                <a key={links.id} href={links.link} className='bg-teal-400 hover:bg-teal-800 text-white py-2 px-4 rounded-lg shadow-md transition-colors duration-300'>{links.title.toUpperCase()}</a>
              )) } 
            
                {/* button */}
                <button href='actionButton.links' className='bg-teal-400 hover:bg-teal-800 text-white py-2 px-4 rounded-lg shadow-md transition-colors duration-300'> {actionButton.title.toUpperCase()} </button>
            </div>
    </div>
    </>
  )
}

export default Header
