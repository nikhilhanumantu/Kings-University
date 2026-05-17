/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import CampusCarousel from "@/components/CampusCarousel";
import PartnersCarousel from "@/components/PartnersCarousel";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import { FadeIn, NumberTicker, SpotlightCard, ParallaxImage } from "@/components/AnimatedElements";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-on-background text-white pt-32 pb-20 overflow-hidden flex items-center">
        {/* Background Glow */}
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-tertiary/20 blur-[120px] rounded-full"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeIn className="z-10 text-center md:text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary/30 text-primary-fixed text-xs font-bold tracking-widest mb-6">ESTABLISHED 1926</span>
              <h1 className="font-headline-xl text-[44px] md:text-display-lg leading-[1.1] md:leading-none mb-6 tracking-tight">Future-Ready Education <br className="hidden md:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">for Innovators</span></h1>
              <p className="text-body-lg font-body-lg text-outline-variant max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed">Empowering the next generation of global leaders through cutting-edge technology, rigorous academic discipline, and a vision for a sustainable tomorrow.</p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <button className="w-full sm:w-auto bg-primary-container text-on-primary-container px-8 py-4 rounded-xl font-label-md text-label-md hover:scale-105 transition-all shadow-lg active:scale-95">Explore Programs</button>
                <button className="w-full sm:w-auto bg-transparent border border-white/20 hover:bg-white/10 px-8 py-4 rounded-xl font-label-md text-label-md transition-all flex items-center justify-center gap-2">
                  Virtual Tour <span className="material-symbols-outlined text-body-md">play_circle</span>
                </button>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={200} className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center mt-12 md:mt-0">
              {/* Main Image */}
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <ParallaxImage alt="University Campus" className="w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop" />
                <div className="absolute inset-0 bg-gradient-to-t from-on-background/90 via-transparent to-transparent pointer-events-none"></div>
              </div>
              {/* Floating Stat Cards */}
              <FadeIn delay={600} direction="up" className="absolute -top-6 -right-2 md:-right-6 glass-card p-4 md:p-6 rounded-2xl shadow-xl border border-white/20 max-w-[160px] md:max-w-[180px] magnetic-effect-enabled z-20">
                <span className="material-symbols-outlined text-primary mb-2 text-2xl md:text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
                <div className="text-headline-md font-headline-md text-on-background">#1</div>
                <div className="text-label-md font-label-md text-on-surface-variant leading-snug">In Tech Research</div>
              </FadeIn>
              <FadeIn delay={800} direction="right" className="absolute -bottom-6 -left-2 md:-bottom-10 md:-left-10 glass-card p-4 md:p-6 rounded-2xl shadow-xl border border-white/20 max-w-[180px] md:max-w-[200px] magnetic-effect-enabled z-20">
                <div className="flex gap-1 mb-2">
                  <span className="material-symbols-outlined text-tertiary-container text-sm">star</span>
                  <span className="material-symbols-outlined text-tertiary-container text-sm">star</span>
                  <span className="material-symbols-outlined text-tertiary-container text-sm">star</span>
                  <span className="material-symbols-outlined text-tertiary-container text-sm">star</span>
                  <span className="material-symbols-outlined text-tertiary-container text-sm">star</span>
                </div>
                <div className="text-body-sm font-body-sm text-on-surface-variant leading-snug">"Best academic environment I've experienced."</div>
              </FadeIn>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Global Impact Section (New!) */}
      <section className="py-24 relative overflow-hidden bg-background">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-secondary/10 rounded-[100%] blur-[80px] pointer-events-none"></div>
        <FadeIn className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-label-md font-label-md mb-6 uppercase tracking-widest animate-pulse-glow">Worldwide Network</span>
              <h2 className="font-headline-xl text-4xl md:text-5xl text-on-background mb-6 tracking-tight">A Truly Global <br className="hidden lg:block"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Footprint</span></h2>
              <p className="text-body-lg font-body-lg text-on-surface-variant mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">Our alumni span across 140 countries, leading innovations at Fortune 500 companies, founding transformative startups, and driving global policy. Join a network that truly knows no borders.</p>
              
              <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-md mx-auto lg:mx-0">
                <SpotlightCard delay={200} className="p-4 md:p-6 rounded-2xl bg-surface-container-low border border-white/5 shadow-lg">
                  <div className="text-headline-lg font-headline-lg text-primary mb-1"><NumberTicker value={140} suffix="+" /></div>
                  <div className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider text-xs md:text-sm">Countries</div>
                </SpotlightCard>
                <SpotlightCard delay={400} className="p-4 md:p-6 rounded-2xl bg-surface-container-low border border-white/5 shadow-lg">
                  <div className="text-headline-lg font-headline-lg text-secondary mb-1"><NumberTicker value={12} suffix="k+" /></div>
                  <div className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider text-xs md:text-sm">Active Alumni</div>
                </SpotlightCard>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 relative min-h-[400px] md:min-h-[500px] flex items-center justify-center mt-8 md:mt-0">
              {/* Central Glowing Core */}
              <div className="absolute w-48 h-48 md:w-72 md:h-72 bg-primary/20 rounded-full blur-[60px] md:blur-[80px] animate-pulse"></div>
              
              {/* Floating Cards Array */}
              <div className="relative w-full h-full max-w-[320px] md:max-w-[500px]">
                
                {/* Center Badge */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[90%] md:w-auto">
                  <div className="bg-surface-container-highest border border-white/20 px-4 md:px-6 py-4 rounded-3xl shadow-2xl backdrop-blur-xl flex items-center gap-3 md:gap-4 justify-center md:justify-start">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined text-2xl md:text-3xl">flight_takeoff</span>
                    </div>
                    <div>
                      <div className="text-body-lg md:text-headline-sm font-bold text-on-surface leading-tight">Global HQ</div>
                      <div className="text-xs md:text-body-sm text-on-surface-variant">Connecting 140+ Nations</div>
                    </div>
                  </div>
                </div>

                {/* Floating Card 1: Silicon Valley */}
                <div className="absolute top-4 right-2 md:top-10 md:right-4 z-10 animate-float" style={{animationDelay: '0s'}}>
                  <div className="glass-card border border-white/10 p-2 md:p-3 rounded-xl md:rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-2 md:gap-3 rotate-6 hover:rotate-0 transition-transform cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=100&auto=format&fit=crop" className="w-8 h-8 md:w-12 md:h-12 rounded-full object-cover border-2 border-primary/50" alt="Alumni" />
                    <div className="pr-1 md:pr-2 hidden sm:block">
                      <div className="text-xs md:text-label-lg font-bold text-on-surface">Sarah J.</div>
                      <div className="text-[10px] md:text-label-sm text-primary">Silicon Valley</div>
                    </div>
                  </div>
                </div>

                {/* Floating Card 2: London */}
                <div className="absolute bottom-16 left-2 md:bottom-24 md:left-0 z-30 animate-float" style={{animationDelay: '1.5s'}}>
                  <div className="glass-card border border-white/10 p-2 md:p-3 rounded-xl md:rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-2 md:gap-3 -rotate-6 hover:rotate-0 transition-transform cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" className="w-8 h-8 md:w-12 md:h-12 rounded-full object-cover border-2 border-secondary/50" alt="Alumni" />
                    <div className="pr-1 md:pr-2 hidden sm:block">
                      <div className="text-xs md:text-label-lg font-bold text-on-surface">Michael T.</div>
                      <div className="text-[10px] md:text-label-sm text-secondary">London Finance</div>
                    </div>
                  </div>
                </div>

                {/* Floating Card 3: Tokyo Lab */}
                <div className="absolute top-16 left-0 md:top-24 md:left-4 z-10 animate-float" style={{animationDelay: '3s'}}>
                  <div className="glass-card border border-white/10 p-2 md:p-3 rounded-xl md:rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-2 md:gap-3 -rotate-12 hover:rotate-0 transition-transform cursor-pointer">
                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-tertiary/20 flex items-center justify-center text-tertiary border-2 border-tertiary/50">
                      <span className="material-symbols-outlined text-sm md:text-base">architecture</span>
                    </div>
                    <div className="pr-1 md:pr-2 hidden sm:block">
                      <div className="text-xs md:text-label-lg font-bold text-on-surface">Design Lab</div>
                      <div className="text-[10px] md:text-label-sm text-tertiary">Tokyo, Japan</div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Card 4: Geneva */}
                <div className="absolute bottom-8 right-4 md:bottom-12 md:right-10 z-20 animate-float" style={{animationDelay: '4.5s'}}>
                  <div className="glass-card border border-white/10 p-2 md:p-3 rounded-xl md:rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-2 md:gap-3 rotate-12 hover:rotate-0 transition-transform cursor-pointer">
                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary border-2 border-primary/50">
                      <span className="material-symbols-outlined text-sm md:text-base">biotech</span>
                    </div>
                    <div className="pr-1 md:pr-2 hidden sm:block">
                      <div className="text-xs md:text-label-lg font-bold text-on-surface">Research Hub</div>
                      <div className="text-[10px] md:text-label-sm text-primary">Geneva, CH</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-surface">
        <FadeIn className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-gutter">
            <FadeIn delay={100} className="text-center p-6 md:p-8 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:shadow-lg transition-shadow">
              <div className="text-3xl md:text-headline-xl font-headline-xl text-primary mb-2"><NumberTicker value={25} suffix="+" /></div>
              <div className="text-[10px] md:text-label-md font-label-md text-on-surface-variant uppercase tracking-widest">Programs</div>
            </FadeIn>
            <FadeIn delay={200} className="text-center p-6 md:p-8 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:shadow-lg transition-shadow">
              <div className="text-3xl md:text-headline-xl font-headline-xl text-primary mb-2"><NumberTicker value={10} suffix="K+" /></div>
              <div className="text-[10px] md:text-label-md font-label-md text-on-surface-variant uppercase tracking-widest">Students</div>
            </FadeIn>
            <FadeIn delay={300} className="text-center p-6 md:p-8 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:shadow-lg transition-shadow">
              <div className="text-3xl md:text-headline-xl font-headline-xl text-primary mb-2"><NumberTicker value={95} suffix="%" /></div>
              <div className="text-[10px] md:text-label-md font-label-md text-on-surface-variant uppercase tracking-widest">Placement</div>
            </FadeIn>
            <FadeIn delay={400} className="text-center p-6 md:p-8 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:shadow-lg transition-shadow">
              <div className="text-3xl md:text-headline-xl font-headline-xl text-primary mb-2"><NumberTicker value={50} suffix="+" /></div>
              <div className="text-[10px] md:text-label-md font-label-md text-on-surface-variant uppercase tracking-widest">Partners</div>
            </FadeIn>
          </div>
        </FadeIn>
      </section>

      {/* About Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
            <div className="w-full md:w-1/2 relative">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <FadeIn direction="right" delay={100} className="space-y-3 md:space-y-4 pt-8 md:pt-12">
                  <ParallaxImage alt="Student Life" className="rounded-xl md:rounded-2xl w-full h-40 md:h-64" src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop" />
                  <ParallaxImage alt="Research Lab" className="rounded-xl md:rounded-2xl w-full h-56 md:h-80" src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop" />
                </FadeIn>
                <FadeIn direction="left" delay={200} className="space-y-3 md:space-y-4">
                  <ParallaxImage alt="Lecture Hall" className="rounded-xl md:rounded-2xl w-full h-56 md:h-80" src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?q=80&w=1000&auto=format&fit=crop" />
                  <ParallaxImage alt="Architecture" className="rounded-xl md:rounded-2xl w-full h-40 md:h-64" src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop" />
                </FadeIn>
              </div>
              <FadeIn delay={400} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white p-4 md:p-8 rounded-full w-28 h-28 md:w-40 md:h-40 flex flex-col items-center justify-center text-center shadow-2xl border-4 border-white z-20">
                <div className="text-3xl md:text-headline-lg font-headline-lg font-bold">100</div>
                <div className="text-[10px] md:text-label-md font-label-md mt-1 leading-tight">Years of<br/>Legacy</div>
              </FadeIn>
            </div>
            <FadeIn direction="left" delay={300} className="w-full md:w-1/2 mt-12 md:mt-0 text-center md:text-left">
              <h2 className="font-headline-xl text-4xl md:text-5xl text-on-background mb-6 tracking-tight">Pioneering Excellence Since 1926</h2>
              <p className="text-body-lg font-body-lg text-on-surface-variant mb-10 leading-relaxed">At Kings University, we don't just teach the future; we build it. Our methodology combines historical academic rigor with the agility of modern technological hubs, creating an environment where curiosity meets precision.</p>
              <div className="space-y-6 md:space-y-8 text-left">
                <div className="flex gap-4 md:gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mt-1">
                    <span className="material-symbols-outlined">workspace_premium</span>
                  </div>
                  <div>
                    <h4 className="font-headline-md text-xl md:text-2xl text-on-background mb-2">Global Accreditations</h4>
                    <p className="text-sm md:text-body-md text-on-surface-variant leading-relaxed">Recognized by world-leading academic bodies for excellence in technical and managerial education.</p>
                  </div>
                </div>
                <div className="flex gap-4 md:gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mt-1">
                    <span className="material-symbols-outlined">biotech</span>
                  </div>
                  <div>
                    <h4 className="font-headline-md text-xl md:text-2xl text-on-background mb-2">Research Centers</h4>
                    <p className="text-sm md:text-body-md text-on-surface-variant leading-relaxed">Home to 12 state-of-the-art labs focused on AI, Quantum Computing, and Sustainable Design.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-20">
            <h2 className="font-headline-xl text-headline-xl text-on-background mb-4">Academic Ecosystems</h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto">Specialized programs designed to turn passion into professional mastery through hands-on industry integration.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <SpotlightCard delay={100} className="glass-card p-6 md:p-8 rounded-3xl group hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer flex flex-col justify-between h-64 md:h-80 border border-outline-variant/50 relative overflow-hidden z-10">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-3xl md:text-4xl mb-4 md:mb-6 text-primary group-hover:text-white transition-colors">precision_manufacturing</span>
                <h3 className="font-headline-md text-xl md:text-2xl font-bold mb-2">Engineering</h3>
                <p className="text-sm md:text-body-sm font-body-sm text-on-surface-variant group-hover:text-white/80">Robotics, Aerospace, and Civil Excellence.</p>
              </div>
              <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity relative z-10">
                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </SpotlightCard>
            <SpotlightCard delay={200} className="glass-card p-6 md:p-8 rounded-3xl group hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer flex flex-col justify-between h-64 md:h-80 border border-outline-variant/50 relative overflow-hidden z-10">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-3xl md:text-4xl mb-4 md:mb-6 text-primary group-hover:text-white transition-colors">query_stats</span>
                <h3 className="font-headline-md text-xl md:text-2xl font-bold mb-2">Management</h3>
                <p className="text-sm md:text-body-sm font-body-sm text-on-surface-variant group-hover:text-white/80">Global Business Strategy & Leadership.</p>
              </div>
              <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity relative z-10">
                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </SpotlightCard>
            <SpotlightCard delay={300} className="glass-card p-6 md:p-8 rounded-3xl group hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer flex flex-col justify-between h-64 md:h-80 border border-outline-variant/50 relative overflow-hidden z-10">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-3xl md:text-4xl mb-4 md:mb-6 text-primary group-hover:text-white transition-colors">terminal</span>
                <h3 className="font-headline-md text-xl md:text-2xl font-bold mb-2">Computing</h3>
                <p className="text-sm md:text-body-sm font-body-sm text-on-surface-variant group-hover:text-white/80">AI, Blockchain, and Cybersecurity.</p>
              </div>
              <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity relative z-10">
                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </SpotlightCard>
            <SpotlightCard delay={400} className="glass-card p-6 md:p-8 rounded-3xl group hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer flex flex-col justify-between h-64 md:h-80 border border-outline-variant/50 relative overflow-hidden z-10">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-3xl md:text-4xl mb-4 md:mb-6 text-primary group-hover:text-white transition-colors">payments</span>
                <h3 className="font-headline-md text-xl md:text-2xl font-bold mb-2">Commerce</h3>
                <p className="text-sm md:text-body-sm font-body-sm text-on-surface-variant group-hover:text-white/80">FinTech, Audit, and Global Trade.</p>
              </div>
              <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity relative z-10">
                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </SpotlightCard>
            <SpotlightCard delay={500} className="glass-card p-6 md:p-8 rounded-3xl group hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer flex flex-col justify-between h-64 md:h-80 border border-outline-variant/50 relative overflow-hidden z-10">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-3xl md:text-4xl mb-4 md:mb-6 text-primary group-hover:text-white transition-colors">polyline</span>
                <h3 className="font-headline-md text-xl md:text-2xl font-bold mb-2">Design</h3>
                <p className="text-sm md:text-body-sm font-body-sm text-on-surface-variant group-hover:text-white/80">UX/UI, Visual Arts, and Innovation.</p>
              </div>
              <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity relative z-10">
                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Campus Life Carousel */}
      <CampusCarousel />

      {/* Testimonials Section */}
      <section className="py-32 bg-on-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <h2 className="font-headline-xl text-headline-xl text-white mb-20 text-center">Voices of Kings University</h2>
          <TestimonialsMarquee />
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white border-y border-outline-variant/30 flex flex-col">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
          <h2 className="font-headline-xl text-headline-xl text-on-background text-center mb-12 font-extrabold tracking-tight">Our Recruiting Partners</h2>
          <PartnersCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-margin-mobile md:px-margin-desktop">
        <FadeIn className="max-w-container-max mx-auto bg-primary rounded-[32px] md:rounded-[40px] p-8 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-tertiary-container opacity-50"></div>
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-400/30 blur-[120px] rounded-full"></div>
          <div className="relative z-10">
            <h2 className="font-headline-xl text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 tracking-tight">Ready to Lead the Future?</h2>
            <p className="text-white/90 text-base md:text-body-lg max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed">Applications for the Fall 2026 semester are now open. Join a community of pioneers and start your journey today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="h-14 px-8 rounded-full bg-white text-primary font-label-lg font-bold hover:bg-surface-variant transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto">Start Application</button>
              <button className="h-14 px-8 rounded-full bg-transparent border-2 border-white/80 hover:border-white text-white font-label-lg font-bold hover:bg-white/10 transition-colors w-full sm:w-auto">Contact Admissions</button>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="bg-surface-container-lowest border-t border-outline-variant dark:border-outline/20 py-16 md:py-20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-gutter mb-16 md:mb-20">
            <div className="col-span-1 sm:col-span-2 md:col-span-1">
              <div className="text-xl md:text-headline-sm font-bold text-on-surface mb-4 md:mb-6">Kings University</div>
              <p className="text-on-surface-variant text-sm md:text-body-sm max-w-sm md:max-w-xs leading-relaxed">Building the bridge between traditional academic excellence and tomorrow's technological frontiers.</p>
            </div>
            <div>
              <h5 className="text-on-surface font-bold mb-4 md:mb-6 text-sm tracking-wider">ACADEMICS</h5>
              <ul className="space-y-3 md:space-y-4">
                <li><a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Undergraduate</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Postgraduate</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Doctoral Research</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Online Learning</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-on-surface font-bold mb-4 md:mb-6 text-sm tracking-wider">RESOURCES</h5>
              <ul className="space-y-3 md:space-y-4">
                <li><a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Alumni Portal</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Careers</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Library</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Campus Map</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-on-surface font-bold mb-4 md:mb-6 text-sm tracking-wider">CONTACT</h5>
              <ul className="space-y-3 md:space-y-4">
                <li className="text-on-surface-variant text-sm flex items-center gap-3"><span className="material-symbols-outlined text-base">location_on</span> 100 University Plaza, Tech City</li>
                <li className="text-on-surface-variant text-sm flex items-center gap-3"><span className="material-symbols-outlined text-base">mail</span> admissions@kings.edu</li>
                <li className="text-on-surface-variant text-sm flex items-center gap-3"><span className="material-symbols-outlined text-base">call</span> +1 (555) 000-1234</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-on-surface-variant text-xs md:text-sm text-center md:text-left">© 2026 Kings University. Excellence in Innovation.</div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              <a className="text-on-surface-variant hover:text-primary text-xs md:text-sm transition-colors" href="#">Privacy Policy</a>
              <a className="text-on-surface-variant hover:text-primary text-xs md:text-sm transition-colors" href="#">Terms of Service</a>
              <a className="text-on-surface-variant hover:text-primary text-xs md:text-sm transition-colors" href="#">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
