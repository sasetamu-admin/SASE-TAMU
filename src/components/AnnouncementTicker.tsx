const announcements = [
  "Join our Discord for event updates and networking opportunities!",
  "Follow our Instagram to stay up to date with our latest events and announcements!",
];

export const AnnouncementTicker = () => {
  return (
    <div className="group transition-transform duration-500 ease-out hover:translate-x-[-8px] absolute bottom-0 left-0 w-full overflow-hidden border-t border-sakura/20 bg-midnight/60 backdrop-blur-sm py-2 md:py-3 lg:py-4">
        <div className="flex w-max animate-marquee gap-16 whitespace-nowrap font-source text-sm text-paper/80 group-hover:[animation-play-state:paused] md:text-lg lg:text-xl">
        {[...announcements, ...announcements].map((text, i) => (
          <span key={i}>{text}</span>
        ))}
      </div>
    </div>
  );
};