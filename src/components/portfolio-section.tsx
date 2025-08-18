import Image from "next/image";
import Link from "next/link";

import { SectionIntro } from "@/components/section-intro";
import { Button } from "./ui/button";
import { Icons } from "./icons";

interface Project {
  image?: string;
  title?: string;
  description?: string;
  link?: string;
}

const projects: Project[] = [
  {
    image: "/projects/project-1.jpg",
    title: "Project 1",
    description: "Project Completed",
    link: "/#",
  },
  {
    image: "/projects/project-2.jpg",
    title: "Treasury Tower",
    description: "Project Completed",
    link: "/#",
  },
  {
    image: "/projects/project-3.jpg",
    title: "Project 3",
    description: "Project Completed",
    link: "/#",
  },
  {
    image: "/projects/project-4.jpg",
    title: "Project 4",
    description: "Project Completed",
    link: "/#",
  },
];

export function PortfolioSection() {
  return (
    <section className="py-16">
      <div className="container grid gap-13">
        <SectionIntro title="Our collection best project" />

        <ul className="grid gap-y-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-7">
          {projects?.map((project) => (
            <li
              key={project?.title}
              className="group relative lg:overflow-y-hidden"
            >
              <div className="relative min-h-120">
                <Image
                  src={project?.image || "/placeholder.svg"}
                  alt={`${project?.title} image`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Show on hover after lg devices */}
              <div className="bg-background absolute inset-x-3 bottom-3 flex items-center justify-between gap-7 px-4 py-5 shadow transition-transform duration-200 group-hover:translate-y-0 lg:translate-y-[120%]">
                <div>
                  <h3 className="font-semibold">{project?.title}</h3>
                  <p className="text-muted-foreground text-xs">
                    {project?.description}
                  </p>
                </div>

                <Button asChild size="icon">
                  <Link
                    href={project?.link || "/"}
                    aria-label="Read case study"
                  >
                    <Icons.arrowRight />
                  </Link>
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
