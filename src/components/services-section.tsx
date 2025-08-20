import { Card } from "@/components/card";
import { SectionIntro } from "@/components/section-intro";

interface Service {
  title?: string;
  description?: string;
  image?: string;
}

const services: Service[] = [
  {
    title: "Industrial",
    description:
      "Industrial development is our main line of business. We do Factory Construction, Warehouse and others",
    image: "/services/industrial.jpg",
  },
  {
    title: "Commercial",
    description:
      "Our experience building in the Commercial field includes Showrooms, Supermalls and Office Buildings",
    image: "/services/commercial.jpg",
  },
  {
    title: "Resedential",
    description:
      "Residential development is the beginning that has shaped us to this day. Our development includes Houses & Apartments",
    image: "/services/resedential.jpg",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services-section"
      className="bg-muted py-14 lg:py-20 lg:pt-20 lg:pb-18"
    >
      <div className="container grid gap-10 lg:gap-20">
        <SectionIntro
          title="Our Excellent Services"
          description="Check out our best service you can possibly orders in building your
            company and don't forget to ask via our email or our customer
            service if you are interested in using our services"
        />

        {/* Services list */}
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3 xl:gap-12">
          {services?.map((service) => (
            <Card
              key={service?.title}
              image={service?.image}
              title={service?.title}
              description={service?.description}
              className="max-w-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
