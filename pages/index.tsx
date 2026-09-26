"use client"; // This is a client component

import { type NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { NavBar } from "src/components/NavBar";
import { Footer } from "src/components/Footer";
import { ReelsFeed } from "src/components/ReelsFeed";
import { AnnouncementTicker } from "src/components/AnnouncementTicker";
import { MissionReveal } from "src/components/MissionReveal";
import { PhotoCollage } from "src/components/PhotoCollage";
import { CtaLink } from "src/components/CtaLink";
import { TypingText } from "src/components/TypingText";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>SASE TAMU</title>
      </Head>

      <div className="fixed z-40 w-full">
        <NavBar />
      </div>
      <div className="bg-navy font-source text-paper">
        {/* HERO — DESKTOP background */}
        <div className="relative mb-12 hidden h-screen items-center justify-center overflow-hidden bg-white bg-informational bg-cover bg-fixed bg-center [scroll-snap-align:start] md:flex">
          {/* Navy scrim so the title/buttons stay readable over the photo */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/40 to-navy/80" />

          <div className="animated animatedFadeInUp fadeInUp relative z-10 mt-12 block">
            <div>
              <div className="dash md:dash-md mb-5"></div>
            </div>
            <div className="text-center">
              <div className="animate-gradient-text font-bebas text-8xl drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
                Howdy! We are SASE TAMU banana.
              </div>
            </div>
            <div>
              <div className="dash mt-3"></div>
            </div>
            <div className="mt-3 flex flex-row items-center justify-center space-x-5 font-source text-lg">
              <CtaLink href="/join" variant="primary" size="md" magnetic>
                Join SASE!
              </CtaLink>
              <CtaLink href="/upcoming-events" variant="secondary" size="md" magnetic>
                Upcoming Events
              </CtaLink>
            </div>
          </div>

          <AnnouncementTicker />
        </div>

        {/* HERO — MOBILE background */}
        <div className="relative mb-12 flex h-[100svh] items-center justify-center overflow-hidden bg-white bg-informational_mobile bg-cover bg-center [scroll-snap-align:start] md:hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/40 to-navy/80" />

          <div className="animated animatedFadeInUp fadeInUp relative z-10 block px-6">
            <div>
              <div className="dash-sm mb-5"></div>
            </div>
            <div className="text-center">
              <div className="font-bebas text-4xl text-paper drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
                Howdy! We are SASE TAMU.
              </div>
            </div>
            <div>
              <div className="dash-sm mt-3"></div>
            </div>
            <div className="mt-3 flex flex-row items-center justify-center gap-3">
              <CtaLink href="/join" variant="primary" size="sm">
                Join SASE!
              </CtaLink>
              <CtaLink href="/upcoming-events" variant="secondary" size="sm">
                Upcoming Events
              </CtaLink>
            </div>
          </div>

          <AnnouncementTicker />
        </div>

        {/* MISSION — DESKTOP: word-reveal statement + animated photo collage */}
        <div className="hidden h-screen items-center overflow-hidden bg-navy [scroll-snap-align:start] md:flex">
          <div className="mx-auto grid w-full max-w-[88rem] grid-cols-[1.1fr_1fr] items-center gap-16 px-12 xl:gap-24 xl:px-20">
            <div>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-6 flex items-center gap-4 font-source text-xs uppercase tracking-[0.3em] text-sakura"
              >
                <span className="h-px w-12 bg-sakura" />
                Our Mission
              </motion.p>

              <MissionReveal
                className="font-bebas text-5xl leading-[1.05] xl:text-6xl"
                segments={[
                  { text: "SASE is dedicated to the advancement of" },
                  { text: "Asian heritage scientists and engineers", highlight: true },
                  { text: "in education and employment so that they can achieve their" },
                  { text: "full career potential.", highlight: true },
                ]}
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <p className="mt-8 max-w-xl text-base text-paper/70 xl:text-lg">
                  In addition to professional development, SASE also encourages
                  members to contribute to the enhancement of the communities in
                  which they live.
                </p>
                <CtaLink href="/about" variant="interactive" className="mt-6">
                  Learn more
                </CtaLink>
              </motion.div>
            </div>

            <PhotoCollage />
          </div>
        </div>

        {/* MISSION — MOBILE */}
        <div className="flex h-[100svh] flex-col items-center overflow-hidden bg-navy font-source [scroll-snap-align:start] md:hidden">
          <div className="px-6 pb-6 pt-24 text-center">
            <h1 className="font-bebas text-3xl">Our Mission</h1>
            <div className="pt-3">
              <div className="text-sm">
                SASE is dedicated to the advancement of Asian heritage
                scientists and engineers in education and employment so that
                they can achieve their full career potential. In addition to
                professional development, SASE also encourages members to
                contribute to the enhancement of the communities in which they
                live.
              </div>
              <CtaLink href="/about" variant="primary" size="sm" className="mt-2">
                Learn more!
              </CtaLink>
            </div>
          </div>
          <div className="mt-0 self-center px-6">
            <Image
              className="max-h-[24vh] w-full rounded-xl object-cover"
              src="/LONESTAR.jpg"
              width={450}
              height={50}
              alt="Picture of SASE at Lonestar"
            />
          </div>
        </div>

        {/* LATEST CONTENT — mobile keeps a plain heading, desktop gets the typing effect */}
        <div className="flex h-[100svh] flex-col items-center justify-center overflow-hidden px-4 [scroll-snap-align:start] md:h-screen">
          <h1 className="pb-4 font-bebas text-3xl md:hidden">Latest Content</h1>
          <h1 className="hidden pb-10 font-bebas text-5xl md:block">
            <TypingText text="Latest Content" />
          </h1>

          <ReelsFeed />

          <a
            href="https://www.instagram.com/sasetamu/"
            target="_blank"
            rel="noreferrer"
            className="mt-6 font-source text-sm text-paper/60 underline-offset-4 transition hover:text-sakura hover:underline md:mt-10"
          >
            See more on Instagram →
          </a>
        </div>

        {/* Photo strips — cuties is desktop-only, elevator is mobile-only */}
        <div className="hidden h-screen overflow-hidden bg-white bg-cuties bg-cover bg-fixed bg-center [scroll-snap-align:start] md:block"></div>
        <div className="flex h-[100svh] overflow-hidden bg-white bg-elevator bg-cover bg-center [scroll-snap-align:start] md:hidden"></div>
      </div>
      <Footer />
    </>
  );
};

export default Home;