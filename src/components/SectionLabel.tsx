interface SectionLabelProps {
  label: string;
}

export default function SectionLabel(props: SectionLabelProps) {
  return (
    <p class="font-mono text-xs uppercase tracking-widest text-accent mb-6">
      // {props.label}
    </p>
  );
}
