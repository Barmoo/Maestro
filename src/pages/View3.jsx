import React from 'react';

const View3 = () => {
  return (
    <div className="h-screen w-full bg-gray-800 bg-opacity-50 flex items-center justify-center p-4">
      {/* Modal */}
      <div className="bg-white w-full max-w-md shadow-lg p-6 text-center">
        {/* Header */}
        <h2 className="text-black text-lg font-semibold mb-4">Truck driver</h2>
        <hr className="border-gray-300 mb-4" />

        {/* Truck Image */}
        <img
          src="https://via.placeholder.com/300x150" // Replace with the actual truck image
          alt="Truck"
          className="w-full h-auto mb-4"
        />

        {/* Driver Details */}
        <div className="text-left mb-4">
          <p className="text-gray-700 text-sm font-semibold">
            <span className="font-bold">Driver:</span> Yaw Ofusu <span className="text-yellow-500">★ ★ ★</span>
          </p>
          <p className="text-gray-700 text-sm font-semibold">
            <span className="font-bold">Truck:</span> Red Volvo Adiff
          </p>
          <p className="text-gray-700 text-sm font-semibold">
            <span className="font-bold">Registration:</span>{' '}
            <span className="text-blue-500">GR 2342 20</span>
          </p>
          <p className="text-gray-700 text-sm font-semibold">
            <span className="font-bold">Trips:</span> 103
          </p>
        </div>

        {/* Price */}
        <p className="text-black text-2xl font-bold mb-4">GHC4,500</p>

        {/* Confirm and Decline Buttons */}
        <div className="flex flex-col gap-4">
          <button className="w-full bg-yellow-400 text-black font-semibold py-3 shadow-md">
            Confirm Pickup
          </button>
          <button className="w-full text-red-500 font-semibold py-3">
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default View3;