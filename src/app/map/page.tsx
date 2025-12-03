"use client";

import { useState, useEffect } from "react";
import { IsometricMap } from "@/components/map/IsometricMap";
import { DateRequestModal } from "@/components/modals/DateRequestModal";
import { USERS, CURRENT_USER } from "@/data/mockData";
import { Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MapPage() {
  const [showRequest, setShowRequest] = useState(true);

  // For demo, select the second user as the requester
  const requester = USERS[1]; 

  useEffect(() => {
    // Simulate incoming request
    const timer = setTimeout(() => {
      setShowRequest(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen w-full bg-background overflow-hidden">
      {/* Map View */}
      <IsometricMap 
        users={USERS} 
        currentUser={CURRENT_USER} 
        onUserClick={(u) => console.log(u)} 
      />

      {/* Overlay Elements */}
      <AnimatePresence>
        {showRequest && (
          <DateRequestModal 
            user={requester} 
            onAccept={() => setShowRequest(false)} 
            onDecline={() => setShowRequest(false)} 
          />
        )}
      </AnimatePresence>

      {/* Floating Action Button (Send/Nav) - Bottom Right */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="absolute bottom-24 right-4 h-14 w-14 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-lg z-30"
      >
        <Send className="text-white -ml-1 translate-x-0.5" size={24} />
      </motion.button>
    </div>
  );
}
