import React from 'react';

const View1 = () => {
  return (
    <div className="h-screen w-full relative">
      {/* Map Background */}
      <div className="absolute inset-0">
        <img
          src="https://via.placeholder.com/768x1024" // Replace with the actual map image
          alt="Map"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Driver Info Card */}
      <div className="absolute top-16 left-4 right-4 bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
        <p className="text-gray-700 text-sm mb-4 text-center">
          Yaw Fosu is 3mins away from pickup location
        </p>
        <div className="flex flex-wrap gap-4 justify-center w-full mb-6">
          <button className="bg-green-500 text-white font-semibold py-2 px-6">
            Call
          </button>
          <button className="bg-black text-white font-semibold py-2 px-6">
            Send message
          </button>
        </div>
      </div>

      {/* Driver Marker */}
      <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-white shadow-md px-4 py-2 flex items-center">
          <img
            src="https://via.placeholder.com/40" // Replace with the driver's image
            alt="Driver"
            className="w-10 h-10 rounded-full mr-2"
          />
          <div>
            <p className="text-blue-500 font-semibold text-sm">3mins away</p>
            <p className="text-gray-700 text-sm">Yaw Fosu</p>
          </div>
        </div>
      </div>

      {/* Pickup Marker */}
      <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2">
        <div className="relative">
          <div className="absolute inset-0 bg-yellow-400 opacity-50 rounded-full animate-ping"></div>
          <div className="bg-yellow-400 w-8 h-8 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">⬤</span>
          </div>
        </div>
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white shadow-md px-4 py-2">
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/24" // Replace with the cargo icon
              alt="Cargo"
              className="w-6 h-6 mr-2"
            />
            <div>
              <p className="text-blue-500 font-semibold text-sm">Pickup</p>
              <p className="text-gray-700 text-sm">Industrial Area</p>
            </div>
          </div>
        </div>
      </div>

      {/* Request for Pickup Button */}
      <div className="absolute bottom-8 left-4 right-4">
        <button className="w-full bg-yellow-400 text-black font-semibold py-3 shadow-md">
          Request for Pickup
        </button>
      </div>
    </div>
  );
};

export default View1;