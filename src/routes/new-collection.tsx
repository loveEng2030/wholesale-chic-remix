import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/site/ProductCard";
import { newProducts, stapleProducts } from "@/lib/data";

export const Route = createFileRoute("/new-collection")({
  head: () => ({
    meta: [
      { title: "الكولكشن الجديد | JOJO Store" },
      {
        name: "description",
        content:
          "أحدث موديلات الجملة في جوجو ستورز — قطع وصلت حديثاً وأساسيات متوفرة دائماً للمحلات والموزعين.",
      },
      { property: "og:title", content: "الكولكشن الجديد | JOJO Store" },
      {
        property: "og:description",
        content: "أحدث موديلات الجملة والقطع الأساسية المتوفرة دائماً.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NewCollectionPage,
});

function NewCollectionPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-10 pt-32">
      <section>
        <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">
          وصل حديثاً
        </span>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h1 className="font-heading text-3xl font-extrabold md:text-4xl">
            أحدث الموديلات
          </h1>
          <span className="text-sm font-bold text-muted-foreground">
            {newProducts.length} قطعة
          </span>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {newProducts.map((p) => (
            <ProductCard key={p.code} product={p} />
          ))}
        </div>
      </section>

      <section className="mt-20">
        <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">
          أساسيات
        </span>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-heading text-3xl font-extrabold md:text-4xl">
            قطع متوفرة دائماً
          </h2>
          <span className="text-sm font-bold text-muted-foreground">
            {stapleProducts.length} قطعة
          </span>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stapleProducts.map((p) => (
            <ProductCard key={p.code} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
