import { Construction } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export function ComingSoon({ description }: { description: string }) {
  return (
    <Card className="border-dashed border-primary/25 bg-gradient-to-b from-primary/5 to-transparent ring-primary/15">
      <CardContent className="flex flex-col items-center gap-3 py-14 text-center">
        <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Construction className="size-6" />
        </span>
        <p className="text-sm font-medium">Coming soon</p>
        <p className="max-w-xs text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
