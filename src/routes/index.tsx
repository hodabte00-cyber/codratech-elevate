import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/site/Navbar";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { Hero } from "@/components/site/Hero";
import { Problem, Solution } from "@/components/site/ProblemSolution";
import { Programs } from "@/components/site/Programs";
import { Why, Trust } from "@/components/site/Why";
import { Journey } from "@/components/site/Journey";
import { Register } from "@/components/site/Register";
import { Faq } from "@/components/site/Faq";
import { FinalCta, Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Codra Tech — تعلم البرمجة والذكاء الاصطناعي بالعربية" },
      {
        name: "description",
        content:
          "برامج عربية عملية في Python، Prompt Engineering، وبناء منتجات بالذكاء الاصطناعي — مع مشاريع حقيقية وPortfolio.",
      },
      { property: "og:title", content: "Codra Tech — أكاديمية البرمجة والذكاء الاصطناعي" },
      {
        property: "og:description",
        content:
          "ابدأ من الصفر وتعلم Python وأدوات الذكاء الاصطناعي وطبّق على مشاريع حقيقية.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Programs />
        <Why />
        <Journey />
        <Trust />
        <Register />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
