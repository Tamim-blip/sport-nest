import type { Metadata } from "next";
import Link from "next/link";
import { Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "SportNest | Book Sports Facilities Online",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-16">
      <Link href="/" className="mb-8 flex items-center gap-2">
        <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <Trophy className="size-5" />
        </span>
        <span className="text-2xl font-bold tracking-tight">
          Sport<span className="text-primary">Nest</span>
        </span>
      </Link>

      {children}
    </div>
  );
}
