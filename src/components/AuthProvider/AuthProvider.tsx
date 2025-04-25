'use client'

import React from 'react'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { HeroUIProvider } from "@heroui/react"
import { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

function AuthProvider({ children }: any) {
  return (
    <HeroUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <SessionProvider>
          {children}
        </SessionProvider>
      </NextThemesProvider>
    </HeroUIProvider>
  )
}

export default AuthProvider