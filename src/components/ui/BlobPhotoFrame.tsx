"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Terminal } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

interface BlobPhotoFrameProps {
  imageSrc?: string;
  className?: string;
}

export const BlobPhotoFrame: React.FC<BlobPhotoFrameProps> = ({
  imageSrc = "/images/profile.jpg",
  className = "",
}) => {
  const [imageError, setImageError] = useState(false);
  const { content } = useLanguage();
  const { hero, navbar, ui } = content;

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 p-2">
        {/* Organic Animated Contour Border */}
        <div className="absolute inset-0 bg-tech-blue-100/70 dark:bg-slate-800/80 animate-blob shadow-md border-4 border-white dark:border-slate-800" />

        {/* Inner Organic Image Container */}
        <div className="relative w-full h-full rounded-[42%_58%_70%_30%/45%_45%_55%_55%] overflow-hidden bg-white/80 dark:bg-slate-900/80 flex items-center justify-center p-2.5">
          {!imageError ? (
            <div className="relative w-full h-full rounded-[38%_62%_63%_37%/41%_44%_56%_59%] overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src={imageSrc}
                alt={`${hero.fullName}, ${hero.degree}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 280px, 380px"
                priority
                onError={() => setImageError(true)}
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center p-6 bg-tech-navy-50 dark:bg-slate-800 w-full h-full rounded-[38%_62%_63%_37%/41%_44%_56%_59%] border border-tech-blue-100 dark:border-tech-blue-900">
              <div className="w-20 h-20 rounded-xl bg-tech-blue-600 flex items-center justify-center mb-3 text-white">
                <span className="text-2xl font-heading font-bold">{navbar.brandInitials}</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-tech-navy-800 dark:text-slate-100">
                {hero.fullName}
              </h3>
              <p className="text-xs font-medium text-tech-blue-600 dark:text-tech-blue-400 mt-1">
                {ui.avatarFallbackRole}
              </p>
              <div className="flex items-center gap-1 mt-2 text-tech-navy-500 dark:text-slate-400 text-xs">
                <Terminal className="w-3.5 h-3.5 text-tech-blue-500" />
                <span>{ui.avatarFallbackSpecialty}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
