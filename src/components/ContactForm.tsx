import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Send, CheckCircle, Github, Linkedin, Sparkles, MessageSquare } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message content is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSending(true);

    // Simulate luxury API sending pipeline
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-[#030303] border-t border-white/[0.02] scroll-mt-24">
      {/* Aurora light on bottom-right corner */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Side (Left 5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full min-h-[400px]">
            <div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/[0.08] rounded-full mb-6 w-fit">
                <Sparkles className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
                <span className="text-[10px] font-mono tracking-[0.2em] text-zinc-400">SECURE_COMMUNICATION_PORT</span>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight text-white mb-6">
                Let's Form a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-400 to-cyan-400">Connection</span>
              </h2>
              
              <p className="text-zinc-400 text-sm font-light leading-relaxed mb-10">
                Whether you want to recruit me for remote software engineering roles, inquire about ML model integrations, or collaborate on open-source packages, send a diagnostic packet below.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {/* Direct Mail Card */}
              <div className="flex items-center gap-4 p-4 bg-white/[0.02] border border-white/[0.04] rounded-xl hover:border-blue-400/20 transition-all duration-300">
                <div className="p-3 bg-zinc-900 rounded-xl border border-white/[0.05] text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                    DIRECT DISPATCH
                  </span>
                  <a
                    href="mailto:makhijasandesh2@gmail.com"
                    className="text-sm font-mono text-zinc-300 hover:text-blue-400 hover-trigger transition-colors"
                  >
                    makhijasandesh2@gmail.com
                  </a>
                </div>
              </div>

              {/* Social links row */}
              <div className="flex items-center gap-4 mt-4">
                <a
                  href="https://github.com/Sandesh-mak"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-zinc-900 border border-white/[0.05] text-zinc-400 hover:text-white rounded-xl hover-trigger transition-all duration-300"
                  data-cursor-text="GITHUB"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sandesh-makhija-920685284/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-zinc-900 border border-white/[0.05] text-zinc-400 hover:text-white rounded-xl hover-trigger transition-all duration-300"
                  data-cursor-text="LINKEDIN"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Form Side (Right 7 columns) */}
          <div className="lg:col-span-7">
            <div className="luxury-glass rounded-2xl p-6 md:p-10 relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {!isSent ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                    noValidate
                  >
                    {/* Two cols on desktop (Name, Email) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                          SENDER_NAME
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={`w-full bg-black/40 border ${
                            errors.name ? "border-rose-500/40 focus:border-rose-500" : "border-white/[0.05] focus:border-blue-400/50"
                          } focus:bg-zinc-900/60 rounded-xl px-4 py-3.5 text-sm text-zinc-200 outline-none transition-all duration-300 hover-trigger min-h-[44px]`}
                          placeholder="What should I call you?"
                        />
                        {errors.name && (
                          <span className="font-mono text-[9px] text-rose-500">{errors.name}</span>
                        )}
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                          DISPATCH_EMAIL
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`w-full bg-black/40 border ${
                            errors.email ? "border-rose-500/40 focus:border-rose-500" : "border-white/[0.05] focus:border-blue-400/50"
                          } focus:bg-zinc-900/60 rounded-xl px-4 py-3.5 text-sm text-zinc-200 outline-none transition-all duration-300 hover-trigger min-h-[44px]`}
                          placeholder="Where can I reach you?"
                        />
                        {errors.email && (
                          <span className="font-mono text-[9px] text-rose-500">{errors.email}</span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                        SUBJECT_LINE
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className={`w-full bg-black/40 border ${
                          errors.subject ? "border-rose-500/40 focus:border-rose-500" : "border-white/[0.05] focus:border-blue-400/50"
                        } focus:bg-zinc-900/60 rounded-xl px-4 py-3.5 text-sm text-zinc-200 outline-none transition-all duration-300 hover-trigger min-h-[44px]`}
                        placeholder="Purpose of communication"
                      />
                      {errors.subject && (
                        <span className="font-mono text-[9px] text-rose-500">{errors.subject}</span>
                      )}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                        MESSAGE_PAYLOAD
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={5}
                        className={`w-full bg-black/40 border ${
                          errors.message ? "border-rose-500/40 focus:border-rose-500" : "border-white/[0.05] focus:border-blue-400/50"
                        } focus:bg-zinc-900/60 rounded-xl px-4 py-3.5 text-sm text-zinc-200 outline-none transition-all duration-300 hover-trigger`}
                        placeholder="Write your diagnostic text packet..."
                      />
                      {errors.message && (
                        <span className="font-mono text-[9px] text-rose-500">{errors.message}</span>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSending}
                      className="w-full py-4 mt-2 bg-zinc-900 hover:bg-blue-500 text-zinc-200 hover:text-zinc-950 rounded-xl border border-white/[0.08] text-xs font-semibold tracking-wider flex items-center justify-center gap-3 transition-all duration-300 disabled:opacity-50 hover-trigger shadow-lg shadow-black/50"
                      data-cursor-text="SEND"
                    >
                      {isSending ? (
                        <>
                          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          <span>TRANSMITTING PACKET...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>DISPATCH MESSAGE</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-12 px-4"
                  >
                    <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 mb-6 animate-bounce">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="font-display text-xl font-medium text-white tracking-tight mb-3">
                      Packet Transmitted Successfully!
                    </h3>
                    <p className="max-w-sm text-zinc-400 text-sm leading-relaxed mb-8">
                      Thank you for contacting me. Your communication payload has been dispatched. I will reply to your inbox within 24 standard earth hours.
                    </p>
                    <button
                      onClick={() => setIsSent(false)}
                      className="px-6 py-2.5 bg-zinc-900 hover:bg-white text-zinc-300 hover:text-zinc-950 text-xs font-semibold tracking-wider border border-white/[0.05] rounded-lg transition-colors hover-trigger"
                    >
                      DISPATCH NEW MESSAGE
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
