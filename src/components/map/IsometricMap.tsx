"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { useMemo } from "react";
import type { User } from "@/data/mockData";

interface CurrentUser {
  id: string;
  name: string;
  avatar: string;
}

interface IsometricMapProps {
  users: User[];
  currentUser: CurrentUser;
  onUserClick: (user: User) => void;
}

export function IsometricMap({ users, currentUser, onUserClick }: IsometricMapProps) {
  const blocks = useMemo(
    () =>
      Array.from({ length: 16 }).map((_, i) => ({
        id: i,
      })),
    []
  );

  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] flex items-center justify-center perspective-[1500px]">
      {/* Isometric Plane */}
      <div className="relative w-[800px] h-[800px] iso-grid opacity-100 transform-style-3d">
        {/* Grid Pattern */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-8 p-20">
          {blocks.map((block) => (
            <div
              key={block.id}
              className="relative bg-[#252525] rounded-2xl shadow-2xl border border-white/5 transition-colors hover:bg-[#2A2A2A]"
              style={{ height: 120 }} // Uniform base for UI cleanliness, could randomize
            >
              {/* Top face highlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
            </div>
          ))}
        </div>

        {/* Users Layer - We counter-rotate these so they stand up straight */}
        <div className="absolute inset-0 pointer-events-none">
           {/* Current User (Center) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center pointer-events-auto">
              <motion.div
                 animate={{ boxShadow: ["0 0 0 0px rgba(233, 30, 99, 0.4)", "0 0 0 20px rgba(233, 30, 99, 0)"] }}
                 transition={{ repeat: Infinity, duration: 2 }}
                 className="w-16 h-16 rounded-full relative z-10 border-2 border-primary overflow-hidden"
              >
                <Image src={currentUser.avatar} alt="Me" fill className="object-cover" />
              </motion.div>
              <div className="mt-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-medium text-white whitespace-nowrap -rotate-[45deg] origin-center transform translate-y-2">
                  You are here
              </div>
            </div>

            {/* Other Users */}
            {users.slice(0, 4).map((user, idx) => {
                // Fixed positions for demo to match aesthetic
                const positions = [
                    { top: '25%', left: '30%' },
                    { top: '30%', left: '75%' },
                    { top: '70%', left: '25%' },
                    { top: '65%', left: '70%' },
                ];
                const pos = positions[idx];

                return (
                    <motion.div
                        key={user.id}
                        className="absolute flex flex-col items-center justify-center pointer-events-auto cursor-pointer z-10"
                        style={pos}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        onClick={() => onUserClick(user)}
                    >
                        <div className="relative">
                             {/* Avatar */}
                             <div className="w-12 h-12 rounded-full border-2 border-white/30 overflow-hidden bg-neutral-800">
                                 <Image src={user.photos[0]} alt={user.name} fill className="object-cover" />
                             </div>
                             
                             {/* Verified Badge */}
                             {user.isVerified && (
                                 <div className="absolute -top-1 -right-1 bg-blue-500 rounded-full p-0.5 border border-black">
                                     <CheckCircle2 size={10} className="text-white" />
                                 </div>
                             )}

                             {/* Message Bubble */}
                             <motion.div 
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 1 + idx * 0.5, type: "spring" }}
                                className="absolute -top-8 -right-12 bg-white text-black px-2 py-1 rounded-lg rounded-bl-none text-[10px] font-bold shadow-lg whitespace-nowrap min-w-[60px]"
                             >
                                 Hi...
                             </motion.div>
                        </div>
                    </motion.div>
                )
            })}
        </div>
      </div>
    </div>
  );
}
