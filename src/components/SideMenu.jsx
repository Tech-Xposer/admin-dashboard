import React from 'react';
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsPeopleFill,
  BsFillGearFill,
} from 'react-icons/bs';
import { BsBoxArrowInDownLeft, BsLifePreserver } from 'react-icons/bs'; // Import new icons

function SideMenu({ openSidebarToggle, openSidebar }) {
  return (
      
      <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
        <div className='sidebar-title'>
          <div className='sidebar-brand'>
            <BsFillGearFill className='icon_header' /> Dashboard
          </div>
          <span className='icon close_icon' onClick={openSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
          <li className='sidebar-list-item'>
            <a href="#">
              <BsGrid1X2Fill className='icon' /> Dashboard
            </a>
          </li>
          <li className='sidebar-list-item'>
            <a href="#">
              <BsFillArchiveFill className='icon' /> Products
            </a>
          </li>
          <li className='sidebar-list-item'>
            <a href="#">
              <BsBoxArrowInDownLeft className='icon' /> Income {/* Changed icon */}
            </a>
          </li>
          <li className='sidebar-list-item'>
            <a href="#">
              <BsPeopleFill className='icon' /> Customers
            </a>
          </li>
          <li className='sidebar-list-item'>
            <a href="#">
              <BsLifePreserver className='icon' /> Help {/* Changed icon */}
            </a>
          </li>

          <li className='sidebar-list-item'>
            <a href="#">
              <BsFillGearFill className='icon' /> Setting
            </a>
          </li>
        </ul>
      </aside>

  );
}

export default SideMenu;
