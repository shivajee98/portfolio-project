// src/components/About.jsx
import React, { useEffect, useState } from 'react';
import { useTheme } from '../utils/ThemeContext';
import profileImage from '../assets/profileImage.jpeg';
import { Typewriter } from 'react-simple-typewriter';

const About = () => {
  const { toggleDarkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const funFactsSection = document.getElementById('fun-facts-section');
      const top = funFactsSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top < windowHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="about-container p-4">
      <div className="profile-section flex flex-col items-center lg:flex-row lg:justify-between p-8  shadow-lg rounded-lg my-4">
        <div className="profile-image-container w-full lg:w-1/3 flex justify-center lg:justify-start">
          <img src={profileImage} alt="Profile" className="rounded-full w-48 h-48 lg:w-64 lg:h-64" />
        </div>
        <div className="profile-details w-full lg:w-2/3 mt-4 lg:mt-0 text-center lg:text-left">
        <div className='flex items-center text-xl sm:text-4xl'>
            <h1 className='leading-loose font-bold mr-2'>I'M</h1>
            <h2 className='font-semibold text-yellow-400'>
              <Typewriter
                words={[
                  'Shivajee',
                  'Web Developer',
                  'Software Engineer',
                  'Tech Enthusiast',
                  'Open Source Contributor',
                  'Problem Solver'
                ]}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
          </div>
          <ul className="mt-4 text-gray-700 dark:text-gray-300">
            <li>Name: Shivajee</li>
            <li>Birthdate: 14 October 2004</li>
            <li>Nationality: Indian</li>
            <li>Experience: 2.5 years</li>
            <li>Address: Meerut</li>
            <li>Languages: Hindi, English</li>
            <li>Phone: +91 7070782390</li>
            <li>Email: shivajee141004@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-section p-8  shadow-lg rounded-lg my-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Programming Skills</h2>
        <div className="skill-bar">
          <span className="skill-label">React</span>
          <div className="skill-percentage" style={{ width: '90%' }}>90%</div>
        </div>
        <div className="skill-bar">
          <span className="skill-label">JavaScript</span>
          <div className="skill-percentage" style={{ width: '75%' }}>75%</div>
        </div>
        <div className="skill-bar">
          <span className="skill-label">java</span>
          <div className="skill-percentage" style={{ width: '80%' }}>80%</div>
        </div>
        <div className="skill-bar">
          <span className="skill-label">python</span>
          <div className="skill-percentage" style={{ width: '90%' }}>90%</div>
        </div>
        <div className="skill-bar">
          <span className="skill-label">DevOps</span>
          <div className="skill-percentage" style={{ width: '70%' }}>70%</div>
        </div>
        <div className="skill-bar">
          <span className="skill-label">AWS</span>
          <div className="skill-percentage" style={{ width: '75%' }}>75%</div>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section p-8  shadow-lg rounded-lg my-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="service-item  shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Web Development</h3>
          </div>
          <div className="service-item  shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">DevOps Services</h3>
          </div>
          <div className="service-item  shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Android Deveopment</h3>
          </div>
        </div>
      </div>

      {/* Fun Facts Section */}
      <div id="fun-facts-section" className={`fun-facts-section p-8 shadow-lg rounded-lg my-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Fun Facts</h2>
        {/* Add your fun facts content here */}
      </div>
    </div>
  );
};

export default About;
