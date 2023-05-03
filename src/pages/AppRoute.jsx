import React from 'react'
import NavMenu from '../components/NavMenu'
import { Outlet } from 'react-router-dom'

export default function AppRoute() {
  return (
    <>
        <NavMenu/>
        <Outlet/>
    </>
  )
}
