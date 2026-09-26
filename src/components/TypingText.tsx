import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type TypingTextProps = {
  text: string;
  speed?: number; // ms per character
  className?: string;
};

export const TypingText = ({ text, speed = 70, className = "" }: TypingTextProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || count >= text.length) return;
    const id = setTimeout(() => setCount((c) => c + 1), speed);
    return () => clearTimeout(id);
  }, [inView, count, text.length, speed]);

  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      <span className="sr-only">{text}</span>

      <span aria-hidden className="invisible">{text}</span>
      <span aria-hidden className="absolute inset-0 whitespace-nowrap">
        {text.slice(0, count)}
        <span className="ml-1 inline-block h-[0.85em] w-[0.08em] animate-pulse bg-sakura align-middle" />
      </span>
    </span>
  );
};