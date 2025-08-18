interface Props {
  title?: string;
  description?: string;
  bar?: boolean;
}

export function SectionIntro({ title, description, bar }: Props) {
  return (
    <div className="grid justify-items-center gap-4 text-center md:justify-items-start md:text-left lg:grid-cols-2">
      <h2 className="heading-2 lg:max-w-[12ch]">{title}</h2>
      {description && <p className="paragraph">{description}</p>}
    </div>
  );
}
