import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/site/ProductCard";
import { categories, categoryWaLink, products } from "@/lib/data";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "الأقسام | JOJO Store — جملة الملابس" },
      {
        name: "description",
        content:
          "تصفح أقسام جملة الملابس في جوجو ستورز: حريمي، رجالي، أطفال، هوم وير وكاجوال بخامات مختارة وأسعار مصنع.",
      },
      { property: "og:title", content: "الأقسام | JOJO Store" },
      {
        property: "og:description",
        content: "أقسام الجملة: حريمي، رجالي، أطفال، هوم وير وكاجوال.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-10 pt-32">
      <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">
        الأقسام
      </span>
      <h1 className="font-heading text-3xl font-extrabold md:text-4xl">
        تصفح أقسام الجملة
      </h1>

      <div className="mt-12 space-y-20">
        {categories.map((c, i) => {
          const items = products.filter((p) => p.categoryId === c.id);
          return (
            <section key={c.id}>
              <div className="relative mb-8 overflow-hidden rounded-3xl ring-1 ring-border">
                <div className="aspect-[16/6] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 p-6 md:p-8">
                  <div>
                    <span className="text-xs font-bold text-white/70">
                      قسم {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-heading text-2xl font-extrabold text-white md:text-3xl">
                      {c.name}
                    </h2>
                    <p className="mt-1 max-w-lg text-sm text-white/80">
                      {c.description}
                    </p>
                  </div>
                  <a
                    href={categoryWaLink(c.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    اطلب عبر واتساب
                  </a>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((p) => (
                  <ProductCard key={p.code} product={p} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
