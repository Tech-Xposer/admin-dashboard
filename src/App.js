import React, { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import SideMenu from './components/SideMenu';
import Home from './pages/Home';


function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const openSidebar = () => {
    console.log('Clicked');
    if(openSidebarToggle==false){
      setOpenSidebarToggle(true)
    }
    else{
      setOpenSidebarToggle(false)
    }

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
