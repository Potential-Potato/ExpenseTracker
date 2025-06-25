import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

import dashboard from "../assets/dashboard.png";
import wallet from "../assets/wallet.png";
import burger from "../assets/burger-bar.png";
import exit from "../assets/exit.png";
import DropdownPfp from "../components/dropdownPfp";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleBurger = () => {
    setIsOpen(!isOpen);
    console.log("hi");
  };

  return (
    <div className="w-screen h-screen bg-gray-100">
      {/* header */}
      <div className="flex flex-col max-w-[1848px] w-full h-full mx-auto">
        <header className="flex justify-between h-12 w-full px-4 bg-white z-50 fixed md:static">
          <div className="flex space-x-2 items-center justify-center">
            <div
              onClick={toggleBurger}
              className="w-10 h-10 rounded-full flex items-center justify-center"
            >
              <img src={burger} alt="burger" className="h-6 w-6" />
            </div>
            <p className="text-2xl font-light tracking-normal">Kitako</p>
          </div>
          <DropdownPfp />
        </header>

        <div className="flex flex-1">
          {isOpen && (
            <aside className="bg-white p-2 gap-3 w-56 flex-shrink-0 md:relative md:flex md:w-56 md:gap-3 top-0 left-0 h-full flex-col fixed">
              <div className="visible md:hidden mb-2">
                <button
                  onClick={toggleBurger}
                  className="rounded-sm flex p-2 w-9 h-9 ml-1"
                >
                  <img
                    src={exit}
                    alt="exit button"
                    className="relative top-0"
                  />
                </button>
              </div>
              <Link to="/" className="flex items-center text-black mt-4">
                <img src={dashboard} alt="dashboard" className="nav-button" />
                <p className="text-xl font-light">Dashboard</p>
              </Link>
              <Link to="/expenses" className="flex items-center text-black">
                <img src={dashboard} alt="dashboard" className="nav-button" />
                <p className="text-xl font-light">Expenses</p>
              </Link>
              <Link to="/budget" className="flex items-center text-black">
                <img src={dashboard} alt="dashboard" className="nav-button" />
                <p className="text-xl font-light">Budget</p>
              </Link>
            </aside>
          )}
          <main className="flex-1 bg-gray-50 px-10 mt-[6rem] md:mt-[1rem]">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
