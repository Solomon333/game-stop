import React from 'react'
import Navbar from '../componenets/Navbar'
import { Outlet } from 'react-router-dom'
import Playstation from './Playstation'
import ImageSlider from '../componenets/ImageSlider'
import Slideimg from '../Slideimg'
import Xbox from './Xbox'
import Nintendo from './Nintendo'
import Pc from './Pc'

function Layout() {
  return (
      <>
        <Navbar />
        {/* <ImageSlider slides={Slideimg} /> */}
        <Playstation />
        <Xbox />
        <Nintendo />
        <Pc />
        <Outlet />
        
    </>
  )
}

export default Layout