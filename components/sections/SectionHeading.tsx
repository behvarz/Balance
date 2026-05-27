type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-xs tracking-[0.22em] text-[#E3A858] uppercase">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl leading-tight text-[#F2F6F8] md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-[#B8C2C8] md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
