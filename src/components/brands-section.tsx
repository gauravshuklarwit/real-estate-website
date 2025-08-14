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
        <ul className="grid place-items-center gap-8 sm:grid-cols-3 sm:gap-12 md:grid-cols-4 lg:grid-cols-5 xl:gap-24">
          {brands?.map((brand) => (
            <li key={brand?.name}>
              <Image
                src={brand?.image || "//brands/adira.png"}
                alt={`${brand?.name} logo`}
                width={220}
                height={120}
                className="w-full max-w-80"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
