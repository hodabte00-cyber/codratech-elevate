import { motion, useInView, useMotionValue, useSpring, type Variants } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, y: 26 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  gap = 0.09,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-70px" }}
      variants={{ show: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono text-xs tracking-wide text-primary">
      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
      {children}
    </span>
  );
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
}: {
  label: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "start";
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-start",
      )}
    >
      <SectionLabel>{label}</SectionLabel>
      <h2 className="max-w-3xl text-3xl font-bold leading-[1.35] sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}

export function Counter({
  to,
  suffix = "",
  duration = 1400,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

type BtnProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  magnetic?: boolean;
};

export function ActionButton({
  children,
  href,
  variant = "primary",
  className,
  type = "button",
  onClick,
  magnetic = true,
}: BtnProps) {
  const x = useSpring(useMotionValue(0), { stiffness: 260, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 260, damping: 18 });

  const base = cn(
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-colors duration-300 will-change-transform sm:text-base",
    variant === "primary"
      ? "bg-primary text-primary-foreground glow-ring hover:bg-primary-glow"
      : "glass text-foreground hover:border-primary/50 hover:text-primary",
    className,
  );

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!magnetic) return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set(((e.clientX - r.left) / r.width - 0.5) * 14);
    y.set(((e.clientY - r.top) / r.height - 0.5) * 10);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const inner = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === "primary" ? (
        <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 marquee-gradient" />
      ) : null}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={base}
        style={{ x, y }}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        whileTap={{ scale: 0.96 }}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={base}
      style={{ x, y }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileTap={{ scale: 0.96 }}
    >
      {inner}
    </motion.button>
  );
}
