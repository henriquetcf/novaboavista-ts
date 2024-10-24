'use client'

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const session = useSession()
  const router = useRouter()

  // console.log(session)

  if (session.status === 'authenticated') {
    router?.push("/despachante/dashboard")
  }
  else if (session.status === 'unauthenticated') {
      router?.push("/login")
  } else {
    if (typeof window !== "undefined") {
      return (
        // <div>Home</div>
        <div></div>
      )
    }
  }
}
