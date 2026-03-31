interface SectionHeaderProps {
  title: string;
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <h2 className="text-xs tracking-widest uppercase font-mono text-neutral-500 mb-6">
      {title}
    </h2>
  );
}
