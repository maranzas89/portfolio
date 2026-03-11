"use client";

import React from "react";
import WorkNav from "@/components/WorkNav";
import PageHero from "@/components/PageHero";
import PageFooter from "@/components/PageFooter";
import { ScrollReveal } from "@/components/ScrollReveal";
import Link from "next/link";
import { Quote, Palette, GitBranch, Users, Award } from "lucide-react";

const FEATURED_QUOTES = [
  {
    quote:
      "Wen Liu has reported directly to me for the past 3 years at Calbright College. He serves as a Senior UI/UX Designer on our Student and Staff Portal initiatives. Wen played a central role in designing both systems from the ground up, partnering with product managers and engineers to translate complex academic and operational requirements into intuitive, user-centered experiences.\n\nHe has a strong ability to organize complicated workflows into clear information architecture and thoughtful interaction models. Wen brings a calm, methodical approach to ambiguous problems, quickly identifying the critical interactions that most elevate usability. His designs consistently balance user needs, business goals, and technical realities.\n\nMore recently, Wen has started leveraging AI tools strategically to accelerate ideation and iteration cycles without sacrificing rigor or quality. He works collaboratively with engineering to ensure high-fidelity implementation and strong execution.\n\nWen is a highly capable product and interaction designer with strong systems thinking and execution discipline and would be an asset for an organization.",
    name: "Shelly Gupta",
    role: "Director of Product Management, Calbright College",
    relationship: "Director of Product Management, Calbright College",
  },
  {
    quote:
      "I had the pleasure to work with Wen for one year at Cisco Learning Network department in Cisco. As mentioned by others, Wen has a warm personality that allows anyone to easily pull up a chair to discuss the work he's doing for or with you. Sometimes you could feel the pressure in the room as deadlines approached but Wen was always optimistic and hard working. He does great work and is a creative guy. I believe he's right where he belongs, in the creative industry and always growing.",
    name: "Keith Bosworth",
    role: "Project Manager, Cisco",
    relationship: "Project Manager, Cisco",
  },
  {
    quote:
      "Wen is a great visual, interaction and the truly outstanding UI/UX designers. We worked together on various projects at Cisco. He was a great resource to bounce ideas off of, easy to collaborate with and splitting up the work load which helped complete the project earlier than the deadline. He is extremely bright and easy to get along with, an ideal addition to any creative team.",
    name: "Madhukar Madicheeti",
    role: "Project Manager, Cisco",
    relationship: "Project Manager, Cisco",
  },
  {
    quote:
      "Wen did an exceptional job on the recent project where he worked on visual design and motion graphics. As I remember, Wen was a very productive person. Wen is a loyal, innovative, well educated and strong expert. Deadline oriented and insightful designer with a very strong problem solving skills.",
    name: "Daniel Samson Joseph",
    role: "UI Engineer, Cisco",
    relationship: "UI Engineer, Cisco",
  },
  {
    quote:
      "Wen Liu is fantastic Visual/UI designer who ensures that he completely understands the entire user \"story\" and then translates those users' needs into a design/implementation. Wen handled everything from reviewing the users' needs, wire-framing ideas complete with all necessary styling to implementing the UX for our project team to wire into our platform. In a relatively short period of time, Wen was able to help take our project from a \"prototype\" state to one that exceeds all our expectations and our users love.\n\nWhile you will be thrilled with all of his skill sets, it is his caring and dedication that set him apart from everyone else. He took great pride and ownership of everything he did, and worked his tail off throughout. My one regret is that we did not have the ability to pull him in full time at the end of the project!\n\nI highly recommend Wen and would be happy to provide additional information on his performance if needed.",
    name: "Jun Oh",
    role: "Senior Manager, Cisco",
    relationship: "Senior Manager, Cisco",
  },
];

const CARD_6 = {
  quote:
    "She was able to create alignment across stakeholders while still protecting the integrity of the user experience.",
  name: "Product Leader",
  role: "Product",
  relationship: "Product leader",
};

const CARD_2_NEW = {
  quote:
    "Wen Liu not only can complete the visual design excellently, but also has a deep accumulation of product interaction friendliness and security product design logic. He has a good sense of service and actively helped me solve many problems in the product design of Eagle Eye",
  name: "Feng Zhang",
  role: "Director of Product Manager, SSTG, DiDi",
  relationship: "Director of Product Manager, SSTG, DiDi",
};

const CARD_3_NEW = {
  quote:
    "With complete design ideas and comprehensive abilities, have great enthusiasm and strong initiative for design work, and have a strong sense of service. He can think deeply about improving the overall design level of the system.",
  name: "Haokun Wang",
  role: "Senior Product Manager, SSTG, DiDi",
  relationship: "Senior Product Manager, SSTG, DiDi",
};

const CARD_4_NEW = {
  quote:
    "Thanks to Wen Liu for supporting the IDR platform project, helping the platform to standardize a unified visual style, improving the platform user experience, and adding support for internationalization. Looking forward to the continued cooperation in the subsequent platform UI improvements",
  name: "Xiaofeng Liu",
  role: "Product Lead, SecOps, DiDi",
  relationship: "Product Lead, SecOps, DiDi",
};

