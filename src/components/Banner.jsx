import React from 'react';
import profileImage from '../assets/profileImage.png';

const Banner = () => {
  return (
    <div className='main-container flex justify-center mt-20 '>
      <div className='max-w-screen-xl w-1/2 bg-gradient-to-l from-teal-900 to-black overflow-hidden rounded-3xl shadow-2xl flex justify-around space-x-8'>

        {/* Image Section */}
        <div className='px-0 -ml-36'>
          <img className='mt-10 ' src={profileImage} alt='Profile' style={{ width: '380px', height: '550px' }} />
        </div>

        {/* Text Section */}
        <div className='p-7 my-48'>
          <h2 className='text-xl'>Hello Everybody, I am</h2>
          <h1 className='text-4xl leading-loose font-bold'>Shivajee</h1>
          <h2 className='text-xl font-semibold'>MERN developer</h2>
        </div>

      </div>
    </div>
  );
}

export default Banner;
