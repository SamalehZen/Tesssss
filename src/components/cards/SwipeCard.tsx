"use client";

import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import type { MotionStyle } from "framer-motion";
import Image from "next/image";
import { MapPin, Briefcase } from "lucide-react";
import { useState, type MouseEvent as ReactMouseEvent } from "react";
import type { User } from "@/data/mockData";

interface SwipeCardProps {
  user: User;
  onSwipe: (direction: "left" | "right") => void;
  style?: MotionStyle;
}

export function SwipeCard({ user, onSwipe, style }: SwipeCardProps) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x > 100) {
      onSwipe("right");
    } else if (info.offset.x < -100) {
      onSwipe("left");
    }
  };

  const nextPhoto = (e: ReactMouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (photoIndex < user.photos.length - 1) setPhotoIndex((prev) => prev + 1);
  };

  const prevPhoto = (e: ReactMouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (photoIndex > 0) setPhotoIndex((prev) => prev - 1);
  };

  return (
    <motion.div
      style={{ x, rotate, opacity, ...style }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      className="absolute inset-0 h-full w-full rounded-3xl overflow-hidden shadow-2xl bg-black origin-bottom cursor-grab active:cursor-grabbing"
    >
      {/* Photo */}
      <div className="relative h-full w-full">
        <Image
          src={user.photos[photoIndex]}
          alt={user.name}
          fill
          className="object-cover will-change-transform"
          priority
          draggable={false}
        />
        
        {/* Navigation Zones for Photos */}
        <div className="absolute inset-0 flex">
            <div className="flex-1 h-full" onClick={prevPhoto} />
            <div className="flex-1 h-full" onClick={nextPhoto} />
        </div>

        {/* Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-3/5 bg-gradient-to-t from-[#000000] via-black/60 to-transparent" />
        
        {/* Photo Indicators */}
        <div className="absolute top-4 left-4 right-4 flex gap-1.5 z-20">
            {user.photos.map((_, i) => (
                <div 
                    key={i} 
                    className={`h-1 rounded-full flex-1 transition-colors ${i === photoIndex ? "bg-white" : "bg-white/30"}`} 
                />
            ))}
        </div>
      </div>

      {/* Info Block */}
      <div className="absolute bottom-0 left-0 right-0 p-6 pb-24 md:pb-6 pointer-events-none">
        <div className="flex items-baseline gap-3">
          <h2 className="text-4xl font-bold text-white">{user.name}</h2>
          <span className="text-2xl font-light text-white/90">{user.age}</span>
        </div>
        
        <div className="mt-2 flex flex-col gap-1 text-white/80 text-sm">
            <div className="flex items-center gap-2">
                <Briefcase size={16} />
                <span>{user.profession}</span>
            </div>
            {user.distance && (
                <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{user.distance} km away</span>
                </div>
            )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {user.interests.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <p className="mt-4 text-white/70 leading-relaxed line-clamp-2">
            {user.bio}
        </p>
      </div>
      
      {/* Like/Nope overlays */}
      <motion.div 
        style={{ opacity: useTransform(x, [20, 100], [0, 1]) }}
        className="absolute top-10 left-8 border-4 border-emerald-500 rounded-xl px-4 py-2 -rotate-12 z-30"
      >
          <span className="text-4xl font-bold text-emerald-500 uppercase tracking-widest">Like</span>
      </motion.div>

      <motion.div 
        style={{ opacity: useTransform(x, [-20, -100], [0, 1]) }}
        className="absolute top-10 right-8 border-4 border-red-500 rounded-xl px-4 py-2 rotate-12 z-30"
      >
          <span className="text-4xl font-bold text-red-500 uppercase tracking-widest">Nope</span>
      </motion.div>

    </motion.div>
  );
}
