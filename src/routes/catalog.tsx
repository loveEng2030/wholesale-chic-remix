import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/site/ProductCard";
import { allColors, categories, products, WA_CATALOG_FULL } from "@/lib/data";

export const Route = createFileRoute("/catalog")({
  head: () => ({
    meta: [
      { title: "كتالوج الجملة | JOJO Store" },
      {
        name: "description",
        content:
          "كتالوج جملة جوجو ستورز الكامل — 17+ موديل حريمي ورجالي وأطفال وهوم وير وكاجوال بكل الألوان والمقاسات.",
      },
      { property: "og:title", content: "كتالوج الجملة | JOJO Store" },
      {
        property: "og:description",
        content: "كل موديلات الجملة المتاحة في جوجو ستورز بكل الأقسام.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CatalogPage,
});

function CatalogPage() {
  const [category, setCategory] = useState<string>("all");
  const [color, setColor] = useState<string>("all");

  const filtered = useMemo(
    () =>
      products.filter(
        (p) =>
          (category === "all" || p.categoryId === category) &&
          (color === "all" || p.colors.includes(color)),
      ),
    [category, color],
  );

  return (
    <div className="mx-auto max-w-6xl px-4 pb-10 pt-32">
      <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">
        كتالوج الجملة
      </span>
      <h1 className="font-heading text-3xl font-extrabold md:text-4xl">
        كل الموديلات المتاحة
      </h1>

      {/* Filters */}
      <div className="mt-8 space-y-4">
        <div>
          <p className="mb-2 text-xs font-bold text-muted-foreground">الأقسام</p>
          <div className="flex flex-wrap gap-2">
            <FilterChip
              active={category === "all"}
              onClick={() => setCategory("all")}
              label="كل الأقسام"
            />
            {categories.map((c) => (
              <FilterChip
                key={c.id}
                active={category === c.id}
                onClick={() => setCategory(c.id)}
                label={c.name}
              />
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2 text-xs font-bold text-muted-foreground">الألوان</p>
          <div className="flex flex-wrap gap-2">
            <FilterChip
              active={color === "all"}
              onClick={() => setColor("all")}
              label="كل الألوان"
            />
            {allColors.map((c) => (
              <FilterChip
                key={c}
                active={color === c}
                onClick={() => setColor(c)}
                label={c}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
        <h2 className="font-heading text-xl font-bold">
          {filtered.length} قطعة متاحة
        </h2>
        <a
          href={WA_CATALOG_FULL}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          اطلب الكتالوج عبر الواتساب
        </a>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProductCard key={p.code} product={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-sm text-muted-foreground">
          لا توجد قطع مطابقة للفلاتر المختارة.
        </p>
      )}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-xs font-bold transition-colors ${
        active
          ? "bg-primary text-primary-foreground"
          : "bg-card text-foreground ring-1 ring-border hover:bg-muted"
      }`}
    >
      {label}
    </button>
  );
}
