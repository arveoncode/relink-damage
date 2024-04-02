import React from "react";

interface GridSmallBackground {
  children: React.ReactNode;
}

// from https://ui.aceternity.com/components/grid-and-dot-backgrounds
export function GridSmallBackground({ children }: GridSmallBackground) {
  return (
    <div className="h-full w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]">
      {children}
    </div>
  );
}
