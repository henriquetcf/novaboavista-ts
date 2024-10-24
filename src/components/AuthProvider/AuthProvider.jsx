'use client'

import React from 'react'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

const AuthProvider = ({children}) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light">
      <SessionProvider>
          {children}
      </SessionProvider>
    </NextThemesProvider>
  )
}

export default AuthProvider