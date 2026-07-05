import React, { useState } from "react";
import { motion } from "motion/react";
import { Github, Code2, GitFork, Flame, Terminal, Star, Sparkles } from "lucide-react";

interface StatItem {
  label: string;
  value: string;
  icon: React.ReactNode;
  growth: string;
}

const stats: StatItem[] = [
  {
    label: "Active Repos",
    value: "7",
    icon: <GitFork className="w-4 h-4 text-cyan-400" />,
    growth: "+2 this term",
  },
  {
    label: "PRs Merged",
    value: "182",
    icon: <Flame className="w-4 h-4 text-cyan-400" />,
    growth: "99% merge rate",
  },
  {
    label: "Stars Earned",
    value: "86",
    icon: <Star className="w-4 h-4 text-blue-400" />,
    growth: "Top 10% scholar",
  },
];

// Generate a highly realistic array representing exactly 32 contributions distributed as shown in the screenshot
const gridCells = Array.from({ length: 371 }, () => 0);

// Aug Friday (week 6, Friday row 5 -> idx = 6 * 7 + 5 = 47)
gridCells[47] = 1;

// Feb Wednesday (week 32, wednesday row 3 -> idx = 32 * 7 + 3 = 227)
gridCells[227] = 2;
// Feb Tuesday (week 32, Tuesday row 2 -> idx = 32 * 7 + 2 = 226)
gridCells[226] = 1;

// Feb Monday (week 34, Monday row 1 -> idx = 34 * 7 + 1 = 239)
gridCells[239] = 4;

// Mar Monday (week 36, Monday row 1 -> idx = 36 * 7 + 1 = 253)
gridCells[253] = 4;

// May Monday (week 43, Monday row 1 -> idx = 43 * 7 + 1 = 302)
gridCells[302] = 4;

// May Wednesday (week 44, Wednesday row 3 -> idx = 44 * 7 + 3 = 311)
gridCells[311] = 2;

// May Friday (week 45, Friday row 5 -> idx = 45 * 7 + 5 = 320)
gridCells[320] = 2;

// May Thursday (week 46, Thursday row 4 -> idx = 46 * 7 + 4 = 326)
gridCells[326] = 2;

// Jun Monday (week 50, Monday row 1 -> idx = 50 * 7 + 1 = 351)
gridCells[351] = 4;

// Jun Wednesday (week 51, Wednesday row 3 -> idx = 51 * 7 + 3 = 360)
gridCells[360] = 2;

// Deterministic commit counts mapping exactly to 32 total contributions in the last year
const getCommitCount = (idx: number, val: number) => {
  if (val === 0) return 0;
  switch (idx) {
    case 47: return 1; // Aug Fri
    case 226: return 1; // Feb Tue
    case 227: return 2; // Feb Wed
    case 239: return 4; // Feb Mon
    case 253: return 5; // Mar Mon
    case 302: return 6; // May Mon
    case 311: return 2; // May Wed
    case 320: return 3; // May Fri
    case 326: return 2; // May Thu
    case 351: return 4; // Jun Mon
    case 360: return 2; // Jun Wed
    default: return val;
  }
};

const monthLabels = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"];

