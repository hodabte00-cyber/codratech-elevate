import { motion } from "motion/react";
import { WHY, TRUST } from "./data";
import { Reveal, SectionHeading, Stagger, StaggerItem } from "./primitives";

export function Why() {
  return (
    <section id="why" className="relative px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="04 · Why Codra"
          title={
            <>
              لماذا <span className="text-gradient">Codra Tech</span>؟
            </>
          }
          subtitle="ليست دورات مشاهدة فقط — نظام تعلم عملي بالعربية موجّه للنتيجة."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w) => (
            <StaggerItem key={w.n}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group relative h-full overflow-hidden rounded-[1.75rem] border border-border bg-surface/50 p-7 transition-colors hover:border-primary/40"
              >
                <span className="font-mono text-4xl font-bold text-primary/15 transition-colors duration-300 group-hover:text-primary/35">
                  {w.n}
                </span>
                <h3 className="mt-3 text-lg font-bold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
                <span className="absolute inset-x-7 bottom-0 h-px scale-x-0 bg-gradient-to-l from-transparent via-primary to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function Trust() {
  return (
    <section className="relative px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="06 · Trust"
          title="ما الذي يجعل التدريب مختلفًا فعلًا"
          subtitle="لا نعرض شهادات وهمية — هذه هي المبادئ التي يقوم عليها كل برنامج."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TRUST.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.07}>
              <div className="h-full rounded-[1.75rem] card-surface p-7">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary/12 font-mono text-sm text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-base font-bold leading-snug">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
