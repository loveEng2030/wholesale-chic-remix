import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export function SectionHeader({
  kicker,
  title,
  linkTo,
  linkLabel,
}: {
  kicker: string;
  title: string;
  linkTo?: string;
  linkLabel?: string;
}) {
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
      <div>
        <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">
          {kicker}
        </span>
        <h2 className="font-heading text-3xl font-extrabold md:text-4xl">
          {title}
        </h2>
      </div>
      {linkTo && linkLabel && (
        <Link
          to={linkTo}
          className="flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-bold text-foreground transition-colors hover:bg-muted"
        >
          {linkLabel}
          <ArrowLeft className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}
