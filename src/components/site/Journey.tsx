import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { STEPS } from "./data";
import { SectionHeading, Reveal } from "./primitives";

export function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const height = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), {
    stiffness: 90,
    damping: 24,
  });

  return (
    <section id="journey" className="relative px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="05 · Journey"
          title={
            <>
              رحلتك معنا في <span className="text-gradient">٥ خطوات</span>
            </>
          }
          subtitle="من تسجيل الاهتمام إلى مشروع حقيقي في Portfolio."
        />

        <div ref={ref} className="relative mt-16 pr-8 sm:pr-12">
          <div className="absolute right-[15px] top-0 h-full w-px bg-border sm:right-[23px]" />
          <motion.div
            style={{ height }}
            className="absolute right-[15px] top-0 w-px bg-gradient-to-b from-primary to-primary-glow sm:right-[23px]"
          />

          <div className="space-y-10">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06}>
                <div className="relative">
                  <span className="absolute -right-8 top-1 grid h-8 w-8 place-items-center rounded-full border border-primary/40 bg-background font-mono text-[11px] text-primary sm:-right-12 sm:h-12 sm:w-12 sm:text-sm">
                    {s.n}
                  </span>
                  <motion.div
                    whileHover={{ x: -6 }}
                    className="rounded-[1.5rem] border border-border bg-surface/50 p-6 transition-colors hover:border-primary/40"
                  >
                    <h3 className="text-lg font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  </motion.div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
