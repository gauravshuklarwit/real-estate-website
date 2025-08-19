"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NavLink {
  label?: string;
  link?: string;
}

const navlinks: NavLink[] = [
  { label: "Home", link: "/" },
  { label: "Services", link: "#services-section" },
  { label: "Find a Team", link: "#architect-profile-section" },
  { label: "About Us", link: "#our-story-section" },
  { label: "Articles", link: "#news-section" },
  { label: "Portfolio", link: "#portfolio-section" },
  { label: "Contact us", link: "#footer-nav" },
];

export function Header({ className }: { className?: string }) {
  const [isMenuToggled, setIsmMenuToggled] = useState(false);

  const handleMobileNav = () => {
    setIsmMenuToggled((prev) => !prev);
  };

  const pathname = usePathname();

  return (
    <header
      className={cn("absolute inset-x-0 top-0 z-50 bg-transparent", className)}
    >
      <nav className="relative container flex items-center justify-between py-4 md:py-6 lg:py-8">
        {/* Logo */}
        <Link href="/" aria-label="Go to homepage" className="grid gap-1">
          <span className="text-background">General</span>
          <span className="text-primary md:text-2xl md:font-bold">Project</span>
        </Link>

        {/* Mobile navigation opener */}
        <Button
          variant="ghost"
          size="icon"
          className="pr-0 lg:hidden"
          onClick={handleMobileNav}
        >
          <MenuIcon className="text-background" />
        </Button>

        {/* Mobile navigation wrapper*/}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
            display: "none",
          }}
          animate={{
            opacity: isMenuToggled ? 1 : 0,
            y: isMenuToggled ? 0 : 50,
            display: isMenuToggled ? "grid" : "none",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={cn(
            "bg-foreground fixed inset-0 z-50 container hidden min-h-dvh items-start",
            {
              grid: isMenuToggled,
            },
          )}
        >
          {/* Mobile navigation closer */}
          <Button
            variant="ghost"
            size="icon"
            className="my-4 self-start justify-self-end pr-0"
            onClick={handleMobileNav}
          >
            <CloseIcon className="text-background" />
          </Button>

          {/* Mobile navigation menu */}
          <ul className="grid justify-items-center gap-4">
            {navlinks.map((navLink, idx) => {
              return (
                <motion.li
                  key={navLink?.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isMenuToggled ? 1 : 0,
                    y: isMenuToggled ? 0 : 20,
                  }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                >
                  {navLink?.label && (
                    <Link
                      href={navLink?.link || "/"}
                      className={cn(
                        "text-muted-foreground hover:text-background text-xl transition-colors sm:text-2xl",
                        {
                          "text-background": navLink?.link === pathname,
                        },
                      )}
                      onClick={handleMobileNav}
                    >
                      {navLink.label}
                    </Link>
                  )}
                </motion.li>
              );
            })}
          </ul>
        </motion.div>

        {/* Desktop navigation */}
        <ul className="ml-auto hidden items-center gap-8 px-4 py-8 lg:flex xl:gap-15">
          {navlinks.map((navLink) => {
            return (
              <li key={navLink?.label}>
                {navLink?.label && (
                  <Link
                    href={navLink?.link || "/"}
                    className={cn(
                      "text-muted-foreground hover:text-background transition-colors",
                      {
                        "text-background": navLink?.link === pathname,
                      },
                    )}
                  >
                    {navLink.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
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
