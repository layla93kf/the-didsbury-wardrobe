import React from "react";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <div className="flex justify-center items-center bg-white shadow-md">
      <img src={logo} alt="Logo" className="w-70 h-60" />
    </div>
  );
}
