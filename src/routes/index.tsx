import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Layers, Shirt, Truck } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";
import heroPoster from "@/assets/hero-poster.jpg";
import { ProductCard } from "@/components/site/ProductCard";
import { SectionHeader } from "@/components/site/SectionHeader";
import {
  categories,
  products,
  WA_CATALOG,
} from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JOJO Store — جملة الملابس بأناقة وأسعار المصنع" },
      {
        name: "description",
        content:
          "جوجو ستورز — جملة الملابس الحريمي والرجالي والأطفال والهوم وير والكاجوال بخامات مختارة وكميات جملة، مع شحن لكل محافظات مصر.",
      },
      { property: "og:title", content: "JOJO Store — جملة الملابس بأناقة وأسعار المصنع" },
      {
        property: "og:description",
        content:
          "تشكيلات حريمي ورجالي وأطفال وهوم وير وكاجوال بكميات جملة تناسب المحلات والموزعين، مع شحن لكل محافظات مصر.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const features = [
  {
    num: "01",
    icon: Layers,
    title: "أكثر من 5 أقسام",
    text: "تشكيلة كاملة لكل الفئات",
  },
  {
    num: "02",
    icon: Shirt,
    title: "خامات مختارة",
    text: "قطن وكتان وفانيلا بجودة عالية",
  },
  {
    num: "03",
    icon: Truck,
    title: "شحن لكل المحافظات",
    text: "تجهيز وتسليم سريع للطلبات",
  },
];

const steps = [
  {
    num: "01",
    image: categories[0]!.image,
    title: "تصفح الكتالوج",
    text: "اختر الموديلات المناسبة لمحلك من الكتالوج بكل الألوان والمقاسات.",
  },
  {
    num: "02",
    image: categories[1]!.image,
    title: "تأكيد الطلب",
    text: "أرسل الأكواد والكميات عبر الواتساب ونحدد سعر الجملة حسب الكمية.",
  },
  {
    num: "03",
    image: categories[2]!.image,
    title: "التجهيز والتغليف",
    text: "نجهز القطع ونراجع المقاسات والألوان قبل التغليف والشحن.",
  },
  {
    num: "04",
    image: categories[3]!.image,
    title: "الشحن والاستلام",
    text: "شحن لكل المحافظات ومتابعة حتى وصول الشحنة إلى محلك.",
  },
];

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideo}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative mx-auto w-full max-w-6xl px-4 pt-28 pb-16">
          <div className="max-w-2xl rounded-[2.5rem] bg-black/45 p-8 backdrop-blur-md md:p-12">
            <span className="mb-6 inline-block rounded-full bg-primary/90 px-4 py-1.5 text-xs font-bold text-primary-foreground">
              أزياء تناسب جميع الفئات
            </span>
            <h1 className="font-heading text-4xl font-extrabold leading-[1.25] text-white md:text-6xl">
              جوجو ستورز — جملة الملابس
              <br />
              بأناقة وأسعار المصنع
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
              تشكيلات حريمي ورجالي وأطفال وهوم وير وكاجوال بخامات مختارة
              وكميات جملة تناسب المحلات والموزعين، مع شحن لكل محافظات مصر.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WA_CATALOG}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                اطلب جملة عبر الواتساب
              </a>
              <Link
                to="/new-collection"
                className="rounded-full border border-white/40 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                تصفح الكتالوج
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-3">
              {[
                { value: "+5", label: "أقسام رئيسية" },
                { value: "+17", label: "موديل بالكتالوج" },
                { value: "B2B", label: "توريد للمحلات والموزعين" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/20 bg-white/5 px-4 py-4 text-center"
                >
                  <p className="font-heading text-xl font-extrabold text-white md:text-2xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-[11px] text-white/70 md:text-xs">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-5 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.num}
              className="rounded-3xl bg-card p-7 ring-1 ring-border"
            >
              <div className="flex items-center justify-between">
                <span className="font-heading text-sm font-bold text-primary">
                  {f.num}
                </span>
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <SectionHeader
          kicker="الأقسام"
          title="تصفح أقسام الجملة"
          linkTo="/categories"
          linkLabel="كل الأقسام"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((c, i) => (
            <Link
              key={c.id}
              to="/categories"
              className="group relative overflow-hidden rounded-3xl ring-1 ring-border"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="text-xs font-bold text-white/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-lg font-extrabold text-white">
                  {c.name}
                </h3>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-white/75">
                  {c.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeader kicker="مراحل التوريد" title="من الاختيار إلى الاستلام" />
        <p className="-mt-6 mb-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          خطوات واضحة لطلب الجملة من مكتب جوجو ستورز، من تصفح الكتالوج حتى
          وصول الشحنة إلى محلك.
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.num}
              className="overflow-hidden rounded-3xl bg-card ring-1 ring-border"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="font-heading text-sm font-bold text-primary">
                  {s.num}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Catalog preview */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <SectionHeader
          kicker="كتالوج الجملة"
          title="قطع مختارة من الكولكشن"
          linkTo="/catalog"
          linkLabel="كل الكتالوج"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 9).map((p) => (
            <ProductCard key={p.code} product={p} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/catalog"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-3.5 text-sm font-bold text-background transition-colors hover:bg-foreground/90"
          >
            عرض الكتالوج كامل
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
