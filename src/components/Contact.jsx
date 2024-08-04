import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../utils/ThemeContext';

const Contact = () => {
  const { darkMode } = useTheme();  // Use useTheme() to access the context

  return (
    <div className={`flex flex-col items-center justify-center p-6`}>
      <div className='text-5xl mb-10 font-bold'>Let's Connect</div>
      <div className="w-full max-w-5xl flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden">
        {/* Contact Information Section */}
        <div className={`md:w-1/3 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} p-6 flex flex-col justify-center`}>
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <div className="mb-4 flex items-center">
            <FontAwesomeIcon icon={faPhone} className="text-yellow-500" />
            <a href="tel:+917070782390" className="ml-2">+91 7070782390</a>
          </div>
          <div className="mb-4 flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-yellow-500" />
            <a href="mailto:shivajee141004@gmail.com" className="ml-2">shivajee141004@gmail.com</a>
          </div>
          <h2 className="text-xl font-bold mt-4 mb-2">Social Profiles</h2>
          <div className="flex space-x-4">
            <a href="https://twitter.com/shivajee_" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-700">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/shiva-jee-81469b258/" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-700">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/shivajee98" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-700">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </div>
        {/* Send a Message Section */}
        <div className={`md:w-2/3 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} p-6 flex flex-col justify-center`}>
          <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
          <form className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
              <input
                type="text"
                placeholder="Your Name"
                className={`flex-1 p-2 ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-100 border-gray-300 text-black'} border rounded-md focus:outline-none focus:border-yellow-500`}
              />
              <input
                type="email"
                placeholder="Your Email"
                className={`flex-1 p-2 ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-100 border-gray-300 text-black'} border rounded-md focus:outline-none focus:border-yellow-500`}
              />
            </div>
            <textarea
              placeholder="Your Message"
              className={`p-2 ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-100 border-gray-300 text-black'} border rounded-md focus:outline-none focus:border-yellow-500`}
              rows="6"
            />
            <button
              type="submit"
              className="p-2 bg-yellow-500 text-black font-bold rounded-md hover:bg-yellow-700 transition-colors"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
