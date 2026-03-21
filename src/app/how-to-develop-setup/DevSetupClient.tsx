"use client";

import { cn } from "@/utils";
import MseLink from "@/components/Ui/MseLink/MseLink";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  UserPlus,
  Flame,
  Globe,
  Copy,
  Shield,
  Database,
  HardDrive,
  GitFork,
  FileCode,
  Play,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/hooks/useLanguage";
import { khitHaungg } from "@/fonts/fonts";

/* ── Prism accent colors ── */
const prismColors = ["#22d3ee", "#a78bfa", "#fb7185", "#fbbf24"] as const;
const colorAt = (i: number) => prismColors[i % prismColors.length];

/* ── Step type ── */
type StepData = {
  title: string;
  description: string;
  icon: LucideIcon;
  terminal: {
    label: string;
    lines: { prompt?: boolean; text: string; accent?: string }[];
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getSteps = (t: any): StepData[] => [
  {
    title: t("step1Title"),
    description: t("step1Desc"),
    icon: UserPlus,
    terminal: {
      label: "accounts.google.com",
      lines: [
        { text: t("step1Line1"), accent: "#22d3ee" },
        { text: t("step1Line2") },
        { text: t("step1Line3") },
        { text: t("step1Line4"), accent: "#4ade80" },
      ],
    },
  },
  {
    title: t("step2Title"),
    description: t("step2Desc"),
    icon: Flame,
    terminal: {
      label: "console.firebase.google.com",
      lines: [
        { text: t("step2Line1"), accent: "#22d3ee" },
        { text: t("step2Line2") },
        { text: t("step2Line3") },
        { text: t("step2Line4") },
        { text: t("step2Line5"), accent: "#fbbf24" },
      ],
    },
  },
  {
    title: t("step3Title"),
    description: t("step3Desc"),
    icon: Globe,
    terminal: {
      label: "firebase-console",
      lines: [
        { text: t("step3Line1"), accent: "#a78bfa" },
        { text: t("step3Line2") },
        { text: t("step3Line3") },
        { text: t("step3Line4"), accent: "#4ade80" },
      ],
    },
  },
  {
    title: t("step4Title"),
    description: t("step4Desc"),
    icon: Copy,
    terminal: {
      label: "firebaseConfig",
      lines: [
        { text: t("step4Line1"), accent: "#fb7185" },
        { text: t("step4Line2") },
        { text: t("step4Line3") },
        { text: t("step4Line4") },
        { text: t("step4Line5") },
        { text: t("step4Line6") },
        { text: "" },
        { text: t("step4Tip"), accent: "#fbbf24" },
      ],
    },
  },
  {
    title: t("step5Title"),
    description: t("step5Desc"),
    icon: Shield,
    terminal: {
      label: "authentication",
      lines: [
        { text: t("step5Line1"), accent: "#22d3ee" },
        { text: t("step5Line2") },
        { text: t("step5Line3"), accent: "#4ade80" },
        { text: t("step5Line4") },
      ],
    },
  },
  {
    title: t("step6Title"),
    description: t("step6Desc"),
    icon: Database,
    terminal: {
      label: "firestore",
      lines: [
        { text: t("step6Line1"), accent: "#a78bfa" },
        { text: t("step6Line2") },
        { text: t("step6Line3"), accent: "#fbbf24" },
        { text: t("step6Line4") },
        { text: t("step6Line5"), accent: "#4ade80" },
      ],
    },
  },
  {
    title: t("step7Title"),
    description: t("step7Desc"),
    icon: HardDrive,
    terminal: {
      label: "storage",
      lines: [
        { text: t("step7Line1"), accent: "#fb7185" },
        { text: t("step7Line2") },
        { text: t("step7Line3") },
        { text: t("step7Line4"), accent: "#4ade80" },
      ],
    },
  },
  {
    title: t("step8Title"),
    description: t("step8Desc"),
    icon: GitFork,
    terminal: {
      label: "terminal",
      lines: [
        { prompt: true, text: "git clone https://github.com/myanmar-software-engineers/myanmar-software-engineers.github.io.git", accent: "#22d3ee" },
        { prompt: true, text: "cd myanmar-software-engineers.github.io" },
        { prompt: true, text: "bun install", accent: "#a78bfa" },
      ],
    },
  },
  {
    title: t("step9Title"),
    description: t("step9Desc"),
    icon: FileCode,
    terminal: {
      label: ".env.local",
      lines: [
        { prompt: true, text: t("step9Line1"), accent: "#22d3ee" },
        { text: t("step9Line2") },
        { text: "" },
        { text: t("step9Line3"), accent: "#fb7185" },
        { text: t("step9Line4") },
        { text: t("step9Line5") },
        { text: t("step9Line6") },
        { text: t("step9Line7") },
        { text: t("step9Line8") },
        { text: t("step9Line9") },
      ],
    },
  },
  {
    title: t("step10Title"),
    description: t("step10Desc"),
    icon: Play,
    terminal: {
      label: "terminal",
      lines: [
        { prompt: true, text: "bun dev", accent: "#4ade80" },
        { text: "" },
        { text: "▲ Next.js 16.1.6" },
        { text: "- Local: http://localhost:3000", accent: "#22d3ee" },
        { text: "" },
        { text: "✓ Ready!", accent: "#4ade80" },
      ],
    },
  },
];

/* ── Hero Section ── */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function HeroSection({ mmFont, isMyanmar, t }: { mmFont: string; isMyanmar: boolean; t: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative text-center pt-12 pb-16 px-4 overflow-visible">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-radial from-cyan-500/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <motion.div
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.03] mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <Flame className="w-3.5 h-3.5 text-orange-400" />
        <span className={cn("text-xs text-zinc-400 tracking-wide", mmFont)}>{t("label")}</span>
      </motion.div>

      <motion.h1
        className={cn(
          "text-4xl md:text-5xl font-bold tracking-tight mb-4",
          isMyanmar
            ? "text-cyan-300 leading-[1.6] py-2"
            : "bg-gradient-to-r from-cyan-300 via-violet-400 to-rose-400 bg-clip-text text-transparent leading-[1.15]",
          mmFont
        )}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {t("title")}
      </motion.h1>

      <motion.p
        className={cn("text-sm md:text-base text-zinc-400 max-w-xl mx-auto", mmFont)}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t("subtitle", { count: 10 })}
      </motion.p>

      {/* Prismatic divider */}
      <motion.div
        className="mt-10 mx-auto h-px max-w-xs"
        style={{ background: "linear-gradient(90deg, transparent, #22d3ee, #a78bfa, #fb7185, transparent)" }}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
    </section>
  );
}

