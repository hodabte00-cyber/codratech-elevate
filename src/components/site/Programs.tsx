import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, Clock, Layers, Sparkles, Target, Users } from "lucide-react";
import { AUDIENCE, PROGRAMS } from "./data";
import { Reveal, SectionHeading, StaggerItem, Stagger } from "./primitives";
import { cn } from "@/lib/utils";

export function Programs() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section id="programs" className="relative px-4 py-24 sm:px-6 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 grid-lines opacity-25 [mask-image:radial-gradient(65%_55%_at_50%_50%,black,transparent)]" />
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="03 · Programs"
          title={
            <>
              ثلاثة برامج تدريبية <span className="text-gradient">تختار منها حسب مستواك</span>
            </>
          }
          subtitle="كل برنامج له مسار واضح، مدة محددة، ومخرج عملي تقدر تعرضه."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.code} delay={i * 0.1}>
              <motion.article
                onHoverStart={() => setActiveIdx(i)}
                onHoverEnd={() => setActiveIdx(null)}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-[2rem] p-8",
                  p.recommended ? "card-surface glow-ring" : "border border-border bg-surface/50",
                )}
              >
                <div
                  className={cn(
                    "pointer-events-none absolute -left-20 -top-20 h-52 w-52 rounded-full bg-primary/20 blur-3xl transition-opacity duration-500",
                    activeIdx === i ? "opacity-100" : "opacity-0",
                  )}
                />

                {p.recommended ? (
                  <span className="absolute left-6 top-6 inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 text-[11px] text-primary">
                    <Sparkles className="h-3 w-3" />
                    الأكثر مناسبة للبداية
                  </span>
                ) : null}

                <span className="font-mono text-xs text-primary">{p.code}</span>
                <span className="mt-3 w-fit rounded-full border border-border px-3 py-1 text-[11px] text-muted-foreground">
                  {p.level}
                </span>

                <h3 className="mt-4 text-2xl font-bold leading-snug">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <dl className="mt-6 space-y-3 border-t border-border pt-6 text-sm">
                  <Row icon={<Clock className="h-4 w-4" />} label="المدة" value={p.duration} />
                  <Row icon={<Layers className="h-4 w-4" />} label="الصيغة" value={p.format} />
                  <Row icon={<Target className="h-4 w-4" />} label="المخرج" value={p.outcome} />
                  <Row icon={<Users className="h-4 w-4" />} label="مناسب لـ" value={p.bestFor} />
                </dl>

                <a
                  href="#register"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-transform duration-300 group-hover:-translate-x-1"
                >
                  سجّل اهتمامك بهذا البرنامج
                  <ArrowLeft className="h-4 w-4" />
                </a>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <div className="rounded-[2rem] border border-border bg-surface/50 p-8 text-center">
            <p className="font-display text-lg font-semibold">لمن هذه البرامج؟</p>
            <Stagger className="mt-6 flex flex-wrap justify-center gap-3">
              {AUDIENCE.map((a) => (
                <StaggerItem key={a}>
                  <motion.span
                    whileHover={{ scale: 1.06 }}
                    className="inline-block rounded-full border border-primary/25 bg-primary/8 px-5 py-2 text-sm text-foreground"
                  >
                    {a}
                  </motion.span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Row({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-3">
      <span className="mt-0.5 text-primary">{icon}</span>
      <div>
        <dt className="text-[11px] text-muted-foreground">{label}</dt>
        <dd className="text-sm leading-relaxed">{value}</dd>
      </div>
    </div>
  );
}
