"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Heart, MapPin, MessageCircle, User, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
  { icon: Home, label: "Discover", href: "/discover" },
  { icon: Heart, label: "Liked You", href: "/liked" },
  { icon: MapPin, label: "Map View", href: "/map" },
  { icon: MessageCircle, label: "Messages", href: "/messages" },
  { icon: User, label: "Profile", href: "/profile" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex h-screen w-64 flex-col border-r border-white/10 bg-[#0D0D0D] p-6 fixed left-0 top-0 z-50">
      <div className="mb-10 flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-secondary" />
        <span className="text-xl font-bold tracking-tight text-white">CapyDate</span>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center gap-4 rounded-xl px-4 py-3 transition-all",
                isActive
                  ? "bg-white/10 text-white"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              )}
            >
              <Icon
                size={22}
                className={cn(
                  "transition-colors",
                  isActive && item.label === "Liked You" ? "fill-primary text-primary" : ""
                )}
              />
              <span className="font-medium">{item.label}</span>
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="ml-auto h-2 w-2 rounded-full bg-primary"
                />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto space-y-2 pt-6 border-t border-white/10">
        <Link
          href="/settings"
          className="flex items-center gap-4 rounded-xl px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-white"
        >
          <Settings size={22} />
          <span className="font-medium">Settings</span>
        </Link>
      </div>
    </div>
  );
}
