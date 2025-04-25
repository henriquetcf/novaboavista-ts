/* eslint-disable */

import { HiX } from 'react-icons/hi';
import Links from './components/Links';

import { useEffect, useState } from 'react';
import { IRoute } from '@/types/navigation';

export default function SidebarHorizon(props: { routes: IRoute[]; [x: string]: any }) {

  const { routes, open, setOpen } = props;
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-slate-400 transition-all rounded-lg xl:w-[312px] dark:bg-slate-800 dark:shadow-gray-900 md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? 'translate-x-0' : '-translate-x-96 xl:translate-x-0'
      }`}
    >
      <span
        className="absolute right-4 top-4 block cursor-pointer xl:hidden"
        onClick={() => setOpen(false)}
      >
        <HiX />
      </span>

      <div className={`mx-[56px] mt-[50px] flex items-center`}>
        <div className="ml-1 mt-1 font-poppins text-[26px] font-bold uppercase text-rose-900 dark:text-rose-100">
          NOVA <br />
          <span className="font-medium">BOA VISTA</span>
        </div>
      </div>
      <div className="mb-7 mt-[28px] h-px bg-gray-300 dark:bg-white/30" />
      {/* Nav item */}

      <ul className="mb-auto pt-1">
        <Links routes={routes} />
      </ul>

      {/* Free Horizon Card */}
      {/* <div className="flex justify-center">
        <SidebarCard />
      </div> */}

      {/* Nav item end */}
    </div>
  );
}

// export default SidebarHorizon;
