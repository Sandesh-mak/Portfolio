import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "../types";
import { Github, ExternalLink, ArrowRight, X, Layers, Code, Star, CheckCircle } from "lucide-react";

// Real image paths from the generated assets
const projectsData: Project[] = [
  {
    id: "tourplan-ai",
    title: "TourPlan AI",
    description: "AI-powered travel planner generating personalized travel itineraries and budget optimization.",
    longDescription: "TourPlan AI is an innovative, cloud-native application designed to eliminate vacation planning fatigue. Built with Python and Google AI Studio's large language models, the software evaluates specific destinations, financial budgets, and timeline constraints to output customized travel schedules. It incorporates algorithmic budget optimization models that distribute funds logically between housing, dining, and activity nodes to ensure maximum tourist fulfillment.",
    tech: ["Python", "Google AI Studio", "Cloud Run", "Docker", "REST API", "Tailwind CSS"],
    features: [
      "AI generated customized travel schedules and itineraries",
      "Dynamic budget allocation and optimization algorithms",
      "Seamless containerization and serverless Google Cloud Run deployment",
      "Clean, minimalist responsive UI with glassmorphism dashboards"
    ],
    image: "/src/assets/images/tourplan_ai_mockup_1783274765651.jpg",
    githubUrl: "https://github.com/Sandesh-mak/Tourplan-AI.git",
    liveUrl: "https://lnkd.in/d-QGgR7p",
    featured: true,
  },
  {
    id: "flood-prediction",
    title: "Flood Risk Prediction System",
    description: "Machine learning application predicting regional flood risks with 1000+ custom data samples.",
    longDescription: "A sophisticated Machine Learning application designed to predict hydrological flood risks. Leveraging a dataset of over 1000 geographical and meteorological data samples, the predictive engine trains a robust Random Forest classification model. The application features detailed predictive analytics, showing precision, recall, and F1 scores in real-time, accompanied by graphical canvas-rendered charts visualizing flood vulnerability thresholds.",
    tech: ["Python", "Machine Learning", "Random Forest", "Scikit-Learn", "Matplotlib", "Pandas"],
    features: [
      "Hydrological predictive classification models using Scikit-Learn",
      "Comprehensive evaluation matrices: Precision, Recall, and F1-Scores",
      "Data visualization overlays showing regional threat levels",
      "Automated feature engineering pipeline for meteorological metrics"
    ],
    image: "/src/assets/images/flood_risk_mockup_1783274784922.jpg",
    githubUrl: "https://github.com/Sandesh-mak/flood-risk-predictor.git",
    
    featured: true,
  },
  {
    id: "mini-board",
    title: "Mini Board Task Management",
    description: "Hackathon-winning, object-oriented desktop application for team collaboration and task organization.",
    longDescription: "Mini Board is a high-performance desktop task organization platform that claimed 1st place at the SZABIST Tech Hackathon. Developed entirely in Java using pure Object-Oriented Programming (OOP) design patterns, the software implements a modular architecture supporting real-time task priority assignments, clean Kanban-style boards, drag-and-drop column pipelines, and secure local collaboration configurations. It adheres strictly to the SOLID principles for maximum codebase extensibility.",
    tech: ["Java", "OOP", "Swing / AWT", "MVC Architecture", "SOLID Principles", "JSON Persistence"],
    features: [
      "Modular Kanban board columns with visual state transitions",
      "Weighted priority matrix sorting of development tasks",
      "Hackathon-winning architectural design certified for SOLID standards",
      "Sleek developer-centric visual styling and collaborative cards"
    ],
    image: "/src/assets/images/miniboard_mockup_1783274804086.jpg",
    githubUrl: "https://github.com/Sandesh-mak/MiniBoard.git",
 
    featured: true,
  }
];

