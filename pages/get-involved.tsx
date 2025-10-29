import React, { useEffect, useRef, useState } from 'react';
import { NavBar } from '~/components/NavBar';
import Image from "next/image";
import { animate, motion, PanInfo, useMotionValue } from "framer-motion";
import { Footer } from '~/components/Footer';
import { MdArrowForwardIos } from "react-icons/md";
import AutoCarousel from '~/components/ImageCarousel';

const GetInvolvedPage: React.FC = () => {
    const [opacity, setOpacity] = useState<number>(1);
    useEffect(() => {
              const handleScroll = () => {
                  const scrollY = window.scrollY;
                  const fadePoint = 900; 
                  const newOpacity = Math.max(1 - scrollY / fadePoint, 0);
                  setOpacity(newOpacity);
              };
      
              window.addEventListener("scroll", handleScroll);
              return () => window.removeEventListener("scroll", handleScroll);
          }, []);

    return (
        <>
            <div className="z-40 w-full absolute">
                <NavBar transparent = {true}/>
            </div>
            <div className='bg-white font-source text-black overflow-x-hidden overflow-y-hidden'>
                <div className=' flex h-screen items-center justify-center bg-white bg-informational bg-cover bg-fixed bg-center' style={{ opacity, transition: "opacity 0.3s linear" }}>
                    <div className="animated animatedFadeInUp fadeInUp mt-12 hidden md:block">
                        <div className="text-center">
                            <div className="font-bebas text-8xl text-white">
                                Get Involved!
                            </div>
                        </div>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 100}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{ duration: 1.2, ease: "easeInOut"}}
                    viewport={{ once: true }}
                    className = "h-fit bg-white flex flex-col p-4 items-center"
                >
                    <div className = "bg-emerald-100 bg-gradient-to-r from-emerald-100 to-slate-50 w-full my-2 flex flex-col items-start p-2 rounded-xl">
                        <div className='flex flex-row items-center'>
                            <div className = "text-black font-bebas text-5xl font-bold my-2 ml-2 tracking-wide">
                                Interested in Event Planning and Leadership?
                            </div>
                            <motion.div className = "text-sky-700 font-bebas text-5xl font-bold my-2 ml-2 tracking-wide hover:text-6xl hover:text-sky-800 transition-all duration-500 ease-in-out"
                                whileHover={{ rotateZ: [0, 50, -50, 30, -30, 0], transition: { duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "mirror"}}} 
                                style={{ perspective: 600 }}
                                animate={{ rotateZ: 0 }}
                                transition={{duration: 0.4, ease: "easeInOut"}}
                            >
                                Join SASE Committee!
                            </motion.div>
                        </div>
                        <motion.div 
                            initial={{ opacity: 0}}
                            whileInView={{ opacity: 1}}
                            transition={{ duration: 1.2, ease: "easeInOut"}}
                            viewport={{ once: true }}
                        className = "hidden sm:flex text-black font-bebas text-5xl font-bold my-2 flex-row justify-between ">
                            <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2, ease: "easeInOut"}}>
                                <Image
                                    className="w-full rounded-xl px-2"
                                    src="/scrc.jpg"
                                    width={440}
                                    height={330}
                                    alt="Picture of SASE SCRC"
                                />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2, ease: "easeInOut"}}>
                                <Image
                                    className="w-full rounded-xl px-2"
                                    src="/scrc.jpg"
                                    width={440}
                                    height={330}
                                    alt="Picture of SASE SCRC"
                                />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2, ease: "easeInOut"}}>
                                <Image
                                    className="w-full rounded-xl px-2"
                                    src="/scrc.jpg"
                                    width={440}
                                    height={330}
                                    alt="Picture of SASE SCRC"
                                />
                            </motion.div>
                        </motion.div>
                        <AutoCarousel className='sm:hidden'/>
                        <motion.div 
                            initial={{ opacity: 0}}
                            whileInView={{ opacity: 1}}
                            transition={{ duration: 1.2, ease: "easeInOut"}}
                            viewport={{ once: true }}
                            //className='flex flex-row w-full justify-evenly m-1'
                            className='flex flex-col md:flex-row w-full justify-evenly m-1 gap-4'
                        >
                            <div className='flex flex-col w-[50%] border-2 border-emerald-300 p-4 mx-2 rounded-md'>
                                <div className='text-black font-bebas text-3xl'>
                                    Responsibilities
                                </div>
                                <div className='flex flex-row items-center'>
                                    <MdArrowForwardIos size={20} className='text-emerald-900'/>
                                    <div className='text-xl ml-2'>
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                                    </div>
                                </div>
                                <div className='flex flex-row items-center'>
                                    <MdArrowForwardIos size={20} className='text-emerald-900'/>
                                    <div className='text-xl ml-2'>
                                        Quisque faucibus ex sapien vitae pellentesque
                                    </div>
                                </div>
                                <div className='flex flex-row items-center'>
                                    <MdArrowForwardIos size={20} className='text-emerald-900'/>
                                    <div className='text-xl ml-2'>
                                        Tempus leo eu aenean sed diam urna tempor. 
                                    </div>
                                </div>
                                <div className='flex flex-row items-center'>
                                    <MdArrowForwardIos size={20} className='text-emerald-900'/>
                                    <div className='text-xl ml-2'>
                                        Ut hendrerit semper vel class aptent taciti sociosqu. 
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col w-[50%] border-2 border-emerald-300 p-4 mx-2 rounded-md'>
                                <div className='text-black font-bebas text-3xl '>
                                    Benefits
                                </div>
                                <div className='flex flex-row items-center'>
                                    <MdArrowForwardIos size={20} className='text-emerald-900'/>
                                    <div className='text-xl ml-2'>
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                                    </div>
                                </div>
                                <div className='flex flex-row items-center'>
                                    <MdArrowForwardIos size={20} className='text-emerald-900'/>
                                    <div className='text-xl ml-2'>
                                        Quisque faucibus ex sapien vitae pellentesque
                                    </div>
                                </div>
                                <div className='flex flex-row items-center'>
                                    <MdArrowForwardIos size={20} className='text-emerald-900'/>
                                    <div className='text-xl ml-2'>
                                        Tempus leo eu aenean sed diam urna tempor. 
                                    </div>
                                </div>
                                <div className='flex flex-row items-center'>
                                    <MdArrowForwardIos size={20} className='text-emerald-900'/>
                                    <div className='text-xl ml-2'>
                                        Ut hendrerit semper vel class aptent taciti sociosqu. 
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0}}
                            whileInView={{ opacity: 1}}
                            transition={{ duration: 1.2, ease: "easeInOut"}}
                            viewport={{ once: true }}
                            className='flex flex-row items-center justify-center h-fit w-full py-3'
                        >
                            <button className="inline-flex h-12 w-[98.6%] items-center justify-center rounded-md border-2 border-sky-800 
                                bg-[linear-gradient(135deg,#047857,45%,#6ee7b7,55%,#d1fae5)] 
                                bg-[length:200%_100%] bg-[position:15%_0%] hover:bg-[position:75%_0%]
                                transition-all duration-700 ease-in-out 
                                px-6 font-bold text-white hover:text-black text-xl">
                                Application Link
                            </button>
                        </motion.div>
                    </div>
                    <div className = "bg-white w-full my-2 flex flex-col items-start p-2 rounded-xl">
                        <div className='flex flex-col items-start sm:items-center sm:flex-row'>
                            <div className = "text-black font-bebas text-5xl font-bold my-2 ml-2 tracking-wide">
                                Interested in Technical Marketing and Web-Dev?
                            </div>
                            <motion.div className = "text-emerald-700 font-bebas text-5xl font-bold my-2 ml-2 tracking-wide hover:text-6xl hover:text-emerald-800 transition-all duration-500 ease-in-out"
                                whileHover={{ rotateZ: [0, 50, -50, 30, -30, 0], transition: { duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "mirror"}}} 
                                style={{ perspective: 600 }}
                                animate={{ rotateZ: 0 }}
                                transition={{duration: 0.4, ease: "easeInOut"}}
                            >
                                Join Design Team!
                            </motion.div>
                        </div>
                        <div className='flex flex-col sm:flex-row items-start pl-2'>
                            <AutoCarousel/>
                            <div className='flex flex-col items-start'>
                                <div className = "text-black font-bebas text-2xl font-bold my-2 ml-2 tracking-wide">
                                    Description
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </motion.div>
            </div>
            <div className="flex h-96 items-center justify-center bg-white bg-officer bg-cover bg-fixed bg-center md:block"></div>
            <Footer />
        </>
    );
};

export default GetInvolvedPage;

