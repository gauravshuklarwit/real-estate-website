import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <>
      <main>
        <div className="text-background bg-gradient-to-br from-[#464646] to-[#222222]">
          <Header />
          <div className="mx-auto max-w-[90rem]">
            <HeroSection />
          </div>
        </div>
      </main>
    </>
  );
}
