'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { BackgroundGrid } from '@/components/ui/BackgroundGrid';
import { SciFiFrame } from '@/components/ui/SciFiFrame';
import { EnergyMeter } from '@/components/ui/EnergyMeter';
import { TypingEffect } from '@/components/ui/TypingEffect';
import { Radar } from '@/components/ui/Radar';
import { FloatingParticles } from '@/components/ui/FloatingParticles';
import { 
  Terminal, 
  Cpu, 
  Globe, 
  Github, 
  ExternalLink, 
  Mail, 
  User, 
  Code2, 
  Layers,
  ChevronRight,
  Database,
  Smartphone
} from 'lucide-react';

export default function Portfolio() {
  return (
    <main className="min-h-screen relative">
      <BackgroundGrid />
      <FloatingParticles />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 border border-cyan-500 flex items-center justify-center">
              <span className="text-cyan-500 font-bold text-xs">F</span>
            </div>
            <span className="font-display font-bold tracking-tighter text-sm uppercase">Frank.sys</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-[10px] uppercase tracking-[0.2em] text-white/50 hover:text-cyan-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="text-[10px] font-mono text-cyan-500/50 hidden sm:block">
            STATUS: ONLINE // 2026.03.17
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-cyan-500/20 bg-cyan-500/5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest text-cyan-400">System Initialized</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              <TypingEffect text="Hi, I'm Frank — Building Digital Systems" />
            </h1>
            <p className="text-lg text-white/60 max-w-xl mb-10 font-light leading-relaxed">
              Architecting high-performance web applications and mobile experiences with a focus on 
              <span className="text-cyan-400"> precision</span>, <span className="text-cyan-400">scalability</span>, and <span className="text-cyan-400">cinematic UI</span>.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-4 bg-cyan-500 text-black font-bold uppercase tracking-widest text-xs flex items-center gap-2 group"
              >
                View Projects
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-4 border border-white/20 hover:border-cyan-500/50 transition-colors font-bold uppercase tracking-widest text-xs"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <SciFiFrame glowColor="cyan" className="bg-black/40 backdrop-blur-sm" showScanLine>
              <div className="space-y-6 py-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <Cpu className="w-5 h-5 text-cyan-500" />
                    <span className="text-xs uppercase tracking-widest font-bold">Tech Stack Core</span>
                  </div>
                  <div className="text-[10px] font-mono text-white/30">v4.0.2</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'React', icon: <Globe className="w-3 h-3" /> },
                    { name: 'Next.js', icon: <Layers className="w-3 h-3" /> },
                    { name: 'TypeScript', icon: <Code2 className="w-3 h-3" /> },
                    { name: 'Node.js', icon: <Terminal className="w-3 h-3" /> },
                    { name: 'React Native', icon: <Smartphone className="w-3 h-3" /> },
                    { name: 'PostgreSQL', icon: <Database className="w-3 h-3" /> },
                  ].map((tech) => (
                    <div key={tech.name} className="flex items-center gap-2 p-2 border border-white/5 bg-white/5">
                      <span className="text-cyan-500">{tech.icon}</span>
                      <span className="text-[10px] uppercase tracking-tighter">{tech.name}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <div className="text-[9px] uppercase tracking-widest text-white/30 mb-2">System Load</div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      animate={{ width: ['20%', '80%', '40%', '90%', '60%'] }}
                      transition={{ duration: 10, repeat: Infinity }}
                      className="h-full bg-cyan-500" 
                    />
                  </div>
                </div>
              </div>
            </SciFiFrame>
            
            {/* Floating HUD Elements */}
            <div className="absolute -top-10 -right-10">
              <Radar />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <div className="text-cyan-500 text-xs font-mono mb-2 tracking-[0.3em] uppercase">01 // Identity</div>
          <h2 className="text-4xl font-display font-bold uppercase tracking-tighter">About the Architect</h2>
          <div className="w-20 h-[1px] bg-cyan-500 mt-4" />
        </div>

        <SciFiFrame className="max-w-4xl mx-auto bg-black/20">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center gap-2 text-cyan-500">
                <User className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-widest font-bold">Biography</span>
              </div>
              <p className="text-white/70 leading-relaxed">
                I am a software engineer dedicated to building robust digital ecosystems. With over 5 years of experience in the field, I specialize in creating seamless user experiences powered by efficient backend architectures.
              </p>
              <p className="text-white/70 leading-relaxed">
                My philosophy is simple: <span className="text-cyan-400">Code is a craft.</span> Every line should serve a purpose, every interface should tell a story, and every system should be built to withstand the test of time.
              </p>
              
              <div className="pt-6">
                <div className="flex items-center gap-2 text-cyan-500 mb-4">
                  <Terminal className="w-4 h-4" />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Core Technologies</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['React', 'Next.js', 'TypeScript', 'React Native', 'Node.js', 'TailwindCSS', 'Framer Motion', 'GraphQL'].map((tech) => (
                    <span key={tech} className="px-3 py-1 border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest hover:border-cyan-500/50 transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="aspect-square border border-white/10 relative overflow-hidden group">
                <Image 
                  src="https://picsum.photos/seed/frank/400/400" 
                  alt="Profile" 
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover w-full h-full opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-cyan-500/10 mix-blend-overlay" />
                <div className="absolute inset-0 border-[20px] border-black/80" />
                <div className="absolute top-4 left-4 text-[8px] font-mono text-cyan-500">ID: FRANK_01</div>
              </div>
              <div className="p-4 border border-white/5 bg-white/5 space-y-2">
                <div className="flex justify-between text-[8px] font-mono text-white/30 uppercase">
                  <span>Location</span>
                  <span className="text-white/70">Remote // Earth</span>
                </div>
                <div className="flex justify-between text-[8px] font-mono text-white/30 uppercase">
                  <span>Experience</span>
                  <span className="text-white/70">5+ Years</span>
                </div>
                <div className="flex justify-between text-[8px] font-mono text-white/30 uppercase">
                  <span>Specialization</span>
                  <span className="text-white/70">Full-Stack Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </SciFiFrame>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <div className="text-cyan-500 text-xs font-mono mb-2 tracking-[0.3em] uppercase">02 // Deployments</div>
          <h2 className="text-4xl font-display font-bold uppercase tracking-tighter">Selected Projects</h2>
          <div className="w-20 h-[1px] bg-cyan-500 mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Nexus Dashboard",
              desc: "Real-time analytics platform for distributed systems with advanced data visualization.",
              tech: ["Next.js", "D3.js", "Socket.io"],
              image: "https://picsum.photos/seed/nexus/600/400"
            },
            {
              title: "Aura Mobile",
              desc: "A minimalist meditation app with generative soundscapes and biometric tracking.",
              tech: ["React Native", "Expo", "Reanimated"],
              image: "https://picsum.photos/seed/aura/600/400"
            },
            {
              title: "Crypto Sentinel",
              desc: "Automated trading bot and portfolio tracker with AI-driven sentiment analysis.",
              tech: ["Node.js", "Python", "TensorFlow"],
              image: "https://picsum.photos/seed/crypto/600/400"
            }
          ].map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <SciFiFrame className="h-full bg-black/20 hover:bg-black/40 transition-colors group" glowColor="cyan">
                <div className="relative h-48 mb-6 overflow-hidden border border-white/10">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div className="flex gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="text-[8px] px-2 py-0.5 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 uppercase">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-white/60 mb-6 font-light leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex gap-4 pt-4 border-t border-white/5">
                  <a href="#" className="flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold text-cyan-500 hover:text-cyan-400 transition-colors">
                    <ExternalLink className="w-3 h-3" /> Live Demo
                  </a>
                  <a href="#" className="flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-colors">
                    <Github className="w-3 h-3" /> GitHub
                  </a>
                </div>
              </SciFiFrame>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <div className="text-cyan-500 text-xs font-mono mb-2 tracking-[0.3em] uppercase">03 // Capabilities</div>
          <h2 className="text-4xl font-display font-bold uppercase tracking-tighter">System Proficiency</h2>
          <div className="w-20 h-[1px] bg-cyan-500 mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <SciFiFrame className="bg-black/20">
            <div className="flex items-center gap-3 mb-8">
              <Code2 className="w-5 h-5 text-cyan-500" />
              <h3 className="text-lg font-bold uppercase tracking-widest">Frontend Core</h3>
            </div>
            <div className="space-y-6">
              <EnergyMeter label="React / Next.js" value={95} />
              <EnergyMeter label="TypeScript" value={90} />
              <EnergyMeter label="Tailwind CSS" value={98} />
              <EnergyMeter label="Framer Motion" value={85} />
            </div>
          </SciFiFrame>

          <SciFiFrame className="bg-black/20" glowColor="purple">
            <div className="flex items-center gap-3 mb-8">
              <Database className="w-5 h-5 text-purple-500" />
              <h3 className="text-lg font-bold uppercase tracking-widest">Backend & Infra</h3>
            </div>
            <div className="space-y-6">
              <EnergyMeter label="Node.js / Express" value={88} color="#a855f7" />
              <EnergyMeter label="PostgreSQL / MongoDB" value={82} color="#a855f7" />
              <EnergyMeter label="GraphQL / Apollo" value={75} color="#a855f7" />
              <EnergyMeter label="Docker / AWS" value={70} color="#a855f7" />
            </div>
          </SciFiFrame>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-7xl mx-auto mb-20">
        <div className="flex flex-col items-center mb-16">
          <div className="text-cyan-500 text-xs font-mono mb-2 tracking-[0.3em] uppercase">04 // Transmission</div>
          <h2 className="text-4xl font-display font-bold uppercase tracking-tighter">Establish Connection</h2>
          <div className="w-20 h-[1px] bg-cyan-500 mt-4" />
        </div>

        <div className="max-w-2xl mx-auto">
          <SciFiFrame className="bg-black/40 backdrop-blur-md">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/50 font-mono">User Name</label>
                  <input 
                    type="text" 
                    placeholder="ENTER NAME..."
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all font-mono"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/50 font-mono">User Email</label>
                  <input 
                    type="email" 
                    placeholder="ENTER EMAIL..."
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all font-mono"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/50 font-mono">Message Payload</label>
                <textarea 
                  rows={5}
                  placeholder="ENCRYPTING MESSAGE..."
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all font-mono resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-cyan-500 text-black font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-2 group"
              >
                <Mail className="w-4 h-4" />
                Send Transmission
              </motion.button>
            </form>
          </SciFiFrame>
          
          <div className="mt-12 flex justify-center gap-8">
            <a href="#" className="text-white/30 hover:text-cyan-500 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-white/30 hover:text-cyan-500 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="#" className="text-white/30 hover:text-cyan-500 transition-colors">
              <Globe className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/5 text-center">
        <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em]">
          &copy; 2026 FRANK.SYS // ALL RIGHTS RESERVED // ENCRYPTION ENABLED
        </div>
      </footer>
    </main>
  );
}
