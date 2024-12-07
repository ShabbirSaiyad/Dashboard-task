import React, { useState } from 'react'
import logo from '../Assets/Logo.png'
import { sidebarLinks } from '../data/sidebar-link'
import settingOff from '../Assets/settings-off.png'
import settingOn from '../Assets/settings-on.png'
import logout from '../Assets/logout-off.png'
import logOn from '../Assets/logout-on.png'
import search from '../Assets/search.png'
import notification from '../Assets/notifications.png'
import profile from '../Assets/Ellipse 46.png'
import FinanceOverviewCard from './FinanceOverviewCard'
import { financeOverview } from '../data/financeOverview'
import TableSection from './TableSection'
import EventSection from './EventSection'
import { IoMdMenu } from "react-icons/io";
import moreVert from '../Assets/more_vert.png'

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (id) => {
    setActiveLink(id);
  };


  return (
    <div className='flex flex-col md:flex-row '>

      {/* Part-1 */}
      <div className={`flex flex-col md:min-w-[243px] border-r b-[#EBEBEB] ${isSidebarOpen ? 'block' : 'hidden'} md:block`} >

        {/* Logo-section */}
        <div className='flex p-4 md:p-8 border-b border-[#EBEBEB] justify-between items-center'>
          <img src={logo} alt="logo" className='w-[100px] md:w-[120px] h-auto' />

          <button
            className="md:hidden text-black text-[20px]"
            onClick={toggleSidebar}
          >
            ✕
          </button>

        </div>

        <div className='flex flex-col md:space-y-[680px]'>

          {/* Headings */}
          <div className='flex flex-col p-4 '>
            {

              sidebarLinks.map((item) => {

                const isActive = activeLink === item.id;

                return (

                  <div
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`flex flex-row px-[12px] py-[8px] space-x-2 cursor-pointer ${isActive ? 'bg-[#1CD2AD1A] ' : ''
                      } `}>

                    <img
                      src={isActive ? item.activePath : item.path}
                      alt="sidebar-icons"
                      className='w-[24px] h-[24px]' />

                    <p className={`text-[16px] ${isActive ? 'text-[#1CD2AD]' : 'text-[#767676]'}`}>{item.name}</p>
                  </div>

                )

              })
            }

          </div>

          {/* Setting-logout */}
          <div className='flex flex-col p-4 border-t border-[#EBEBEB]'>

            <div
              onClick={() => handleLinkClick('settings')}

              className={`flex flex-row px-[12px] py-[8px] space-x-2 cursor-pointer ${activeLink === 'settings' ? 'bg-[#1CD2AD1A]' : ''
                }`}
            >

              <img
                src={activeLink === 'settings' ? settingOn : settingOff}
                className='w-[24px] h-[24px]'
                alt="Settings"

              />
              <p
                className={`text-[14px] md:text-[16px] ${activeLink === 'settings' ? 'text-[#1CD2AD]' : 'text-[#767676]'
                  }`}
              >Setting</p>
            </div>

            <div
              onClick={() => handleLinkClick('logout')}
              className={`flex flex-row px-[12px] py-[8px] space-x-2 cursor-pointer ${activeLink === 'logout' ? 'bg-[#1CD2AD1A]' : ''
                }`}
            >

              <img
                src={activeLink === 'logout' ? logOn : logout}
                className='w-[24px] h-[24px]'
                alt="Logout"
              />
              <p className={`text-[14px] md:text-[16px] 
    ${activeLink === 'logout' ? 'text-[#1CD2AD]' : 'text-[#767676]'
                }`}
              >Log Out</p>
            </div>

          </div>

        </div>

      </div>

      {/* Part-2 */}
      <div className='bg-[#121E48] max-h-[245px]'>

        {!isSidebarOpen && (
          <button
            className="md:hidden text-white text-[20px] p-4 ml-4"
            onClick={toggleSidebar}
          >
            <IoMdMenu />
          </button>
        )}


        <div className='flex flex-col md:flex-row  justify-between space-y-4 md:space-y-0 p-4 md:p-6 ml-4 '>

          <p className='text-white md:text-left'>Hi, Welcome back, <span className='text-[#1CD2AD]'>Robert</span></p>

          <div className='flex flex-row gap-3 items-center'>

            <div className='bg-[#e9c3c31a] flex flex-row p-3 space-x-1  w-[214px] rounded-full items-center'>
              <img src={search} className='w-[20px] h-[20px]' alt="search" />
              <p className='text-[14px] text-white'>Search</p>
              <img src={moreVert} className='w-[20px] h-[20px] mt-2' alt="dot"/>
            </div>

            <div className='flex w-[40px] h-[40px] bg-[#e9c3c31a] rounded-full items-center justify-center'>

              <img src={notification} className='w-[24px] h-[24px] p-1' alt="notification"/>

            </div>

            <img src={profile} alt="profile" className='w-[40px] h-[40px]' />

          </div>

        </div>

        <p className='text-[20px] md:text-[24px] text-white p-4 ml-4'>Finance Overview</p>

        <div className='mt-8 md:mt-4 flex gap-2 justify-center items-center flex-wrap p-2 '>
          {
            financeOverview.map((item) => {
              return (
                <FinanceOverviewCard key={item.id} field={item.field} imagePath={item.path} amount={item.amount} />
              )
            })

          }
        </div>

        {/* Table Section */}
        <div className='mt-5 p-4 bg-[#EBEBEB]'>
          <TableSection />
        </div>

        {/* Events */}
        <div className='p-4 bg-[#EBEBEB]'>
          <EventSection />
        </div>


      </div>

    </div>
  )
}

export default Dashboard