import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsPeopleFill,
  BsFillGearFill,
} from 'react-icons/bs';
import { BsBoxArrowInDownLeft, BsLifePreserver } from 'react-icons/bs'; // Import new icons

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <BrowserRouter>
      <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
        <div className='sidebar-title'>
          <div className='sidebar-brand'>
            <BsCart3 className='icon_header' /> SHOP
          </div>
          <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
          <li className='sidebar-list-item'>
            <Link to="#">
              <BsGrid1X2Fill className='icon' /> Dashboard
            </Link>
          </li>
          <li className='sidebar-list-item'>
            <Link to="#">
              <BsFillArchiveFill className='icon' /> Products
            </Link>
          </li>
          <li className='sidebar-list-item'>
            <Link to="#">
              <BsBoxArrowInDownLeft className='icon' /> Income {/* Changed icon */}
            </Link>
          </li>
          <li className='sidebar-list-item'>
            <Link to="#">
              <BsPeopleFill className='icon' /> Customers
            </Link>
          </li>
          <li className='sidebar-list-item'>
            <Link to="#">
              <BsLifePreserver className='icon' /> Help {/* Changed icon */}
            </Link>
          </li>

          <li className='sidebar-list-item'>
            <Link to="#">
              <BsFillGearFill className='icon' /> Setting
            </Link>
          </li>
        </ul>
      </aside>
    </BrowserRouter>
  );
}

export default Sidebar;
