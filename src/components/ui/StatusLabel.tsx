type StatusLabelProps = {
  children: string;
  className?: string;
};

/** Plain muted status text — no colored rarity badges */
export function StatusLabel({ children, className = "" }: StatusLabelProps) {
  return (
    <span className={`text-xs text-muted-foreground ${className}`}>
      {children}
    </span>
  );
}