const CARD_5_NEW = {
  quote:
    "From the international privacy platform to the domestic privacy center product build, Wen not only has continuous high-quality design output, but also led the team to build UI design specifications to provide strong support for compliance work, and all teams are very recognized.",
  name: "Huichao Huo",
  role: "Product Lead, SecOps, DiDi",
  relationship: "Product Lead, SecOps, DiDi",
};

const FEATURED_QUOTES_ORDERED = [
  FEATURED_QUOTES[0],
  CARD_2_NEW,
  CARD_3_NEW,
  CARD_4_NEW,
  CARD_5_NEW,
  FEATURED_QUOTES[4],
  FEATURED_QUOTES[1],
  FEATURED_QUOTES[2],
  FEATURED_QUOTES[3],
];

const THEMES_SUMMARY = [
  { title: "Craft & Clarity", sentence: "Strong visual judgment and the ability to turn complexity into clear, user-centered experiences.", icon: Palette },
  { title: "Strategy & Systems", sentence: "Moves fluidly between strategic thinking and design execution with rigor, clarity, and consistency in both.", icon: GitBranch },
  { title: "Leadership & Collaboration", sentence: "Creates alignment across stakeholders while protecting the integrity of the user experience.", icon: Users },
  { title: "Ownership & Trust", sentence: "Brings initiative and follow-through—helps define the path, not just respond to direction.", icon: Award },
];

export default function KindWordsPage() {
  return (
    <div className="relative bg-bg text-text min-h-screen overflow-x-hidden">
      <WorkNav />

      <PageHero
        eyebrow="Kind Words"
        headline="Feedback from collaborators, partners, and leaders"
        paragraph="Some of the most meaningful signals come from the people you build with. These notes reflect how I show up across collaboration, systems thinking, craft, and the ability to bring clarity to complex work."
      />

      <main className="bg-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
          {/* Recurring themes — quick summary below hero */}
          <section className="py-16 md:py-24 border-b border-line">
            <ScrollReveal direction="up">
              <span className="text-sm font-semibold uppercase tracking-widest text-muted block mb-4">
                Recurring themes
              </span>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-6">
              {THEMES_SUMMARY.map((theme, i) => {
                const Icon = theme.icon;
                return (
                <ScrollReveal key={theme.title} direction="up" delay={i * 60}>
                  <div className="rounded-xl bg-slate-50/50 px-5 py-5 md:px-6 md:py-6 transition-all duration-300 hover:bg-slate-50 hover:shadow-lg hover:-translate-y-1">
                    <Icon className="w-5 h-5 text-blue-600 mb-3" />
                    <h3 className="text-base font-semibold tracking-tight text-text mb-2">
                      {theme.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {theme.sentence}
                    </p>
                  </div>
                </ScrollReveal>
              );
              })}
            </div>
          </section>

          {/* Full testimonials */}
          <section className="py-24 md:py-32">
            <ScrollReveal direction="up">
              <span className="text-sm font-semibold uppercase tracking-widest text-muted block mb-6">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-text mb-16 max-w-3xl">
                What people say
              </h2>
            </ScrollReveal>
            <div className="flex flex-col gap-8 md:gap-12">
              {FEATURED_QUOTES_ORDERED.map((item, i) => (
                <ScrollReveal key={i} direction="up" delay={i * 60}>
                  <div className="bg-card rounded-2xl p-8 md:p-10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <Quote className="w-10 h-10 text-blue-600/40 mb-6" />
                    <blockquote className="text-base md:text-lg font-medium tracking-tight text-text leading-relaxed mb-8">
                      {item.quote.split("\n\n").map((para, pi) => (
                        <p key={pi} className={pi > 0 ? "mt-4" : ""}>
                          {pi === 0 && <>&quot;</>}{para}{pi === item.quote.split("\n\n").length - 1 && <>&quot;</>}
                        </p>
                      ))}
                    </blockquote>
                    <footer className="flex flex-col gap-1">
                      <cite className="not-italic font-semibold text-text text-sm">
                        — {item.name}
                      </cite>
                      <span className="text-xs text-muted font-medium uppercase tracking-widest">
                        {item.relationship}
                      </span>
                    </footer>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>

        </div>

          {/* Closing - From Chaos to Order style */}
          <section
            className="relative left-1/2 -translate-x-1/2 w-screen max-w-none overflow-hidden py-20 md:py-28 border-t border-white/10"
            style={{
              background:
                "radial-gradient(circle at 32% 12%, rgba(50, 95, 185, 0.22), transparent 26%), linear-gradient(90deg, #020611 0%, #031128 18%, #0a1b3c 52%, #051634 76%, #031126 100%)",
            }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[length:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            <div className="relative z-10 w-full max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 flex justify-center">
              <ScrollReveal direction="up" className="w-full flex justify-center">
                <div className="max-w-5xl mx-auto flex flex-col items-center text-center px-2">
                  <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed mb-6 text-balance">
                    Great products are built through thoughtful collaboration.
                    <br />
                    I value the trust, candor, and shared ambition that make strong teams and meaningful work possible.
                  </p>
                  <Link
                    href="/#work"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 px-10 py-4 text-base font-semibold text-white transition hover:bg-white/10 hover:border-white/60 shrink-0"
                  >
                    View Featured Work
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </section>
      </main>

      <PageFooter />
    </div>
  );
}
