/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

const TESTIMONIALS = [
  {
    text: "The research opportunities here are unparalleled. I was able to work on real-world AI applications in my first year.",
    name: "Alex Chen",
    role: "Computing '25",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop"
  },
  {
    text: "Management at Kings University isn't just about theory. The case studies and partner internships made the difference.",
    name: "Sarah Jenkins",
    role: "Business Admin '23",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
  },
  {
    text: "The interdisciplinary approach allowed me to combine my love for design with technical engineering.",
    name: "Marcus Thorne",
    role: "Design Engineering '24",
    img: "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=200&auto=format&fit=crop"
  },
  {
    text: "The campus facilities and lab equipment are state-of-the-art. It feels like stepping into the future.",
    name: "Elena Rodriguez",
    role: "BioTech '26",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
  },
  {
    text: "I loved the collaborative environment. Faculty members are always open to discuss new ideas.",
    name: "David Kim",
    role: "Robotics '24",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  }
];

export default function TestimonialsMarquee() {
  return (
    <div className="w-full overflow-hidden relative py-10 group">
      {/* 
        Using a standard flex row that animates.
        We duplicate the testimonials to create an infinite loop.
      */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1rem)); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .group:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}} />

      <div className="flex gap-8 w-max animate-scroll">
        {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, idx) => (
          <div 
            key={idx} 
            className="w-[350px] md:w-[450px] p-10 rounded-3xl bg-[#1A2132] border border-white/10 shrink-0"
          >
            <div className="flex gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-tertiary-fixed text-lg" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              ))}
            </div>
            <p className="text-white/80 text-body-lg mb-10 italic">"{testimonial.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-primary-container">
                <img alt={testimonial.name} src={testimonial.img} className="w-full h-full object-cover"/>
              </div>
              <div>
                <div className="text-white font-bold text-body-md">{testimonial.name}</div>
                <div className="text-tertiary-fixed-dim text-label-md">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
