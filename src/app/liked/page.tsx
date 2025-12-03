"use client";

import { useState } from "react";
import Image from "next/image";
import { SlidersHorizontal } from "lucide-react";
import { LikedCard } from "@/components/cards/LikedCard";
import { USERS, CURRENT_USER } from "@/data/mockData";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const TABS = [
  { id: "all", label: "All", count: 12 },
  { id: "new", label: "New", count: 32 },
  { id: "nearby", label: "Nearby", count: 4 },
];

export default function LikedPage() {
  const [activeTab, setActiveTab] = useState("all");

  // Duplicate users to fill the grid for demo
  const displayUsers = [...USERS, ...USERS, ...USERS].slice(0, 12);

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pt- safe-top">
      {/* Header */}
      <header className="mb-6 flex items-center justify-between sticky top-0 z-30 bg-background/80 backdrop-blur:xl py-4 -mx-4 px-4 md:mx-0 md:px-0">
        <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-white/10 relative">
          <Image
            src={CURRENT_USER.avatar}
            alt="My Profile"
            fill
            className="object-cover"
          />
        </div>
        
        <h1 className="text-lg font-bold tracking-wide text-white">LIKED YOU</h1>
        
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-background-secondary text-white hover:bg-white/10 transition-colors">
          <SlidersHorizontal size={20} />
        </button>
      </header>

      {/* Tabs */}
      <div className="mb-8 flex gap-4 overflow-x-auto pb-2 hide-scrollbar">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-all whitespace-nowrap",
              activeTab === tab.id
                ? "bg-white text-black"
                : "bg-background-secondary text-text-secondary hover:bg-white/10"
            )}
          >
            {tab.label}
            <span
              className={cn(
                "ml-1 text-xs",
                activeTab === tab.id ? "text-black/60" : "text-text-secondary/60"
              )}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        {displayUsers.map((user, index) => (
          <LikedCard key={`${user.id}-${index}`} user={user} />
        ))}
      </motion.div>
    </div>
  );
}
