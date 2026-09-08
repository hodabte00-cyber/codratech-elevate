import { motion, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { MessageCircle, Sparkles, Terminal, Cpu, GraduationCap } from "lucide-react";
import { ActionButton } from "./primitives";
import { TRACKS, WHATSAPP_URL } from "./data";

const CODE_LINES = [
  "from codra import Learner",
  "me = Learner(level='beginner')",
  "me.learn('python', 'ai_tools')",
  "me.build(project='real_world')",
  "print(me.portfolio)  # ready ✅",
];

export function Hero() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 700], [0, 120]);
  const yCard = useTransform(scrollY, [0, 700], [0, -70]);
  const fade = useTransform(scrollY, [0, 500], [1, 0]);

  const mx = useSpring(useMotionValue(0), { stiffness: 120, damping: 20 });
  const my = useSpring(useMotionValue(0), { stiffness: 120, damping: 20 });
  const tiltX = useTransform(my, [-0.5, 0.5], [8, -8]);
  const tiltY = useTransform(mx, [-0.5, 0.5], [-10, 10]);

  return (
    <section
      id="home"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      className="relative isolate overflow-hidden px-4 pb-24 pt-36 sm:px-6 md:pb-32 md:pt-44"
    >
      <motion.div style={{ y: yBg }} className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute inset-0 grid-lines opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_30%,black,transparent)]" />
        <div className="absolute -top-28 left-1/3 h-80 w-80 rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-primary-glow/15 blur-[110px]" />
      </motion.div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col items-start gap-7">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs text-primary sm:text-sm"
          >
            <Sparkles className="h-4 w-4" />
            أكاديمية عربية للبرمجة والذكاء الاصطناعي
          </motion.span>

          <h1 className="text-3xl font-bold leading-[1.4] sm:text-4xl md:text-5xl lg:text-[3.4rem]">
            {["ابدأ البرمجة واستخدام أدوات", "الذكاء الاصطناعي من الصفر —", "وطبّق على مشاريع حقيقية"].map(
              (line, i) => (
                <motion.span
                  key={line}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  {i === 2 ? <span className="text-gradient">{line}</span> : line}
                </motion.span>
              ),
            )}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="max-w-xl text-base leading-loose text-muted-foreground md:text-lg"
          >
            برامج تدريبية عربية تساعدك تتعلم <span className="text-foreground">Python</span>، تستخدم{" "}
            <span className="text-foreground">ChatGPT</span> و
            <span className="text-foreground"> Claude</span> بذكاء، وتبني مشاريع عملية تقدر
            تعرضها في شغلك أو <span className="text-foreground">Portfolio</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.62 }}
            className="flex flex-wrap items-center gap-3"
          >
            <ActionButton href="#register">سجل اهتمامك</ActionButton>
            <ActionButton href={WHATSAPP_URL} variant="ghost">
              <MessageCircle className="h-4 w-4" />
              تواصل واتساب
            </ActionButton>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="font-mono text-xs text-muted-foreground sm:text-sm"
          >
            مناسب للمبتدئين • تطبيق عملي • برامج عربية
          </motion.p>
        </div>

        <motion.div
          style={{ y: yCard, rotateX: tiltX, rotateY: tiltY, transformPerspective: 1000 }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative rounded-[2rem] card-surface p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-primary" />
                <span className="font-display text-sm font-semibold">مسار التعلم في Codra Tech</span>
              </div>
              <div className="flex gap-1.5">
                {["bg-primary/70", "bg-primary/40", "bg-primary/20"].map((c) => (
                  <span key={c} className={`h-2.5 w-2.5 rounded-full ${c}`} />
                ))}
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {TRACKS.map((t, i) => (
                <div key={t.label}>
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-muted-foreground">{t.label}</span>
                    <span className="font-mono text-primary">{t.display}</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${t.value}%` }}
                      transition={{ duration: 1.1, delay: 0.7 + i * 0.12, ease: "easeOut" }}
                      className="h-full rounded-full marquee-gradient"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-background/60 p-4 font-mono text-[11px] leading-6 text-muted-foreground sm:text-xs">
              {CODE_LINES.map((line, i) => (
                <motion.div
                  key={line}
                  dir="ltr"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + i * 0.18, duration: 0.4 }}
                  className="text-start"
                >
                  <span className="text-primary/60">{String(i + 1).padStart(2, "0")}</span>{" "}
                  <span className={i === 4 ? "text-primary" : ""}>{line}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
              <span>مشروع التخرج · قيد التنفيذ</span>
              <span className="rounded-full bg-primary/12 px-3 py-1 font-mono text-primary">
                Portfolio ready
              </span>
            </div>
          </div>

          <motion.div
            className="absolute -right-4 -top-6 hidden rounded-2xl glass px-4 py-3 sm:flex sm:items-center sm:gap-2 animate-float"
            style={{ y: useTransform(scrollY, [0, 600], [0, -40]) }}
          >
            <Cpu className="h-4 w-4 text-primary" />
            <span className="text-xs">AI Workflows</span>
          </motion.div>
          <motion.div
            className="absolute -bottom-6 -left-4 hidden rounded-2xl glass px-4 py-3 sm:flex sm:items-center sm:gap-2 animate-float"
            style={{ y: useTransform(scrollY, [0, 600], [0, -20]) }}
          >
            <GraduationCap className="h-4 w-4 text-primary" />
            <span className="text-xs">مشاريع حقيقية</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        style={{ opacity: fade }}
        className="mx-auto mt-16 hidden w-fit flex-col items-center gap-2 text-xs text-muted-foreground md:flex"
      >
        <span>مرّر للأسفل</span>
        <span className="h-10 w-[1px] bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
