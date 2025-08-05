"use client";
import React from "react";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
      
      {/* Diagonal soft grid */}
      <div className="absolute inset-0 bg-[conic-gradient(at_top_left,_#f0f0f0_25%,_transparent_25%)] bg-[length:80px_80px] opacity-40 dark:opacity-10" />

      {/* Faded math symbols for visibility */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute text-[100px] font-bold text-black/10 dark:text-white/10 rotate-[-15deg] top-10 left-10">
          ∑
        </div>
        <div className="absolute text-[80px] font-bold text-black/10 dark:text-white/10 rotate-[10deg] bottom-20 right-20">
          ∫
        </div>
        <div className="absolute text-[90px] font-bold text-black/10 dark:text-white/10 rotate-[-5deg] top-1/3 left-1/2">
          πr²
        </div>
        <div className="absolute text-[70px] font-bold text-black/10 dark:text-white/10 rotate-[12deg] bottom-1/3 left-1/4">
          √x
        </div>
        <div className="absolute text-[60px] font-bold text-black/10 dark:text-white/10 rotate-[-8deg] top-[60%] right-1/3">
          x² + y²
        </div>
      </div>
    </div>
  );
};

export default Background;
