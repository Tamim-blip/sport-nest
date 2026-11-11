import Link from "next/link";
import { Mail, MapPin, Phone, Trophy } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/all-facilities", label: "All Facilities" },
  { href: "/login", label: "Login" },
  { href: "/sign-up", label: "Sign Up" },
];

export async function Footer() {
  
  return (
    <footer className="border-t bg-muted/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div className="space-y-3">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Trophy className="size-4" />
            </span>
            <span className="text-lg font-bold tracking-tight">
              Sport<span className="text-primary">Nest</span>
            </span>
          </Link>
          <p className="max-w-xs text-sm text-muted-foreground">
            Book sports facilities across Bangladesh in seconds — grounds,
            courts, pools, and more, all in one place.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold">Contact</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" />
              House 12, Road 5, Dhanmondi, Dhaka
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-primary" />
              +880 1700-000000
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-primary" />
              hello@sportnest.com
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t">
        <p className="mx-auto max-w-7xl px-4 py-4 text-center text-xs text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} SportNest. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
