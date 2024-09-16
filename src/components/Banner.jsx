import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import profileImage from '../assets/profileImage.jpeg';

const Banner = () => {
  return (
    <div className='main-container flex justify-center mt-1 mb-10'>
      <div className='max-w-screen-xl w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/3 bg-gradient-to-l overflow-hidden rounded-3xl shadow-2xl flex flex-col sm:flex-row justify-around items-center space-y-8 sm:space-y-0 sm:space-x-8'>
        
        {/* Image Section */}
        <div className='w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 px-0'>
          <img className='mt-10 mb-2 ml-3 w-full rounded-full' src={profileImage} alt='Profile' style={{ maxWidth: '220px', height: 'auto' }} />
        </div>

        {/* Text Section */}
        <div className='w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 p-7 my-8 sm:my-0'>
          <h2 className='text-3xl font-bold'>Hey</h2>
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
                  'Problem Solver',
                  'Embedded Coder'
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
        </div>

      </div>
    </div>
  );
}

export default Banner;
