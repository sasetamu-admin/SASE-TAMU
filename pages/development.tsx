"use client";
import React from "react";
import { NavBar } from "src/components/NavBar";
import { Footer } from "src/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { useState, useEffect } from "react";


const Join = () => {
    const text = "Development Info";

    return (
    <div className="outside-container bg-linear-to-b from-[--neutral-3] to-[--blue-1]">
        <NavBar />
        <div className="section-container">
            <p>{text}</p>
        </div>
        <Footer />
    </div>
  );
};


export default Join;