"use client";

import { useState } from "react";
import { USERS } from "@/data/mockData";
import { SwipeCard } from "@/components/cards/SwipeCard";
import { X, Star, Heart, RotateCw } from "lucide-react";
import { AnimatePresence } from "framer-motion";

export default function DiscoverPage() {
  const [users, setUsers] = useState(USERS);

  const removeUser = (id: string) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  const handleSwipe = (direction: "left" | "right") => {
    if (users.length === 0) return;
    const user = users[0];
    // Logic for like/dislike API would go here
    console.log(`Swiped ${direction} on ${user.name}`);
    removeUser(user.id);
  };

  return (
    <div className="flex h-[calc(100vh-80px)] md:h-screen flex-col items-center justify-center overflow-hidden bg-background p-4 pt-20 md:pt-4 pb-24 md:pb-4">
      {/* Card Deck Container */}
      <div className="relative h-full max-h-[650px] w-full max-w-md">
        <AnimatePresence mode="popLayout">
          {users.length === 0 && (
            <div className="flex h-full items-center justify-center text-center">
              <div className="p-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                    <RotateCw className="animate-spin text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white">No more profiles</h3>
                <p className="mt-2 text-gray-500">Check back later for new people nearby.</p>
                <button 
                    onClick={() => setUsers(USERS)}
                    className="mt-6 px-6 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-200"
                >
                    Reset Demo
                </button>
              </div>
            </div>
          )}

          {users.map((user, index) => {
            // Only render top 2 cards for performance
            if (index > 1) return null;
            const isTop = index === 0;

            return (
              <SwipeCard
                key={user.id}
                user={user}
                onSwipe={handleSwipe}
                style={{ 
                    zIndex: isTop ? 10 : 5,
                    scale: isTop ? 1 : 0.95,
                    y: isTop ? 0 : 10,
                }}
              />
            );
          }).reverse()} 
          {/* Reverse so first element in array (top card) is last in DOM (highest visually by default without z-index, but we use z-index too) */}
        </AnimatePresence>
        
         {/* Controls - Floating Desktop / Bottom Mobile */}
        {users.length > 0 && (
            <div className="absolute -bottom-24 md:bottom-4 left-0 right-0 flex items-center justify-center gap-6 pb-6">
            <button 
                onClick={() => handleSwipe("left")}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1A1A1A] border border-[#E91E63]/20 text-[#E91E63] shadow-lg transition-transform hover:scale-110 active:scale-95"
            >
                <X size={28} strokeWidth={3} />
            </button>
            
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1A1A1A] border border-[#5C6BC0]/20 text-[#5C6BC0] shadow-lg transition-transform hover:scale-110 active:scale-95">
                <Star size={20} strokeWidth={3} className="fill-current" />
            </button>

            <button 
                onClick={() => handleSwipe("right")}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tl from-[#E91E63] to-[#FF6090] text-white shadow-lg shadow-primary/30 transition-transform hover:scale-110 active:scale-95"
            >
                <Heart size={28} className="fill-current" />
            </button>
            </div>
        )}
      </div>

    </div>
  );
}
