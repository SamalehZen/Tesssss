"use client";

import { CHATS } from "@/data/mockData";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

export default function MessagesPage() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pb-24">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Messages</h1>
        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5">
            <Search size={20} className="text-gray-400" />
        </div>
      </header>

      {/* New Matches Row */}
      <div className="mb-8">
        <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-500">New Matches</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
            {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex flex-col items-center gap-2 shrink-0">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-purple-600 p-[2px]">
                        <div className="h-full w-full rounded-full border-2 border-black overflow-hidden relative bg-gray-800">
                           <Image src={`https://images.unsplash.com/photo-${1500000000000 + i * 1000}?w=100`} alt="Match" fill className="object-cover" />
                        </div>
                    </div>
                    <span className="text-xs font-medium text-white">Name</span>
                </div>
            ))}
        </div>
      </div>

      {/* Messages List */}
      <div className="space-y-4">
        <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-500">Messages</h2>
        
        {CHATS.map((chat, index) => (
          <Link
            key={index}
            href={`/messages/${chat.user.id}`}
            className="flex items-center gap-4 rounded-2xl bg-[#1A1A1A] p-4 transition-colors hover:bg-[#252525]"
          >
            <div className="relative">
              <div className="h-14 w-14 overflow-hidden rounded-full">
                <Image
                  src={chat.user.photos[0]}
                  alt={chat.user.name}
                  fill
                  className="object-cover"
                />
              </div>
              {chat.user.isOnline && (
                <div className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-[#1A1A1A] bg-status-active" />
              )}
            </div>

            <div className="flex-1 overflow-hidden">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-white">{chat.user.name}</h3>
                <span className="text-xs text-gray-500">{chat.timestamp}</span>
              </div>
              <p className={`truncate text-sm mt-0.5 ${chat.unread > 0 ? "text-white font-medium" : "text-gray-400"}`}>
                {chat.lastMessage}
              </p>
            </div>

            {chat.unread > 0 && (
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                {chat.unread}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
