import { useState } from "react";
import pfp from "../assets/pfp.png";

export default function dropdownPfp() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="relative w-15 h-15 rounded-full flex items-center justify-center">
      <img
        src={pfp}
        alt="pfp"
        onClick={() => setMenuOpen((prev) => !prev)}
        className="h-10 w-10  bg-white cursor-pointer"
      />

      {menuOpen && (
        <div className="w-40 absolute top-full right-0 flex flex-col bg-gray-100 rounded-lg p-3 mt-1 shadow-md z-10">
          <a href="">Profile</a>
          <a href="">Darkmode</a>
          <a href="">Settings</a>
          <a href="">About</a>
        </div>
      )}
    </div>
  );
}
