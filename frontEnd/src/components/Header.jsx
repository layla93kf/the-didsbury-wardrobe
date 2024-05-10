import React from 'react'
import logo from '../assets/logo.png'

export default function Header() {
  return (
    <div className="flex justify-center items-center bg-white shadow-md fixed-top w-full mt-2 z-50">
      <img src={logo} alt="Logo" className="h-48" />
    </div>
  )
}
