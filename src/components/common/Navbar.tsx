"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "@/components/common/Sidebar";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1326]/70 backdrop-blur-md shadow-[0_0_15px_rgba(173,199,255,0.10)]">
        
        {/* glow */}
        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#adc7ff]/20 to-transparent" />
        <div className="pointer-events-none absolute left-1/2 top-full h-20 w-[500px] -translate-x-1/2 bg-[#adc7ff]/10 blur-3xl" />

        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 py-5 lg:px-4 flex-nowrap">

          {/* LEFT: menu + logo */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink min-w-0">
            
            {/* MOBILE MENU */}
            <button
              onClick={() => setIsOpen(true)}
              className="flex lg:hidden items-center justify-center rounded-md border border-white/10 bg-[#131b2e] p-[7px] sm:p-2 text-[#dae2fd] transition-all duration-300 hover:border-cyan-300 hover:text-cyan-300"
            >
              <Menu className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
            </button>

            {/* LOGO */}
            <Link
              href="/"
              className="text-[16px] sm:text-[18px] md:text-2xl font-bold tracking-tight text-[#adc7ff] hover:text-cyan-300 whitespace-nowrap truncate"
            >
              StackWithSouvik
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-4 xl:gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`border-b-2 pb-1 uppercase tracking-[0.12em] transition-all duration-300 ${
                    isActive
                      ? "border-cyan-300 text-[12px] xl:text-[14px] text-cyan-300 font-semibold"
                      : "border-transparent text-[12px] xl:text-sm font-medium text-gray-400 hover:text-[#adc7ff]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* RIGHT: HIRE ME */}
          <div className="ml-auto flex-shrink-0 min-w-fit">
            <Link href="/contact">
              <button className="whitespace-nowrap rounded-lg bg-[#adc7ff] px-3 sm:px-5 py-2.5 sm:py-3 text-[12px] sm:text-sm font-bold text-[#08111f] shadow-[0_0_20px_rgba(173,199,255,0.25)] transition-all duration-300 hover:scale-[1.03] hover:bg-[#c4d7ff] hover:shadow-[0_0_30px_rgba(173,199,255,0.35)]">
                Hire Me
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <Sidebar
        isOpen={isOpen}
        setIsOpenAction={setIsOpen}
        pathname={pathname}
      />
    </>
  );
}