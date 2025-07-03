import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import pfp from "../assets/pfp.png";
import { useUser } from "../context/UserContext";

export default function dropdownPfp() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get("/users/logout");
      setUser(null);
      navigate("/login");
    } catch (err) {
      console.log("Error logging out:", err);
    }
  };

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
          <button onClick={handleLogout} className="text-left hover:underline">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
