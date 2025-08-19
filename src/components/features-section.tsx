import { SectionIntro } from "@/components/section-intro";
import { Icons } from "@/components/icons";

interface Feature {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title?: string;
  description?: string;
}

const features: Feature[] = [
  {
    icon: Icons.briefcase,
    title: "Experienced",
    description:
      "Our experience of 25 years of building and making achievements in the world of development",
  },
  {
    icon: Icons.pencil,
    title: "competitive price",
    description:
      "The prices we offer you are very competitive without reducing the quality of the company's work in the slightest",
  },
  {
    icon: Icons.clock,
    title: "On Time",
    description: "We prioritize the quality of our work and finish it on time",
  },
  {
    icon: Icons.shield,
    title: "Best Materials",
    description:
      "The material determines the building itself so we recommend that you use the best & quality materials in its class.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 lg:pt-41">
      <div className="container grid gap-20">
        <SectionIntro
          bar
          title="What Make Us Different?"
          description="Check out our best service you can possibly orders in building your company and don't forget to ask via our email or our customer service if you are interested in using our services"
        />

        <div className="grid gap-13 md:grid-cols-2 xl:grid-cols-4">
          {features?.map((feature) => {
            const Icon = feature?.icon;

            return (
              <article
                key={feature?.title}
                className="group flex flex-col max-md:items-center max-md:text-center"
              >
                <h3 className="mt-6.5 text-xl font-semibold sm:text-2xl md:mt-9">
                  {feature?.title}
                </h3>
                <p className="paragraph mt-3 lg:mt-6">{feature?.description}</p>
                {Icon && (
                  <span className="bg-primary before:bg-primary/50 relative -order-1 grid aspect-square size-14 place-content-center rounded-full transition-all duration-200 group-hover:rotate-z-30 before:absolute before:inset-0 before:-z-10 before:size-full before:scale-125 before:rounded-full before:content-[''] sm:size-16 xl:size-18.5">
                    <Icon className="size-6 xl:size-8" />
                  </span>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
