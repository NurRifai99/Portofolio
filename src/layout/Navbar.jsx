import React from 'react';

const Navbar = ({ openTabs, onCloseTab, setActivePage, activePage }) => {
  return (
    <>
      <div className=" flex justify-center">
        PORTOFOLIO - about.html
      </div>
      <div className="bg-[#000000] flex items-center h-10 border">
          {openTabs.length === 0 ? (
            <div></div>
        ) : (
          openTabs.map(tab => (
            <div
              key={tab}
              className={`flex items-center px-4 h-full cursor-pointer ${activePage === tab ? 'bg-[#1e1e1e]' : 'hover:bg-[#3e3e3e]'}`}
              onClick={() => setActivePage(tab)}
            >
              <span>{tab.toLowerCase()}.jsx</span>
              <button onClick={(e) => { e.stopPropagation(); onCloseTab(tab); }} className="ml-2 text-red-500">&times;</button>
            </div>
          ))
        )}
      </div> 
    </>
    
  );
};

export default Navbar;