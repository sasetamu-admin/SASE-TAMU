import React, { useEffect, useRef, useState } from 'react';
import { NavBar } from '~/components/NavBar';
import Image from "next/image";
import { animate, motion, PanInfo, useMotionValue } from "framer-motion";
import { Footer } from '~/components/Footer';
import { MdArrowForwardIos } from "react-icons/md";
import AutoCarousel from '~/components/ImageCarousel';

const GetInvolvedPage: React.FC = () => {
    const committeePictures = ["get-involved/halloween.JPG", "get-involved/halloween1.jpg", "get-involved/banquet.jpg","get-involved/brasil.jpeg", "get-involved/ban.jpeg"];
    const designTeamPictures = ["get-involved/Committee_Reveal.png", "get-involved/Design_Reveal.png", "get-involved/recap.png", "get-involved/recapp.png"];

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
                    <div className="animated animatedFadeInUp fadeInUp mt-12 block">
                        <div className="text-center font-bebas text-8xl text-white">
                            Get Involved!
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
                        <div className='flex flex-wrap flex-row w-full justify-start items-center'>
                            <div className = "text-black font-bebas text-5xl font-bold my-2 ml-2 tracking-wide">
                                Interested in Event Planning and leadership?
                            </div>
                            <motion.div className = "text-emerald-700 font-bebas text-5xl font-bold my-2 ml-2 tracking-wide hover:text-6xl hover:text-emerald-800 transition-all duration-500 ease-in-out"
                                whileHover={{ rotateZ: [0, 50, -50, 30, -30, 0], transition: { duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "mirror"}}} 
                                style={{ perspective: 600 }}
                                animate={{ rotateZ: 0 }}
                                transition={{duration: 0.4, ease: "easeInOut"}}
                            >
                                Join Committee!
                            </motion.div>
                        </div>
                        <div className="flex flex-col justify-start md:flex-row w-full items-center gap-x-32 gap-y-10">
                            <AutoCarousel items={committeePictures} alt = "Committee"/>
                            <div className="leading-relaxed md:w-2/5 text-lg text-center text-gray-700 bg-slate-200 p-4 rounded-lg">
                                You will bring SASE's biggest events to life! From planning to execution, you play a crucial role in creating unforgettable experiences for our members. Join us and be a part of the magic!
                            </div>
                        </div>
                    </div>
                    <div className = "bg-white w-full my-2 flex flex-col items-start p-2 rounded-xl">
                        <div className='flex flex-wrap flex-row w-full justify-end items-center'>
                            <div className = "text-black font-bebas text-5xl font-bold my-2 ml-2 tracking-wide">
                                Interested in Technical marketing and web development?
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
                        <div className="flex flex-col justify-start md:flex-row-reverse w-full items-center gap-x-32 gap-y-10">
                            <AutoCarousel items={designTeamPictures} alt = "Design Team"/>
                            <div className="leading-relaxed md:w-2/5 text-lg text-center text-gray-700 bg-slate-200 p-4 rounded-lg">
                                You will showcase SASE's energy and spirit through your creativity! From designing eye-catching graphics to developing our website, you play a crucial role in shaping our brand and inspiring members to get involved. Join us and turn your ideas into impact!
                            </div>
                        </div>
                    </div>
                    <div className='mt-10'>More information on getting involved will be on our socials!</div>
                </motion.div>
            </div>
            <div className="flex h-96 items-center justify-center bg-white bg-officer bg-cover bg-fixed bg-center md:block"></div>
            <Footer />
        </>
    );
};

export default GetInvolvedPage;