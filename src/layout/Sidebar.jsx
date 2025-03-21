import React from 'react';

const Sidebar = ({ onSelectPage }) => {
  return (
    <div className="w-auto bg-[#2d2d2d] flex flex-row  py-4">
      {/* Ikon pajangan kiri */}
      <div className="mb-4 space-y-4">
        <div className="w-6 h-6 bg-gray-500 rounded"></div>
        <div className="w-6 h-6 bg-gray-500 rounded"></div>
        <div className="w-6 h-6 bg-gray-500 rounded"></div>
      </div>

      <div className="w-full">
        {/* <div className="text-xs text-gray-400 px-2">PORTOFOLIO</div> */}
        <button onClick={() => onSelectPage('Home')} className="block w-full text-left px-2 py-1 hover:bg-gray-700">Home</button>
        <button onClick={() => onSelectPage('About')} className="block w-full text-left px-2 py-1 hover:bg-gray-700">About</button>
        <button onClick={() => onSelectPage('Projects')} className="block w-full text-left px-2 py-1 hover:bg-gray-700">Projects</button>
        <button onClick={() => onSelectPage('Contact')} className="block w-full text-left px-2 py-1 hover:bg-gray-700">Contact</button>
      </div>
    </div>
  );
};

export default Sidebar;