import React from 'react'
import logo from '../assets/logo.png'

export default function Header() {
  return (
    <div className="flex justify-center items-center bg-white shadow-md fixed w-full mt-8">
      <img src={logo} alt="Logo" className="h-40" />
    </div>
  )
}
