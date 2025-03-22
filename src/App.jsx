import React, { useState } from 'react';
import Sidebar from './layout/Sidebar';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Sideicon from './layout/Sideicon';

const App = () => {
  const [openTabs, setOpenTabs] = useState([]);
  const [activePage, setActivePage] = useState(null);
 
  const handleOpenPage = (page) => {
    if (!openTabs.includes(page)) {
      setOpenTabs([...openTabs, page]);
    }
    setActivePage(page);
  };

  const handleCloseTab = (page) => {
    const updatedTabs = openTabs.filter(tab => tab !== page);
    setOpenTabs(updatedTabs);
    if (activePage === page) {
      setActivePage(updatedTabs.length > 0 ? updatedTabs[updatedTabs.length - 1] : null);
    }
  };

  const renderPage = () => {
    switch(activePage) {
      case 'Home': return <Home />;
      case 'About': return <About />;
      case 'Projects': return <Projects />;
      case 'Contact': return <Contact />;
      default: return <div></div>;
    }
  };

  return (
    <div className="flex h-screen bg-[#000000] text-white">
      <Sideicon/>
      <Sidebar onSelectPage={handleOpenPage} />

      <div className="flex flex-col flex-1">
        <Navbar openTabs={openTabs} onCloseTab={handleCloseTab} setActivePage={setActivePage} activePage={activePage} />
        <div className="p-4 flex-1 overflow-auto">
          {renderPage()}
        </div>
      </div>
    </div>
  );
};

export default App;