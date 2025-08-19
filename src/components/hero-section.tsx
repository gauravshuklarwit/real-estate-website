import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface StatItem {
  quantity?: number;
  description?: string;
}

const stats: StatItem[] = [
  { quantity: 300, description: "Happy Client" },
  { quantity: 900, description: "Amazing Projects" },
  { quantity: 20, description: "Awards Winning" },
];

export function HeroSection({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "text-background bg-gradient-to-br from-[#464646] to-[#222222] pt-18 md:pt-22 lg:pt-38",
        className,
      )}
    >
      <div className="relative mx-auto max-w-[90rem] overflow-hidden">
        <div className="container grid py-9 lg:grid-cols-[60%_auto] lg:gap-8 lg:pt-7 lg:pb-11">
          {/* Text box */}
          <div className="z-10 max-w-lg content-center lg:max-w-2xl">
            <h1 className="heading-1 max-w-[20ch] text-balance">
              We Provide Architectural design and Construction
            </h1>
            <p className="text-muted-foreground mt-6 leading-loose lg:text-lg">
              ​More than 100 building and housing projects that we have built.
              The building owner chose us over other contractors in Jakarta,
              because our work is different
            </p>

            <Button
              asChild
              className="to-primary mt-8 bg-gradient-to-r from-[#5BB6EA]"
            >
              <Link href="#projects">Discover More</Link>
            </Button>
          </div>

          {/* Image box */}
          <div className="-order-1 max-xl:mask-b-from-20% max-xl:mask-b-to-90% sm:hidden lg:order-1 lg:block">
            <Image
              src="/architectural-design.svg"
              alt="Architectural design illustration"
              width={594}
              height={903}
              className="z-10 xl:absolute xl:top-0 xl:left-[60%]"
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-hidden">
        <div className="container grid gap-12 py-4 xl:grid-cols-[45%_auto] xl:py-0">
          {/* Stats list */}
          <ul className="flex flex-col items-center gap-13 sm:flex-row sm:items-start">
            {stats?.map((stat) => (
              <li key={stat?.description} className="text-center sm:text-left">
                <span className="text-4xl font-bold">
                  {stat?.quantity}
                  <span className="text-primary">+</span>
                </span>
                <p className="text-muted-foreground mt-4 text-lg font-semibold sm:max-w-[7ch]">
                  {stat?.description}
                </p>
              </li>
            ))}
          </ul>

          {/* Floating box */}
          <div className="relative z-10 flex flex-col flex-wrap gap-6 px-8 py-9 after:absolute after:inset-0 after:-z-10 after:bg-gradient-to-b after:from-[#2A92CD] after:to-[#003756] after:content-[''] sm:flex-row sm:gap-10 lg:after:bg-gradient-to-r xl:after:w-[52vw]">
            <div>
              <span>General</span>
              <p className="mt-2 text-xl font-semibold">Project</p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold">25</span>
                <span className="relative text-lg font-medium">
                  Years
                  <GearIcon className="absolute -top-1/2 -right-1/2" />
                </span>
              </div>
              <p className="mt-2 text-2xl font-semibold">Operated</p>
            </div>
            <p className="flex-1 text-sm/loose">
              As a trusted general project that has been operating for 25 years,
              our commitment is always to prioritize our client satisfaction
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function GearIcon({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-5", className)}
    >
      <path
        d="M7.90979 3.58678L9.20003 2.29883C9.41177 2.08717 9.6989 1.96826 9.99829 1.96826C10.2977 1.96826 10.5848 2.08717 10.7965 2.29883L12.0891 3.58792C12.3005 3.79976 12.5874 3.91896 12.8868 3.91934H14.9187C15.2181 3.91934 15.5053 4.0383 15.7171 4.25005C15.9288 4.4618 16.0478 4.74899 16.0478 5.04844V7.08037C16.0479 7.37952 16.1666 7.66641 16.3781 7.87805L17.6694 9.16829C17.8811 9.38003 18 9.66716 18 9.96655C18 10.2659 17.8811 10.5531 17.6694 10.7648L16.3792 12.0562C16.1666 12.2676 16.0478 12.5545 16.0478 12.8539V14.8858C16.0478 15.1853 15.9288 15.4724 15.7171 15.6842C15.5053 15.8959 15.2181 16.0149 14.9187 16.0149H12.8868C12.5876 16.015 12.3007 16.1338 12.0891 16.3452L10.7988 17.6366C10.5871 17.8482 10.3 17.9671 10.0006 17.9671C9.70118 17.9671 9.41405 17.8482 9.20232 17.6366L7.91093 16.3463C7.69951 16.1338 7.41267 16.0149 7.11325 16.0149H5.08132C4.45735 16.0149 3.95222 15.5098 3.95222 14.8858V12.8539C3.95222 12.5545 3.83337 12.2676 3.62195 12.0562L2.33057 10.7659C2.1189 10.5542 2 10.2671 2 9.96769C2 9.6683 2.1189 9.38117 2.33057 9.16943L3.61966 7.87691C3.8315 7.66545 3.9507 7.37854 3.95108 7.07923V5.0473C3.95108 4.74784 4.07004 4.46065 4.28179 4.2489C4.49353 4.03716 4.78072 3.9182 5.08018 3.9182H7.11211C7.41142 3.91782 7.69833 3.79862 7.90979 3.58678Z"
        stroke="white"
        strokeWidth="3"
      />
    </svg>
  );
}
