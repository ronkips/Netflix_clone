import Image from "next/image";
import React, { useCallback, useState } from "react";
import NavItems from "./NavItems";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronCompactUp } from "react-icons/bs";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const toggleMobileMenu = useCallback(() => {
    setShowMenuMobile((current) => !current);
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
          {showMenuMobile ? (
            <BsChevronCompactUp className="text-white transition" />
          ) : (
            <BsChevronDown className="text-white transition" />
          )}
          <MobileMenu visible={showMenuMobile} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