export default function GithubStats() {
  const [hoveredCell, setHoveredCell] = useState<{ idx: number; commits: number } | null>(null);

  const getCellColor = (intensity: number) => {
    switch (intensity) {
      case 0:
        return "bg-[#161b22] border-[#21262d]/15 hover:bg-[#30363d]";
      case 1:
        return "bg-[#0e4429] border-[#0e4429]/30 hover:bg-[#115e36]";
      case 2:
        return "bg-[#006d32] border-[#006d32]/30 hover:bg-[#008f42]";
      case 3:
        return "bg-[#26a641] border-[#26a641]/30 hover:bg-[#2fc24c]";
      case 4:
        return "bg-[#39d353] border-[#39d353]/30 hover:bg-[#4df269]";
      default:
        return "bg-[#161b22]";
    }
  };

  return (
    <section id="github-stats" className="py-24 md:py-32 relative bg-[#030303]/95 border-t border-white/[0.02] scroll-mt-24">
      {/* Absolute visual detail - grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#09090b_1px,transparent_1px),linear-gradient(to_bottom,#09090b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="mb-20 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/[0.08] rounded-full mb-4">
            <Terminal className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.2em] text-zinc-400">TELEMETRY_ENGINE_STREAM</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight text-white">
            Contribution <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-400 to-cyan-400">Analytics</span>
          </h2>
          <p className="max-w-md text-zinc-400 text-sm mt-4 font-light">
            Real-time compiled development telemetry tracking repository updates, codebase integrations, and deployment milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Main Contribution Heatmap Panel (Spans 2 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-2 luxury-glass rounded-2xl p-6 md:p-8 flex flex-col justify-between"
          >
            <div>
              {/* GitHub Header info */}
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/[0.03]">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/10 rounded-xl border border-blue-500/20 text-blue-400">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-white tracking-wide">
                      @Sandesh-mak on GitHub
                    </h3>
                    <p className="text-[10px] font-mono text-zinc-500">
                      OFFICIAL PUBLIC DEVELOPMENT STREAM
                    </p>
                  </div>
                </div>

                <a
                  href="https://github.com/Sandesh-mak"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-1.5 bg-zinc-900 hover:bg-blue-500 hover:text-zinc-950 border border-white/[0.05] hover:border-blue-400 text-xs font-semibold rounded-lg transition-all duration-300 hover-trigger"
                  data-cursor-text="LINK"
                >
                  VIEW PROFILE
                </a>
              </div>

              {/* GitHub contribution analytics style header */}
              <div className="flex justify-between items-center mb-4 select-none">
                <span className="text-sm md:text-base text-zinc-200 font-sans tracking-tight">
                  32 contributions in the last year
                </span>
                <div className="flex items-center gap-1.5 text-[11px] text-zinc-400 cursor-pointer hover:text-zinc-200 transition-colors">
                  <span>Contribution settings</span>
                  <span className="text-[8px] opacity-80">▼</span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                
                {/* Main Calendar column */}
                <div className="flex-1 w-full overflow-hidden">
                  {/* Month Labels */}
                  <div className="flex justify-between font-mono text-[10px] text-zinc-500 mb-2 pl-9 pr-2 select-none">
                    {monthLabels.map((lbl) => (
                      <span key={lbl}>{lbl}</span>
                    ))}
                  </div>

                  {/* Day labels + Grid layout */}
                  <div className="flex gap-2.5 items-start">
                    {/* Weekday labels */}
                    <div className="grid grid-rows-7 gap-[3px] text-[10px] font-mono text-zinc-500 select-none pr-1 pt-[3px]">
                      <div className="h-[9px]"></div> {/* Sun */}
                      <div className="h-[9px] flex items-center">Mon</div>
                      <div className="h-[9px]"></div> {/* Tue */}
                      <div className="h-[9px] flex items-center">Wed</div>
                      <div className="h-[9px]"></div> {/* Thu */}
                      <div className="h-[9px] flex items-center">Fri</div>
                      <div className="h-[9px]"></div> {/* Sat */}
                    </div>

                    {/* Heatmap Area */}
                    <div className="relative flex-1 p-3 bg-black/45 rounded-xl border border-white/[0.03] overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-800">
                      <div className="grid grid-flow-col grid-rows-7 gap-[3px] min-w-[620px]">
                        {gridCells.map((val, idx) => {
                          const commitCount = getCommitCount(idx, val);
                          return (
                            <div
                              key={idx}
                              onMouseEnter={() => setHoveredCell({ idx, commits: commitCount })}
                              onMouseLeave={() => setHoveredCell(null)}
                              className={`aspect-square w-[9px] h-[9px] rounded-sm border transition-all duration-150 cursor-pointer ${getCellColor(
                                val
                              )}`}
                            />
                          );
                        })}
                      </div>

                      {/* Floating Micro Tooltip */}
                      {hoveredCell && hoveredCell.commits > 0 && (
                        <div className="absolute top-2 right-2 bg-[#09090b] border border-white/[0.08] rounded px-3 py-1 text-[10px] font-mono text-[#39d353] shadow-xl z-20">
                          <span>{hoveredCell.commits} commits on daily node {hoveredCell.idx}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Heatmap Footer / Legend */}
                  <div className="flex justify-between items-center mt-3 pt-3 font-mono text-[10px] text-zinc-500 select-none">
                    <a
                      href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/managing-contribution-settings-on-your-profile"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-blue-400 hover:underline transition-colors"
                    >
                      Learn how we count contributions
                    </a>
                    <div className="flex items-center gap-1.5">
                      <span>Less</span>
                      <div className="w-2.5 h-2.5 bg-[#161b22] rounded-sm border border-[#21262d]/15" />
                      <div className="w-2.5 h-2.5 bg-[#0e4429] rounded-sm border border-[#0e4429]/30" />
                      <div className="w-2.5 h-2.5 bg-[#006d32] rounded-sm border border-[#006d32]/30" />
                      <div className="w-2.5 h-2.5 bg-[#26a641] rounded-sm border border-[#26a641]/30" />
                      <div className="w-2.5 h-2.5 bg-[#39d353] rounded-sm border border-[#39d353]/30" />
                      <span>More</span>
                    </div>
                  </div>
                </div>

                {/* Years Selector Column */}
                <div className="flex flex-row md:flex-col gap-1 w-full md:w-auto pt-5 md:pt-1 border-t md:border-t-0 md:border-l border-white/[0.03] md:pl-5 select-none">
                  <button className="flex-1 md:flex-none text-center md:text-left px-3 py-1.5 bg-[#2563eb] text-white font-medium text-xs rounded-lg transition-all shadow-[0_0_12px_rgba(37,99,235,0.2)]">
                    2026
                  </button>
                  <button className="flex-1 md:flex-none text-center md:text-left px-3 py-1.5 text-zinc-500 hover:text-zinc-200 hover:bg-white/[0.02] text-xs rounded-lg transition-colors">
                    2025
                  </button>
                </div>

              </div>

            </div>
          </motion.div>

          {/* Vertical Counters Panel */}
          <div className="flex flex-col gap-6 justify-between">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="luxury-glass rounded-2xl p-5 flex items-center justify-between group relative overflow-hidden h-full"
              >
                {/* Micro accent */}
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/20 group-hover:bg-cyan-400 transition-colors" />

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-zinc-900 rounded-xl border border-white/[0.05] group-hover:border-blue-500/30 transition-colors">
                    {stat.icon}
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                      {stat.label}
                    </span>
                    <span className="text-2xl font-mono font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {stat.value}
                    </span>
                  </div>
                </div>

                <div className="font-mono text-[9px] text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/10">
                  {stat.growth}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
