"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Building2,
  CalendarCheck,
  LayoutDashboard,
  Menu,
  Plus,
  Trophy,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

const navItems: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/add-facilities", label: "Add Facilities", icon: Plus },
  {
    href: "/dashboard/my-bookings",
    label: "My Bookings",
    icon: CalendarCheck,
  },
  {
    href: "/dashboard/my-facilities",
    label: "My Facilities",
    icon: Building2,
  },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <Trophy className="size-4" />
      </span>
      <span className="text-lg font-bold tracking-tight">
        Sport<span className="text-primary">Nest</span>
      </span>
    </Link>
  );
}

function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const pathname = usePathname();

  const itemClass = (active: boolean) =>
    `group flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
      active
        ? "bg-primary/10 font-medium text-primary"
        : "text-muted-foreground hover:bg-muted hover:text-foreground"
    }`;

  const chipClass = (active: boolean) =>
    `flex size-7 shrink-0 items-center justify-center rounded-md transition-colors ${
      active
        ? "bg-primary text-primary-foreground"
        : "bg-foreground/5 text-muted-foreground group-hover:bg-foreground/10 group-hover:text-foreground"
    }`;

  return (
    <nav className="flex-1 space-y-1 px-3 py-4">
      {navItems.map((item) => {
        const active = pathname === item.href;

        if (mobile) {
          return (
            <SheetClose
              key={item.href}
              render={<Link href={item.href} className={itemClass(active)} />}
            >
              <span className={chipClass(active)}>
                <item.icon className="size-4" />
              </span>
              {item.label}
            </SheetClose>
          );
        }

        return (
          <Link key={item.href} href={item.href} className={itemClass(active)}>
            <span className={chipClass(active)}>
              <item.icon className="size-4" />
            </span>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

function SideBarContent() {
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-primary/5 to-transparent">
      <div className="flex h-16 items-center border-b border-primary/15 px-6">
        <Logo />
      </div>
      <NavLinks />
      <div className="border-t border-primary/15 px-6 py-4">
        <p className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="size-1.5 rounded-full bg-primary" />
          SportNest Dashboard
        </p>
      </div>
    </div>
  );
}

function SideBar() {
  return (
    <>
      {/* Desktop: fixed panel */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r bg-card md:block">
        <SideBarContent />
      </aside>

      {/* Mobile: top bar + off-canvas drawer */}
      <header className="sticky top-0 z-30 flex h-14 items-center border-b bg-background/80 px-4 backdrop-blur md:hidden">
        <Sheet>
          <SheetTrigger render={<Button variant="ghost" size="icon" />}>
            <Menu />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-0">
            <SheetTitle className="sr-only">Dashboard menu</SheetTitle>
            <SideBarContent />
          </SheetContent>
        </Sheet>
        <Logo />
      </header>
    </>
  );
}

export default SideBar;
