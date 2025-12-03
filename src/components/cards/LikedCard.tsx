"use client";

import Image from "next/image";
import { Heart, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import type { User } from "@/data/mockData";

interface LikedCardProps {
  user: User;
}

export function LikedCard({ user }: LikedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      className="relative aspect-[3/4] w-full overflow-hidden rounded-[24px] bg-background-secondary shadow-xl group cursor-pointer"
    >
      {/* Image */}
      <div className="absolute inset-0 h-full w-full">
        <Image
          src={user.photos[0]}
          alt={user.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/90" />
      </div>

      {/* Top Elements */}
      <div className="absolute top-3 left-3 right-3 flex flex-col gap-2">
        {/* Photo Progress Bars (Mocking 3 segments) */}
        <div className="flex gap-1">
          <div className="h-1 flex-1 rounded-full bg-white/80" />
          <div className="h-1 flex-1 rounded-full bg-white/30" />
          <div className="h-1 flex-1 rounded-full bg-white/30" />
        </div>

        {/* Active Badge */}
        {user.isOnline && (
          <div className="self-start rounded-full bg-black/40 backdrop-blur-md px-3 py-1 flex items-center gap-1.5 border border-white/10">
             <div className="h-2 w-2 rounded-full bg-status-active animate-pulse" />
             <span className="text-[10px] font-medium text-white tracking-wide uppercase">Active</span>
          </div>
        )}
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 pb-5">
        <div className="flex items-end justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white leading-tight">
              {user.name} <span className="text-2xl font-light opacity-90">{user.age}</span>
            </h3>
            <p className="mt-1 text-sm font-medium text-white/70 flex items-center gap-1">
               {user.distance} kilometers away
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
           <button className="flex-1 flex items-center justify-center h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-primary hover:border-primary transition-all active:scale-95">
              <MessageCircle size={20} className="fill-current" />
           </button>
           <button className="flex-1 flex items-center justify-center h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-primary hover:border-primary transition-all active:scale-95">
              <Heart size={20} className="" />
           </button>
        </div>
      </div>
    </motion.div>
  );
}

