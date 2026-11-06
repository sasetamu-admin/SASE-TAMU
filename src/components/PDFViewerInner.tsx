"use client";
import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

const MIN_ZOOM = 0.5;
const MAX_ZOOM = 3;
const STEP = 0.25;

const PDFViewerInner = ({ href }: { href: string }) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const [zoom, setZoom] = useState(1);
    const [numPages, setNumPages] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Track the scroll area's width so the page always fits the container.
    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        const ro = new ResizeObserver(([entry]) => setContainerWidth(entry!.contentRect.width));
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    // Keep our state in sync when the user exits fullscreen with Esc.
    useEffect(() => {
        const onChange = () => setIsFullscreen(document.fullscreenElement === wrapperRef.current);
        document.addEventListener("fullscreenchange", onChange);
        return () => document.removeEventListener("fullscreenchange", onChange);
    }, []);

    const toggleFullscreen = () => {
        if (document.fullscreenElement) void document.exitFullscreen();
        else void wrapperRef.current?.requestFullscreen();
    };

    const btn = "px-3 py-1 rounded bg-neutral-0 text-neutral-4 disabled:opacity-30 hover:opacity-80";

    return (
        <div ref={wrapperRef} className="relative flex h-full w-full min-h-0 min-w-0 flex-col bg-neutral-3">
            <div ref={scrollRef} className="flex-1 min-h-0 overflow-auto p-2 [scrollbar-gutter:stable]">
                <Document file={href} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
                    {Array.from({ length: numPages }, (_, i) => (
                        <div key={i} className="mx-auto mb-2 w-fit shadow">
                            <Page
                                pageNumber={i + 1}
                                width={Math.max(containerWidth - 24, 100) * zoom}
                                renderTextLayer={false}
                                renderAnnotationLayer={false}
                            />
                        </div>
                    ))}
                </Document>
            </div>

            {/* Toolbar sits at the bottom so it never collides with back/next */}
            <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-lg bg-neutral-0/80 p-2 backdrop-blur">
                <button type="button" className={btn} aria-label="Zoom out"
                    disabled={zoom <= MIN_ZOOM} onClick={() => setZoom((z) => Math.max(MIN_ZOOM, z - STEP))}>−</button>
                <span className="w-12 text-center text-sm text-neutral-4">{Math.round(zoom * 100)}%</span>
                <button type="button" className={btn} aria-label="Zoom in"
                    disabled={zoom >= MAX_ZOOM} onClick={() => setZoom((z) => Math.min(MAX_ZOOM, z + STEP))}>+</button>
                <a className={btn} href={href} download aria-label="Download PDF">Download</a>
                <button type="button" className={btn} onClick={toggleFullscreen}>
                    {isFullscreen ? "Exit" : "Fullscreen"}
                </button>
            </div>
        </div>
    );
};

export default PDFViewerInner;