import React from "react";

type SocialLink = {
  label: string;
  href: string;
};

const socialLinks: SocialLink[] = [
  { label: "Linktree", href: "https://linktr.ee/tamusase?utm_source=linktree_profile_share&ltsid=fdcd9982-48b3-4c97-9cc7-f0642ba442a0" },
  { label: "Instagram", href: "https://instagram.com/sasetamu" },
  { label: "Discord", href: "https://discord.gg/hHTXHun7MD" },
  { label: "Dues", href: "https://sofctamu.estore.flywire.com/products/dues-368104?blSandboxId=57614&blIncludeMyChanges=true&blAdminUserId=54820" },
  { label: "South Central Regional Conference!", href: "https://scrc.saseconnect.org/home" },
  
];

export const SocialLinks = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="font-source text-paper/60 transition hover:text-sakura"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};