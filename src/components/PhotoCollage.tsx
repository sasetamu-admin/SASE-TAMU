import Image from "next/image";
import { motion } from "framer-motion";

type Photo = {
  src: string;
  alt: string;
  position: string;
  rotate: number;
  from: { x: number; y: number };
};

const photos: Photo[] = [
  {
    src: "/NC2024.jpeg",
    alt: "SASE at National Conference 2024",
    position: "right-0 top-0 w-[55%] z-10",
    rotate: 5,
    from: { x: 60, y: -40 },
  },
  {
    src: "/LONESTAR.jpg",
    alt: "SASE at Lonestar",
    position: "left-0 top-[12%] w-[62%] z-20",
    rotate: -4,
    from: { x: -60, y: 30 },
  },
  {
    src: "/LANTERN.jpg",
    alt: "SASE lantern making social",
    position: "right-[6%] bottom-0 w-[48%] z-30",
    rotate: -2,
    from: { x: 40, y: 60 },
  },
];

export const PhotoCollage = () => {
  return (
    <div className="relative aspect-[5/4] w-full">
      <div className="pointer-events-none absolute inset-[15%] rounded-full bg-maroon/30 blur-3xl" />

      {photos.map((p, i) => (
        <motion.div
          key={p.src}
          initial={{ opacity: 0, x: p.from.x, y: p.from.y, rotate: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, y: 0, rotate: p.rotate, scale: 1 }}
          whileHover={{ scale: 1.05, rotate: 0, zIndex: 40 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: "easeOut" }}
          className={`absolute ${p.position}`}
        >
          <Image
            src={p.src}
            alt={p.alt}
            width={800}
            height={600}
            className="aspect-[4/3] w-full rounded-xl object-cover shadow-2xl ring-1 ring-paper/10"
          />
        </motion.div>
      ))}
    </div>
  );
};