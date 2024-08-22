import React, { useEffect, useState } from 'react';
import { useTheme } from '../utils/ThemeContext';
import profileImage from '../assets/profileImage.jpeg';
import { Typewriter } from 'react-simple-typewriter';

const About = () => {
  const { toggleDarkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills-section');
      const top = skillsSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top < windowHeight) {
        setIsVisible(true);
      }

      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - windowHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'React', percentage: 90 },
    { name: 'JavaScript', percentage: 75 },
    { name: 'Java', percentage: 80 },
    { name: 'Python', percentage: 90 },
    { name: 'DevOps', percentage: 70 },
    { name: 'AWS', percentage: 75 },
  ];

  return (
    <div className="about-container p-4">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200">
        <div
          className="h-full bg-yellow-500"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="profile-section flex flex-col items-center lg:flex-row lg:justify-between p-8 shadow-lg rounded-lg my-4">
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
          <div className='flex flex-col sm:flex-row sm:justify-between'>
            <ul className="mt-4 text-gray-700 dark:text-gray-300">
              <li>Name: Shivajee</li>
              <li>Birthdate: 14 October 2004</li>
              <li>Nationality: Indian</li>
              <li>Experience: 2.5 years</li>
            </ul>
            <ul className="mt-4 text-gray-700 dark:text-gray-300">
              <li>Address: Meerut</li>
              <li>Languages: Hindi, English</li>
              <li>Phone: +91 7070782390</li>
              <li>Email: shivajee141004@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
            {/* Fun Facts Section */}
            <div id="fun-facts-section" className={`fun-facts-section p-8 shadow-lg rounded-lg my-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Fun Facts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="fun-fact-item shadow-lg p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Lines of Code</h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{Math.floor(10000 * scrollProgress / 100)}</p>
          </div>
          <div className="fun-fact-item shadow-lg p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Projects Completed</h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{Math.floor(10 * scrollProgress / 100)}</p>
          </div>
          {/* Add more fun facts as needed */}
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills-section" className="skills-section p-8 shadow-lg rounded-lg my-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Programming Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map(skill => (
            <div key={skill.name} className="relative w-full bg-gray-200 rounded-full h-2 mb-4">
              <div className={`absolute top-0 left-0 h-full bg-yellow-500 rounded-full transition-all duration-1000 ${isVisible ? 'w-full' : 'w-0'}`} style={{ width: isVisible ? `${skill.percentage}%` : '0%' }}>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 h-full flex items-center justify-center font-bold">
                  {`${skill.percentage}%`}
                </div>
              </div>
              <span className="absolute left-0 ml-2 text-black font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section p-8 shadow-lg rounded-lg my-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {['Web Development', 'DevOps Services', 'Android Development'].map(service => (
            <div key={service} className="service-item shadow-lg p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{service}</h3>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default About;
