import { MessageCircle } from "lucide-react";
import { WA_DEFAULT } from "@/lib/data";

export function WhatsAppFloat() {
  return (
    <a
      href={WA_DEFAULT}
      target="_blank"
      rel="noreferrer"
      aria-label="تواصل عبر واتساب"
      className="fixed bottom-5 left-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-xl shadow-green-900/20 transition-transform hover:scale-105"
    >
      <MessageCircle className="h-5 w-5" />
      واتساب
    </a>
  );
}
