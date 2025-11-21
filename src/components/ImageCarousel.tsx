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
        if (!carouselRef.current || isCommitteeCarouselDragging) return;

        const containerWidth = carouselRef.current.offsetWidth;
        // The width of a single item is not always containerWidth due to `lg:w-1/2`
        const itemWidth = carouselRef.current.children[0]?.children[0]?.clientWidth ?? 0;
        if (itemWidth === 0) return;

        const totalWidth = itemWidth * items.length;
        const duration = items.length * 5; // Adjust this for speed (e.g., 5 seconds per item)

        const controls = animate(x, [-totalWidth, 0], {
            ease: "linear",
            duration: duration,
            repeat: Infinity,
        });

        return () => controls.stop();
    }, [isCommitteeCarouselDragging, items.length, x]);

  

  return (
    <div ref={carouselRef} className={`flex relative overflow-hidden w-full lg:w-[100%] ${className}`}>
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
          <div key={id} className="shrink-0 lg:w-1/2 w-full h-[50vh]">
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
