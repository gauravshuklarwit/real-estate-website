import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Stats } from "@/components/stats";

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
              className="to-primary mt-8 bg-gradient-to-r from-[#5BB6EA] drop-shadow-sm"
            >
              <Link href="#projects">Discover More</Link>
            </Button>
          </div>

          {/* Image box */}
          <div className="-order-1 max-xl:mask-b-from-20% max-xl:mask-b-to-90% sm:hidden lg:order-1 lg:block">
            <Image
              src="/architectural-design.png"
              alt="Architectural design illustration"
              width={698}
              height={782}
              className="z-10 xl:absolute xl:top-0 xl:left-[60%]"
            />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
}
