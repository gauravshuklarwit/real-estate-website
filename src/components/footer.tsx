import Image from "next/image";
import Link from "next/link";

import { Icons } from "./icons";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  image?: string;
  personName?: string;
  comment?: string;
}

interface SocialLink {
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  platform?: string;
  link?: string;
}

interface Link {
  label: string;
  href: string;
}

interface MenuProps {
  title?: string;
  links?: Link[];
}

const testimonials: Testimonial[] = [
  {
    image: "/testimonials/jacob-molen.jpg",
    personName: "Jacob Molen",
    comment:
      "We like the final result this project, in extraordinary and also provides the best service to the client ",
  },
  {
    image: "/testimonials/jacob-molen.jpg",
    personName: "Tim Molen",
    comment:
      "We like the final result this project, in extraordinary and also provides the best service to the client ",
  },
  {
    image: "/testimonials/jacob-molen.jpg",
    personName: "Joe Molen",
    comment:
      "We like the final result this project, in extraordinary and also provides the best service to the client ",
  },
];

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
    <footer className="grid gap-22 pt-18">
      {testimonials && (
        <div className="z-10 col-[1/-1] row-[1/3] overflow-x-hidden">
          <Testimonials />
        </div>
      )}

      <div className="text-background col-[1/-1] row-[2/5] bg-gradient-to-br from-[#474747] to-[#222222] pt-110 pb-20 md:pt-120 lg:pt-110">
        <div className="container grid gap-13 lg:grid-cols-[55%_auto] lg:gap-32">
          <div>
            <span className="font-semibold">General Project</span>
            <p className="mt-8 leading-loose">
              is a general contractor company based in Jakarta. More than 25
              years of experience in building and carving out Indonesia&apos;s
              development.
            </p>
            <ul className="mt-8 flex items-center gap-1.5">
              {socialLinks.map((social) => {
                const Icon = social?.icon;

                return (
                  <li key={social?.platform}>
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
          </div>

          <nav className="flex gap-10 lg:gap-22">
            <Menu title="Company" links={menu1} />
            <Menu title="More" links={menu2} />
          </nav>
        </div>
      </div>
    </footer>
  );
}

function Testimonials() {
  return (
    <Carousel>
      <div className="mx-auto grid max-w-[66.5rem] gap-10 bg-gradient-to-br from-[#474747] to-[#222222] p-5 py-16 md:px-10 lg:grid-cols-2 xl:gap-18 xl:px-15">
        <CarouselContent className="h-full">
          {testimonials?.map((testimonial) => (
            <CarouselItem
              key={testimonial?.personName}
              className="relative grid"
            >
              <Image
                src={testimonial?.image || "/placeholder.svg"}
                alt={`${testimonial?.personName}'s avatar`}
                width={269}
                height={364}
                className="w-full lg:h-4/5 lg:w-2/3 lg:object-cover"
              />

              <div className="bg-background relative grid justify-items-center px-5 pt-10 pb-4 text-center md:absolute md:right-0 md:bottom-0 md:mx-auto md:max-w-66">
                <span className="bg-background absolute inset-x-0 top-0 mx-auto max-w-fit -translate-y-1/2 rounded-full p-5.5 shadow-lg">
                  <Icons.quoteLeft />
                </span>
                <h3 className="text-xl font-semibold">
                  {testimonial?.personName}
                </h3>
                <p className="mt-1.5 leading-relaxed text-[#939393]">
                  {testimonial?.comment}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div>
          <h2 className="text-background text-2xl leading-normal font-semibold sm:text-3xl">
            What we have done & what our Customers say
          </h2>

          <p className="paragraph mt-4 lg:mt-11">
            We are to help you build a excellent build, with us nothing is
            impossible. See what we have done and what they have to say about
            our work perform.
          </p>

          <div className="mt-12 flex items-center justify-end gap-4">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </div>
      </div>
    </Carousel>
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
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    </ul>
  );
}
