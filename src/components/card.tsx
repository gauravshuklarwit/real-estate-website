import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  image?: string;
  date?: number;
  month?: string;
  title?: string;
  description?: string;
  readMore?: string;
  blogTitle?: string;
  blogDate?: string;
}

export function Card({
  className,
  image,
  date,
  month,
  title,
  description,
  readMore,
  ...props
}: Props) {
  return (
    <article
      className={cn("group flex max-w-96 flex-col", className)}
      {...props}
    >
      {date ? (
        <div className="mt-4 flex items-center gap-4 lg:mt-8">
          <div className="grid gap-1">
            <span className="text-xl font-semibold md:text-2xl xl:text-3xl">
              {date}
            </span>
            <span className="font-semibold">{month}</span>
          </div>
          <h3 className="font-semibold">{title}</h3>
        </div>
      ) : (
        <h3 className="mt-4 text-xl font-semibold md:text-2xl lg:mt-8 xl:text-3xl">
          {title}
        </h3>
      )}

      {readMore ? (
        <p className="paragraph mt-4 line-clamp-6 lg:mt-8">
          {description}
          <Link href={readMore} className="text-primary ml-4">
            Read more
          </Link>
        </p>
      ) : (
        <p className="paragraph mt-4 lg:mt-8">{description}</p>
      )}
      {image && (
        <div className="relative -order-1 aspect-[386/287] w-full border-16 border-transparent shadow">
          <Image
            src={image}
            alt={`${title} image`}
            fill
            className="object-cover object-center transition-transform duration-200 group-hover:scale-105"
          />
        </div>
      )}
    </article>
  );
}
