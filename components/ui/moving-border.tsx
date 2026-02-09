"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function MovingBorder({
  children,
  duration = 2000,
  className,
  containerClassName,
  borderClassName,
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl p-[1px]",
        containerClassName
      )}
    >
      <motion.div
        className={cn(
          "absolute inset-0 rounded-2xl",
          borderClassName
        )}
        style={{
          background:
            "linear-gradient(90deg, #FF6B35, #00167a, #FF6B35, #00167a)",
          backgroundSize: "400% 400%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: duration / 1000,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className={cn("relative h-full w-full rounded-2xl bg-gray-950", className)}>
        {children}
      </div>
    </div>
  );
}
