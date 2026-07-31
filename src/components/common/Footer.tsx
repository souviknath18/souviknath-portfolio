"use client";

import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import {
  JetBrains_Mono,
  Montserrat,
} from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800"],
});

const footerLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-white/[0.06] bg-[#060e20] sm:mt-24">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-4">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className={`${montserrat.className} text-[20px] font-bold tracking-[-0.03em] text-[#dae2fd] transition-colors duration-300 hover:text-cyan-300 sm:text-[22px]`}
            >
              Souvik Nath
              <span className="text-cyan-300">.</span>
            </Link>

            <p className="mt-4 max-w-sm text-[13px] leading-7 text-[#8490a8] sm:text-[14px]">
              Full Stack Engineer building scalable web applications,
              production APIs, fintech systems, and AI-powered SaaS products.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              className={`${jetbrainsMono.className} text-[11px] uppercase tracking-[0.14em] text-cyan-300`}
            >
              Navigation
            </p>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
              {footerLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[13px] font-medium text-[#8b96ad] transition-colors duration-300 hover:text-[#dae2fd]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="lg:text-right">
            <p
              className={`${jetbrainsMono.className} text-[11px] uppercase tracking-[0.14em] text-cyan-300`}
            >
              Connect
            </p>

            <div className="mt-5 flex items-center gap-3 lg:justify-end">
              <a
                href="mailto:souviknath18@gmail.com"
                aria-label="Email Souvik Nath"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025] text-[#9aa6bd] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-cyan-300/[0.05] hover:text-cyan-300"
              >
                <Mail size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/stackwithsouvik/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Souvik Nath's LinkedIn profile"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025] text-[#9aa6bd] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 hover:text-[#72b8ff]"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://github.com/souviknath18"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Souvik Nath's GitHub profile"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025] text-[#9aa6bd] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
              >
                <Github size={18} />
              </a>
            </div>

            <a
              href="mailto:souviknath18@gmail.com"
              className={`${jetbrainsMono.className} mt-4 inline-block text-[11px] text-[#78849b] transition-colors duration-300 hover:text-cyan-300 sm:text-[12px]`}
            >
              souviknath18@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-6 text-center sm:flex-row sm:text-left">
          <p
            className={`${jetbrainsMono.className} text-[11px] text-[#6f7b91] sm:text-[12px]`}
          >
            © {currentYear} Souvik Nath. All rights reserved.
          </p>

          <p
            className={`${jetbrainsMono.className} text-[11px] text-[#6f7b91] sm:text-[12px]`}
          >
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}