/* ── Terminal Block ── */
function TerminalBlock({ label, lines }: { label: string; lines: StepData["terminal"]["lines"] }) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/[0.06] bg-black/40 backdrop-blur-sm">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06] bg-white/[0.02]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <span className="text-[10px] text-zinc-600 font-mono ml-1">{label}</span>
      </div>
      {/* Lines */}
      <div className="px-4 py-3 space-y-1 font-mono text-xs leading-relaxed">
        {lines.map((line, i) => (
          <div key={i} className="flex gap-2">
            {line.prompt && <span className="text-emerald-500 select-none">$</span>}
            <span style={line.accent ? { color: line.accent } : undefined} className={line.accent ? "" : "text-zinc-500"}>
              {line.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Step Card (matches HowToPageClient timeline pattern) ── */
function StepCard({ step, index, isLast, mmFont }: { step: StepData; index: number; isLast: boolean; mmFont: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3, once: true });
  const color = colorAt(index);
  const Icon = step.icon;
  const stepNum = index + 1;

  return (
    <div ref={ref} className="relative flex gap-5 md:gap-8">
      {/* Left column: step number + connecting line */}
      <div className="flex flex-col items-center shrink-0">
        {/* Step number circle */}
        <motion.div
          className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full z-10"
          style={{
            background: `linear-gradient(135deg, ${color}18, ${color}08)`,
            border: `2px solid ${color}40`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
        >
          <span className="font-display font-bold text-sm md:text-base" style={{ color }}>
            {stepNum}
          </span>

          {/* Pulse ring on appear */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ border: `1px solid ${color}` }}
            initial={{ scale: 1, opacity: 0.5 }}
            animate={inView ? { scale: 1.6, opacity: 0 } : { scale: 1, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Connecting line */}
        {!isLast && (
          <motion.div
            className="w-[2px] flex-1 min-h-[40px] origin-top"
            style={{ background: `linear-gradient(180deg, ${color}40, ${color}10)` }}
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
      </div>

      {/* Right column: card content */}
      <motion.div
        className="flex-1 pb-10 md:pb-14"
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 20, filter: "blur(4px)" }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Icon + Title row */}
        <div className="flex items-center gap-3 mb-2">
          <motion.div
            className="flex items-center justify-center w-8 h-8 rounded-lg"
            style={{
              background: `linear-gradient(135deg, ${color}12, ${color}06)`,
              border: `1px solid ${color}18`,
            }}
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Icon className="w-4 h-4" style={{ color }} />
          </motion.div>
          <h3 className={cn("font-display font-bold text-lg md:text-xl text-zinc-100", mmFont)}>
            {step.title}
          </h3>
        </div>

        {/* Description */}
        <p className={cn("font-body text-sm text-zinc-500 leading-relaxed mb-4 max-w-lg", mmFont)}>
          {step.description}
        </p>

        {/* Terminal */}
        <TerminalBlock label={step.terminal.label} lines={step.terminal.lines} />
      </motion.div>
    </div>
  );
}

/* ── Final CTA Section (matches HowToPageClient) ── */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CtaSection({ stepCount, mmFont, t }: { stepCount: number; mmFont: string; t: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3, once: true });

  return (
    <div ref={ref} className="relative py-12 md:py-20">
      {/* Divider */}
      <motion.div
        className="h-[1px] mb-12 md:mb-16"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #22d3ee20 20%, #a78bfa30 50%, #fb718520 80%, transparent 100%)",
        }}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* CTA card */}
      <motion.div
        className={cn(
          "relative overflow-hidden rounded-2xl",
          "bg-surface/60 backdrop-blur-sm",
          "border border-white/[0.06]"
        )}
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.97 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Top prismatic accent line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[1px]"
          style={{
            background: "linear-gradient(90deg, transparent, #22d3ee, #a78bfa, #fb7185, transparent)",
          }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        />

        {/* Corner radial accents */}
        <div
          className="absolute -top-20 -left-20 w-60 h-60 pointer-events-none opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #22d3ee, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-20 -right-20 w-60 h-60 pointer-events-none opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #a78bfa, transparent 70%)" }}
        />

        <div className="relative z-10 px-6 py-10 md:px-12 md:py-14">
          {/* Completion terminal */}
          <motion.div
            className={cn(
              "mx-auto max-w-md mb-8 rounded-xl overflow-hidden",
              "bg-black/40 border border-white/[0.04]"
            )}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2 px-4 py-2 border-b border-white/[0.04]">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/60" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                <div className="w-2 h-2 rounded-full bg-green-500/60" />
              </div>
              <span className="font-mono text-[10px] text-zinc-600 ml-1">
                {t("ctaComplete")}
              </span>
            </div>
            <div className="px-4 py-3 flex items-center gap-2">
              <motion.span
                className="text-cyan-400"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.6 }}
              >
                <CheckCircle2 className="w-4 h-4" />
              </motion.span>
              <span className={cn("font-mono text-xs text-zinc-400", mmFont)}>
                {stepCount}/{stepCount} steps complete —
              </span>
              <span className={cn("font-mono text-xs bg-gradient-to-r from-cyan-300 via-violet-400 to-rose-400 bg-clip-text text-transparent font-semibold", mmFont)}>
                Firebase ready!
              </span>
            </div>
          </motion.div>

          {/* Title + subtitle */}
          <div className="text-center mb-8">
            <motion.h2
              className="font-display font-bold text-3xl md:text-4xl mb-3"
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className={cn("text-zinc-100", mmFont)}>{t("ctaComplete")}</span>
            </motion.h2>
            <motion.p
              className={cn("font-body text-sm text-zinc-500 max-w-sm mx-auto leading-relaxed", mmFont)}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
            >
              {t("ctaDesc")}
            </motion.p>
          </div>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
          >
            {/* Primary CTA */}
            <MseLink
              href="/how-to"
              className={cn(
                "group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full",
                "font-display text-sm font-semibold text-white",
                "transition-all duration-300",
                "hover:-translate-y-0.5",
                "hover:shadow-[0_12px_40px_-10px_rgba(167,139,250,0.35)]"
              )}
            >
              {/* Gradient background */}
              <span
                className="absolute inset-0 rounded-full"
                style={{
                  background: "linear-gradient(135deg, rgba(34,211,238,0.15), rgba(167,139,250,0.2), rgba(251,113,133,0.15))",
                }}
              />
              {/* Border ring */}
              <span
                className="absolute inset-0 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  padding: "1px",
                  background: "linear-gradient(135deg, #22d3ee60, #a78bfa60, #fb718560)",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />
              <span className="relative z-10 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className={mmFont}>{t("ctaViewGuide")}</span>
                <motion.span
                  className="inline-flex"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                </motion.span>
              </span>
            </MseLink>

            {/* Secondary CTA */}
            <MseLink
              href="/"
              className={cn(
                "group inline-flex items-center gap-2 px-7 py-3.5 rounded-full",
                "font-display text-sm font-semibold",
                "text-zinc-400 hover:text-zinc-200",
                "bg-white/[0.02] border border-white/[0.08]",
                "hover:border-white/[0.15] hover:bg-white/[0.04]",
                "hover:-translate-y-0.5",
                "transition-all duration-300"
              )}
            >
              <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              <span className={mmFont}>{t("ctaOpenApp")}</span>
            </MseLink>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

/* ── Main Page ── */
export default function DevSetupClient() {
  const t = useTranslations("devSetup");
  const { isMyanmar } = useLanguage();
  const mmFont = isMyanmar ? khitHaungg.className : "";
  const steps = getSteps(t);

  return (
    <div className="max-w-4xl mx-auto px-4 pb-20">
      <HeroSection mmFont={mmFont} isMyanmar={isMyanmar} t={t} />

      {/* Steps timeline */}
      <div className="relative">
        {steps.map((step, i) => (
          <StepCard key={i} step={step} index={i} isLast={i === steps.length - 1} mmFont={mmFont} />
        ))}
      </div>

      <CtaSection stepCount={steps.length} mmFont={mmFont} t={t} />
    </div>
  );
}
