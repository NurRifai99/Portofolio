import React from 'react';
import Sidemenu from '../komponen/Sidemenu';

const Sidebar = ({ onSelectPage,activePage }) => {
  return (
    <div className="w-auto bg-[#000000] flex flex-col py-4 pt-10  border-l border-r border-cyan-500  ">

      <p className='font-bold pl-2 pr-3'> ^ PORTOFOLIO</p>
      <div className="w-full">
        <Sidemenu onselectpage={onSelectPage} activepage={activePage} page='Home'/>
        <Sidemenu onselectpage={onSelectPage} activepage={activePage} page='About'/>
        <Sidemenu onselectpage={onSelectPage} activepage={activePage} page='Projects'/>
        <Sidemenu onselectpage={onSelectPage} activepage={activePage} page='Contact'/>
        {/* <Sidemenu onselectpage={onSelectPage} page=''/> */}

      </div>
    </div>
  );
};

export default Sidebar;