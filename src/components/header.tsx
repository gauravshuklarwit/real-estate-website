"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

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
          <Icons.menu className="text-background size-6" />
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
            <Icons.cross className="text-background size-6" />
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
                      "text-muted-foreground hover:text-background focus-within:text-background transition-colors",
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
