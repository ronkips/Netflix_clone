import { signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";
interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="bg-black w-40 absolute top-14 right-0 py-5 flex-col border-2  border-gray-800 flex ">
      <div className=" flex flex-col gap-3">
        <div className="px-3 gap-3 group/item flex flex-grow items-center w-full">
          <Image src="/imgs/user.png" alt="Avatar" width={20} height={20} className="rounded" />
          <p className="text-white text-sm group/items-hover:underline">
            Username
          </p>
        </div>
        <div className="bg-gray-600 border-0 h-px my-4">
          <div
            onClick={() => signOut()}
            className="px-3 py-2 text-center text-sm text-white hover:underline"
          >
            Sign Out of Netflix
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
