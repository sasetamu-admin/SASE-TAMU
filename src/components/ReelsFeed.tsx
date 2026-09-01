import { useState, useEffect } from "react";

type Reel = {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string;
};

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

  const topThree = reels.slice(0, limit);

  return (
    <>
      {/* MOBILE — horizontal swipe slider */}
      <div className="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:hidden">
        {topThree.map((reel) => (
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

      {/* DESKTOP — grid */}
      <div className="hidden w-full max-w-5xl grid-cols-3 gap-4 px-4 md:grid">
        {topThree.map((reel) => (
          <a key={reel.id} href={reel.permalink} target="_blank" rel="noreferrer">
            <video
              src={reel.media_url}
              className="aspect-[9/16] w-full max-h-[60vh] rounded-xl object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </a>
        ))}
      </div>
    </>
  );
};