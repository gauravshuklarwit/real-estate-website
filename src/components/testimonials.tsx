import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Icons } from "@/components/icons";

interface Testimonial {
  image?: string;
  personName?: string;
  comment?: string;
}

const testimonials: Testimonial[] = [
  {
    image: "/testimonials/jacob-molen.jpg",
    personName: "Jacob Molen",
    comment:
      "We like the final result this project, in extraordinary and also provides the best service to the client ",
  },
  {
    image: "/testimonials/alex-morgan.jpg",
    personName: "Alex Morgan",
    comment:
      "Professional, reliable, and highly skilled. I would definitely recommend their services to anyone looking for quality results.",
  },
  {
    image: "/testimonials/elon-musk.jpg",
    personName: "Elon Musk",
    comment:
      "Impressed by their attention to detail and commitment to excellence. The final outcome was exactly what we envisioned.",
  },
];

export function Testimonials() {
  return (
    <Carousel>
      <div className="mx-auto grid max-w-[66.5rem] gap-13 bg-gradient-to-br from-[#474747] to-[#222222] p-5 py-16 md:px-10 lg:grid-cols-2 xl:gap-18 xl:px-15">
        <CarouselContent className="h-full">
          {testimonials?.map((testimonial) => (
            <CarouselItem
              key={testimonial?.personName}
              className="relative grid items-start max-md:content-start"
            >
              <Image
                src={testimonial?.image || "/placeholder.svg"}
                alt={`${testimonial?.personName}'s avatar`}
                width={269}
                height={364}
                className="aspect-square w-full object-cover lg:h-4/5 lg:w-2/3"
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

        <div className="flex items-center justify-end gap-4 lg:hidden">
          <CarouselPrevious className="static translate-y-0" />
          <CarouselNext className="static translate-y-0" />
        </div>

        <div className="-order-1 lg:order-1">
          <h2 className="text-background text-2xl leading-normal font-semibold sm:text-3xl">
            What we have done & what our Customers say
          </h2>

          <p className="paragraph mt-4 lg:mt-11">
            We are to help you build a excellent build, with us nothing is
            impossible. See what we have done and what they have to say about
            our work perform.
          </p>

          <div className="mt-12 flex items-center justify-end gap-4 max-lg:hidden">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </div>
      </div>
    </Carousel>
  );
}
