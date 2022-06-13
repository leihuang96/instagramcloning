import React from 'react'
import Image from 'next/image'
import { IconContext } from 'react-icons';
import { BsInstagram, BsSearch} from 'react-icons/bs';
import {
  AiFillHome,
  AiOutlineHome,
  AiOutlineHeart,
  AiFillHeart,
} from 'react-icons/ai';
import { RiMessengerLine, RiMessengerFill,RiAddBoxLine, RiAddBoxFill } from 'react-icons/ri';
import { MdExplore, MdOutlineExplore } from 'react-icons/md';
import ProfilePhoto from '../public/userImg.JPG'

// if you don’t have state or refs, prefer normal functions (not arrow functions) over classes
function Header() {
  return (
    <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* Left - Logo*/}
        <div className="relative inline-grid w-24 cursor-pointer">
          <Image
            alt=""
            src="/../public/instagram-logo.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* Middle - Search input field*/}
        <div className="max-w-xs hidden sm:inline-grid">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <BsSearch className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-200 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
              type="text"
              placeholder="Search"
            ></input>
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <IconContext.Provider value={{ className: 'navBtn' }}>
            <AiFillHome />
            <RiMessengerLine />
            <RiAddBoxLine />
            <MdOutlineExplore />
            <AiOutlineHeart />
            <Image
              src={ProfilePhoto}
              alt="profile photo"
              height="40"
              width="40"
              className=" cursor-pointer rounded-full"
            ></Image>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default Header