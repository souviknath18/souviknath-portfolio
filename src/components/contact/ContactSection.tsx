"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  BriefcaseBusiness,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Rocket,
  Send,
} from "lucide-react";
import {
  Inter,
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

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type FormStatus = {
  type: "success" | "error" | "";
  message: string;
};

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/souviknath18",
    icon: Github,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/stackwithsouvik/",
    icon: Linkedin,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:souviknath18@gmail.com",
    icon: Mail,
    external: false,
  },
];

const opportunityAreas = [
  "Full Stack Engineering",
  "Backend Development",
  "AI Applications",
  "Fintech Systems",
];

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<FormStatus>({
    type: "",
    message: "",
  });

  const sendEmail = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (!formRef.current || loading) {
      return;
    }

    const serviceId =
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId =
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey =
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message:
          "The contact form is temporarily unavailable. Please email me directly at souviknath18@gmail.com.",
      });

      return;
    }

    setLoading(true);
    setStatus({
      type: "",
      message: "",
    });

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        {
          publicKey,
        },
      );

      setStatus({
        type: "success",
        message:
          "Your message was sent successfully. I’ll get back to you as soon as possible.",
      });

      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS submission failed:", error);

      setStatus({
        type: "error",
        message:
          "The message could not be sent. Please try again or email me directly at souviknath18@gmail.com.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact-form"
      className="mx-auto max-w-7xl px-6 pb-24 pt-28 md:px-10 md:pt-32 lg:px-4 lg:pt-36"
    >
      {/* Hero Heading */}
      <div className="mx-auto mb-12 flex max-w-4xl flex-col items-center text-center sm:mb-14">
        <div className="flex items-center gap-2.5 rounded-full border border-cyan-300/25 bg-cyan-300/[0.035] px-4 py-1.5">
          <div className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-70" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.85)]" />
          </div>

          <span
            className={`${jetbrainsMono.className} text-[10px] uppercase tracking-[0.14em] text-cyan-300 sm:text-[11px]`}
          >
            Open to Full Stack, Backend & AI Opportunities
          </span>
        </div>

        <h1
          className={`${montserrat.className} mt-6 text-[40px] font-[800] leading-[1.03] tracking-[-0.05em] sm:text-[52px] md:text-[64px] lg:text-[70px]`}
        >
          <span className="text-[#dae2fd]">Let&apos;s Build</span>{" "}
          <span className="bg-gradient-to-r from-[#adc7ff] to-cyan-300 bg-clip-text text-transparent">
            Something Meaningful
          </span>
        </h1>

        <p
          className={`${inter.className} mt-6 max-w-3xl text-[14px] leading-[1.85] text-[#8f9ab2] sm:text-[15px] md:text-[16px]`}
        >
          Whether you&apos;re hiring for a full-stack, backend, or AI
          engineering role, or looking to collaborate on a scalable product,
          share the details below and I&apos;ll get back to you as soon as
          possible.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Left: Contact Form */}
        <div className="lg:col-span-8">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#131b2eb3] p-5 shadow-[0_0_50px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/20 sm:p-6 md:p-10">
            <div className="mb-8 border-b border-white/[0.07] pb-7">
              <p
                className={`${jetbrainsMono.className} text-[10px] uppercase tracking-[0.14em] text-cyan-300 sm:text-[11px]`}
              >
                Send a Message
              </p>

              <h2
                className={`${inter.className} mt-3 text-[25px] font-semibold tracking-[-0.03em] text-[#dae2fd] sm:text-[28px]`}
              >
                Let&apos;s discuss how I can contribute to your team.
              </h2>

              <p
                className={`${inter.className} mt-3 max-w-2xl text-[13px] leading-7 text-[#8490a8] sm:text-[14px]`}
              >
                Share the role, project, collaboration, or technical
                requirement and include any important context.
              </p>
            </div>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-7 sm:space-y-8"
            >
              {/* Name and Email */}
              <div className="grid gap-7 md:grid-cols-2 md:gap-8">
                <div className="space-y-3">
                  <label
                    htmlFor="user_name"
                    className={`${jetbrainsMono.className} block text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-300 sm:text-[12px]`}
                  >
                    Full Name
                  </label>

                  <input
                    id="user_name"
                    name="user_name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Enter your name"
                    className={`${inter.className} w-full border-0 border-b-2 border-[#3a4255] bg-transparent px-0 py-3 text-[14px] text-[#dae2fd] outline-none transition-colors duration-300 placeholder:text-[#5e6880] focus:border-cyan-300 focus:ring-0 sm:text-[15px]`}
                  />
                </div>

                <div className="space-y-3">
                  <label
                    htmlFor="user_email"
                    className={`${jetbrainsMono.className} block text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-300 sm:text-[12px]`}
                  >
                    Email Address
                  </label>

                  <input
                    id="user_email"
                    name="user_email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="Enter your email"
                    className={`${inter.className} w-full border-0 border-b-2 border-[#3a4255] bg-transparent px-0 py-3 text-[14px] text-[#dae2fd] outline-none transition-colors duration-300 placeholder:text-[#5e6880] focus:border-cyan-300 focus:ring-0 sm:text-[15px]`}
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-3">
                <label
                  htmlFor="subject"
                  className={`${jetbrainsMono.className} block text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-300 sm:text-[12px]`}
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Job opportunity / project collaboration"
                  className={`${inter.className} w-full border-0 border-b-2 border-[#3a4255] bg-transparent px-0 py-3 text-[14px] text-[#dae2fd] outline-none transition-colors duration-300 placeholder:text-[#5e6880] focus:border-cyan-300 focus:ring-0 sm:text-[15px]`}
                />
              </div>

              {/* Message */}
              <div className="space-y-3">
                <label
                  htmlFor="message"
                  className={`${jetbrainsMono.className} block text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-300 sm:text-[12px]`}
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Share the role, project details, expected responsibilities, or collaboration idea..."
                  className={`${inter.className} min-h-[170px] w-full resize-y border-0 border-b-2 border-[#3a4255] bg-transparent px-0 py-3 text-[14px] leading-[1.8] text-[#dae2fd] outline-none transition-colors duration-300 placeholder:text-[#5e6880] focus:border-cyan-300 focus:ring-0 sm:text-[15px]`}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className={`${inter.className} inline-flex items-center gap-2.5 rounded-lg bg-gradient-to-r from-[#adc7ff] to-cyan-300 px-6 py-3 text-[13px] font-bold text-[#08111f] shadow-[0_0_25px_rgba(99,247,255,0.18)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(99,247,255,0.28)] disabled:cursor-not-allowed disabled:opacity-60 sm:px-7 sm:py-3.5 sm:text-[14px]`}
              >
                <Send size={17} />

                {loading ? "Sending Message..." : "Send Message"}
              </button>

              {/* Status */}
              {status.message && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`${jetbrainsMono.className} rounded-lg border px-4 py-3 text-[11px] leading-6 sm:text-[12px] ${
                    status.type === "success"
                      ? "border-cyan-300/20 bg-cyan-300/[0.04] text-cyan-300"
                      : "border-red-400/20 bg-red-400/[0.04] text-red-300"
                  }`}
                >
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Right: Contact Details */}
        <aside className="space-y-5 lg:col-span-4">
          {/* Availability */}
          <div className="rounded-2xl border border-white/10 border-l-[3px] border-l-cyan-300 bg-[#131b2eb3] p-5 shadow-[0_0_35px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-6">
            <div className="flex items-start gap-4">
              <div className="relative mt-1 flex h-3 w-3 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-70" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.85)]" />
              </div>

              <div>
                <p
                  className={`${jetbrainsMono.className} text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-300 sm:text-[11px]`}
                >
                  Current Status
                </p>

                <p
                  className={`${inter.className} mt-2 text-[14px] leading-[1.7] text-[#d3def2]`}
                >
                  Open to full-stack, backend, and AI engineering
                  opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Professional Details */}
          <div className="rounded-2xl border border-white/10 bg-[#131b2eb3] p-5 shadow-[0_0_35px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-6">
            <p
              className={`${jetbrainsMono.className} border-b border-white/[0.06] pb-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8b90a0] sm:text-[11px]`}
            >
              Professional Details
            </p>

            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-cyan-300"
                />

                <div>
                  <p className="text-[12px] text-[#718098]">
                    Location
                  </p>
                  <p className="mt-1 text-[13px] font-medium text-[#d6def0]">
                    Bangalore, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <BriefcaseBusiness
                  size={17}
                  className="mt-0.5 shrink-0 text-cyan-300"
                />

                <div>
                  <p className="text-[12px] text-[#718098]">
                    Experience
                  </p>
                  <p className="mt-1 text-[13px] font-medium text-[#d6def0]">
                    3+ Years
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail
                  size={17}
                  className="mt-0.5 shrink-0 text-cyan-300"
                />

                <div className="min-w-0">
                  <p className="text-[12px] text-[#718098]">
                    Email
                  </p>

                  <a
                    href="mailto:souviknath18@gmail.com"
                    className="mt-1 block truncate text-[13px] font-medium text-[#d6def0] transition-colors hover:text-cyan-300"
                  >
                    souviknath18@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Opportunity Areas */}
          <div className="rounded-2xl border border-white/10 bg-[#131b2eb3] p-5 shadow-[0_0_35px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-6">
            <p
              className={`${jetbrainsMono.className} text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8b90a0] sm:text-[11px]`}
            >
              Opportunity Areas
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {opportunityAreas.map((item) => (
                <span
                  key={item}
                  className={`${jetbrainsMono.className} rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 text-[10px] text-[#aeb9ce]`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="rounded-2xl border border-white/10 bg-[#131b2eb3] p-5 shadow-[0_0_35px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-6">
            <p
              className={`${jetbrainsMono.className} border-b border-white/[0.06] pb-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8b90a0] sm:text-[11px]`}
            >
              Connect With Me
            </p>

            <div className="mt-5 grid grid-cols-1 gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.external ? "_blank" : undefined}
                    rel={
                      social.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-[#1a2235] px-4 py-3.5 transition-all duration-300 hover:border-cyan-300/20 hover:bg-[#202b42]"
                  >
                    <Icon
                      size={17}
                      className="text-cyan-300"
                    />

                    <span
                      className={`${jetbrainsMono.className} text-[12px] text-[#d3def2]`}
                    >
                      {social.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Resume */}
          <a
            href="/resume/SouvikNath_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${inter.className} flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#adc7ff] to-cyan-300 px-6 py-3.5 text-[13px] font-bold text-[#08111f] shadow-[0_0_22px_rgba(173,199,255,0.18)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(99,247,255,0.26)] sm:text-[14px]`}
          >
            <Download size={17} />
            View Resume
          </a>

          {/* Projects */}
          <Link
            href="/projects"
            className={`${inter.className} flex w-full items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.025] px-6 py-3.5 text-[13px] font-bold text-[#dae2fd] transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/[0.04] hover:text-cyan-300 sm:text-[14px]`}
          >
            <Rocket size={17} />
            Explore My Work
          </Link>
        </aside>
      </div>
    </section>
  );
}