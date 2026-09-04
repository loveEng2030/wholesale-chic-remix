import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/jojo-logo.png";
import { PHONE } from "@/lib/data";

const links = [
  { to: "/", label: "الرئيسية" },
  { to: "/categories", label: "الأقسام" },
  { to: "/catalog", label: "الكتالوج" },
  { to: "/new-collection", label: "الكولكشن الجديد" },
  { to: "/about", label: "من نحن" },
  { to: "/contact", label: "تواصل معنا" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full bg-card/95 px-4 py-2.5 shadow-lg shadow-foreground/5 ring-1 ring-border backdrop-blur">
        <Link to="/" className="flex items-center gap-3">
          <span className="text-right leading-tight">
            <span className="block font-heading text-lg font-extrabold text-foreground">
              JOJO Store
            </span>
            <span className="block text-[11px] text-muted-foreground">
              أزياء تناسب جميع الفئات
            </span>
          </span>
          <img
            src={logo}
            alt="لوجو جوجو ستورز"
            className="h-11 w-11 rounded-full object-cover ring-1 ring-border"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary font-bold" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:+2${PHONE}`}
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90 sm:flex"
            dir="ltr"
          >
            {PHONE}
            <Phone className="h-4 w-4" />
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-foreground lg:hidden"
            aria-label="القائمة"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl bg-card p-4 shadow-xl ring-1 ring-border lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                activeProps={{ className: "bg-muted text-primary font-bold" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`tel:+2${PHONE}`}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground"
              dir="ltr"
            >
              {PHONE}
              <Phone className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
