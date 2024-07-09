import React from 'react';
import profileImage from '../assets/profileImage.png';

const Banner = () => {
  return (
    <div className='main-container flex justify-center mt-1 mb-10'>
      <div className='max-w-screen-xl w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/3 bg-gradient-to-l overflow-hidden rounded-3xl shadow-2xl flex flex-col sm:flex-row justify-around items-center space-y-8 sm:space-y-0 sm:space-x-8'>

        {/* Image Section */}
        <div className='w-full sm:w-2/5 md:w-1/2 lg:w-2/5 xl:w-1/2 px-0'>
          <img className='mt-10 mb-2 ml-3 w-full rounded-full' src={profileImage} alt='Profile' style={{ maxWidth: '220px', height: 'auto' }} />
        </div>
        {/* Text Section */}
        <div className='w-full sm:w-3/5 md:w-1/2 lg:w-3/5 xl:w-1/2 p-7 my-8 sm:my-0'>
          <h2 className='text-xl text-balance'>Hello Everybody, I am</h2>
          <h1 className='text-4xl leading-loose font-bold text-balance'>Shivajee</h1>
          <h2 className='text-xl font-semibold text-balance'>Software Developer</h2>
        </div>

      </div>
    </div>
  );
}

export default Banner;
