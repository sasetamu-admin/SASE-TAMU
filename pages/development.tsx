"use client";
import React, { useState, useEffect } from "react";
import { NavBar } from "~/components/NavBar";
import { Footer } from "~/components/Footer";
import OpenSpread from "~/components/development/OpenSpread";
import BookTab from "~/components/development/BookTab";
import { tabs } from "~/components/development/registry";

const Development = () => {
    const [activeTab, setActiveTab] = useState<string>(tabs[0]!.id);
    // Remembered spread index per tab; a missing entry means 0.
    const [indexByTab, setIndexByTab] = useState<Record<string, number>>({});

    const current = tabs.find((t) => t.id === activeTab) ?? tabs[0]!;
    const index = indexByTab[current.id] ?? 0;
    const spread = current.spreads[index]!;
    const canBack = index > 0;
    const canNext = index < current.spreads.length - 1;

    const goBack = () => {
        if (!canBack) return;
        setIndexByTab((prev) => ({ ...prev, [current.id]: (prev[current.id] ?? 0) - 1 }));
    };
    const goNext = () => {
        if (!canNext) return;
        setIndexByTab((prev) => ({ ...prev, [current.id]: (prev[current.id] ?? 0) + 1 }));
    };

    // Left/right arrow keys flip spreads (no-ops at the boundaries).
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            const el = e.target as HTMLElement | null;
            if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable)) return;
            if (e.key === "ArrowLeft") goBack();
            else if (e.key === "ArrowRight") goNext();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    });

    return (
    <div className="outside-container bg-linear-to-b from-blue-1 to-neutral-4">
        <div className="fixed z-40 w-full pointer-events-none">
            <NavBar />
        </div>
        <div className="div-container">
            <div className="flex flex-col justify-center mx-auto content-center py-12 px-4">
                <div className="h-[85lvh] w-[140lvh] max-w-full flex flex-row gap-0 justify-around">
                    <div className="bg-blue-0 flex-1 rounded-md flex items-center justify-center p-2">
                        <div role="tabpanel" className="relative bg-neutral-4 h-full w-full flex flex-row justify-around items-center">
                            <OpenSpread left={spread.left} right={spread.right} />
                            <button
                                type="button"
                                onClick={goBack}
                                disabled={!canBack}
                                aria-label="Previous spread"
                                className="absolute left-3 top-3 text-neutral-0 disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                                back
                            </button>
                            <button
                                type="button"
                                onClick={goNext}
                                disabled={!canNext}
                                aria-label="Next spread"
                                className="absolute right-3 top-3 text-neutral-0 disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                                next
                            </button>
                        </div>
                    </div>
                    <div role="tablist" aria-orientation="vertical" className="h-auto py-2 flex flex-col justify-evenly items-start flex-0">
                        {tabs.map((t) => (
                            <BookTab key={t.id} onClick={() => setActiveTab(t.id)} active={t.id === activeTab}>
                                {t.label}
                            </BookTab>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default Development;