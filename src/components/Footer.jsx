
"use client";

import Link from "next/link";
import {
  TruckIcon,
  ArrowUpIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">

      {/* ================= Background Effects ================= */}
      <div className="pointer-events-none absolute -left-32 top-0 h-[400px] w-[400px] rounded-full bg-sky-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[140px]" />

      {/* ================= CTA ================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-16 lg:px-8">

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-10 shadow-2xl sm:px-10 md:flex md:items-center md:justify-between">

          {/* Decorative Circle */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/20" />
          <div className="pointer-events-none absolute -bottom-24 right-20 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Ready to hit the road?
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Find your perfect car today.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
              Explore our collection and book a reliable car for your
              next journey in just a few clicks.
            </p>
          </div>

          <Link
            href="/cars"
            className="group relative mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-slate-950 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:mt-0"
          >
            Browse Cars

            <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>

      {/* ================= Main Footer ================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* ================= Brand ================= */}
          <div className="lg:col-span-2">

            <Link href="/" className="group flex items-center gap-3">

              {/* Logo */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-700 shadow-lg shadow-sky-500/20 transition duration-300 group-hover:-translate-y-1">
                <TruckIcon className="h-6 w-6 text-white" />
              </div>

              <div>
                <h2 className="text-2xl font-bold tracking-tight">
                  Drive<span className="text-sky-400">Fleet</span>
                </h2>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Premium Car Rental
                </p>
              </div>

            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
              Drive with confidence. We make car rental simple, reliable
              and convenient so you can focus on enjoying every journey.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex items-center gap-3">

              <a
                href="#"
                aria-label="Facebook"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-sky-400 hover:text-white"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-sky-400 hover:text-white"
              >
                <FaInstagram className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-sky-400 hover:text-white"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </a>

            </div>
          </div>

          {/* ================= Quick Links ================= */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">

              {[
                ["Home", "/"],
                ["Browse Cars", "/cars"],
                ["About Us", "/about"],
                ["Contact", "/contact"],
              ].map(([name, href]) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="group flex w-fit items-center gap-2 text-sm text-slate-400 transition hover:text-sky-400"
                  >
                    <span className="h-px w-0 bg-sky-400 transition-all duration-300 group-hover:w-3" />
                    {name}
                  </Link>
                </li>
              ))}

            </ul>
          </div>

          {/* ================= Contact ================= */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
              Get In Touch
            </h3>

            <div className="mt-6 space-y-5">

              <a
                href="tel:+8801700000000"
                className="group flex items-start gap-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sky-400 transition group-hover:border-sky-400/30 group-hover:bg-sky-400/10">
                  <PhoneIcon className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs text-slate-500">Phone</p>
                  <p className="mt-1 text-sm text-slate-300 transition group-hover:text-white">
                    +880 1700 000 000
                  </p>
                </div>
              </a>

              <a
                href="mailto:hello@drivefleet.com"
                className="group flex items-start gap-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sky-400 transition group-hover:border-sky-400/30 group-hover:bg-sky-400/10">
                  <EnvelopeIcon className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="mt-1 text-sm text-slate-300 transition group-hover:text-white">
                    hello@drivefleet.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sky-400">
                  <MapPinIcon className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs text-slate-500">Location</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ================= Bottom Footer ================= */}
      <div className="relative z-10 border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-7 sm:flex-row lg:px-8">

          <p className="text-center text-sm text-slate-500 sm:text-left">
            © {currentYear}{" "}
            <span className="text-slate-300">
              DriveFleet
            </span>
            . All rights reserved.
          </p>

          <div className="flex items-center gap-5">

            <p className="text-xs text-slate-600">
              Built for better journeys
            </p>

            {/* Back to Top */}
            <a
              href="#top"
              aria-label="Back to top"
              className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-sky-400 hover:text-white"
            >
              <ArrowUpIcon className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1" />
            </a>

          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;