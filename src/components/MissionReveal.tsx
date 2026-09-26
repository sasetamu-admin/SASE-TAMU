import { motion, type Variants } from "framer-motion";

type Segment = { text: string; highlight?: boolean };

type MissionRevealProps = {
  segments: Segment[];
  className?: string;
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

const word: Variants = {
  hidden: { opacity: 0.12, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const MissionReveal = ({ segments, className = "" }: MissionRevealProps) => {
  return (
    <motion.p
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className={className}
    >
      {segments.flatMap((seg, si) =>
        seg.text
          .split(" ")
          .filter(Boolean)
          .map((w, wi) => (
            <motion.span
              key={`${si}-${wi}`}
              variants={word}
              className={`mr-[0.25em] inline-block ${
                seg.highlight ? "text-sakura" : "text-paper/60"
              }`}
            >
              {w}
            </motion.span>
          ))
      )}
    </motion.p>
  );
};