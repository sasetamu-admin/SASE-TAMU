import { useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import { CiCircleInfo } from "react-icons/ci";

type FlipCardProps = {
    title: string,
    description: string,
    image_path: string,
}

const FlipCard:React.FC<FlipCardProps> = ({title, description, image_path}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex justify-center items-center w-fit cursor-pointer">
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square">
        <motion.div
          className="relative w-full h-full [transform-style:preserve-3d]"
          initial={{ rotateY: 180 }}
          whileInView={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.9}}
        >
          <div className="group h-full overflow-hidden rounded-xl bg-khakiBrown shadow-xl transition-all duration-300 hover:shadow-2xl">
          <CiCircleInfo
            size={24}
            strokeWidth={0.7}
            onClick={() => setIsFlipped(!isFlipped)}
            className="peer absolute right-2 top-2 z-20 cursor-pointer text-white"
          />            

              <Image
                className="w-full h-full object-cover rounded-xl"
                src={image_path}
                width={1200}
                height={1200}
                alt="Picture of SASE Meeting"
            />
            <div className={`rounded-xl absolute inset-0 flex flex-col items-start justify-center bg-slate-900/80 p-6 text-white transition-opacity duration-300 peer-hover:opacity-100 ${isFlipped ? "opacity-100" : "opacity-0"}`}>
              <div className="w-full">
                <h3 className="text-2xl font-bold pb-1">{title}</h3>
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