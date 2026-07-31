"use client";

import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  X,
} from "lucide-react";
import { useEffect } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

type SidebarProps = {
  isOpen: boolean;
  setIsOpenAction: (value: boolean) => void;
  pathname: string;
};

export default function Sidebar({
  isOpen,
  setIsOpenAction,
  pathname,
}: SidebarProps) {
  const isActivePath = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.overscrollBehavior = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.overscrollBehavior = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.overscrollBehavior = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpenAction(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, setIsOpenAction]);

  return (
    <div
      className={`fixed inset-0 z-[100] transition-all duration-300 ${
        isOpen
          ? "pointer-events-auto bg-black/70 opacity-100"
          : "pointer-events-none bg-black/0 opacity-0"
      }`}
      onClick={() => setIsOpenAction(false)}
      aria-hidden={!isOpen}
    >
      {/* Sidebar */}
      <aside
        className={`absolute left-0 top-0 flex h-full w-[290px] max-w-[86vw] flex-col overflow-y-auto border-r border-white/10 bg-[#0b1326]/95 p-5 shadow-[10px_0_40px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-transform duration-300 sm:p-6 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(event) => event.stopPropagation()}
        aria-label="Mobile navigation"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
          <Link
            href="/"
            onClick={() => setIsOpenAction(false)}
            className="text-[18px] font-bold tracking-[-0.03em] text-[#dae2fd] transition-colors duration-300 hover:text-cyan-300"
          >
            Souvik Nath
            <span className="text-cyan-300">.</span>
          </Link>

          <button
            type="button"
            onClick={() => setIsOpenAction(false)}
            aria-label="Close navigation menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-[#b9c3d8] transition-all duration-300 hover:border-cyan-300/35 hover:bg-cyan-300/[0.05] hover:text-cyan-300"
          >
            <X size={20} />
          </button>
        </div>

        {/* Intro */}
        <div className="mt-6 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
          <p className="text-[13px] font-semibold text-[#d7e0f4]">
            Full Stack Engineer & AI Developer
          </p>

          <p className="mt-2 text-[12px] leading-6 text-[#7f8ba3]">
            Building scalable web applications, production APIs, fintech
            systems, and AI-powered SaaS products.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="mt-6 flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive = isActivePath(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpenAction(false)}
                aria-current={isActive ? "page" : undefined}
                className={`relative rounded-lg px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.09em] transition-all duration-300 ${
                  isActive
                    ? "border border-cyan-300/15 bg-cyan-300/[0.08] text-cyan-300"
                    : "border border-transparent text-[#919db4] hover:border-white/[0.07] hover:bg-white/[0.035] hover:text-[#dae2fd]"
                }`}
              >
                {isActive && (
                  <span className="absolute bottom-2 left-0 top-2 w-[2px] rounded-full bg-cyan-300" />
                )}

                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Resume Button */}
        <a
          href="/resume/SouvikNath_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpenAction(false)}
          className="mt-6 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#adc7ff] to-cyan-300 px-5 py-3 text-[13px] font-bold text-[#08111f] shadow-[0_0_22px_rgba(173,199,255,0.2)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_28px_rgba(99,247,255,0.26)]"
        >
          View Resume
        </a>

        {/* Social Links */}
        <div className="mt-auto pt-8">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#68748a]">
            Connect
          </p>

          <div className="flex items-center gap-3">
            <a
              href="mailto:souviknath18@gmail.com"
              aria-label="Email Souvik Nath"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025] text-[#9aa6bd] transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/[0.05] hover:text-cyan-300"
            >
              <Mail size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/stackwithsouvik/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Souvik Nath's LinkedIn profile"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025] text-[#9aa6bd] transition-all duration-300 hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 hover:text-[#72b8ff]"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="https://github.com/souviknath18"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Souvik Nath's GitHub profile"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025] text-[#9aa6bd] transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
            >
              <Github size={18} />
            </a>
          </div>

          <p className="mt-5 text-[11px] leading-5 text-[#667287]">
            Bangalore, India
          </p>
        </div>
      </aside>
    </div>
  );
}