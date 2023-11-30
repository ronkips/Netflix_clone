import React from "react";
interface NavbarItemsrops {
  label: string;
}
const NavItems: React.FC<NavbarItemsrops> = ({ label }) => {
  return (
    <div className="text-white cursor-pointer hover:text-gray-300 transition">
      {label}
    </div>
  );
};

export default NavItems;
