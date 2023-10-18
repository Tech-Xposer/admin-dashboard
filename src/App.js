import React, { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import { BrowserRouter, Route } from "react-router-dom";
import SideMenu from './components/SideMenu';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const openSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  }

  return (
    <div className='grid-container'>

      <AppHeader openSidebar={openSidebar} />

      <SideMenu openSidebarToggle={openSidebarToggle} openSidebar={openSidebar} />
      <Home />
      {/* <BrowserRouter>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </BrowserRouter> */}
    </div>
  );
}

export default App;
