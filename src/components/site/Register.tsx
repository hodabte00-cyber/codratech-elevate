import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Check, MessageCircle, Send } from "lucide-react";
import { PROGRAMS, WHATSAPP_URL } from "./data";
import { ActionButton, Reveal, SectionHeading } from "./primitives";

export function Register() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    program: PROGRAMS[0]?.title ?? "",
    note: "",
  });


  const waHref = `${WHATSAPP_URL}?text=${encodeURIComponent(
    `مرحبًا Codra Tech، اسمي ${form.name || "..."} وأرغب بالتسجيل في ${form.program}.`,
  )}`;

  return (
    <section id="register" className="relative px-4 py-24 sm:px-6 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-10 h-72 w-72 rounded-full bg-primary/15 blur-[130px]" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeading
            align="start"
            label="07 · Register"
            title={
              <>
                سجّل اهتمامك في <span className="text-gradient">دقيقة واحدة</span>
              </>
            }
            subtitle="نتواصل معك على الواتساب لتحديد مستواك وترشيح البرنامج الأنسب."
          />
          <div className="mt-8 space-y-3 text-sm text-muted-foreground">
            {["بدون التزام مالي في البداية", "نحدد مستواك وهدفك أولًا", "ترشيح مسار مناسب لك"].map(
              (t) => (
                <div key={t} className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-primary" />
                  {t}
                </div>
              ),
            )}
          </div>
          <div className="mt-8">
            <ActionButton href={waHref} variant="ghost">
              <MessageCircle className="h-4 w-4" />
              أو راسلنا مباشرة على واتساب
            </ActionButton>
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="relative rounded-[2rem] card-surface p-7 sm:p-9">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-4 py-10 text-center"
                >
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-8 w-8" />
                  </span>
                  <h3 className="text-xl font-bold">تم استلام اهتمامك</h3>
                  <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                    أكمل التسجيل بإرسال رسالة واتساب حتى نتواصل معك بأسرع وقت.
                  </p>
                  <ActionButton href={waHref}>
                    <MessageCircle className="h-4 w-4" />
                    متابعة على واتساب
                  </ActionButton>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="space-y-5"
                >
                  <Field label="الاسم">
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="اسمك الكامل"
                      className="input-base"
                    />
                  </Field>
                  <Field label="رقم الواتساب">
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+20 1XX XXX XXXX"
                      className="input-base"
                    />
                  </Field>
                  <Field label="البرنامج المهتم به">
                    <select
                      value={form.program}
                      onChange={(e) => setForm({ ...form, program: e.target.value })}
                      className="input-base"
                    >
                      {PROGRAMS.map((p) => (
                        <option key={p.title} value={p.title}>
                          {p.title}
                        </option>
                      ))}
                      <option value="غير متأكد">لست متأكدًا — رشّحوا لي</option>
                    </select>
                  </Field>
                  <Field label="ملاحظة (اختياري)">
                    <textarea
                      rows={3}
                      value={form.note}
                      onChange={(e) => setForm({ ...form, note: e.target.value })}
                      placeholder="مستواك الحالي أو هدفك من التدريب"
                      className="input-base resize-none"
                    />
                  </Field>

                  <ActionButton type="submit" magnetic={false} className="w-full">
                    <Send className="h-4 w-4" />
                    أرسل اهتمامي
                  </ActionButton>
                  <p className="text-center text-xs text-muted-foreground">
                    بياناتك تُستخدم للتواصل معك فقط.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
