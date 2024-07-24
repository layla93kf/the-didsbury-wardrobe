import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="flex justify-center items-center bg-white shadow-md mb-10 md:mb-0 fixed-top w-full mt-2 z-30">
      <Link to="/">
        <img src={logo} alt="Logo" style={{ height: '120px' }} />
      </Link>
    </div>
  );
}
