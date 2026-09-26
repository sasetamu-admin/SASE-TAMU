import React, { useEffect, useState } from 'react';
import { NavBar } from '~/components/NavBar';
import { motion, type Variants } from "framer-motion";
import { Footer } from '~/components/Footer';
import AutoCarousel from '~/components/ImageCarousel';

// Shared wobble/rotate hover animation, used by both section headings below.
// Pulled out once instead of being duplicated verbatim in each section.
const wobbleHover: Variants = {
    rotate: {
        rotateZ: [0, 50, -50, 30, -30, 0],
        transition: { duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" },
    },
};

// One reusable "Interested in X?" section: heading + wobble-hover CTA + carousel + blurb.
// Committee and Design Team sections are identical in structure, differing only in
// their text/images/layout direction — so this component takes those as props.
type GetInvolvedSectionProps = {
    prompt: string;
    ctaText: string;
    pictures: string[];
    carouselAlt: string;
    description: string;
    reverse?: boolean; // mirrors layout for visual variety (used by Design Team section)
};

const GetInvolvedSection: React.FC<GetInvolvedSectionProps> = ({
    prompt,
    ctaText,
    pictures,
    carouselAlt,
    description,
    reverse = false,
}) => {
    return (
        <div className="bg-navy w-full my-2 flex flex-col items-start p-2 rounded-xl">
            <div className={`flex flex-wrap flex-row w-full items-center ${reverse ? "justify-end" : "justify-start"}`}>
                <div className="text-paper font-bebas text-5xl my-2 ml-2 tracking-wide">
                    {prompt}
                </div>
                <motion.div
                    className="text-maroon font-bebas text-5xl font-bold my-2 ml-2 tracking-wide hover:text-6xl hover:text-maroonDark transition-all duration-500 ease-in-out"
                    variants={wobbleHover}
                    whileHover="rotate"
                    style={{ perspective: 600 }}
                    animate={{ rotateZ: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    {ctaText}
                </motion.div>
            </div>
            <div className={`flex flex-wrap justify-center w-full items-center gap-x-32 gap-y-10 ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}>
                <AutoCarousel items={pictures} alt={carouselAlt} />
                <div className="leading-relaxed md:w-2/5 text-lg text-center text-paper/80 p-4 rounded-lg">
                    {description}
                </div>
            </div>
        </div>
    );
};

const GetInvolvedPage: React.FC = () => {
    // Image sets for the two auto-scrolling carousels below.
    // add picutres for the committee and design team in the future!!
    const committeePictures = ["get-involved/halloween.JPG", "get-involved/halloween1.jpg", "get-involved/banquet.jpg", "get-involved/brasil.jpeg", "get-involved/ban.jpeg"];
    const designTeamPictures = ["get-involved/Committee_Reveal.png", "get-involved/Design_Reveal.png", "get-involved/recap.png", "get-involved/recapp.png"];

    // Controls the hero section's fade-out-on-scroll effect.
    // Starts fully opaque (1) and linearly fades to fully transparent (0)
    // as the user scrolls down, reaching 0 opacity at `fadePoint` pixels.
    const [heroOpacity, setHeroOpacity] = useState<number>(1);
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const fadePoint = 900; // pixels scrolled before hero is fully faded out
            const newOpacity = Math.max(1 - scrollY / fadePoint, 0);
            setHeroOpacity(newOpacity);
        };

        window.addEventListener("scroll", handleScroll);
        // Cleanup: remove the listener when the component unmounts
        // to avoid memory leaks / stale closures.
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Fixed nav bar sits above all page content */}
            <div className="z-40 w-full absolute">
                <NavBar />
            </div>
            <div className='bg-navy font-source text-paper overflow-x-hidden overflow-y-hidden'>

                {/* HERO SECTION
                    Full-screen background image with fade-out-on-scroll (see `heroOpacity` state above). */}
                <div className='flex h-screen items-center justify-center bg-white bg-squad bg-cover bg-fixed bg-center' style={{ opacity: heroOpacity, transition: "opacity 0.3s linear" }}>
                    <div className="animated animatedFadeInUp fadeInUp mt-12 block">
                        <div className="text-center font-bebas text-8xl text-white">
                            Get Involved!
                        </div>
                    </div>
                </div>

                {/* MAIN CONTENT
                    Fades/slides into view once scrolled into the viewport (whileInView, once: true). */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="h-fit bg-navy flex flex-col p-4 items-center"
                >
                    <GetInvolvedSection
                        prompt="Interested in Event Planning and leadership?"
                        ctaText="Join Committee!"
                        pictures={committeePictures}
                        carouselAlt="Committee"
                        description="You will bring SASE's biggest events to life! From planning to execution, you play a crucial role in creating unforgettable experiences for our members. Join us and be a part of the magic!"
                    />

                    <GetInvolvedSection
                        prompt="Interested in Technical marketing and web development?"
                        ctaText="Join Design Team!"
                        pictures={designTeamPictures}
                        carouselAlt="Design Team"
                        description="You will showcase SASE's energy and spirit through your creativity! From designing eye-catching graphics to developing our website, you play a crucial role in shaping our brand and inspiring members to get involved. Join us and turn your ideas into impact!"
                        reverse
                    />

                    <div className='mt-10'>More information on getting involved will be on our socials!</div>
                </motion.div>
            </div>

            {/* Bottom photo strip — desktop only (hidden on mobile via md:block with no mobile-visible default) */}
            <div className="flex h-96 items-center justify-center bg-white bg-officer bg-cover bg-fixed bg-center md:block"></div>
            <Footer />
        </>
    );
};

export default GetInvolvedPage;