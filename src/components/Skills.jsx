import React from 'react';
import { useTheme } from '../utils/ThemeContext.jsx';

const Skills = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="main-container flex flex-col items-center justify-center mt-4 select-text mb-8">
      <div className="title-container w-full max-w-2xl bg-gray-200 p-4 shadow-lg rounded-t-lg">
        <h2 className="text-2xl font-bold text-center text-black md:text-left">My Skills</h2>
      </div>
      <div className={`content-container w-full max-w-2xl ${darkMode ? 'bg-gray-950 text-gray-100' : 'bg-gray-100 text-gray-700'}`}>
        <p className="text-base md:text-lg">
          <b>Comming Soon... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ipsum, libero saepe quae architecto ipsam soluta harum quis sequi consectetur nihil cupiditate veritatis praesentium pariatur.
          Voluptas quasi repellat odit ullam sit dolores eveniet, error architecto recusandae iusto, ea deleniti, officiis autem perspiciatis labore totam dolorum quia quos similique nihil cupiditate maiores provident deserunt! Non, aut!</b>
        </p>
      </div>
    </div>
  );
};

export default Skills;
