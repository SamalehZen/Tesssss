"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { X, Check } from "lucide-react";
import type { User } from "@/data/mockData";

interface DateRequestModalProps {
  user: User;
  onAccept: () => void;
  onDecline: () => void;
}

export function DateRequestModal({ user, onAccept, onDecline }: DateRequestModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.9 }}
      className="absolute bottom-24 left-4 right-4 md:left-[calc(50%-160px)] md:w-80 z-40"
    >
      <div className="glass rounded-3xl p-5 shadow-2xl border border-white/10 bg-[#1A1A1A]/80 backdrop-blur-2xl relative overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <span className="text-xs font-bold text-primary tracking-wider uppercase">Date request</span>
          
          <div className="mt-4 flex items-center gap-4">
            <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-white/20 relative">
              <Image
                src={user.photos[0]}
                alt={user.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                {user.name} <span className="text-lg font-light opacity-80">{user.age}</span>
              </h3>
              <p className="text-sm text-gray-400">Accept request?</p>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <button
              onClick={onDecline}
              className="flex-1 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white transition-all flex items-center justify-center"
            >
              <X size={24} />
            </button>
            <button
              onClick={onAccept}
              className="flex-1 h-12 rounded-2xl bg-[#5C6BC0] text-white hover:bg-[#3F51B5] shadow-[0_0_20px_rgba(92,107,192,0.4)] transition-all flex items-center justify-center"
            >
              <Check size={24} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
