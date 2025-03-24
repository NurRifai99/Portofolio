import React from 'react';

const Navbar = ({ openTabs, onCloseTab, setActivePage, activePage }) => {
  return (    
      <div className="bg-[#000000] flex flex-row  justify-between h-10 border-b border-cyan-500  ">
        
        <div className="flex">
          {openTabs.length === 0 ? (
              <div className="text-white px-4">No tabs open</div>
          ) : (
            openTabs.map(tab => (
              <div className="border-r border-cyan-500 h-full px-2 py-2">
                <div
                  key={tab}
                  className={`flex items-center px-4 h-full cursor-pointer border-gray-700  ${activePage === tab ? '  outline outline-orange-600 bg-[#1e1e1e]' : 'outline-hidden hover:outline-dashed '} `}
                  onClick={() => setActivePage(tab)}
              > 

                  <span>{tab.toLowerCase()}.html</span>
                  <button onClick={(e) => { e.stopPropagation(); onCloseTab(tab); }} className="ml-2 text-red-500 hover:outline-dashed">&times;</button>

                </div>
              </div>
            ))
          )}
        </div>
       
        <div className="flex flex-row gap-2 items-center h-full px-2 border-l border-cyan-500">
          <div className="bg-red-600 w-3 h-3"></div>
          <div className="bg-red-600 w-3 h-3"></div>
          <div className="bg-red-600 w-3 h-3"></div>
        </div>
        
      </div> 
    
    
  );
};

export default Navbar;