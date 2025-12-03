"use client";

import { CURRENT_USER } from "@/data/mockData";
import Image from "next/image";
import { Settings, Edit3, MapPin, Shield } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header/Cover */}
      <div className="relative h-80 w-full">
        <Image
          src={CURRENT_USER.avatar}
          alt="Cover"
          fill
          className="object-cover opacity-60 mask-gradient-b"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start">
            <button className="p-2 rounded-full bg-black/20 backdrop-blur-md text-white">
                <Settings size={24} />
            </button>
        </div>

        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <div className="h-32 w-32 rounded-full p-1 bg-background relative">
                 <div className="h-full w-full rounded-full overflow-hidden relative">
                    <Image src={CURRENT_USER.avatar} alt="Avatar" fill className="object-cover" />
                 </div>
                 <div className="absolute bottom-1 right-1 bg-primary p-2 rounded-full border-4 border-background">
                    <Edit3 size={14} className="text-white" />
                 </div>
            </div>
        </div>
      </div>

      {/* Content */}
      <div className="mt-20 px-6 text-center">
        <h1 className="text-2xl font-bold text-white items-center justify-center gap-2 flex">
            {CURRENT_USER.name}, 26
            <Shield size={16} className="text-blue-500 fill-blue-500/20" />
        </h1>
        <p className="text-gray-400 mt-1">Art Director</p>
        
        {/* Stats */}
        <div className="mt-8 flex justify-center gap-8 border-y border-white/5 py-6">
            <div className="text-center">
                <div className="text-xl font-bold text-white">85%</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">Complete</div>
            </div>
            <div className="text-center">
                <div className="text-xl font-bold text-white">12</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">Matches</div>
            </div>
             <div className="text-center">
                <div className="text-xl font-bold text-white">342</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">Likes</div>
            </div>
        </div>

        {/* Bio */}
        <div className="mt-8 text-left">
             <h3 className="text-lg font-semibold text-white mb-2">About</h3>
             <p className="text-gray-400 leading-relaxed">
                 Passionate about everything creative. Love spending weekends at art galleries or hiking in the mountains. Always looking for the next adventure.
             </p>
        </div>

        {/* Interests */}
        <div className="mt-8 text-left">
             <h3 className="text-lg font-semibold text-white mb-3">Interests</h3>
             <div className="flex flex-wrap gap-2">
                 {["Art", "Design", "Hiking", "Photography", "Music"].map(tag => (
                     <span key={tag} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white">
                         {tag}
                     </span>
                 ))}
             </div>
        </div>
        
        {/* Location */}
         <div className="mt-8 text-left flex items-center gap-2 text-gray-400">
             <MapPin size={18} />
             <span>San Francisco, CA</span>
         </div>

         {/* Subscription Premium Card */}
         <div className="mt-8 rounded-2xl bg-gradient-to-r from-primary/20 to-purple-600/20 p-6 border border-primary/20 text-left relative overflow-hidden">
             <div className="relative z-10">
                 <h3 className="text-xl font-bold text-white mb-1">Go Premium</h3>
                 <p className="text-white/70 text-sm mb-4 max-w-[200px]">See who liked you and get unlimited swipes.</p>
                 <button className="px-6 py-2 bg-white text-black rounded-full font-bold text-sm">
                     Upgrade
                 </button>
             </div>
             <div className="absolute -right-4 -bottom-4 h-32 w-32 bg-gradient-to-br from-primary to-purple-600 rounded-full blur-2xl opacity-40" />
         </div>
      </div>
    </div>
  );
}
