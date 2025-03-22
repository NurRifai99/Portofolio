import React from 'react';

const Sidebar = ({ onSelectPage }) => {
  return (
    <div className="w-auto bg-[#000000] flex flex-col py-4 pt-10  border border-white ">

      <p className='font-bold pl-2 pr-3'> ^ PORTOFOLIO</p>
      <div className="w-full pl-3">

        <button onClick={() => onSelectPage('Home')} className="block w-full text-left px-2 py-1 hover:bg-gray-700"> ^ Home</button>
        <button onClick={() => onSelectPage('About')} className="block w-full text-left px-2 py-1 hover:bg-gray-700">^ About</button>
        <button onClick={() => onSelectPage('Projects')} className="block w-full text-left px-2 py-1 hover:bg-gray-700">^ Projects</button>
        <button onClick={() => onSelectPage('Contact')} className="block w-full text-left px-2 py-1 hover:bg-gray-700">^ Contact</button>
      </div>
    </div>
  );
};

export default Sidebar;