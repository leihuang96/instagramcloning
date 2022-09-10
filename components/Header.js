import React from 'react'
import Image from 'next/image'
import { IconContext } from 'react-icons'
import { BsInstagram, BsSearch } from 'react-icons/bs'
import {
  AiFillHome,
  AiOutlineHome,
  AiOutlineHeart,
  AiFillHeart,
} from 'react-icons/ai'
import {
  RiMessengerLine,
  RiMessengerFill,
  RiAddBoxLine,
  RiAddBoxFill,
} from 'react-icons/ri'
import { MdExplore, MdOutlineExplore } from 'react-icons/md'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

// if you don’t have state or refs, prefer normal functions (not arrow functions) over classes
function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* Left - Logo*/}
        <div
          onClick={() => router.push('/')}
          className="relative inline-grid w-24 cursor-pointer"
        >
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
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
              type="text"
              placeholder="Search"
            ></input>
          </div>
        </div>

        {/* Right - icons*/}
        <div className="flex items-center justify-end space-x-4">
          <AiFillHome onClick={() => router.push('/')} className="navBtn" />
          {session ? (
            <>
              <div className="relative navBtn">
                <RiMessengerLine className="navBtn" />
                <div className="absolute -top-2 -right-3 text-sm w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white">
                  1
                </div>
              </div>
              <RiAddBoxLine onClick={() => setOpen(true)} className="navBtn" />
              <MdOutlineExplore className="navBtn" />
              <AiOutlineHeart className="navBtn" />
              <img
                onClick={signOut}
                src={session.user.image}
                alt="profile photo"
                className="h-10 w-10 rounded-full cursor-pointer"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
