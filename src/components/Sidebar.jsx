import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import Passport from '../assets/images/passport.png';
import { HiOutlineCog8Tooth } from "react-icons/hi2";
import { FaRegQuestionCircle } from "react-icons/fa";
import { BsCardText } from "react-icons/bs";
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoCaretUpCircleOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="bg-black text-white h-screen w-full md:w-[50%] p-4">
      {/* Profile Section */}
      <div className="flex flex-row gap-4 text-[40px] items-center">
        <img
          src={Passport}
          alt=""
          className="h-24 w-24 md:h-32 md:w-32 object-cover border-4 border-white rounded-full"
        />
        <div className="flex flex-col">
          <p className="text-lg md:text-xl">Belinda</p>
          <p className="text-lg md:text-xl">Armoo</p>
        </div>
      </div>

      {/* Menu Items */}
      <div className="mt-8">
        <ul>
          <li className="flex flex-row gap-3 mb-3 items-center">
            <p className="text-[30px] md:text-[40px] text-amber-500">
              <TbTruckDelivery />
            </p>
            <a className="text-[16px] md:text-[20px]">Pending Request</a>
          </li>
          <li className="flex flex-row gap-3 mb-3 items-center">
            <p className="text-[30px] md:text-[40px] text-amber-500">
              <IoCaretUpCircleOutline />
            </p>
            <a className="text-[16px] md:text-[20px]">Track Cargo</a>
          </li>
          <li className="flex flex-row gap-3 mb-3 items-center">
            <p className="text-[30px] md:text-[40px] text-amber-500">
              <BsCardText />
            </p>
            <a className="text-[16px] md:text-[20px]">Payments</a>
          </li>
          <li className="flex flex-row gap-3 mb-3 items-center">
            <p className="text-[30px] md:text-[40px] text-amber-500">
              <FaClockRotateLeft />
            </p>
            <a className="text-[16px] md:text-[20px]">Trips</a>
          </li>
        </ul>

        {/* Divider */}
        <div className="mt-8">
          <p className="border-t border-gray-600 my-4"></p>
          <ul>
            <li className="flex flex-row gap-3 mb-3 items-center">
              <p className="text-[30px] md:text-[40px] text-amber-500">
                <HiOutlineCog8Tooth />
              </p>
              <a className="text-[16px] md:text-[20px]">Settings</a>
            </li>
            <li className="flex flex-row gap-3 mb-3 items-center">
              <p className="text-[30px] md:text-[40px] text-amber-500">
                <FaRegQuestionCircle />
              </p>
              <a className="text-[16px] md:text-[20px]">Support</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;