import React from 'react';

const View2 = () => {
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

      {/* Location Input */}
      <div className="absolute top-16 left-4 right-4 bg-white shadow-md p-4">
        <div className="flex items-center mb-2">
          <span className="text-yellow-500 text-lg mr-2">●</span>
          <span className="text-blue-500 text-sm font-semibold">Industrial Area</span>
        </div>
        <div className="flex items-center">
          <span className="text-black text-lg mr-2">■</span>
          <span className="text-gray-700 text-sm">Olebu Ablekuma Kingdom hall</span>
        </div>
      </div>

      {/* Drop-off Marker */}
      <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2">
        <div className="bg-white  shadow-md px-4 py-2">
          <p className="text-blue-500 font-semibold text-sm">Drop off</p>
          <p className="text-gray-700 text-sm">Olebu Ablekuma, kingdom hall</p>
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
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white shadow-md  px-4 py-2">
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

      {/* Request Status */}
      <div className="absolute bottom-16 left-4 right-4">
        <p className="text-gray-700 text-sm text-center">Request sent. Awaiting quotes from drivers.</p>
        <div className="flex justify-center mt-2">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-yellow-400"></div>
        </div>
      </div>
    </div>
  );
};

export default View2;