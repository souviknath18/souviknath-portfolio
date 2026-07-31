"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Github,
  Menu,
} from "lucide-react";

import Sidebar from "@/components/common/Sidebar";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Skills",
    href: "/skills",
  },
  {
    label: "Experience",
    href: "/experience",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActivePath = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[#0b1326]/75 shadow-[0_0_20px_rgba(173,199,255,0.08)] backdrop-blur-xl">
        {/* Bottom border glow */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />

        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-full h-20 w-[420px] -translate-x-1/2 bg-[#adc7ff]/[0.08] blur-3xl" />

        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-4">
          {/* Left side */}
          <div className="flex min-w-0 items-center gap-3">
            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isOpen}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.035] text-[#dae2fd] transition-all duration-300 hover:border-cyan-300/35 hover:bg-cyan-300/[0.05] hover:text-cyan-300 lg:hidden"
            >
              <Menu size={21} />
            </button>

            {/* Logo */}
            <Link
              href="/"
              aria-label="Go to homepage"
              className="truncate whitespace-nowrap text-[17px] font-bold tracking-[-0.03em] text-[#dae2fd] transition-colors duration-300 hover:text-cyan-300 sm:text-[19px] md:text-[21px]"
            >
              Souvik Nath
              <span className="text-cyan-300">.</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 lg:flex xl:gap-7">
            {navItems.map((item) => {
              const isActive = isActivePath(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative whitespace-nowrap py-2 text-[12px] font-semibold uppercase tracking-[0.1em] transition-colors duration-300 xl:text-[13px] ${
                    isActive
                      ? "text-cyan-300"
                      : "text-[#8f9ab2] hover:text-[#dae2fd]"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute inset-x-0 bottom-0 mx-auto h-[2px] rounded-full bg-cyan-300 transition-all duration-300 ${
                      isActive
                        ? "w-full opacity-100"
                        : "w-0 opacity-0"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Right side */}
          <div className="ml-auto flex shrink-0 items-center gap-2.5">
            {/* GitHub */}
            <a
              href="https://github.com/souviknath18"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Souvik Nath's GitHub profile"
              className="hidden h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.025] text-[#b9c3d8] transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] hover:text-white sm:flex"
            >
              <Github size={18} />
            </a>

            {/* Contact button */}
            <Link
              href="/contact"
              className="whitespace-nowrap rounded-lg bg-gradient-to-r from-[#adc7ff] to-cyan-300 px-4 py-2.5 text-[12px] font-bold text-[#08111f] shadow-[0_0_20px_rgba(173,199,255,0.2)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(99,247,255,0.28)] sm:px-5 sm:text-[13px]"
            >
              Let&apos;s Talk
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