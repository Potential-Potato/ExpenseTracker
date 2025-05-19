import { Outlet, Link } from "react-router-dom";

import wallet from "../assets/wallet.png";
import receipt from "../assets/receipt.png";
import house from "../assets/house.png";
import info from "../assets/info.png";
import settings from "../assets/settings.png";

export default function AppLayout() {
  return (
    <div className="flex min-w-screen min-h-screen lg:w-[96rem]">
      <div className=" min-h-screen bg-[#093570] flex flex-col w-[8rem]">
        <header className="h-16 bg-blue-600 text-white flex items-center justify-center">
          <h3>Logo</h3>
        </header>
        <div className="flex flex-col justify-between flex-1 items-center py-4en">
          <div className="flex flex-col gap-4 mt-[6rem] justify-around h-[14rem]">
            <Link to="/">
              <img src={house} alt="house" className="nav-button" />
            </Link>
            <Link to="/budget">
              <img src={wallet} alt="wallet" className="nav-button" />
            </Link>
            <Link to="/expenses">
              <img src={receipt} alt="receipt" className="nav-button" />
            </Link>
          </div>
          <div className="flex flex-col gap-4 mt-[6rem] justify-around h-[8rem]">
            <img src={info} alt="info" className="nav-button" />
            <img src={settings} alt="settings" className="nav-button" />
          </div>
        </div>
      </div>
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
