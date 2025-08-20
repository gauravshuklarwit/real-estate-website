import { Card } from "@/components/card";
import { SectionIntro } from "@/components/section-intro";

interface News {
  date?: number;
  month?: string;
  title?: string;
  description?: string;
  readMore?: string;
  image?: string;
}

const news: News[] = [
  {
    date: 12,
    month: "Jan",
    title: "Elements of Content in Epoxy Paint",
    description:
      "Epoxy paint and epoxy floor contractor. Have you heard the two terms? And what does that have to do with the construction of existing buildings? Epoxy itself is included in the type of resin",
    readMore: "/#",
    image: "/news/paint-brush.jpg",
  },
  {
    date: 12,
    month: "Jan",
    title: "5 Right Steps in Warehouse Planning and Construction",
    description:
      "Planning the construction of a warehouse for both industrial, personal and other goods storage must be done carefully.  When the planning is done properly, the construction is",
    readMore: "/#",
    image: "/news/factory.jpg",
  },
  {
    date: 12,
    month: "Jan",
    title: "The Right Solution to Build a Sturdy Type 45 House",
    description:
      "Having a solid home is certainly everyone's dream. How not, the house is a place where the residents can rest and take shelter from the bad weather",
    readMore: "/#",
    image: "/news/house.jpg",
  },
];

export function NewsSection() {
  return (
    <section id="news-section" className="py-16">
      <div className="container grid gap-13">
        <SectionIntro title="News & Update" />

        {/* News list */}
        <div className="grid gap-10 md:grid-cols-2 md:gap-10 xl:grid-cols-3 xl:gap-12">
          {news?.map((service) => (
            <Card
              key={service?.title}
              image={service?.image}
              date={service?.date}
              month={service?.month}
              title={service?.title}
              description={service?.description}
              readMore={service?.readMore}
              className="max-w-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
