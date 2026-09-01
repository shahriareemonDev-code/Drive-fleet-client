
"use client";

import { useState } from "react";
import Link from "next/link";

import {
  Bars3Icon,
  XMarkIcon,
  TruckIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Cars", href: "/cars" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        
        {/* ================= Logo ================= */}
        <Link href="/" className="group flex items-center gap-3">
          
          <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-700 text-white shadow-lg shadow-sky-500/20 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-sky-500/30">
            <TruckIcon className="h-6 w-6" />

            <div className="absolute inset-0 rounded-xl border border-white/20" />
          </div>

          <div className="leading-none">
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              Drive<span className="text-sky-500">Fleet</span>
            </h1>

            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
              Car Rental
            </p>
          </div>
        </Link>

        {/* ================= Desktop / Medium Menu ================= */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-sm font-semibold text-slate-600 transition-colors duration-300 hover:text-sky-600 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-sky-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* ================= CTA ================= */}
        <Link
          href="/cars"
          className="hidden items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-sky-500/20 md:flex"
        >
          Book a Car

          <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>

        {/* ================= Mobile Button ================= */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-sky-400 hover:text-sky-500 md:hidden"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* ================= Mobile Menu Only ================= */}
      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 md:hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2 px-5 py-5">
          
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-sky-50 hover:text-sky-600"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/cars"
            onClick={() => setIsOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-600"
          >
            Book a Car

            <ArrowRightIcon className="h-4 w-4" />
          </Link>

        </div>
      </div>
    </header>
  );
};

export default Navbar;