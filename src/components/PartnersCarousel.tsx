"use client";

import { useState, useEffect } from "react";

const PARTNERS = [
  { name: "Google", src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Amazon", src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Cognizant", src: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg" },
  { name: "Deloitte", src: "https://w7.pngwing.com/pngs/83/491/png-transparent-deloitte-hd-logo.png" },
  { name: "ISRO", src: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Indian_Space_Research_Organisation_Logo.svg" },
  { name: "TCS", src: "https://cdn.imgbin.com/13/3/12/tata-consultancy-services-tcs-company-logo-80S8YXH3.jpg" },
  { name: "Infosys", src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
  { name: "IBM", src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Apple", src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Meta", src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
  { name: "Netflix", src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Oracle", src: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
  { name: "SAP", src: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" },
  { name: "Cisco", src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
  { name: "Intel", src: "https://e7.pngegg.com/pngimages/490/758/png-clipart-intel-logo-business-about-us-blue-cdr.png" },
  { name: "Accenture", src: "https://w7.pngwing.com/pngs/552/529/png-transparent-accenture-hd-logo-thumbnail.png" },
  { name: "Capgemini", src: "https://www.liblogo.com/img-logo/ca4474cc9c-capgemini-logo-capgemini-information-technology-company-kibo-commerce-partner.png" },
  { name: "Adobe", src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg" },
  { name: "Nvidia", src: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg" }
];

export default function PartnersCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4); 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(4);
      }
    };
    
    // Initial call
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(PARTNERS.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto border border-outline-variant/30 rounded-[2rem] p-6 md:p-12 lg:p-16 flex flex-col items-center bg-surface-container-lowest">
      
      {/* Logos Container */}
      <div className="overflow-hidden w-full h-24 md:h-32 relative px-4 md:px-0">
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: totalPages }).map((_, pageIdx) => (
            <div key={pageIdx} className="w-full flex-shrink-0 flex items-center justify-around h-full gap-2 md:gap-4">
              {PARTNERS.slice(pageIdx * itemsPerPage, (pageIdx + 1) * itemsPerPage).map((partner, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center justify-center p-2 md:p-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={partner.src} 
                    alt={partner.name} 
                    className="max-w-[80px] md:max-w-[120px] max-h-[40px] md:max-h-[60px] object-contain opacity-70 hover:opacity-100 transition-opacity" 
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-outline-variant shadow-lg flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors z-10"
        aria-label="Previous partners"
      >
        <span className="material-symbols-outlined text-sm md:text-base">chevron_left</span>
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-outline-variant shadow-lg flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors z-10"
        aria-label="Next partners"
      >
        <span className="material-symbols-outlined text-sm md:text-base">chevron_right</span>
      </button>

      {/* Pagination Dots */}
      <div className="flex flex-wrap justify-center gap-2 mt-6 md:mt-8">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === currentIndex ? "bg-primary w-6 md:w-8" : "bg-outline-variant w-2 hover:bg-primary/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
