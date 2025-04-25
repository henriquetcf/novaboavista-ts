'use client'

import { CircularProgress } from "@heroui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const session = useSession()
  const router = useRouter()

  // console.log(session)

  useEffect(() => {
    if (session.status === 'authenticated') {
        return router?.push("/despachante/dashboard")
    } else if (session.status === 'unauthenticated') {
        return router?.push("/login")
    }
  }, [session])

  if (session.status === 'loading') {
    return (
      <div className="h-screen flex items-center">
        <div className='m-auto'>
          <CircularProgress aria-label="Loading..." color="danger" />
        </div>
      </div>
  )
  }

  return (
    // <div>Home</div>
    <div></div>
  )
}
