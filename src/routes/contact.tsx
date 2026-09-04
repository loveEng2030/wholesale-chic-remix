import { createFileRoute } from "@tanstack/react-router";
import { Clock, Facebook, MapPin, MessageCircle, Phone } from "lucide-react";
import { ADDRESS, PHONE, waLink } from "@/lib/data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تواصل معنا | JOJO Store" },
      {
        name: "description",
        content:
          "تواصل مع JOJO Store — 16 شارع جمال عبد الناصر أمام مستشفى ماري جرجس، حدائق حلوان، القاهرة. هاتف وواتساب 01061318862.",
      },
      { property: "og:title", content: "تواصل معنا | JOJO Store" },
      {
        property: "og:description",
        content: "زورنا في المكتب أو تواصل واتساب على 01061318862.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const WA_CONTACT = waLink(
  "السلام عليكم، أرغب في الاستفسار عن الجملة في JOJO Store",
);

function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-10 pt-32">
      <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">
        تواصل معنا
      </span>
      <h1 className="font-heading text-3xl font-extrabold md:text-4xl">
        زورنا في المكتب
      </h1>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <div className="rounded-3xl bg-card p-7 ring-1 ring-border">
          <MapPin className="h-7 w-7 text-primary" />
          <h2 className="mt-4 font-heading text-lg font-bold">العنوان</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {ADDRESS}
          </p>
        </div>

        <div className="rounded-3xl bg-card p-7 ring-1 ring-border">
          <Phone className="h-7 w-7 text-primary" />
          <h2 className="mt-4 font-heading text-lg font-bold">
            الهاتف / واتساب
          </h2>
          <a
            href={`tel:+2${PHONE}`}
            className="mt-2 block text-sm font-bold text-foreground"
            dir="ltr"
          >
            {PHONE}
          </a>
        </div>

        <div className="rounded-3xl bg-card p-7 ring-1 ring-border">
          <Clock className="h-7 w-7 text-primary" />
          <h2 className="mt-4 font-heading text-lg font-bold">مواعيد العمل</h2>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li>السبت - الخميس: 10:00 ص - 9:00 م</li>
            <li>الجمعة: 2:00 م - 9:00 م</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={WA_CONTACT}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <MessageCircle className="h-4 w-4" />
          واتساب
        </a>
        <a
          href={`tel:+2${PHONE}`}
          className="flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-bold text-foreground transition-colors hover:bg-muted"
        >
          <Phone className="h-4 w-4" />
          اتصل بنا
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-bold text-foreground transition-colors hover:bg-muted"
        >
          <Facebook className="h-4 w-4" />
          فيسبوك
        </a>
      </div>

      <div className="mt-10 overflow-hidden rounded-3xl ring-1 ring-border">
        <iframe
          title="موقع المكتب على الخريطة"
          src="https://www.google.com/maps?q=%D8%AD%D8%AF%D8%A7%D8%A6%D9%82%20%D8%AD%D9%84%D9%88%D8%A7%D9%86%D8%8C%20%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9&output=embed"
          className="h-80 w-full border-0"
          loading="lazy"
        />
      </div>
    </div>
  );
}
