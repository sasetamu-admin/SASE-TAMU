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
                <NavBar/>
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
                    <div className="flex flex-col sm:flex-row items-start pl-2">
                        <AutoCarousel />
                        <div className="pl-4 pr-4 pt-4 md:w-1/2">
                            {/* <h1 className="font-bebas text-5xl">DESCRIPTION</h1> */}
                            <div className="pb-5 pt-5">
                                <div className="leading-relaxed text-lg text-gray-700">
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget augue in justo pretium dapibus. Nulla facilisi. Vivamus condimentum tortor in nunc cursus, a pretium libero laoreet. Suspendisse potenti. Mauris viverra, risus a feugiat fermentum, mauris odio luctus augue, sit amet interdum eros neque ac tortor. Duis id cursus elit. Sed id odio sit amet velit ultrices malesuada vel nec ipsum. Vivamus vitae bibendum ligula. Donec vitae ex vitae ipsum laoreet tincidunt sit amet ut nisi.
                                </div>
                                <br />
                                <div className="leading-relaxed text-lg text-gray-700">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget augue in justo pretium dapibus. Nulla facilisi. Vivamus condimentum tortor in nunc cursus, a pretium libero laoreet. Suspendisse potenti. Mauris viverra, risus a feugiat fermentum, mauris odio luctus augue, sit amet interdum eros neque ac tortor. Duis id cursus elit. Sed id odio sit amet velit ultrices malesuada vel nec ipsum. Vivamus vitae bibendum ligula. Donec vitae ex vitae ipsum laoreet tincidunt sit amet ut nisi.
                                </div>

                            </div>
                        </div>
                    </div>
                    </div>
                    <div className = "bg-white w-full my-2 flex flex-col items-start p-2 rounded-xl">
                        <div className='flex flex-col items-start sm:flex-row'>
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
                    <div className="flex flex-col sm:flex-row-reverse justify-end items-start pl-2 text-left">
                        <AutoCarousel />
                        <div className="pl-4 pr-4 pt-4 md:w-1/2">
                            <div className="pb-5 pt-5">
                                <div className="leading-relaxed text-lg text-gray-700">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget augue in justo pretium dapibus. Nulla facilisi. Vivamus condimentum tortor in nunc cursus, a pretium libero laoreet. Suspendisse potenti. Mauris viverra, risus a feugiat fermentum, mauris odio luctus augue, sit amet interdum eros neque ac tortor. Duis id cursus elit. Sed id odio sit amet velit ultrices malesuada vel nec ipsum. Vivamus vitae bibendum ligula. Donec vitae ex vitae ipsum laoreet tincidunt sit amet ut nisi.
                                </div>
                                <br />
                                <div className="leading-relaxed text-lg text-gray-700">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget augue in justo pretium dapibus. Nulla facilisi. Vivamus condimentum tortor in nunc cursus, a pretium libero laoreet. Suspendisse potenti. Mauris viverra, risus a feugiat fermentum, mauris odio luctus augue, sit amet interdum eros neque ac tortor. Duis id cursus elit. Sed id odio sit amet velit ultrices malesuada vel nec ipsum. Vivamus vitae bibendum ligula. Donec vitae ex vitae ipsum laoreet tincidunt sit amet ut nisi.
                                </div>
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