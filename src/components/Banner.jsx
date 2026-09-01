
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Banner = () => {
  return (
    <section className="relative h-[calc(100vh-80px)] min-h-[650px] overflow-hidden bg-slate-950">
      
      {/* Background Car Image */}
      <Image
        src="/car.png"
        alt="Premium car rental"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/60" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent" />

      {/* Bottom Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 lg:px-8">
        <div className="max-w-3xl">
          
          {/* Animated Badge */}
          <div className="animate-[fadeUp_0.7s_ease-out_both]">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-300 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400" />
              </span>
              Premium Car Rental Service
            </span>
          </div>

          {/* Animated Heading */}
          <h1 className="mt-7 animate-[fadeUp_0.8s_ease-out_0.15s_both] text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Find Your Perfect
            <span className="block text-sky-400">
              Ride Today.
            </span>
          </h1>

          {/* Animated Rental Text */}
          <div className="mt-7 flex animate-[fadeUp_0.9s_ease-out_0.3s_both] items-center gap-3">
            <span className="h-px w-10 bg-sky-400" />

            <div className="h-9 overflow-hidden">
              <div className="animate-[titleSlide_8s_ease-in-out_infinite]">
                <p className="h-9 text-xl font-medium text-sky-300 sm:text-2xl">
                  Drive. Explore. Enjoy.
                </p>

                <p className="h-9 text-xl font-medium text-sky-300 sm:text-2xl">
                  Premium Cars. Unforgettable Journeys.
                </p>

                <p className="h-9 text-xl font-medium text-sky-300 sm:text-2xl">
                  Your Journey Starts With Us.
                </p>

                <p className="h-9 text-xl font-medium text-sky-300 sm:text-2xl">
                  Drive. Explore. Enjoy.
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="mt-7 max-w-xl animate-[fadeUp_0.9s_ease-out_0.45s_both] text-base leading-8 text-slate-300 sm:text-lg">
            Experience the freedom of the road with our reliable, comfortable
            and premium rental cars. Your perfect journey starts here.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4 animate-[fadeUp_0.9s_ease-out_0.6s_both]">
            <Link
              href="/cars"
              className="group flex items-center gap-2 rounded-xl bg-sky-500 px-7 py-4 font-semibold text-white shadow-xl shadow-sky-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-400"
            >
              Explore Cars

              <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/about"
              className="rounded-xl border border-white/20 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Blur */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
};

export default Banner;