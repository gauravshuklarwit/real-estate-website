import Image from "next/image";
import Marquee from "react-fast-marquee";

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
        <Marquee>
          <ul className="flex items-center">
            {brands?.map((brand) => (
              <li key={brand?.name}>
                <Image
                  src={brand?.image || "//brands/adira.png"}
                  alt={`${brand?.name} logo`}
                  width={220}
                  height={120}
                  className="w-full max-w-80 px-4 sm:px-6 xl:px-12"
                />
              </li>
            ))}
          </ul>
        </Marquee>
      </div>
    </section>
  );
}
