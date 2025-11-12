import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate, PanInfo } from "framer-motion";

interface CarouselProps {
  className?: string; 
  items: string[];
  alt: string;
}


const AutoCarousel:React.FC<CarouselProps> = ({className = '', items, alt}) => {
  const [committeeCarouselIndex, setCommitteeCarouselIndex] = useState<number>(0);
      const [isCommitteeCarouselDragging, setCommitteeCarouselDragging] = useState<boolean>(false);
      const x = useMotionValue(0);
      const carouselRef = useRef<HTMLDivElement>(null);
      const extendedPictures = [...items, ...items];
  
      function handleDrag(e: TouchEvent | MouseEvent | PointerEvent, info: PanInfo) {
          setCommitteeCarouselDragging(false);
          if (!carouselRef.current) return;
  
          const containerWidth = carouselRef.current.offsetWidth;
          const offset = info.offset.x;
          const velocity = info.velocity.x;
          let newIndex = committeeCarouselIndex;
  
          if (Math.abs(velocity) > 500) {
              newIndex = velocity > 0 ? committeeCarouselIndex - 1 : committeeCarouselIndex + 1;
          } else if (Math.abs(offset) > containerWidth * 0.3) {
              newIndex = offset > 0 ? committeeCarouselIndex - 1 : committeeCarouselIndex + 1;
          }
  
          newIndex = Math.max(0, Math.min(items.length - 1, newIndex));
          setCommitteeCarouselIndex(newIndex);
      }
  
      useEffect(() => {
      if (!isCommitteeCarouselDragging && carouselRef.current) {
          const containerWidth = carouselRef.current.offsetWidth;
          const targetX = -committeeCarouselIndex * containerWidth;
  
          animate(x, targetX, {
          type: "spring",
          stiffness: 150,
          damping: 30,
          });
      }
      }, [committeeCarouselIndex, x, isCommitteeCarouselDragging]);
  
      
  
      useEffect(() => {
      if (!carouselRef.current) return;
      const containerWidth = carouselRef.current.offsetWidth;
      let currentIndex = 0;
  
      const interval = setInterval(() => {
          if (isCommitteeCarouselDragging) return;
  
          currentIndex += 1;
          if (currentIndex > items.length) {
              currentIndex = 1;
              x.set(0);
          }
  
          // Animate to the next image
          const targetX = -currentIndex * containerWidth;
          animate(x, targetX, {
              duration: 0.8,
              ease: "easeInOut",
          });
      }, 4000); 
  
      return () => clearInterval(interval);
  }, [x, isCommitteeCarouselDragging, items.length]);

  

  return (
    <div ref={carouselRef} className={`flex relative overflow-hidden w-full lg:w-[40%] ${className}`}>
      <motion.div
        className="flex"
        drag="x"
        dragElastic={0.2}
        dragMomentum={false}
        onDragStart={() => setCommitteeCarouselDragging(true)}
        onDragEnd={(e, info) => {handleDrag(e, info)}}
        style={{ x }}
      >
        {extendedPictures.map((item, id) => (
          <div key={id} className="shrink-0 w-full h-[50vh]">
            <img
              src={item}
              alt={`committee ${id}`}
              className="w-full h-full object-cover rounded-lg pointer-events-none"
              draggable={false}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AutoCarousel;
