import Link from "next/link";
import React from "react";
import { FaGlobeAsia, FaRegUserCircle } from "react-icons/fa";
import { FaMagnifyingGlass, FaWallet } from "react-icons/fa6";
import { GiLaddersPlatform } from "react-icons/gi";

type Props = {};

const NavbarComponent = (props: Props) => {
  return (
    <div className="flex items-center w-full justify-around pt-2 border-b-2 pb-1 drop-shadow-xl">
      <div className="flex items-center py-3">
        <p className="flex items-center">
          <GiLaddersPlatform />
          <Link href={"/"} className="mx-2 font-semibold">
            {" "}
            MovieMate
          </Link>
        </p>
        <div className="mx-4 flex items-center text-sm font-medium">
          <Link href={"/"} className="mx-4">
            Home
          </Link>
          <p className="mx-4">Theaters</p>
          <p className="mx-4">New</p>
          <p className="mx-4">Watchlist</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center bg-[#292938ff] px-2 rounded-md ">
          <FaMagnifyingGlass />
          <input
            placeholder="Search"
            className="bg-[#292938ff] py-1.5 outline-none mx-1"
          />
        </div>

        <div className="ml-3 flex items-center">
          <div className="flex items-center mx-2">
            <FaGlobeAsia className=" bg-[#292938ff] p-2 rounded-md text-4xl" />
            <FaWallet className=" bg-[#292938ff] p-2 rounded-md text-4xl mx-2" />
          </div>
          <Link href="/login">
            {" "}
            <FaRegUserCircle className=" bg-[#292938ff] p-2 rounded-md text-4xl" />
          </Link>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default NavbarComponent;
