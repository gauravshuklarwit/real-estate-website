import Link from "next/link";

import { SocialLinks } from "@/components/social-links";
import { Testimonials } from "@/components/testimonials";

interface Link {
  label?: string;
  href?: string;
}

interface MenuProps {
  title?: string;
  links?: Link[];
}

const menu1 = [
  { label: "About", href: "/#" },
  { label: "How it Works", href: "/#" },
  { label: "Term", href: "/#" },
  { label: "Privacy Policy", href: "/#" },
];

const menu2 = [
  { label: "Documentation", href: "/#" },
  { label: "License", href: "/#" },
];

export function Footer({ testimonials = false }: { testimonials?: boolean }) {
  return (
    <footer className="grid pt-18">
      {testimonials && (
        <div className="z-10 overflow-x-hidden xl:col-[1/-1] xl:row-[1/3]">
          <Testimonials />
        </div>
      )}

      <nav
        id="footer-nav"
        className="text-background bg-gradient-to-br from-[#474747] to-[#222222] py-20 lg:py-34 xl:col-[1/-1] xl:row-[2/5] xl:pt-105"
      >
        <div className="container grid gap-13 md:gap-18 lg:grid-cols-[55%_auto] xl:gap-32">
          <div>
            <span className="font-semibold">General Project</span>
            <p className="mt-8 leading-loose">
              is a general contractor company based in Jakarta. More than 25
              years of experience in building and carving out Indonesia&apos;s
              development.
            </p>
            <SocialLinks className="mt-8" />
          </div>

          <div className="flex gap-10 lg:gap-16 xl:gap-22">
            <Menu title="Company" links={menu1} />
            <Menu title="More" links={menu2} />
          </div>
        </div>
      </nav>
    </footer>
  );
}

function Menu({ title, links }: MenuProps) {
  return (
    <ul>
      <li>
        {title && <span className="font-bold">{title}</span>}
        {links && (
          <ul className="mt-5 grid gap-3 lg:mt-8 lg:gap-6">
            {links?.map((link) => (
              <li key={link?.label}>
                <Link href={link?.href || "/"} className="hover:underline">
                  {link?.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    </ul>
  );
}
