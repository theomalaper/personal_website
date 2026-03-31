interface SectionHeaderProps {
  title: string;
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <h2 className="text-xs tracking-widest uppercase font-mono text-[#918d8a] mb-6">
      {title}
    </h2>
  );
}
