"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { cn } from "@/lib/utils";

interface NavLink {
  label?: string;
  link?: string;
}

const navlinks: NavLink[] = [
  { label: "Home", link: "/" },
  { label: "Services", link: "#services" },
  { label: "Find a Team", link: "#team" },
  { label: "About Us", link: "#about" },
  { label: "Articles", link: "#articles" },
  { label: "Portfolio", link: "#portfolio" },
  { label: "Contact us", link: "#contact" },
];

export function Header() {
  const [isMenuToggled, setIsmMenuToggled] = useState(false);

  const handleMobileNav = () => {
    setIsmMenuToggled((prev) => !prev);
  };

  const pathname = usePathname();

  return (
    <header>
      <nav className="relative container flex items-center justify-between py-4 md:py-6 lg:py-8">
        {/* Logo */}
        <Link href="/" aria-label="Go to homepage" className="grid gap-1">
          <span>General</span>
          <span className="text-primary md:text-2xl md:font-bold">Project</span>
        </Link>

        {/* Nav toggler */}
        <button className="cursor-pointer lg:hidden" onClick={handleMobileNav}>
          <span className="sr-only">Toggle Mobile Menu</span>
          {isMenuToggled ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* Navigation wrapper */}
        <div
          className={cn(
            "bg-foreground absolute inset-x-0 top-full z-50 hidden lg:static lg:flex lg:bg-transparent",
            {
              grid: isMenuToggled,
            },
          )}
        >
          {/* Navigation Menu */}
          <ul className="grid justify-items-center gap-3 px-4 py-8 lg:ml-auto lg:flex lg:gap-8 xl:gap-15">
            {navlinks.map((navLink) => {
              return (
                <li key={navLink.label}>
                  <Link
                    href={navLink.link || "/"}
                    className={cn(
                      "text-muted-foreground hover:text-background transition-colors",
                      {
                        "text-background": navLink.link === pathname,
                      },
                    )}
                  >
                    {navLink.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={cn("size-6", className)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 9h16.5m-16.5 6.75h16.5"
      />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={cn("size-6", className)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
}
