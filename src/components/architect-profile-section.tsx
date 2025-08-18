import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export function ArchitectProfileSection() {
  return (
    <section className="py-16">
      <div className="container grid gap-13 lg:grid-cols-[60%_auto]">
        <div className="relative grid md:grid-cols-4">
          <Image
            src="/architecture-image.svg"
            alt="Architecture image"
            width={535}
            height={570}
            className="col-[1/-1] row-[1/4] md:col-[1/4] md:row-[1/2]"
          />

          <div className="text-background absolute right-0 bottom-0 z-10 grid max-w-80 justify-items-center gap-2 bg-gradient-to-br from-[#474747] to-[#222222] px-4 py-8 md:static md:col-[3/5] md:row-[1/2] md:self-center">
            <Image
              src="/architect-avatar.svg"
              alt="Architect avatar"
              width={100}
              height={100}
            />
            <p className="mt-3 text-xl font-semibold">Dianne Russell</p>
            <p className="text-center leading-relaxed text-[#E5E5E5]">
              More than 20 years of experience in the field architecture and has
              worked on project up to 100+
            </p>
          </div>
        </div>

        <div className="-order-1 grid justify-items-center text-center md:justify-items-start md:text-left lg:order-1 lg:content-end">
          <h2 className="heading-2">
            Meet and talk with our best architecture
          </h2>
          <p className="paragraph mt-4 xl:mt-9">
            All our teams are professional and competent in their fields and
            will help you realize your dream building with the excellent result.
          </p>
          <div className="mt-6 flex flex-col flex-wrap gap-4 md:flex-row lg:mt-8 xl:mt-15">
            <Button asChild>
              <Link href="/">See all team</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/">
                How it works
                <Icons.arrowRight className="hover:fill-background" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
