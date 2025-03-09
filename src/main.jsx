import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ButtonMenu from './komponen/ButtonMenu.jsx'
import Sidebar from './layout/Sidebar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <br />
    <div className='flex'>
      <Sidebar/>
      <div className="w-full bg-red-500"></div>
    </div>
    
    <ButtonMenu text="Nama" />
    <ButtonMenu text="kelas" />
    <App/>
  </StrictMode>,
)
