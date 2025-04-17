"use client";

import { FaqSection } from "@/components/ui/faq-section";

const DEMO_FAQS = [
  {
    question: "Q1: How realistic is the iPad simulator’s CDU?",
    answer: "Our iPad app replicates the exact layout, tactile flow, and operational logic of the CDU/FMC systems found on aircraft like the B737 and B747. From flight plan entries to VNAV setups, it offers a true-to-cockpit experience—anytime, anywhere.",
  },
  {
    question: "Q2: Do I need an internet connection to train?",
    answer: "No internet required. Once installed, all modules run fully offline. You can load scenarios, practice full workflows, and review detailed debriefs—whether on the ground or at cruise altitude.",
  },
  {
    question: "Q3: What devices are supported?",
    answer: "Our app works on any iPad running iPadOS 14 or later. For optimal usability and button spacing, we recommend a screen size of 10 inches or more.",
  },
  {
    question: "Q4: Can we customize training scenarios for our syllabus?",
    answer: "Yes. Our Scenario Builder lets you create and deploy custom flight legs, non-normal events, and operator-specific procedures—all synced to your students’ devices with one click.",
  },
  {
    question: "Q5: What support and onboarding do you provide?",
    answer: "We assign a dedicated onboarding specialist to help your team with setup, scenario creation, and dashboard usage. You’ll also get 24/7 technical support and quarterly check-ins to optimize your curriculum.",
  },
  {
    question: "Q6: How is licensing structured for schools?",
    answer: "We offer flexible site licenses based on cohort size or device count. Each license includes full LMS access, regular simulator updates, and instructor dashboard seats—plus volume discounts for institutions.",
  },
];

export function FaqSectionDemo() {
  return (
    <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 bg-background text-foreground pb-12">
      <FaqSection
        items={DEMO_FAQS}
      />
    </div>
  );
}
