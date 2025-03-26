import React from 'react';
import Sidemenu from '../komponen/Sidemenu';

const Sidebar = ({ isExpanded,onSelectPage,activePage }) => {
  return (
    <div className={`bg-[#000000] flex flex-col py-4 pt-10  border-r border-cyan-500  ${isExpanded ? "w-0 hidden " : "w-44"  } `}>

      <p className='font-bold pl-2 pr-3'> <i className='codicon codicon-chevron-down'></i> PORTOFOLIO</p>
      <p className='pl-4 pr-3'> <i className='codicon codicon-chevron-down'></i> Pages</p>

      <div className="w-full ">
        <Sidemenu onselectpage={onSelectPage} activepage={activePage} page='Home'/>
        <Sidemenu onselectpage={onSelectPage} activepage={activePage} page='About'/>
        <Sidemenu onselectpage={onSelectPage} activepage={activePage} page='Projects'/>
        <Sidemenu onselectpage={onSelectPage} activepage={activePage} page='Contact'/>

      </div>
    </div>
  );
};

export default Sidebar;