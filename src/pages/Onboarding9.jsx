import React from 'react';

const Onboarding9 = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen w-full flex flex-col items-center justify-center relative">
      {/* Background Content */}
      <div className="absolute inset-0 bg-gray-50 bg-opacity-50 flex items-center justify-center">
        {/* Modal */}
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 mx-4">
          <p className="text-center">
            "Maestro" Wants to Use 
          </p>
          <p className="text-center mb-4">"facebook.com" to Sign in</p>
          <p className="text-center text-sm text-gray-600">
            This allows the app and website to 
          </p>
          <p className="text-center text-sm text-gray-600 mb-6">share information about you.</p>
          <div>
            <hr className="border-gray-300 my-4" />
            <div className="flex justify-between">
              <button className="text-blue-500 text-sm font-medium">Cancel</button>
              <button className="text-blue-500 text-sm font-medium">Continue</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding9;