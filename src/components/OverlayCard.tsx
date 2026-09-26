import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CiCircleInfo } from "react-icons/ci";

type FlipCardProps = {
  title: string;
  description: string;
  image_path: string;
};

const FlipCard: React.FC<FlipCardProps> = ({ title, description, image_path }) => {
  // Only controls the description overlay (tap-to-reveal on mobile).
  // It no longer touches rotation — that was the reverse-flip bug.
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex w-fit cursor-pointer items-center justify-center">
      <div className="relative aspect-square w-full max-w-xs sm:max-w-sm md:max-w-md">
        {/* Rotation is ONLY the one-time flip-in when the card scrolls into view */}
        <motion.div
          className="relative h-full w-full [transform-style:preserve-3d]"
          initial={{ rotateY: 180 }}
          whileInView={{ rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="group h-full overflow-hidden rounded-xl bg-khakiBrown shadow-xl transition-all duration-300 hover:shadow-2xl">
            <CiCircleInfo
              size={24}
              strokeWidth={0.7}
              onClick={() => setIsFlipped(!isFlipped)}
              className="peer absolute right-2 top-2 z-20 cursor-pointer text-white"
            />

            <Image
              className="h-full w-full rounded-xl object-cover"
              src={image_path}
              width={1200}
              height={1200}
              alt="Picture of SASE Meeting"
            />
            <div
              className={`absolute inset-0 flex flex-col items-start justify-center rounded-xl bg-slate-900/80 p-6 text-white transition-opacity duration-300 md:peer-hover:opacity-100 ${
                isFlipped ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="w-full">
                <h3 className="pb-1 text-2xl font-bold">{title}</h3>
                <div className="mb-3 h-[2px] w-full bg-slate-100 opacity-50"></div>
              </div>
              <p className="text-lg leading-relaxed">{description}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FlipCard;