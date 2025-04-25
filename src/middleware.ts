import NextAuth from 'next-auth';
// import { authConfig } from '@/auth.config';
import { NextResponse } from "next/server";
// import { auth, BASE_PATH} from "@/auth"
 
// export default NextAuth(authConfig).auth;

// export const BASE_PATH = "/api/auth";

export { default } from "next-auth/middleware"

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!login|api/auth/signin|_next/static|_next/image|favicon.ico|.*\\.png$).*)'],
};

// export default function middleware(req: any, session: any): any {
//   console.log('inicio')
//   const reqUrl = new URL(req.url)
//   console.log(reqUrl.pathname)
//   console.log('session', session)

//   if (!req.auth && reqUrl?.pathname !== "/login") {
//     console.log('-login-')
//     return NextResponse.redirect(
//       new URL(
//         `/login?callbackUrl=${encodeURIComponent(reqUrl.pathname)}`,
//         // `${BASE_PATH}/signin?callbackUrl=${encodeURIComponent(reqUrl.pathname)}`,
//         req.url
//       )
//     )
//   } else if (req.auth && reqUrl?.pathname === "/login") {
//     console.log('-despachante-')
//     return NextResponse.redirect(
//       new URL(
//         `/despachante?callbackUrl=${encodeURIComponent(reqUrl.pathname)}`,
//         // `${BASE_PATH}/signin?callbackUrl=${encodeURIComponent(reqUrl.pathname)}`,
//         req.url
//       )
//     )
//   }
//   console.log('fim')
// } 