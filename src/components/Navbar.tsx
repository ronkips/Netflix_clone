import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import NavItems from "./NavItems";
import { BsChevronDown, BsMenuDown } from "react-icons/bs";
import { BsChevronCompactUp } from "react-icons/bs";
import MobileMenu from "./MobileMenu";
import { BsSearch, BsBell } from "react-icons/bs";
import AccountMenu from "./AccountMenu";

const TOP_OFFSET = 67;

const Navbar = () => {
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const [showAccountMenu, setShoAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }
  , []);
  const toggleMobileMenu = useCallback(() => {
    setShowMenuMobile((current) => !current);
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setShoAccountMenu((current) => !current);
  }, []);
  return (
    <nav className=" w-full fixed z-40">
      <div className="px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 bg-zinc-900 bg-opacity-90 ">
        <Image
          src="/imgs/logo.png"
          alt="Logo"
          width={100}
          height={12}
          priority
        />
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavItems label="Home" />
          <NavItems label="Series" />
          <NavItems label="Films" />
          <NavItems label="New & Popular" />
          <NavItems label="My List" />
          <NavItems label="Browse by Languages" />
        </div>
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>
          <BsChevronDown
            className={`text-white transition ${
              showMenuMobile ? `rotate-180` : `rotate-0`
            }`}
          />
          <MobileMenu visible={showMenuMobile} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center ">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
            <BsSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
            <BsBell />
          </div>
          <div
            onClick={toggleAccountMenu}
            className="flex flex-row items-center gap-2  cursor-pointer relative"
          >
            <div className="w-6 h-6 lg:w-5 lg:h-5 rounded-md overflow-hidden">
              <Image src="/imgs/user.png" alt="Avatar" width={30} height={30} />
            </div>
            <BsChevronDown
              className={`text-white transition ${
                showAccountMenu ? `rotate-180` : `rotate-0`
              }`}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
