import React from 'react';

const Trip2 = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen w-full p-6 flex flex-col items-center">
      {/* Filter Section */}
      <div className="w-full max-w-md flex items-center justify-between mt-6 mb-4">
        <p className="text-sm font-medium text-gray-400">Filter</p>
        <div className="flex items-center border border-gray-300 px-4 py-2">
          <p className="text-sm font-medium">This week</p>
          <span className="text-gray-500 ml-2">&#9662;</span>
        </div>
      </div>

      {/* Trip Cards */}
      <div className="w-full max-w-md space-y-6">
        {/* Trip Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <span className="text-yellow-500 text-lg mr-2">●</span>
              <p className="text-sm">
                From: <strong>Industrial area</strong>
              </p>
            </div>
            <div className="flex items-center">
              <span className="text-black text-lg mr-2">■</span>
              <p className="text-sm">
                To: <strong>Olebu Ablekuma Kingdom hall</strong>
              </p>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-sm">
              <strong>Cargo Type:</strong> Iron rods
            </p>
            <p className="text-sm">
              <strong>Weight:</strong> 567 lbs
            </p>
            <p className="text-sm">12th August 2020</p>
          </div>
          <button className="bg-black text-white text-sm font-medium px-6 py-2 w-full">
            View
          </button>
        </div>

        {/* Trip Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <span className="text-yellow-500 text-lg mr-2">●</span>
              <p className="text-sm">
                From: <strong>Ashaiman Ebenezer School</strong>
              </p>
            </div>
            <div className="flex items-center">
              <span className="text-black text-lg mr-2">■</span>
              <p className="text-sm">
                To: <strong>Frankies, Osu-Accra</strong>
              </p>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-sm">
              <strong>Cargo Type:</strong> Iron rods
            </p>
            <p className="text-sm">
              <strong>Weight:</strong> 567 lbs
            </p>
            <p className="text-sm">12th August 2020</p>
          </div>
          <button className="bg-black text-white text-sm font-medium px-6 py-2  w-full">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trip2;