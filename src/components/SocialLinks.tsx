import { Instagram } from "lucide-react";

interface SocialLink {
  platform: "instagram" | "twitter" | "tiktok";
  url: string;
}

const SocialLinks = ({ links }: { links: SocialLink[] }) => {
  if (!links.length) return null;

  const icons: Record<string, React.ReactNode> = {
    instagram: <Instagram className="w-4 h-4" />,
    twitter: <span className="text-xs font-bold">𝕏</span>,
    tiktok: <span className="text-xs font-bold">TT</span>,
  };

  return (
    <div className="flex gap-2 mt-2">
      {links.map((link) => (
        <a
          key={link.platform}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
        >
          {icons[link.platform]}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
