import React from 'react';

const InfoDisplay = ({ label, value }) => {
  return (
    <div className="glassmorphism-wrapper bg-white rounded-xl border border-gray-200 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] p-5">
      <span className="font-satoshi font-semibold text-base text-gray-900 mr-2">
        {label}:
      </span>
      <span className="font-satoshi text-base text-gray-700">
        {value}
      </span>
    </div>
  );
};

export default InfoDisplay;
