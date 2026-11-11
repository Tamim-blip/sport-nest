import { Label } from "@/components/ui/label";

export const sportTypes = [
  "Football",
  "Cricket",
  "Badminton",
  "Swimming",
  "Tennis",
  "Basketball",
  "Volleyball",
  "Cycling",
  "Fitness",
  "Athletics",
];

export function Field({
  label,
  htmlFor,
  children,
  hint,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}
