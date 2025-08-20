import Link from "next/link";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

interface SocialLink {
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  platform?: string;
  link?: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: Icons.google,
    platform: "Google",
    link: "/",
  },
  {
    icon: Icons.twitter,
    platform: "Twitter",
    link: "/",
  },
  {
    icon: Icons.instagram,
    platform: "Instagram",
    link: "/",
  },
  {
    icon: Icons.linkedin,
    platform: "LinkedIn",
    link: "/",
  },
];

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-center gap-1.5", className)}>
      {socialLinks.map((social) => {
        const Icon = social?.icon;

        return (
          <li
            key={social?.platform}
            className="transition-transform duration-200 hover:scale-110"
          >
            <Link
              href={social?.link || "/#"}
              aria-label={`Visit our ${social?.platform} profile`}
            >
              {Icon && (
                <span className="grid place-content-center rounded-full bg-[#222C32] p-3">
                  <Icon className="size-4" />
                </span>
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
