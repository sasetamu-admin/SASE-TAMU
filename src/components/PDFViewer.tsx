"use client";
import dynamic from "next/dynamic";

// pdf.js touches browser-only APIs, so skip server rendering for it.
const PDFViewer = dynamic(() => import("./PDFViewerInner"), { ssr: false });

export default PDFViewer;