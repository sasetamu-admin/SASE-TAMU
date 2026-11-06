"use client";
import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

const iconProps = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
};

const DownloadIcon = () => (
    <svg {...iconProps}>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
);

const EnterFullscreenIcon = () => (
    <svg {...iconProps}>
        <path d="M8 3H5a2 2 0 0 0-2 2v3" />
        <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
        <path d="M3 16v3a2 2 0 0 0 2 2h3" />
        <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </svg>
);

const ExitFullscreenIcon = () => (
    <svg {...iconProps}>
        <path d="M8 3v3a2 2 0 0 1-2 2H3" />
        <path d="M21 8h-3a2 2 0 0 1-2-2V3" />
        <path d="M3 16h3a2 2 0 0 1 2 2v3" />
        <path d="M16 21v-3a2 2 0 0 1 2-2h3" />
    </svg>
);

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

const MIN_ZOOM = 0.5;
const MAX_ZOOM = 3;
const STEP = 0.25;

const PDFViewerInner = ({ href }: { href: string }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const [zoom, setZoom] = useState(1);
    const [numPages, setNumPages] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Track the scroll area's width so the page always fits the container.
    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        const ro = new ResizeObserver(([entry]) => {
            const w = Math.floor(entry!.contentRect.width);
            setContainerWidth((prev) => (Math.abs(prev - w) > 2 ? w : prev));
        });
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    const toggleFullscreen = () => setIsFullscreen((f) => !f);

    // Esc exits windowed fullscreen.
    useEffect(() => {
        if (!isFullscreen) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsFullscreen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [isFullscreen]);

    const btn =
        "px-3 py-1 rounded-md bg-blue-1 text-white transition hover:brightness-110 active:brightness-95 disabled:opacity-40 disabled:hover:brightness-100 disabled:cursor-not-allowed";

    return (
        <div
            className={`flex min-h-0 min-w-0 flex-col overflow-hidden bg-neutral-3 ${
                isFullscreen ? "fixed inset-0 z-[100]" : "relative h-full w-full"
            }`}
        >
            <div ref={scrollRef} className="absolute inset-0 overflow-auto p-2 [scrollbar-gutter:stable]">
                <Document file={href} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
                    {Array.from({ length: numPages }, (_, i) => (
                        <div key={i} className="mx-auto mb-2 w-fit shadow">
                            <Page
                                pageNumber={i + 1}
                                width={Math.min(Math.max(containerWidth - 24, 100) * zoom, 4000)}
                                renderTextLayer={false}
                                renderAnnotationLayer={false}
                            />
                        </div>
                    ))}
                </Document>
            </div>

            <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-lg bg-blue-0 p-2 shadow-lg">
                <button type="button" className={btn} aria-label="Zoom out"
                    disabled={zoom <= MIN_ZOOM} onClick={() => setZoom((z) => Math.max(MIN_ZOOM, z - STEP))}>−</button>
                <span className="w-12 text-center text-sm text-white">{Math.round(zoom * 100)}%</span>
                <button type="button" className={btn} aria-label="Zoom in"
                    disabled={zoom >= MAX_ZOOM} onClick={() => setZoom((z) => Math.min(MAX_ZOOM, z + STEP))}>+</button>
                <a className={`${btn} flex items-center`} href={href} download aria-label="Download PDF" title="Download">
                    <DownloadIcon />
                </a>
                <button
                    type="button"
                    className={`${btn} flex items-center`}
                    onClick={toggleFullscreen}
                    aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                    title={isFullscreen ? "Exit fullscreen (Esc)" : "Fullscreen"}
                >
                    {isFullscreen ? <ExitFullscreenIcon /> : <EnterFullscreenIcon />}
                </button>
            </div>
        </div>
    );
};

export default PDFViewerInner;