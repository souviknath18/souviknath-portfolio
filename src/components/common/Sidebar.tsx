"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useEffect } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

type SidebarProps = {
  isOpen: boolean;
  setIsOpenAction: (value: boolean) => void;
  pathname: string;
};

export default function Sidebar({ isOpen, setIsOpenAction, pathname }: SidebarProps) {
  
  // Prevent background scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Optional: also prevent overscroll on iOS
      document.body.style.overscrollBehavior = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.overscrollBehavior = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
      document.body.style.overscrollBehavior = "";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-[100] transition-all duration-300 ${
        isOpen
          ? "opacity-100 bg-black/70 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={() => setIsOpenAction(false)} // Close when clicking backdrop
    >
      {/* SIDEBAR */}
      <div
        className={`absolute left-0 top-0 h-full w-[280px] bg-[#0b1326] border-r border-white/10 p-6 shadow-[10px_0_40px_rgba(0,0,0,0.6)] transition-transform duration-300 overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-300/40 scrollbar-track-transparent hover:scrollbar-thumb-cyan-300/70 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside sidebar
      >
        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[18px] font-bold text-[#dae2fd]">
            Navigation
          </h2>

          <button
            onClick={() => setIsOpenAction(false)}
            className="rounded-md border border-white/10 p-2 hover:border-cyan-300 hover:text-cyan-300 transition-colors"
          >
            <X size={22} />
          </button>
        </div>

        {/* LINKS */}
        <div className="flex flex-col gap-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpenAction(false)}
                className={`rounded-md px-4 py-3.5 text-[15px] uppercase tracking-wider transition-all ${
                  isActive
                    ? "bg-cyan-300/10 text-cyan-300 border-l-2 border-cyan-300"
                    : "text-[#9aa6c4] hover:bg-white/5 hover:text-[#dae2fd]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}