export default function ProjectsShowcase() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 relative bg-[#030303] scroll-mt-24">
      {/* Glow lines accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/[0.08] rounded-full mb-4 w-fit">
              <Layers className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
              <span className="text-[10px] font-mono tracking-[0.2em] text-zinc-400">ENGINEERING_RELEASES</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight text-white">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-400 to-cyan-400">Case Studies</span>
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 text-sm leading-relaxed font-light">
            A selective collection of applications deploying machine learning classifiers, containerized serverless runtimes, and optimized desktop schemas.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer luxury-glass rounded-2xl overflow-hidden flex flex-col justify-between hover-trigger h-full"
              data-cursor-text="VIEW"
            >
              <div>
                {/* Project Image Frame */}
                <div className="aspect-[16/9] w-full overflow-hidden relative border-b border-white/[0.03]">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-[0.16,1,0.3,1]"
                  />
                  {/* Floating Tech Badge */}
                  <div className="absolute top-4 left-4 z-20 flex gap-1.5">
                    <span className="text-[9px] font-mono bg-[#030303]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/[0.05] text-blue-400 tracking-wider uppercase">
                      {project.tech[0]}
                    </span>
                  </div>
                </div>

                {/* Info block */}
                <div className="p-6 md:p-8">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-display text-xl font-medium text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-zinc-400 text-sm font-light leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Action link */}
              <div className="px-6 md:px-8 pb-6 md:pb-8 flex justify-between items-center">
                <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="text-[10px] font-mono text-zinc-500">
                      #{t}
                    </span>
                  ))}
                </div>
                <div className="w-9 h-9 rounded-full bg-zinc-900 border border-white/[0.05] flex items-center justify-center group-hover:bg-blue-400 group-hover:text-zinc-950 text-blue-400 transition-all duration-300">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* High-End Project Modal Drawer */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="luxury-glass max-w-4xl w-full rounded-2xl overflow-hidden relative shadow-2xl shadow-black/80 my-8 flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 z-40 p-2.5 bg-black/65 backdrop-blur-md text-zinc-400 hover:text-white rounded-full border border-white/[0.08] transition-colors hover-trigger"
                data-cursor-text="CLOSE"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Large banner */}
              <div className="aspect-[16/8] w-full overflow-hidden relative border-b border-white/[0.05]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/20 to-transparent z-10" />
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-10 bg-[#0A0A0C] z-10 relative">
                {/* Header Title */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-medium text-white mb-2">
                      {activeProject.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2.5 py-1 bg-white/[0.03] border border-white/[0.05] text-zinc-300 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links Row */}
                  <div className="flex gap-3">
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-zinc-900 hover:bg-white text-zinc-300 hover:text-zinc-950 text-xs font-semibold rounded-lg border border-white/[0.05] transition-colors flex items-center gap-2 hover-trigger"
                      data-cursor-text="GITHUB"
                    >
                      <Github className="w-4 h-4" />
                      <span>CODEBASE</span>
                    </a>
                    {activeProject.liveUrl && (
                      <a
                        href={activeProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 bg-blue-500/10 hover:bg-blue-400 text-blue-400 hover:text-zinc-950 text-xs font-semibold rounded-lg border border-blue-500/20 transition-colors flex items-center gap-2 hover-trigger"
                        data-cursor-text="PREVIEW"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>LIVE DEMO</span>
                      </a>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-white/[0.04]">
                  {/* Long description */}
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-2 text-blue-400 font-mono text-[10px] uppercase tracking-wider mb-3">
                      <Code className="w-4.5 h-4.5" />
                      <span>PROJECT_ARCHITECTURAL_SUMMARY</span>
                    </div>
                    <p className="text-zinc-400 text-sm font-light leading-relaxed">
                      {activeProject.longDescription}
                    </p>
                  </div>

                  {/* Feature Bullets */}
                  <div>
                    <div className="flex items-center gap-2 text-cyan-400 font-mono text-[10px] uppercase tracking-wider mb-3">
                      <Star className="w-4.5 h-4.5" />
                      <span>CORE_FEATURES</span>
                    </div>
                    <ul className="flex flex-col gap-3">
                      {activeProject.features.map((feature, fidx) => (
                        <li key={fidx} className="flex gap-2.5 items-start">
                          <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-zinc-300 text-xs font-light leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
