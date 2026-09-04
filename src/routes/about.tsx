import { createFileRoute } from "@tanstack/react-router";
import aboutImg from "@/assets/jojo-p17.jpg";
import { waLink } from "@/lib/data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "من نحن | JOJO Store — جملة الملابس" },
      {
        name: "description",
        content:
          "JOJO Store مكتب متخصص في بيع الملابس بالجملة — تشكيلات متجددة حريمي ورجالي وأطفال وهوم وير وكاجوال مع شحن لجميع محافظات مصر.",
      },
      { property: "og:title", content: "من نحن | JOJO Store" },
      {
        property: "og:description",
        content: "مكتب متخصص في بيع الملابس بالجملة بخامات مختارة وأسعار تناسب المحلات والموزعين.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const WA_ABOUT = waLink(
  "السلام عليكم، أرغب في التعرف على شروط التعامل بالجملة مع JOJO Store",
);

function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-10 pt-32">
      <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">
        قصتنا
      </span>
      <h1 className="font-heading text-3xl font-extrabold md:text-4xl">
        من نحن
      </h1>

      <div className="mt-10 grid items-start gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <p className="text-base leading-loose text-foreground">
            JOJO Store مكتب متخصص في بيع الملابس بالجملة، نوفر تشكيلات متجددة
            من الملابس الحريمي والرجالي والأطفال والهوم وير والكاجوال بخامات
            مختارة وأسعار تناسب المحلات والموزعين وأصحاب المشاريع الصغيرة.
          </p>
          <p className="text-base leading-loose text-muted-foreground">
            نعمل على تجهيز الطلبات بسرعة وتوفير مقاسات كاملة لكل قطعة، مع
            إمكانية الشحن لجميع محافظات مصر.
          </p>
          <a
            href={WA_ABOUT}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            تواصل معنا عبر واتساب
          </a>

          <div className="grid grid-cols-3 gap-3 pt-4">
            {[
              { value: "+5", label: "أقسام رئيسية" },
              { value: "مقاسات كاملة", label: "من أطفال حتى 3XL" },
              { value: "شحن", label: "لكل محافظات مصر" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-card p-4 text-center ring-1 ring-border"
              >
                <p className="font-heading text-lg font-extrabold text-primary">
                  {s.value}
                </p>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl ring-1 ring-border">
          <img
            src={aboutImg}
            alt="تشكيلة ملابس من مكتب جوجو ستورز"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
