import React from 'react';

const Setting7 = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen w-full p-6 flex flex-col items-center">
      {/* Account Section */}
      <div className="w-full max-w-md mb-6">
        <h2 className="text-sm font-medium text-gray-500 mb-2">Account</h2>
        <div className="bg-white shadow-md p-4 flex items-center">
          <img
            src="c:/Users/Bella/OneDrive/Desktop/Maestro/settings/iOS- Maestro- Settings@3x.png"
            alt="Profile"
            className="w-16 h-16 rounded-full border-2 border-yellow-500 object-cover mr-4"
          />
          <div className="flex-1">
            <p className="text-base font-medium">Edward Yeboah</p>
            <p className="text-sm text-gray-500">0202024965</p>
          </div>
          <span className="text-gray-400 text-lg">&gt;</span>
        </div>
      </div>

      {/* Favourite Destinations Section */}
      <div className="w-full max-w-md mb-6">
        <h2 className="text-sm font-medium text-gray-500 mb-2">Favourite Destinations</h2>
        <div className="bg-white shadow-md p-4">
          <button className="text-blue-500 text-sm font-medium">+ Add location</button>
        </div>
      </div>

      {/* Language Selection Section */}
      <div className="w-full max-w-md mb-6">
        <h2 className="text-sm font-medium text-gray-500 mb-2">Select preferred language</h2>
        <div className="bg-white shadow-md p-4 flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
            alt="US Flag"
            className="w-6 h-4 mr-4"
          />
          <p className="text-base flex-1">English</p>
          <span className="text-gray-400 text-lg">&#9662;</span>
        </div>
      </div>

      {/* Logout Section */}
      <div className="w-full max-w-md">
        <button className="text-red-500 text-sm font-medium w-full text-left">Logout</button>
      </div>
    </div>
  );
};

export default Setting7;