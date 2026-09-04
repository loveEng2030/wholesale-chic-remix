import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ProductCard } from "@/components/site/ProductCard";
import { categories, products, WA_CATALOG_FULL } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/catalog")({
  head: () => ({
    meta: [
      { title: "الكتالوج | موديلات جوجو ستور للجملة" },
      {
        name: "description",
        content:
          "تصفح كتالوج جوجو ستور: ملابس حريمي ورجالي وأطفال وهوم وير وكاجوال متاحة للتوريد بالجملة مع الأكواد والألوان والمقاسات.",
      },
      { property: "og:title", content: "الكتالوج | جوجو ستور" },
      {
        property: "og:description",
        content: "أحدث موديلات جوجو ستور المتاحة للتوريد بالجملة.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CatalogPage,
});

function CatalogPage() {
  const { t, tx } = useI18n();
  const [cat, setCat] = useState<string>("all");
  const [newOnly, setNewOnly] = useState(false);

  const list = products.filter(
    (p) =>
      (cat === "all" || p.categoryId === cat) && (!newOnly || p.isNew),
  );

  return (
    <div className="mx-auto max-w-6xl px-4 pb-8 pt-32">
      <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">
        {t("catalog.kicker")}
      </span>
      <h1 className="mt-4 font-heading text-4xl font-extrabold md:text-5xl">
        {t("catalog.title")}
      </h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
        {t("catalog.subtitle")}
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setCat("all")}
          className={`rounded-full px-5 py-2 text-sm font-bold transition-colors ${
            cat === "all"
              ? "bg-primary text-primary-foreground"
              : "border border-border bg-card text-foreground hover:bg-muted"
          }`}
        >
          {t("catalog.all")}
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setCat(c.id)}
            className={`rounded-full px-5 py-2 text-sm font-bold transition-colors ${
              cat === c.id
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-card text-foreground hover:bg-muted"
            }`}
          >
            {tx(c.name, c.nameEn)}
          </button>
        ))}
        <button
          type="button"
          onClick={() => setNewOnly((v) => !v)}
          className={`rounded-full px-5 py-2 text-sm font-bold transition-colors ${
            newOnly
              ? "bg-charcoal text-white"
              : "border border-border bg-card text-foreground hover:bg-muted"
          }`}
        >
          {t("catalog.newOnly")}
        </button>
      </div>

      <p className="mt-5 text-xs text-muted-foreground">
        {list.length} {t("catalog.count")}
      </p>

      {list.length === 0 ? (
        <p className="mt-10 rounded-3xl bg-card p-10 text-center text-sm text-muted-foreground ring-1 ring-border">
          {t("catalog.empty")}
        </p>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <ProductCard key={p.code} product={p} />
          ))}
        </div>
      )}

      <a
        href={WA_CATALOG_FULL}
        target="_blank"
        rel="noreferrer"
        className="mt-10 inline-block rounded-full bg-primary px-7 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        {t("nav.cta")}
      </a>
    </div>
  );
}
