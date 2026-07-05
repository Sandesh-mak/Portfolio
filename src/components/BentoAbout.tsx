import { motion } from "motion/react";
import { GraduationCap, Award, BrainCircuit, Cloud, MapPin, Sparkles } from "lucide-react";

export default function BentoAbout() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-[#030303] scroll-mt-24">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-blue-500/[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-500/[0.03] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="mb-16 md:mb-24 flex flex-col items-start">
          <div className="flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/[0.08] rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.2em] text-zinc-400">ABOUT_ME_MANIFESTO</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-light tracking-tight text-white">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-400 to-cyan-400">Beautiful Intelligence</span>
          </h2>
          <p className="font-mono text-[11px] tracking-widest text-zinc-500 mt-4 uppercase">
            [ ESTABLISHED AT SZABIST UNIVERSITY ]
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Main Biography (2 cols span on md/lg) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 lg:col-span-2 luxury-glass luxury-glass-hover rounded-2xl p-6 md:p-8 lg:p-10 flex flex-col justify-between relative group"
          >
            {/* Corner Decorative Accent */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-tr-2xl" />
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-blue-500/10 rounded-xl border border-blue-500/20 text-blue-400">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <span className="text-[10px] md:text-xs font-mono font-bold tracking-wider text-zinc-300 uppercase">
                   CORE_FOCUS
                </span>
              </div>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed mb-6">
                "I am deeply passionate about bridging the gap between advanced artificial intelligence and pristine software architecture. My craft is dedicated to constructing elegant digital products that operate at high scale while feeling extraordinarily natural to interact with."
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                As a Computer Science scholar and software engineer, I seek out the hardest technical problems in cloud orchestration, machine learning models, and client interface designs. I believe true engineering craftsmanship is a blend of mathematical precision and aesthetic excellence.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-10 border-t border-white/[0.04] pt-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400/80" />
                <span className="text-xs font-mono text-zinc-400">Larkana, Sindh, Pakistan</span>
              </div>
              <div className="w-1.5 h-1.5 bg-zinc-800 rounded-full" />
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                <span className="text-xs font-mono text-zinc-400">Available for Global & Local Roles</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Education & CGPA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-1 lg:col-span-1 luxury-glass luxury-glass-hover rounded-2xl p-6 md:p-8 flex flex-col justify-between relative group"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-[10px] md:text-xs font-mono font-bold tracking-wider text-zinc-300 uppercase truncate">
                  ACADEMIC_FOUNDATION
                </span>
              </div>

              <h3 className="text-xl font-display font-medium text-white tracking-tight mb-2">
                BS Computer Science
              </h3>
              <p className="text-zinc-400 text-sm mb-4">
                SZABIST University
              </p>

              <p className="text-zinc-500 text-xs font-mono leading-relaxed">
                Focused heavily on Object-Oriented Programming (OOP), Data Structures, Algorithms, Cloud Computing, and Machine Learning applications.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.04]">
              <span className="text-[10px] tracking-wider font-mono text-zinc-500">
                CLASS_OF_2026
              </span>
            </div>
          </motion.div>

          {/* Card 3: Cloud & Deployment Bento */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1 lg:col-span-1 luxury-glass luxury-glass-hover rounded-2xl p-6 md:p-8 flex flex-col justify-between relative group"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-blue-500/10 rounded-xl border border-blue-500/20 text-blue-400">
                  <Cloud className="w-5 h-5" />
                </div>
                <span className="text-[10px] md:text-xs font-mono font-bold tracking-wider text-zinc-300 uppercase truncate">
                  CLOUD_INFRASTRUCTURE
                </span>
              </div>

              <h3 className="text-lg font-display text-white tracking-tight mb-3">
                Serverless Deployments
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Experienced in packaging custom microservices using container systems and scaling them on serverless runtimes.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              <span className="text-[10px] font-mono px-2.5 py-1 bg-white/[0.03] border border-white/[0.05] rounded text-zinc-300">
                GCP CLOUD RUN
              </span>
              <span className="text-[10px] font-mono px-2.5 py-1 bg-white/[0.03] border border-white/[0.05] rounded text-zinc-300">
                CONTAINERS
              </span>
              <span className="text-[10px] font-mono px-2.5 py-1 bg-white/[0.03] border border-white/[0.05] rounded text-zinc-300">
                DOCKER
              </span>
            </div>
          </motion.div>

          {/* Card 4: Philosophy / Achievements (2 cols span on md/lg) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="md:col-span-2 lg:col-span-2 luxury-glass luxury-glass-hover rounded-2xl p-6 md:p-8 lg:p-10 flex flex-col justify-between relative group"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-blue-500/10 rounded-xl border border-blue-500/20 text-blue-400">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-[10px] md:text-xs font-mono font-bold tracking-wider text-zinc-300 uppercase">
                  HACKATHON_HONORS
                </span>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <h3 className="text-xl font-display font-medium text-white">
                  1st Place Winner — SZABIST Tech Hackathon
                </h3>
                <span className="font-mono text-xs text-blue-400 font-bold bg-blue-400/10 px-3 py-1 rounded border border-blue-400/20 self-start md:self-auto">
                  CHAMPION
                </span>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Engineered a comprehensive Object-Oriented Desktop Task Management System in Java during the intense competitive hackathon. Celebrated by faculty for code modularity, design pattern compliance, and team-collaboration capabilities.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border-t border-white/[0.04] pt-6">
              <div>
                <span className="block text-[10px] font-mono text-zinc-500 uppercase">ROLE</span>
                <span className="text-xs text-zinc-300 font-medium">Lead Developer</span>
              </div>
              <div>
                <span className="block text-[10px] font-mono text-zinc-500 uppercase">DURATION</span>
                <span className="text-xs text-zinc-300 font-medium">3 Hours Sprint</span>
              </div>
              <div className="col-span-2 md:col-span-1">
                <span className="block text-[10px] font-mono text-zinc-500 uppercase">METRICS</span>
                <span className="text-xs text-zinc-300 font-medium">Completed 100% of tasks</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
