import React, { useState } from 'react';
import Sidemenu from '../komponen/Sidemenu';

const Sidebar = ({ isExpanded,onSelectPage,activePage }) => {

  const [down,setdown] = useState(true);

  function turun() {
    setdown(!down)
  };

  return (
    <div className={`bg-[#000000] flex flex-col border-r border-cyan-500  transition-all duration-100  overflow-hidden ${isExpanded ? "w-0 border-hidden " : "w-44"  }  `}>
          <div className="flex flex-row justify-between items-center pt-2 pb-3 px-4">
            <p className='text-[12px]'>EXPLORER  </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M4 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0m5 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m5 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/></svg> 
          </div>
          <p className='font-bold text-sm pl-2 pr-3'> <i className='codicon codicon-chevron-down'></i> PORTOFOLIO</p>
          <button onClick={turun} className='pr-18 text-sm'> <i className={`codicon codicon-chevron-down transition-all duration-120 ${down? "-rotate-90" : ""} `}></i> Pages</button>

          <div className={`w-full text-sm transition-all duration-180 ${isExpanded ? "translate-x-full" : ""} ${down ? "h-0 overflow-hidden " : "h-auto"} ` } >
            <Sidemenu onselectpage={onSelectPage} activepage={activePage} page='Home'/>
            <Sidemenu onselectpage={onSelectPage} activepage={activePage} page='About'/>
            <Sidemenu onselectpage={onSelectPage} activepage={activePage} page='Projects'/>
            <Sidemenu onselectpage={onSelectPage} activepage={activePage} page='Contact'/>

          </div> 
      
    </div>
    
  );
};

export default Sidebar;