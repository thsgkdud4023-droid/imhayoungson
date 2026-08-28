type Props = { no: string; title: string; className?: string };

export function SectionLabel({ no, title, className = "" }: Props) {
  return (
    <div className={`meta flex items-center gap-3 ${className}`}>
      <span className="inline-block h-2 w-6 bg-lime" />
      <span className="opacity-60">{no} /</span>
      <span>{title}</span>
    </div>
  );
}
