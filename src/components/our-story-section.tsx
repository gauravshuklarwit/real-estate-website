import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export function OurStorySection() {
  return (
    <section id="our-story-section" className="py-16">
      <div className="container grid grid-rows-2 gap-13 lg:grid-cols-2 lg:grid-rows-1">
        {/* Text box */}
        <div className="grid justify-items-center text-center md:justify-items-start md:text-left">
          <h2 className="heading-2 lg:max-w-[10ch]">Our Story Who we are</h2>
          <p className="paragraph mt-4 xl:mt-9">
            Established in 1992, PT. Wahana Cipta operates as a General
            Contracting company with a footprint that we have planted throughout
            Indonesia. Initially, we focused on construction in the field of
            residential housing development in Jakarta. As the company grows,
            now we are present as a reliable...
          </p>
          <Button asChild className="mt-6 lg:mt-8 xl:mt-15">
            <Link href="#portfolio">See More</Link>
          </Button>
        </div>

        {/* Image box */}
        <div className="relative -order-1 border-16 border-transparent shadow lg:order-1">
          <Image
            src="/our-story.jpg"
            alt="Our story image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
