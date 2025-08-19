interface Props {
  title?: string;
  description?: string;
  bar?: boolean;
}

export function SectionIntro({ title, description, bar }: Props) {
  return (
    <div className="relative grid justify-items-center gap-4 text-center md:justify-items-start md:text-left lg:grid-cols-2">
      {bar && (
        <div className="from-primary/60 to-primary absolute -top-8 h-2 w-16 bg-gradient-to-r lg:-top-10 lg:left-4 lg:w-22" />
      )}
      <h2 className="heading-2 lg:max-w-[12ch]">{title}</h2>
      {description && <p className="paragraph">{description}</p>}
    </div>
  );
}
