"use client";

import CountUp from "react-countup";
import { Icons } from "@/components/icons";

interface StatItem {
  start?: number;
  quantity?: number;
  description?: string;
}

const stats: StatItem[] = [
  { start: 200, quantity: 300, description: "Happy Client" },
  { start: 800, quantity: 900, description: "Amazing Projects" },
  { start: 10, quantity: 20, description: "Awards Winning" },
];

export function Stats() {
  return (
    <div className="overflow-x-hidden">
      <div className="container grid gap-12 py-4 xl:grid-cols-[45%_auto] xl:py-0">
        <ul className="grid max-sm:gap-13 sm:grid-cols-3 sm:items-start">
          {stats?.map((stat) => (
            <li key={stat?.description} className="text-center sm:text-left">
              <span className="text-4xl font-bold">
                <CountUp
                  start={stat?.start || 0}
                  end={stat?.quantity || 0}
                  duration={2.75}
                  separator=","
                />
                <span className="text-primary">+</span>
              </span>
              <p className="text-muted-foreground mt-4 text-lg font-semibold sm:max-w-[7ch]">
                {stat?.description}
              </p>
            </li>
          ))}
        </ul>

        <div className="xl:drop-shadow-primary/30 relative z-10 flex flex-col flex-wrap gap-6 px-8 py-9 after:absolute after:inset-0 after:-z-10 after:bg-gradient-to-b after:from-[#2A92CD] after:to-[#003756] after:content-[''] sm:flex-row sm:gap-10 lg:after:bg-gradient-to-r xl:drop-shadow-xl xl:after:w-[52vw]">
          <div>
            <span>General</span>
            <p className="mt-2 text-xl font-semibold">Project</p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold">25</span>
              <span className="relative text-lg font-medium">
                Years
                <Icons.gear className="absolute -top-1/2 -right-1/2" />
              </span>
            </div>
            <p className="mt-2 text-2xl font-semibold">Operated</p>
          </div>
          <p className="flex-1 text-sm/loose">
            As a trusted general project that has been operating for 25 years,
            our commitment is always to prioritize our client satisfaction
          </p>
        </div>
      </div>
    </div>
  );
}
