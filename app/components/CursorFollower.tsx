// CustomCursor.tsx
import React, { useEffect, useRef } from "react";
import { initCursor } from "@/app/lib/cursor";

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (cursorRef.current) {
      initCursor(cursorRef.current);
    }
  }, []);

  return (
    <div
      ref={cursorRef}
      id="cursor"
      className="fixed w-6 h-6 bg-black/20 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-300 ease-out"
      style={{ transform: "translate(-50%, -50%)" }}
    ></div>
  );
};

export default CustomCursor;
