import React from 'react';
import Icon from '../komponen/Icon';
import acun from  '../assets/react.svg';

const Navbar = ({ openTabs, onCloseTab, setActivePage, activePage }) => {

  const iconn = (
    <i className='codicon codicon-chevron-right'></i>
  )

  return (    
    <>
      <div className="bg-[#000000] flex flex-row  justify-between h-10 border-b border-cyan-500  ">
        
        <div className="flex"> 
           {
            openTabs.map(tab => (
              <div className="border-r border-cyan-500 h-full px-1.5 py-1.5">
                <div
                  key={tab}
                  className={`flex items-center justify-between pl-2 pr-0.5 h-full cursor-pointer border-gray-700  ${activePage === tab ? 'outline-1 outline-orange-400 ' : 'outline-hidden hover:outline-orange-400 hover:outline-1 hover:outline-dashed '} `}
                  onClick={() => setActivePage(tab)}
                > 
                  <svg xmlns="http://www.w3.org/2000/svg" width="18px"  viewBox="0 0 16 16"><path fill="#ea580c" d="M4.708 5.578L2.061 8.224l2.647 2.646l-.708.708l-3-3V7.87l3-3zm7-.708L11 5.578l2.647 2.646L11 10.87l.708.708l3-3V7.87zM4.908 13l.894.448l5-10L9.908 3z"/></svg>
                  <span className='ml-0.5'>{tab}.html</span>
                  <button onClick={(e) => { e.stopPropagation(); onCloseTab(tab); }} className="ml-2 p-0.5 rounded-sm codicon codicon-chrome-close cursor-pointer hover:outline-dashed hover:outline-1 hover:outline-orange-400 "></button>

                </div>
              </div>
              ))
            }
        </div>
       
        <div className="flex flex-row gap-2 items-center h-full px-2 border-l border-cyan-500">
          
          <div className="outline-1 outline-hidden hover:outline-dashed hover:outline-orange-400 rounded-sm p-0.5 m-0.5 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="m7.389 12.99l-1.27-1.27l.67-.7l2.13 2.13v.7l-2.13 2.13l-.71-.71L7.349 14h-1.85a2.49 2.49 0 0 1-2.5-2.5V5.95a2.6 2.6 0 0 1-1.27-.68a2.52 2.52 0 0 1-.54-2.73A2.5 2.5 0 0 1 3.499 1a2.45 2.45 0 0 1 1 .19a2.48 2.48 0 0 1 1.35 1.35c.133.317.197.658.19 1a2.5 2.5 0 0 1-2 2.45v5.5a1.5 1.5 0 0 0 1.5 1.5zm-4.68-8.25a1.5 1.5 0 0 0 2.08-2.08a1.55 1.55 0 0 0-.68-.56a1.5 1.5 0 0 0-.86-.08a1.49 1.49 0 0 0-1.18 1.18a1.5 1.5 0 0 0 .08.86c.117.277.311.513.56.68m10.33 6.3c.48.098.922.335 1.27.68a2.51 2.51 0 0 1 .31 3.159a2.5 2.5 0 1 1-3.47-3.468c.269-.182.571-.308.89-.37V5.49a1.5 1.5 0 0 0-1.5-1.5h-1.85l1.27 1.27l-.71.71l-2.13-2.13v-.7l2.13-2.13l.71.71l-1.27 1.27h1.85a2.49 2.49 0 0 1 2.5 2.5zm-.351 3.943a1.5 1.5 0 0 0 1.1-2.322a1.55 1.55 0 0 0-.68-.56a1.5 1.5 0 0 0-.859-.08a1.49 1.49 0 0 0-1.18 1.18a1.5 1.5 0 0 0 .08.86a1.5 1.5 0 0 0 1.539.922" clipRule="evenodd"/></svg>
          </div>
          <div className="outline-1 outline-hidden hover:outline-dashed hover:outline-orange-400 rounded-sm p-0.5 m-0.5 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M14 1H3L2 2v11l1 1h11l1-1V2zM8 13H3V2h5zm6 0H9V2h5z"/></svg>  
          </div>
          <div className="outline-1 outline-hidden hover:outline-dashed hover:outline-orange-400 rounded-sm p-0.5 m-0.5 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M4 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0m5 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m5 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/></svg> 
          </div>

        </div>
        
      </div>
       
      <div className="flex items-center border-b pl-4 border-cyan-500">
        Portofolio {iconn} Pages  {iconn} {activePage}.html
      </div>
    </>
    
  );
};

export default Navbar;