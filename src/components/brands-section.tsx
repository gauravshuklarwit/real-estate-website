import Image from "next/image";

interface Brand {
  name?: string;
  image?: string;
}

const brands: Brand[] = [
  { name: "Adira", image: "/brands/adira.png" },
  { name: "Adhmix", image: "/brands/adhimix.png" },
  { name: "Holcim", image: "/brands/holcim.png" },
  { name: "MNC", image: "/brands/mnc.png" },
  { name: "Telkomsel", image: "/brands/telkomsel.png" },
];

export function BrandsSection() {
  return (
    <section>
      <div className="container py-14">
        <ul className="grid place-items-center gap-8 sm:grid-cols-3 xl:grid-cols-5 xl:gap-24">
          {/* <ul className="flex flex-wrap justify-between items-center gap-8 sm:items-center"> */}
          {brands?.map((brand) => (
            <li key={brand?.name}>
              <Image
                src={brand?.image || "//brands/adira.png"}
                alt={`${brand?.name} logo`}
                width={500}
                height={250}
                className="h-auto w-full min-w-48"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
