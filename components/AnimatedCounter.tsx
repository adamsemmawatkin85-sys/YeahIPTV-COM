"use client";
import { useEffect, useState, useRef } from "react";
import { animate } from "motion/react";
import { useInView } from "react-intersection-observer";

export default function AnimatedCounter({ 
  to, 
  suffix = "",
  decimals = 0
}: { 
  to: number, 
  suffix?: string,
  decimals?: number
}) {
  const [value, setValue] = useState(to);
  const hasAnimated = useRef(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      
      // Reset to 0 first
      setValue(0);
      
      // Then animate
      const animation = animate(0, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          setValue(latest);
        },
      });
      
      return () => animation.stop();
    }
  }, [inView, to]);

  let displayValue = Number(value).toFixed(decimals);
  if (suffix === "K+" && to >= 1000) {
    displayValue = (Number(value) / 1000).toFixed(0);
  }

  return <span ref={ref}>{displayValue}{suffix}</span>;
}