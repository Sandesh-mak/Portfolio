import React from "react";
import { motion } from "motion/react";
import { Terminal, Layout, Server, Brain, Cloud, Database, Cpu, Wrench } from "lucide-react";

interface SkillItem {
  name: string;
  level: "Advanced" | "Intermediate" | "Fluent";
}

interface SkillGroup {
  category: string;
  icon: React.ReactNode;
  skills: SkillItem[];
  color: string;
}

const skillsData: SkillGroup[] = [
  {
    category: "Languages",
    icon: <Terminal className="w-5 h-5" />,
    color: "from-blue-400 to-indigo-600",
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "Java", level: "Advanced" },
      { name: "C++", level: "Intermediate" },
      { name: "SQL", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
    ],
  },
  {
    category: "Frontend Dev",
    icon: <Layout className="w-5 h-5" />,
    color: "from-cyan-400 to-blue-500",
    skills: [
      { name: "React", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "HTML5", level: "Advanced" },
      { name: "CSS3", level: "Advanced" },
    ],
  },
  {
    category: "Backend Services",
    icon: <Server className="w-5 h-5" />,
    color: "from-blue-500 to-indigo-500",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express", level: "Advanced" },
      { name: "RESTful APIs", level: "Advanced" },
    ],
  },
  {
    category: "AI & Machine Learning",
    icon: <Brain className="w-5 h-5" />,
    color: "from-indigo-400 to-purple-600",
    skills: [
      { name: "Machine Learning", level: "Advanced" },
      { name: "Google AI Studio", level: "Advanced" },
      { name: "Random Forest Models", level: "Intermediate" },
      { name: "Feature Engineering", level: "Intermediate" },
    ],
  },
  {
    category: "Cloud Systems",
    icon: <Cloud className="w-5 h-5" />,
    color: "from-cyan-400 to-indigo-500",
    skills: [
      { name: "Google Cloud Run", level: "Advanced" },
      { name: "Docker Containers", level: "Intermediate" },
      { name: "GCP Ecosystem", level: "Intermediate" },
    ],
  },
  {
    category: "Databases & Tools",
    icon: <Database className="w-5 h-5" />,
    color: "from-cyan-400 to-blue-500",
    skills: [
      { name: "MySQL", level: "Advanced" },
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Figma", level: "Intermediate" },
      { name: "Tableau", level: "Intermediate" },
      { name: "Excel & Analytics", level: "Advanced" },
    ],
  },
];

export default function SkillsGrid() {
  return (
    <section id="skills" className="py-24 md:py-32 relative bg-[#030303]/90 border-t border-white/[0.02] scroll-mt-24">
      {/* Dynamic Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c0c0e_1px,transparent_1px),linear-gradient(to_bottom,#0c0c0e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/[0.08] rounded-full mb-4">
            <Cpu className="w-3.5 h-3.5 text-blue-500 animate-spin" />
            <span className="text-[10px] font-mono tracking-[0.2em] text-zinc-400">ENGINEERING_ARMORY</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight text-white">
            Skill <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-400 to-cyan-400">Inventory</span> & Capabilities
          </h2>
          <p className="max-w-xl text-zinc-400 text-sm mt-4 leading-relaxed font-light">
            An overview of structural languages, interface engineering platforms, artificial intelligence pipelines, and devops infrastructure.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: groupIdx * 0.08 }}
              className="luxury-glass rounded-2xl p-6 md:p-8 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle hover backlight overlay */}
              <div className="absolute -inset-px bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.03]">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-zinc-900 rounded-xl text-blue-400 group-hover:text-cyan-300 transition-colors border border-white/[0.05]">
                      {group.icon}
                    </div>
                    <h3 className="font-display font-medium text-white tracking-wide">
                      {group.category}
                    </h3>
                  </div>
                  <span className="font-mono text-[9px] text-zinc-500 tracking-widest uppercase">
                    C_0{groupIdx + 1}
                  </span>
                </div>

                {/* Skills List */}
                <div className="flex flex-col gap-5">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col gap-1.5">
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-300 text-sm font-medium group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span className="font-mono text-[9px] text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/10 uppercase tracking-widest">
                          {skill.level}
                        </span>
                      </div>
                      
                      {/* Premium Miniature Bar Meter */}
                      <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{
                            width: skill.level === "Advanced" ? "90%" : skill.level === "Fluent" ? "80%" : "70%",
                          }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className={`h-full bg-gradient-to-r ${group.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Graphic Accent */}
              <div className="mt-8 flex justify-between items-center font-mono text-[8px] text-zinc-600">
                <span>VERIFIED_CAPABILITY</span>
                <span>SYSTEM_OK</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Floating Tools Pill Area */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-3 max-w-4xl mx-auto px-4">
          <div className="text-xs font-mono text-zinc-500 tracking-widest mr-2 uppercase">
            COMPLEMENTARY_ENV:
          </div>
          {["VS Code", "GitHub", "Git", "Figma", "Tableau", "Excel", "Docker"].map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 bg-white/[0.02] border border-white/[0.05] rounded-full text-zinc-300 font-mono text-xs hover:border-blue-400/40 hover:text-blue-300 hover:bg-blue-400/5 transition-all duration-300"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
