import { useState, useEffect } from "react";
import { TiltCard } from "./TiltCard";

type Reel = {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string;
  timestamp?: string;
};

const formatDate = (iso?: string) =>
  iso
    ? new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric" })
    : "";

export const ReelsFeed = ({ limit = 3 }: { limit?: number }) => {
  const [reels, setReels] = useState<Reel[]>([]);

  useEffect(() => {
    const fetchReels = async () => {
      const response = await fetch("/api/instagram");
      const data = (await response.json()) as Reel[];
      setReels(data);
    };
    void fetchReels();
  }, []);

  const topReels = Array.isArray(reels) ? reels.slice(0, limit) : [];

  return (
    <>
      {/* MOBILE — simple horizontal swipe slider */}
      <div className="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:hidden">
        {topReels.map((reel) => (
          <a
            key={reel.id}
            href={reel.permalink}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 snap-center"
          >
            <video
              src={reel.media_url}
              className="aspect-[9/16] w-64 max-h-[55vh] rounded-xl object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </a>
        ))}
      </div>

      {/* DESKTOP — 3D tilt cards */}
      <div className="hidden w-full max-w-5xl grid-cols-3 gap-6 px-4 md:grid lg:gap-8">
        {topReels.map((reel) => (
          <TiltCard key={reel.id}>
            <a
              href={reel.permalink}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col rounded-2xl bg-maroon p-2 shadow-2xl ring-1 ring-maroon/10 lg:p-3"
            >
              <video
                src={reel.media_url}
                className="aspect-[9/16] max-h-[52vh] w-full rounded-xl object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-3 font-mono text-xs">
                <span className="min-w-0 truncate text-paper/80">
                  {reel.caption ?? "SASE TAMU"}
                </span>
                <span className="shrink-0 text-paper/40">{formatDate(reel.timestamp)}</span>
              </div>
            </a>
          </TiltCard>
        ))}
      </div>
    </>
  );
};