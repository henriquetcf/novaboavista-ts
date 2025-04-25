'use client'

import React from 'react';
import dynamic from 'next/dynamic'
import Dropdown2 from '@/components/dropdown';
import { FiAlignJustify } from 'react-icons/fi';
import NavLink from '@/components/link/NavLink';
// import navbarimage from '/public/img/layout/Navbar.png';
import { BsArrowBarUp } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { RiMoonFill, RiSunFill, RiUser2Line, RiUser3Fill } from 'react-icons/ri';
// import { RiMoonFill, RiSunFill } from 'react-icons/ri';
// import Configurator from './Configurator';
import {
  IoMdNotificationsOutline,
  IoMdInformationCircleOutline,
} from 'react-icons/io';
// import avatar from '/public/img/avatars/avatar4.png';
import Image from 'next/image';
import { signIn, signOut } from 'next-auth/react';
import { useTheme } from 'next-themes';
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from "@heroui/react";
import { useEffect, useState } from 'react';
// import ThemeButtonWithNoSSR from '@/components/ThemeButton/ThemeButton'

const ThemeButtonWithNoSSR = dynamic(() => import('@/components/ThemeButton/ThemeButton'), { ssr: false })

export default function Navbar(props: {
  onOpenSidenav: () => void;
  brandText: string;
  secondary?: boolean | string;
  [x: string]: any;
}) {

  const { onOpenSidenav, brandText, mini, hovered } = props;
  const [darkmode, setDarkmode] = React.useState(false);

  const { theme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl border-l-2 border-l-rose-800 dark:bg-gray-900/10">
      <div className="ml-[6px] text-rose-950 dark:text-foreground">
        <div className="h-6 w-[224px] pt-1">
          <a
            className="text-sm font-normal text-navy-700 hover:underline dark:text-white dark:hover:text-white"
            href=" "
          >
            Home
            <span className="mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-white">
              {' '}
              /{' '}
            </span>
          </a>
          <NavLink
            className="text-sm font-normal capitalize text-navy-700 hover:underline dark:text-white dark:hover:text-white"
            href="#"
          >
            {brandText}
          </NavLink>
        </div>
        <p className="shrink text-[33px] capitalize text-navy-700 dark:text-white">
          <NavLink
            href="#"
            className="font-bold capitalize text-rose-900 dark:text-foreground"
          >
            {brandText}
          </NavLink>
        </p>
      </div>

      <div className="relative mt-[3px] flex h-[61px] w-[355px] flex-grow items-center justify-around gap-4 rounded-full bg-white px-2.5 py-2 shadow-xl shadow-shadow-500 dark:shadow-none dark:bg-slate-800 md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[380px] xl:gap-2">
        <div className="flex h-full items-center rounded-full bg-lightPrimary dark:bg-gray-900 xl:w-[225px]">
          <p className="pl-3 pr-2 text-xl">
            <FiSearch className="h-5 w-5" />
          </p>
          <input
            type="text"
            placeholder="Pesquisar..."
            className="block h-full w-full rounded-full bg-lightPrimary dark:bg-gray-900 text-sm font-medium outline-none"
          />
        </div>
        <span
          className="flex cursor-pointer text-xl xl:hidden"
          onClick={onOpenSidenav}
        >
          <FiAlignJustify className="h-5 w-5" />
        </span>
        {/* start Notification */}
        <Dropdown2
          button={
            <p className="cursor-pointer">
              <IoMdNotificationsOutline className="h-5 w-5" />
            </p>
          }
          animation="origin-[65%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
          classNames={'py-2 top-4 -left-[230px] md:-left-[440px] w-max'}
        >
          <div className="flex w-[360px] flex-col gap-3 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none sm:w-[460px]">
            <div className="flex items-center justify-between">
              <p className="text-base font-bold text-navy-700 dark:text-white">
                Notification
              </p>
              <p className="text-sm font-bold text-navy-700 dark:text-white">
                Mark all read
              </p>
            </div>

            <button className="flex w-full items-center">
              <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                <BsArrowBarUp />
              </div>
              <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                  New Update: Horizon UI Dashboard PRO
                </p>
                <p className="font-base text-left text-xs text-gray-900 dark:text-white">
                  A new update for your downloaded item is available!
                </p>
              </div>
            </button>

            <button className="flex w-full items-center">
              <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                <BsArrowBarUp />
              </div>
              <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                  New Update: Horizon UI Dashboard PRO
                </p>
                <p className="font-base text-left text-xs text-gray-900 dark:text-white">
                  A new update for your downloaded item is available!
                </p>
              </div>
            </button>
          </div>
        </Dropdown2>
        {/* start Horizon PRO */}
        <Dropdown2
          button={
            <p className="cursor-pointer">
              <IoMdInformationCircleOutline className="h-5 w-5" />
            </p>
          }
          classNames={'py-2 top-6 -left-[250px] md:-left-[330px] w-max'}
          animation="origin-[75%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
        >
          <div className="flex w-[350px] flex-col gap-2 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
            <div
              style={{
                // backgroundImage: `url(${navbarimage.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
              className="mb-2 aspect-video w-full rounded-lg"
            />
            <a
              target="blank"
              href="https://horizon-ui.com/pro?ref=live-free-tailwind-react"
              className="px-full linear flex cursor-pointer items-center justify-center rounded-xl bg-brand-500 py-[11px] font-bold text-white transition duration-200 hover:bg-brand-600 hover:text-white active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:bg-brand-200"
            >
              Buy Horizon UI PRO
            </a>
            <a
              target="blank"
              href="https://horizon-ui.com/docs-tailwind/docs/react/installation?ref=live-free-tailwind-react"
              className="px-full linear flex cursor-pointer items-center justify-center rounded-xl border py-[11px] font-bold text-navy-700 transition duration-200 hover:bg-gray-200 hover:text-navy-700 dark:!border-white/10 dark:text-white dark:hover:bg-white/20 dark:hover:text-white dark:active:bg-white/10"
            >
              See Documentation
            </a>
            <a
              target="blank"
              href="https://horizon-ui.com/?ref=live-free-tailwind-react"
              className="hover:bg-black px-full linear flex cursor-pointer items-center justify-center rounded-xl py-[11px] font-bold text-navy-700 transition duration-200 hover:text-navy-700 dark:text-white dark:hover:text-white"
            >
              Try Horizon Free
            </a>
          </div>
        </Dropdown2>

        <ThemeButtonWithNoSSR />

        {/* Profile & Dropdown */}
        <Dropdown placement="bottom-start">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="User Actions" variant="flat">
            <DropdownSection aria-label='Main' showDivider>
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-bold">Logado como</p>
                <p className="font-bold">@tonyreichert</p>
              </DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="settings">
                My Settings
              </DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
            </DropdownSection>
            <DropdownSection aria-label='Actions'>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem key="logout" color="danger" onClick={async () => { await signOut(); await signIn()}}>
                Log Out
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
        
      </div>
    </nav>
  );
};
