"use client";

import { Bell, Lock, Moon, Globe, ChevronRight } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pb-24">
      <h1 className="mb-8 text-2xl font-bold text-white">Settings</h1>

      <div className="space-y-6">
        {/* Account Settings */}
        <section>
          <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-500">Account</h2>
          <div className="overflow-hidden rounded-2xl bg-[#1A1A1A]">
            <div className="flex items-center justify-between px-4 py-4 hover:bg-white/5 cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
                  <Globe size={20} />
                </div>
                <div>
                    <div className="text-white font-medium">Language</div>
                    <div className="text-xs text-gray-500">English</div>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-600" />
            </div>
             <div className="h-px w-full bg-white/5" />
            <div className="flex items-center justify-between px-4 py-4 hover:bg-white/5 cursor-pointer">
               <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10 text-purple-500">
                  <Moon size={20} />
                </div>
                 <div className="text-white font-medium">Dark Mode</div>
               </div>
              <div className="h-6 w-11 rounded-full bg-primary p-1 relative">
                  <div className="h-4 w-4 rounded-full bg-white absolute right-1" />
              </div>
            </div>
          </div>
        </section>

        {/* Privacy */}
        <section>
          <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-500">Privacy & Notifications</h2>
          <div className="overflow-hidden rounded-2xl bg-[#1A1A1A]">
             <div className="flex items-center justify-between px-4 py-4 hover:bg-white/5 cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                  <Bell size={20} />
                </div>
                <span className="text-white font-medium">Push Notifications</span>
              </div>
               <div className="h-6 w-11 rounded-full bg-primary p-1 relative">
                  <div className="h-4 w-4 rounded-full bg-white absolute right-1" />
              </div>
            </div>
            <div className="h-px w-full bg-white/5" />
            <div className="flex items-center justify-between px-4 py-4 hover:bg-white/5 cursor-pointer">
               <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10 text-green-500">
                  <Lock size={20} />
                </div>
                <span className="text-white font-medium">Privacy Settings</span>
              </div>
              <ChevronRight size={20} className="text-gray-600" />
            </div>
          </div>
        </section>
        
        <div className="pt-8 text-center">
            <button className="text-red-500 font-medium text-sm hover:underline">
                Log Out
            </button>
            <p className="mt-4 text-xs text-gray-600">CapyDate v1.0.0</p>
        </div>
      </div>
    </div>
  );
}
