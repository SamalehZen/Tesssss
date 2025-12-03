"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Heart, MapPin, MessageCircle, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
  { icon: Home, label: "Discover", href: "/discover" },
  { icon: Heart, label: "Liked", href: "/liked" },
  { icon: MapPin, label: "Map", href: "/map" },
  { icon: MessageCircle, label: "Messages", href: "/messages" },
  { icon: User, label: "Profile", href: "/profile" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <nav className="flex items-center justify-between rounded-2xl bg-[#1A1A1A]/90 px-6 py-4 backdrop-blur:xl shadow-lg border border-white/5">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative flex flex-col items-center justify-center transition-colors",
                isActive ? "text-white" : "text-gray-500"
              )}
            >
              <div className="relative">
                <Icon
                  size={24}
                  className={cn(
                    "transition-all duration-300",
                    isActive && item.label === "Liked" ? "fill-primary text-primary" : "",
                    isActive && item.label !== "Liked" ? "text-white" : ""
                  )}
                />
                {isActive && (
                  <motion.div
                    layoutId="nav-dot"
                    className="absolute -bottom-3 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary"
                  />
                )}
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
