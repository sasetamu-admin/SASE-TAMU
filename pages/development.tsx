"use client";
import React from "react";
import { NavBar } from "~/components/NavBar";
import { Footer } from "~/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { useState, useEffect } from "react";


const Join = () => {
    const text = "Development Info";

    return (
    <div className="outside-container bg-linear-to-b from-(--neutral-4) to-(--blue-1)">
        <div className="fixed z-40 w-full">
            <NavBar />
        </div>
        <div className="div-container">
            <div className="flex flex-col justify-center mx-auto content-center">
                <p>
                    <strong>This page is under construction,</strong> come back soon for tips and resources on your career!
                </p>
            </div>
        </div>
        <Footer />
    </div>
  );
};


export default Join;