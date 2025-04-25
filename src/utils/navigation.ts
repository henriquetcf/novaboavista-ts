'use client'

import { IRoute } from '@/types/navigation';
import Router from 'next/router';

// NextJS Requirement
export function isWindowAvailable() {return typeof window !== 'undefined'};

export function findCurrentRoute(
  routes: IRoute[],
  pathname: string,
): IRoute | null  {
  
  if (!isWindowAvailable()) return null;

  for (let route of routes) {
    if (!!route.items) {
      const found = findCurrentRoute(route.items, pathname);
      if (!!found) return found;
    }
    if (pathname?.match(route.path) && route) return route;

  } 
  
  return null
};

export function getActiveRoute(routes: IRoute[], pathname: string): string {
  const route = findCurrentRoute(routes, pathname);
  return route?.name || 'Main Dashboard';
};

export function getActiveNavbar (
  routes: IRoute[],
  pathname: string,
): boolean {
  const route = findCurrentRoute(routes, pathname);
  return route?.secondary ? true : false;
};

export function getActiveNavbarText(
  routes: IRoute[],
  pathname: string,
): string | boolean {
  return getActiveRoute(routes, pathname) || false;
};
