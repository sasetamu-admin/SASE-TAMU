"use client";
import React from "react";
import { NavBar } from "~/components/NavBar";
import { Footer } from "~/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { cn } from "../utils/cn";
import { ReactNode, useState, useEffect } from "react";
import OpenPages from "~/components/OpenPages";

const Join = () => {
    const BookTab = ({
        children,
        transitionDelayInMs = 300,
        }: { children: ReactNode; transitionDelayInMs?: number }) => {
            const [isHovered, setIsHovered] = useState(false);

        return (
            <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(
                "whitespace-nowrap overflow-hidden rounded-r-sm cursor-pointer",
                isHovered
                ? "border-blue-0 scale-100"
                : "border-blue-1 scale-100",
            )}
            style={{
                transition: "border-color, transform",
                transitionDuration: isHovered
                ? "0ms"
                : `${transitionDelayInMs + 300}ms`,
            }}
            >
            <div
                className={cn("px-0.5 py-2", isHovered ? "bg-blue-0" : "bg-blue-1")}
                style={{
                transition: "background-color",
                transitionDuration: isHovered
                    ? "0ms"
                    : `${transitionDelayInMs + 300}ms`,
                }}
            >
                <span className="text-sm font-medium [writing-mode:vertical-rl] max-h-[16ch]">{children}</span>
            </div>
            </div>
        );
    };

    return (
    <div className="outside-container bg-linear-to-b from-blue-1 to-neutral-4">
        <div className="fixed z-40 w-full pointer-events-none">
            <NavBar />            
        </div>
        <div className="div-container">
            <div className="flex flex-col justify-center mx-auto content-center py-12 px-4">
                <div className="h-[85lvh] w-[140lvh] max-w-full flex flex-row gap-0 justify-around">
                    <div className="bg-blue-0 flex-1 rounded-md flex items-center justify-center p-2">
                        <div className="relative bg-neutral-4 h-full w-full flex flex-row justify-around items-center">
                            <OpenPages />
                            <button id="page-back" className="absolute left-3 top-3 text-neutral-0">back</button>
                            <button id="page-next" className="absolute right-3 top-3 text-neutral-0">next</button>
                        </div>
                    </div>
                    <div className="h-auto py-2 flex flex-col justify-evenly items-start flex-0">
                        <BookTab>Resume</BookTab>
                        <BookTab>Research</BookTab>
                        <BookTab>AI/ML</BookTab>
                        <BookTab>CAD</BookTab>
                        <BookTab>Other</BookTab>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
};


export default Join;