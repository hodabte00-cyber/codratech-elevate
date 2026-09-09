import { MessageCircle } from "lucide-react";
import { NAV_LINKS, WHATSAPP_URL } from "./data";
import { ActionButton, Reveal } from "./primitives";
import { Logo } from "./Logo";

export function FinalCta() {
  return (
    <section className="relative px-4 pb-24 sm:px-6">
      <Reveal className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2.5rem] card-surface glow-ring px-6 py-16 text-center sm:px-12">
          <div className="pointer-events-none absolute inset-0 mesh-bg opacity-70" />
          <div className="pointer-events-none absolute inset-0 grid-lines opacity-25" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-2xl font-bold leading-[1.5] sm:text-3xl md:text-4xl">
              ابدأ اليوم أول خطوة عملية في{" "}
              <span className="text-gradient">البرمجة والذكاء الاصطناعي</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              سجّل اهتمامك الآن ونساعدك تختار المسار المناسب لمستواك وهدفك.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ActionButton href="#register">سجل اهتمامك</ActionButton>
              <ActionButton href={WHATSAPP_URL} variant="ghost">
                <MessageCircle className="h-4 w-4" />
                تواصل واتساب
              </ActionButton>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5">
            <Logo className="h-8 w-8" />
            <span className="font-display text-lg font-bold">
              Codra<span className="text-primary">Tech</span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            أكاديمية عربية للبرمجة والذكاء الاصطناعي — تعلم عملي بمشاريع حقيقية ومخرجات Portfolio.
          </p>
        </div>

        <nav className="flex flex-col gap-3 text-sm">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="text-sm">
          <p className="font-semibold">تواصل معنا</p>
          <a
            href={WHATSAPP_URL}
            className="mt-3 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <MessageCircle className="h-4 w-4" />
            واتساب
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Codra Tech. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
