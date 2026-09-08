import { motion } from "motion/react";
import { ArrowLeft, Check, X } from "lucide-react";
import { BEFORE_AFTER, PROBLEM_POINTS, RANDOM_LOOP } from "./data";
import { Reveal, SectionHeading, Stagger, StaggerItem } from "./primitives";

export function Problem() {
  return (
    <section id="problem" className="relative px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            align="start"
            label="01 · Problem"
            title="أغلب الناس تبدأ تعلم البرمجة والذكاء الاصطناعي بطريقة عشوائية"
          />
          <Stagger className="mt-8 space-y-3">
            {PROBLEM_POINTS.map((p, i) => (
              <StaggerItem key={p}>
                <motion.div
                  whileHover={{ x: -6 }}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-surface/60 p-4 transition-colors hover:border-destructive/40"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-destructive/12 font-mono text-xs text-destructive">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-muted-foreground sm:text-base">{p}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal delay={0.15}>
          <div className="relative rounded-[2rem] card-surface p-8">
            <p className="font-display text-sm font-semibold text-muted-foreground">
              دائرة التعلم العشوائي
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {RANDOM_LOOP.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="flex items-center gap-3"
                >
                  <span className="rounded-full border border-border bg-background/60 px-4 py-2 text-xs sm:text-sm">
                    {item}
                  </span>
                  {i < RANDOM_LOOP.length - 1 ? (
                    <ArrowLeft className="h-4 w-4 text-muted-foreground/60" />
                  ) : null}
                </motion.div>
              ))}
            </div>
            <div className="mt-8 h-px w-full bg-gradient-to-l from-transparent via-destructive/40 to-transparent" />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              النتيجة: وقت كبير، معلومات متفرقة، وبدون مشروع حقيقي في النهاية.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Solution() {
  return (
    <section id="solution" className="relative px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="02 · Solution"
          title={
            <>
              Codra Tech تحوّل التعلم العشوائي إلى{" "}
              <span className="text-gradient">مسار عملي واضح</span>
            </>
          }
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[2rem] border border-border bg-surface/50 p-8">
              <span className="font-mono text-xs text-muted-foreground">قبل</span>
              <h3 className="mt-2 text-2xl font-bold text-muted-foreground">
                {BEFORE_AFTER.before.title}
              </h3>
              <ul className="mt-6 space-y-4">
                {BEFORE_AFTER.before.items.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground sm:text-base">
                    <X className="mt-0.5 h-5 w-5 shrink-0 text-destructive/70" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative h-full overflow-hidden rounded-[2rem] card-surface p-8 glow-ring">
              <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
              <span className="font-mono text-xs text-primary">بعد Codra Tech</span>
              <h3 className="mt-2 text-2xl font-bold">{BEFORE_AFTER.after.title}</h3>
              <ul className="mt-6 space-y-4">
                {BEFORE_AFTER.after.items.map((i, idx) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + idx * 0.08 }}
                    className="flex items-start gap-3 text-sm sm:text-base"
                  >
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    {i}
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
