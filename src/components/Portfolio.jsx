import React from 'react';

const Portfolio = () => {
  return (
    <div className="main-container flex flex-col items-center justify-center mt-4 mb-8 select-text">
      
      {/* Title Section */}
      <div className="title-container w-full max-w-2xl bg-white p-4 shadow-lg rounded-t-lg">
        <h2 className="text-2xl font-bold text-center text-black md:text-left">
          My RC Car Project Documentation
        </h2>
      </div>

      {/* Introduction Section */}
      <div className="content-container w-full max-w-2xl bg-white p-4 shadow-lg rounded-b-lg mb-4">
        <h3 className="text-xl font-semibold text-black mb-2">Introduction</h3>
        <p className="text-base md:text-lg text-gray-700">
          This project is about creating a Raspberry Pi-powered RC car with an ultrasonic sensor and radar visualization. It showcases the integration of hardware components with software, resulting in a fully functional remote-controlled car.
        </p>
      </div>

      {/* Project Components Section */}
      <div className="content-container w-full max-w-2xl bg-white p-4 shadow-lg rounded-lg mb-4">
        <h3 className="text-xl font-semibold text-black mb-2">Project Components</h3>
        <ul className="list-disc list-inside text-base md:text-lg text-gray-700">
          <li>Raspberry Pi</li>
          <li>L298N Motor Driver</li>
          <li>Ultrasonic Sensor (HC-SR04)</li>
          <li>Servo Motor</li>
          <li>DC Motors</li>
          <li>Power Supply</li>
        </ul>
      </div>

     

      {/* Software Implementation Section */}
      <div className="content-container w-full max-w-2xl bg-white p-4 shadow-lg rounded-lg mb-4">
        <h3 className="text-xl font-semibold text-black mb-2">Software Implementation</h3>
        <p className="text-base md:text-lg text-gray-700 mb-2">
          The software implementation is divided into several parts including setting up the environment, Flask web interface, and radar visualization.
        </p>
        <div className="code-snippet bg-gray-900 text-white p-2 rounded-md mb-2">
          <code className="text-sm md:text-base">
            # Example Flask Code<br />
            from flask import Flask, render_template, request<br />
            app = Flask(__name__)<br /><br />
            @app.route('/')<br />
            def index():<br />
            &nbsp;&nbsp;&nbsp;&nbsp;return render_template('index.html')
          </code>
        </div>
      </div>

      {/* Testing and Troubleshooting Section */}
      <div className="content-container w-full max-w-2xl bg-white p-4 shadow-lg rounded-lg mb-4">
        <h3 className="text-xl font-semibold text-black mb-2">Testing and Troubleshooting</h3>
        <p className="text-base md:text-lg text-gray-700">
          To ensure the RC car functions correctly, follow these testing procedures. If you encounter any issues, refer to the troubleshooting tips provided.
        </p>
      </div>

      {/* Conclusion Section */}
      <div className="content-container w-full max-w-2xl bg-white p-4 shadow-lg rounded-lg mb-4">
        <h3 className="text-xl font-semibold text-black mb-2">Conclusion</h3>
        <p className="text-base md:text-lg text-gray-700">
          This project demonstrates the integration of hardware and software to create a functional RC car. Future improvements could include adding a camera for live streaming or enhancing the web interface for better user control.<br/>
          Github Link <a href='https://github.com/shivajee98/raspi-car' className='text-blue-700 font-bold'> Click Here</a>
        </p>
      </div>

      {/* Video Demonstration Section */}
      <div className="content-container w-full max-w-2xl bg-white p-4 shadow-lg rounded-lg">
        <h3 className="text-xl font-semibold text-black mb-2">Video Demonstration</h3>
        <div className="video-placeholder bg-gray-200 h-64 w-full rounded-md flex items-center justify-center">
          <a href='https://www.youtube.com/shorts/ttt0VK9vW5U' className="text-gray-600">Video (Click Here)</a>
        </div>
      </div>

    </div>
  );
};

export default Portfolio;
