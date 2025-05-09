import React from 'react'
import Navar from '../components/Navbar'
import Crumb from '../components/Crumb'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div>
      <Navar/>
      <Crumb/>
      <Outlet/>
    </div>
  )
}

export default Root