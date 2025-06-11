"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function Navbar() {
    const searchP = useSearchParams();
    const todoFilter = searchP.get("todos");

  return (
    <nav>
        <Link href='/'>All</Link>
        <Link href='/?todos=active'>Active</Link>
        <Link href='/?todos=completed'>Completed</Link>
    </nav>
  )
}
