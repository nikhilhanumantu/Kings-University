/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

const CAROUSEL_DATA = [
  {
    title: "The Central Quad",
    desc: "A dynamic space for collaboration, events, and relaxation at the heart of Kings University.",
    images: [
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590402494587-44b71d7772f6?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    title: "Wellness Hub",
    desc: "Focusing on physical and mental well-being with Olympic-grade facilities.",
    images: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    title: "Innovation Den",
    desc: "24/7 access to high-performance computing and collaborative labs.",
    images: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    title: "Global Seminars",
    desc: "Hosting world leaders, tech giants, and visionaries every week.",
    images: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop"
    ]
  }
];

export default function CampusCarousel() {
  const [indices, setIndices] = useState([0, 0, 0, 0]);

  const nextSlide = (sectionIndex: number) => {
    const maxIndex = CAROUSEL_DATA[sectionIndex].images.length - 1;
    setIndices((prev) => {
      const newIndices = [...prev];
      newIndices[sectionIndex] = newIndices[sectionIndex] === maxIndex ? 0 : newIndices[sectionIndex] + 1;
      return newIndices;
    });
  };

  const prevSlide = (sectionIndex: number) => {
    const maxIndex = CAROUSEL_DATA[sectionIndex].images.length - 1;
    setIndices((prev) => {
      const newIndices = [...prev];
      newIndices[sectionIndex] = newIndices[sectionIndex] === 0 ? maxIndex : newIndices[sectionIndex] - 1;
      return newIndices;
    });
  };

  return (
    <section className="py-32">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <h2 className="font-headline-xl text-headline-xl text-on-background mb-12">Life on Campus</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CAROUSEL_DATA.map((section, idx) => (
            <div key={idx} className="relative rounded-3xl overflow-hidden group h-[400px]">
              <img 
                src={section.images[indices[idx]]} 
                alt={section.title}
                className="w-full h-full object-cover transition-transform duration-700" 
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 to-transparent p-10 flex flex-col justify-end pointer-events-none">
                <h4 className="text-white font-headline-lg text-headline-lg mb-2">{section.title}</h4>
                <p className="text-white/80 text-body-md max-w-lg">{section.desc}</p>
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={() => prevSlide(idx)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cyan-400 text-white flex items-center justify-center hover:bg-cyan-500 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 z-10"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button 
                onClick={() => nextSlide(idx)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cyan-400 text-white flex items-center justify-center hover:bg-cyan-500 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 z-10"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
              
              {/* Pagination indicators */}
              <div className="absolute top-4 right-4 flex gap-2">
                {section.images.map((_, dotIdx) => (
                  <div 
                    key={dotIdx} 
                    className={`w-2 h-2 rounded-full transition-all ${indices[idx] === dotIdx ? "bg-cyan-400 w-4" : "bg-white/50"}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
