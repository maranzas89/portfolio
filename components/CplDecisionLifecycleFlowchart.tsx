import React from "react";
import {
  PencilLine,
  Send,
  Search,
  Eye,
  Rocket,
  Users,
  Landmark,
  FileSpreadsheet,
} from "lucide-react";
import styles from "./CplDecisionLifecycleFlowchart.module.css";

const CARDS = [
  { id: 1, label: "1. Students apply", icon: PencilLine, bg: "green", arrow: "arrowRight" },
  { id: 2, label: "2. Students Submit for CPL", icon: Send, bg: "green", arrow: "arrowRight" },
  { id: 3, label: "3. Staff In Review", icon: Search, bg: "yellow", arrow: "arrowRight" },
  { id: 5, label: "4. Staff Manager Visible", icon: Eye, bg: "orange", arrow: "arrowDown" },
  {
    id: 9,
    label: "8. New Learning Program Launch at Calbright",
    icon: Rocket,
    bg: "yellow",
    arrow: "arrowUp",
  },
  {
    id: 8,
    label: <>7. Board Review and Push New<br />Learning Program</>,
    icon: Users,
    bg: "pink",
    arrow: "arrowLeft",
  },
  { id: 7, label: "6. Submit to CA Education Board of Trustees", icon: Landmark, bg: "orange", arrow: "arrowLeft" },
  {
    id: 6,
    label: <>5. Staff Manager Export CSV &<br />Generate Report</>,
    icon: FileSpreadsheet,
    bg: "orange",
    arrow: "arrowLeft",
  },
] as const;

const BG_MAP = {
  green: "bg-[#e6f4ea]",
  yellow: "bg-[#fef5d9]",
  orange: "bg-[#fde2b4]",
  pink: "bg-[#fadce4]",
} as const;

export default function CplDecisionLifecycleFlowchart() {
  return (
    <div className="overflow-x-auto max-w-full py-10 pl-0">
      <div
        className="grid grid-cols-1 gap-4 py-4 md:grid-cols-[repeat(4,260px)] md:grid-rows-[repeat(2,110px)] md:gap-[60px] md:py-0 max-w-full md:max-w-max w-full md:w-auto"
      >
        {CARDS.map((card, idx) => {
          const Icon = card.icon;
          const bgCls = BG_MAP[card.bg];
          const arrowCls = styles[card.arrow] as string;
          const mobileOrderCls = ["max-md:order-first", "max-md:order-1", "max-md:order-2", "max-md:order-3", "max-md:order-last", "max-md:order-6", "max-md:order-5", "max-md:order-4"][idx];
          return (
            <div
              key={card.id}
              className={`${styles.box} max-md:before:hidden max-md:after:hidden ${mobileOrderCls} ${arrowCls} flex flex-col gap-2 items-center justify-center text-center
                px-5 py-4 text-[15px] font-medium text-slate-500
                rounded-xl transition-transform duration-200 hover:-translate-y-0.5
                ${bgCls}`}
            >
              <Icon className="w-7 h-7 text-slate-500 shrink-0" />
              <span className="leading-snug">{card.label}</span>
            </div>
          );
        })}
        {/* Mobile-only duplicate of card 1, placed below card 8 */}
        <div
          key="1-dup"
          className={`md:hidden ${styles.box} max-md:before:hidden max-md:after:hidden max-md:order-[10000] ${styles.arrowRight} flex flex-col gap-2 items-center justify-center text-center
            px-5 py-4 text-[15px] font-medium text-slate-500
            rounded-xl transition-transform duration-200 hover:-translate-y-0.5
            bg-[#e6f4ea]`}
        >
          <PencilLine className="w-7 h-7 text-slate-500 shrink-0" />
          <span className="leading-snug">1. Students apply</span>
        </div>
      </div>
    </div>
  );
}
