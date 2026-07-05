import { motion } from "motion/react";
import { Briefcase, Calendar, GraduationCap, Trophy, Sparkles } from "lucide-react";
import { Experience, Education } from "../types";

const experiences: Experience[] = [
  {
    role: "Hackathon Winner",
    company: "SZABIST University Hackathon",
    period: "May 2025",
    description: "Lead developer of the winning team at the annual university hackathon. Built a modular, object-oriented desktop task organizer using Java and MVC architecture within a 3-hour sprint.",
    highlights: [
      "Awarded 1st place among 20+ competing engineering teams",
      "Designed weighted prioritization algorithms for task queues",
      "Drafted highly reusable class structural interfaces complying with SOLID design patterns"
    ]
  },
  {
    role: "Student Ambassador",
    company: "SZABIST University Campus",
    period: "2024 - 2025",
    description: "Selected by university administration to represent SZABIST as a campus ambassador. Spearheaded leadership initiatives, promoted campus events, and drove student technological engagement.",
    highlights: [
      "Promoted campus events, student tech workshops, and engagement initiatives on campus",
      "Served as communication liaison between corporate sponsors and computer science departments",
      "Improved fresh student engagement rates in the computer science division by 35%"
    ]
  }
];

const educationData: Education[] = [
  {
    degree: "BS Computer Science",
    school: "SZABIST University",
    period: "",
    details: "Specializing in software design patterns, database architecture, containerized computing, and intelligent systems. Active developer in campus technical societies."
  }
];

export default function Timeline() {
  return (
    <section id="experience" className="py-24 md:py-32 relative bg-[#030303] border-t border-white/[0.02] scroll-mt-24">
      {/* Background radial soft light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/[0.015] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="mb-20 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/[0.08] rounded-full mb-4 w-fit">
            <Sparkles className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.2em] text-zinc-400">CHRONICLES_OF_PROGRESS</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight text-white">
            Journey & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-400 to-cyan-400">Milestones</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative">
          
          {/* EXPERIENCE SECTION (Left / Main) */}
          <div className="md:col-span-7 flex flex-col gap-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20 text-blue-500">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-medium text-white tracking-wide">
                Experience & Contributions
              </h3>
            </div>

            {/* Vertical experience lines */}
            <div className="border-l border-zinc-800/80 ml-4 pl-8 flex flex-col gap-10 relative">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-[#030303] border border-zinc-800 flex items-center justify-center group-hover:border-blue-400 transition-colors">
                    {index === 0 ? (
                      <Trophy className="w-3.5 h-3.5 text-blue-500" />
                    ) : (
                      <Briefcase className="w-3.5 h-3.5 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                    )}
                  </div>

                  {/* Metadata Header */}
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="font-mono text-xs text-blue-400 bg-blue-400/10 px-2.5 py-0.5 rounded border border-blue-400/10">
                      {exp.period}
                    </span>
                    <span className="font-mono text-[10px] text-zinc-500 tracking-wider">
                      @{exp.company}
                    </span>
                  </div>

                  {/* Info */}
                  <h4 className="text-lg font-display text-white font-medium mb-3 group-hover:text-blue-400 transition-colors">
                    {exp.role}
                  </h4>
                  <p className="text-zinc-400 text-sm font-light leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Highlights list */}
                  <ul className="flex flex-col gap-2.5 pl-1">
                    {exp.highlights.map((highlight, hidx) => (
                      <li key={hidx} className="flex gap-2 items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60 mt-2 shrink-0" />
                        <span className="text-zinc-300 text-xs font-light leading-relaxed">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* EDUCATION SECTION (Right) */}
          <div className="md:col-span-5 flex flex-col gap-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20 text-cyan-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-medium text-white tracking-wide">
                Education
              </h3>
            </div>

            <div className="border-l border-zinc-800/80 ml-4 pl-8 flex flex-col gap-10">
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-[#030303] border border-zinc-800 flex items-center justify-center group-hover:border-cyan-400 transition-colors">
                    <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                  </div>

                  {/* Metadata Header */}
                  {edu.period && (
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="font-mono text-xs text-cyan-400 bg-cyan-400/10 px-2.5 py-0.5 rounded border border-cyan-400/10">
                        {edu.period}
                      </span>
                    </div>
                  )}

                  {/* Info */}
                  <h4 className="text-lg font-display text-white font-medium mb-2 group-hover:text-cyan-300 transition-colors">
                    {edu.degree}
                  </h4>
                  <p className="text-zinc-500 text-xs font-mono mb-4 uppercase tracking-wider">
                    {edu.school}
                  </p>
                  <p className="text-zinc-400 text-sm font-light leading-relaxed">
                    {edu.details}
                  </p>
                </motion.div>
              ))}
            </div>
            
            {/* Additional Achievements block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="luxury-glass rounded-xl p-6 mt-4 border border-white/[0.03] flex flex-col gap-3"
            >
              <h4 className="font-display text-sm font-semibold text-white uppercase tracking-wider">
                CERTIFICATIONS & SCORES
              </h4>
              <ul className="flex flex-col gap-2.5 font-mono text-[11px] text-zinc-400">
                <li className="flex justify-between">
                  <span>SZABIST HACKATHON WINNER</span>
                  <span className="text-blue-400 font-bold">1st PLACE</span>
                </li>
                <li className="flex justify-between">
                  <span>CAMPUS ENGAGEMENT INDEX</span>
                  <span className="text-emerald-400">+35% IMPACT</span>
                </li>
              </ul>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
