'use client';
// Layout components
import { usePathname } from 'next/navigation';
import { useContext, useState } from 'react';
import routes from '@/routes';
import {
  getActiveNavbar,
  getActiveRoute,
  isWindowAvailable,
} from '@/utils/navigation';
import React from 'react';
// import { Portal } from '@chakra-ui/portal';
import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import Footer from '@/components/footer/Footer';

export default function Admin( { children }: any ) {
  // states and functions
  
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // if (isWindowAvailable()) document.documentElement.dir = 'ltr';
  
  return (
    <div className="flex h-full w-full">
      <Sidebar routes={routes} open={open} setOpen={setOpen} variant="admin" />
      {/* Navbar & Main Content */}
      <div className="h-full w-full font-dm">
        {/* Main Content */}
        <main
          className={`mx-2.5 flex-none transition-all
              md:pr-2 xl:ml-[323px]`}
        >
          {/* Routes */}
          <div>
            <Navbar
              onOpenSidenav={() => setOpen(!open)}
              brandText={getActiveRoute(routes, pathname)}
              secondary={getActiveNavbar(routes, pathname)}
            />
            <div className="mx-auto min-h-screen mt-4 !pt-[10px] md:p-2 xl:p-4">
              {children}
            </div>
            <div className="p-3">
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
