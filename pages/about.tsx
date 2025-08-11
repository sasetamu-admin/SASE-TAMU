import React from "react";
import { NavBar } from "src/components/NavBar";
import { Footer } from "src/components/Footer";
import Link from "next/link";
import Image from "next/image";

const about = () => {
  return (
    <div>
      <div className="fixed z-40 w-full">
        <NavBar />
      </div>
      <div className="flex h-max justify-center bg-white p-10 md:p-10"></div>
      <div className="bg-white font-source text-black">
        <div className="flex flex-col bg-white font-source md:flex-row">
          <div className="pl-10 pr-10 pt-10 md:w-1/2 md:pl-20">
            <h1 className="font-bebas text-5xl">OUR MISSION</h1>
            <div className="pb-5 pt-5">
              <div>
                The Society of Asian Scientists and Engineers (SASE) is dedicated to the advancement of Asian heritage
                scientists and engineers in education and employment so that
                they can achieve their full career potential. In addition to
                professional development, SASE also encourages members to
                contribute to the enhancement of the communities in which they
                live.
              </div>
              <br/>
              <div>
                The Society of Asian Scientists and Engineers (SASE) was founded in 
                November 2007 and now has over 110+ collegiate chapters, 15+ professional chapters,
                and dozens of corporate/academic partners.
              </div>
              <div className="font-bold">
                For more information about SASE's national mission, check out{" "}
                <Link
                  href="https://saseconnect.org"
                  target="_blank"
                  className="underline"
                >
                  https://saseconnect.org
                </Link>
                .
              </div>
            </div>
          </div>
          <div className="self-center pl-10 pr-10 pt-5 md:w-1/2">
            <Image
              className="w-full rounded-xl"
              src="/scrc.jpg"
              width={400}
              height={300}
              alt="Picture of SASE SCRC"
            />
          </div>
        </div>

        <div className="flex h-max justify-center bg-white p-10 pt-20 md:p-20"></div>

        <div className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="mb-12 text-center font-bebas text-5xl text-black">
            Core Pillars
          </h1>

          <section className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Professional Development card */}
            <div className="group overflow-hidden rounded-xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                <h2 className="text-center font-bebas text-2xl text-white">Professional Development</h2>
              </div>
              <div className="relative overflow-hidden">
                <Image
                  src="/NC2.jpg"
                  alt="SASE TAMU at National Conference"
                  width={384}
                  height={320}
                  className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center bg-black justify-center bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-40">
                  <span className="font-bebas text-2xl text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    SASE TAMU @ NC
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  Preparing Asian-heritage students for success in
                  the transnational, global business world.
                </p>
              </div>
            </div>

            {/* Cultural Awareness card */}
            <div className="group overflow-hidden rounded-xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="bg-gradient-to-r from-sky-600 to-sky-700 px-6 py-4">
                <h2 className="text-center font-bebas text-2xl text-white">Cultural Awareness & Inclusion</h2>
              </div>
              <div className="relative overflow-hidden">
                <Image
                  src="/LANTERN.jpg"
                  alt="Lantern Making Social"
                  width={384}
                  height={320}
                  className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center bg-black justify-center bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-40">
                  <span className="font-bebas text-2xl text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    SASE TAMU @ NC
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  Promoting diversity and tolerance on campuses
                  and in the workplace.
                </p>
              </div>
            </div>

            {/* Community Service card */}
            <div className="group overflow-hidden rounded-xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-4">
                <h2 className="text-center font-bebas text-2xl text-white">Community Service</h2>
              </div>
              <div className="relative overflow-hidden">
                <Image
                  src="/STEMFEST.jpg"
                  alt="SASE TAMU at STEMFest"
                  width={384}
                  height={320}
                  className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center bg-black justify-center bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-40">
                  <span className="font-bebas text-2xl text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    SASE @ STEMFest
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  Providing opportunities for members to make contributions to their local communities.
                </p>
              </div>
            </div>
          </section>
          </div>
        </div>

        <div className="flex h-max justify-center bg-white p-5 md:p-20"></div>

        <div className="flex flex-col bg-white font-source md:flex-row">
          <div className="pl-10 pr-10 md:w-1/2 md:pl-20">
            <h1 className="font-bebas text-5xl">Corporate Partnerships</h1>
            <div className="pb-5 pt-5">
              <div>
                SASE is a non-profit 501(c)3 organization, and contributions to
                SASE are tax deductible.
              </div>
              <button className="mt-5 rounded border bg-sky-700 bg-opacity-75 px-4 py-2 text-white hover:bg-sky-700 hover:text-white">
                <Link href="/sponsor">Learn more!</Link>
              </button>
            </div>
          </div>
          <div className="self-center pl-10 pr-10 pt-5 md:w-1/2">
            <Image
              className="w-full rounded-xl"
              src="/INFO.jpg"
              width={600}
              height={400}
              alt="Picture of SASE Meeting"
            />
          </div>
        </div>
        <div className="flex h-max justify-center bg-white p-10 pt-20 md:p-20"></div>
      </div>

      <div className="flex h-96 items-center justify-center bg-white bg-big bg-cover bg-fixed bg-center"></div>

      <Footer />
    </div>
  );
};

export default about;
