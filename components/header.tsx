"use client"

import Image from "next/image";
import logo from "/public/vercel.svg"
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    {
        href: "/",
        label: "Home"
    },
    {
        href: "/posts",
        label: "Posts"
    },
    {
        href: "/create-post",
        label: "Create Post"
    },
]

export default function Header() {
    const pathname = usePathname();

  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
        <Link href={'/'}>
            <Image
            src={logo}
            alt="Logo"
            width="100"
            />
        </Link>

         <nav>
            <ul className="flex gap-x-5 text-[14px]">
                {
                    navLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className={`${
                                pathname === link.href ? "text-zinc-900 font-bold": "text-zinc-400"
                            }`}>
                                {link.label}
                            </Link>
                        </li>
                    ))
                }
            </ul>
         </nav>
            
    </header>
  )
}
