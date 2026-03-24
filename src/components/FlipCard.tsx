import { useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';

type FlipCardProps = {
    title: string,
    description: string,
    image_path: string,
}

const FlipCard:React.FC<FlipCardProps> = ({title, description, image_path}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="flex justify-center items-center w-fit cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="relative w-96 h-fit [perspective:1000px]">
        <motion.div
          className="relative w-full h-full [transform-style:preserve-3d]"
          initial={{ rotateY: 180 }}
          whileInView={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.9}}
        >
          <div className="group overflow-hidden rounded-xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl">

            <Image
                className="w-full h-full rounded-xl"
                src={image_path}
                width={900}
                height={600}
                alt="Picture of SASE Meeting"
            />

            <div className="rounded-xl absolute inset-0 flex items-center bg-black justify-center bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-40">
                <span className="font-bebas text-4xl text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {title}
                </span>
            </div>
          </div>
          <div className="flex-col px-4 absolute inset-0 w-full h-full bg-slate-800 text-white text-xl flex items-start justify-center rounded-xl shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className="text-2xl font-bold pb-2">
              <div className="pr-4 pb-1">
                {title}
              </div>
              <div className="w-full min-h-[2px] bg-slate-100"></div>
            </div>
            {description}
          </div>
        </motion.div>
      </div>
    </div>
  ) 
};

export default FlipCard;