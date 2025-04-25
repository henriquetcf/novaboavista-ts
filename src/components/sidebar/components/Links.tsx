/* eslint-disable */
import React from 'react';
import { useCallback } from 'react';
import { usePathname } from 'next/navigation';
import NavLink from '@/components/link/NavLink';
import DashIcon from '@/components/icons/DashIcon';
// chakra imports

export default function SidebarLinks(props: { routes: RoutesType[] }): JSX.Element {
  // Chakra color mode
  const pathname = usePathname();

  const { routes } = props;

  // verifies if routeName is the one active (in browser input)
  const activeRoute = useCallback(
    (routeName: string) => {
      return pathname?.includes(routeName);
    },
    [pathname],
  );

  const createLinks = (routes: RoutesType[]) => {
    return routes.map((route, index) => {
      if (
        route.layout === '/despachante' ||
        route.layout === '/auth' ||
        route.layout === '/rtl'
      ) {
        return (
          <NavLink key={index} href={route.layout + '/' + route.path}>
            <div className="relative py-1 flex text-gray-600 hover:text-rose-900 hover:font-bold hover:cursor-pointer dark:text-rose-100">
              <li
                className="my-[3px] flex cursor-pointer items-center px-8"
                key={index}
              >
                <span
                  className={`${
                    activeRoute(route.path) === true
                      ? 'font-bold text-rose-900 dark:text-rose-200'
                      : ''
                  }`}
                >
                  {route.icon ? route.icon : <DashIcon />}{' '}
                </span>
                <p
                  className={`leading-1 ml-4 flex ${
                    activeRoute(route.path) === true
                      ? 'font-bold text-rose-900 dark:text-rose-200'
                      : ''
                  }`}
                >
                  {route.name}
                </p>
              </li>
              {activeRoute(route.path) ? (
                <div className="absolute right-0 top-px h-9 w-1 rounded-lg bg-rose-900 dark:bg-brand-400" />
              ) : null}
            </div>
          </NavLink>
        );
      }
    });
  };
  // BRAND
  return <>{createLinks(routes)}</>;
};
