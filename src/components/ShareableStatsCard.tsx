import { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Download, Share2, Copy, Rocket } from "lucide-react";
import html2canvas from "html2canvas";
import { toast } from "sonner";

interface ShareableStatsCardProps {
  stats: {
    totalMinutes: number;
    topTracks: { title: string; artist: string; plays: number }[];
    topArtists: { name: string; plays: number }[];
  };
  user: { name: string; username: string };
  period: string;
}

const ShareableStatsCard = ({ stats, user, period }: ShareableStatsCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const captureCard = useCallback(async () => {
    if (!cardRef.current) return null;
    const canvas = await html2canvas(cardRef.current, {
      backgroundColor: null,
      scale: 2,
      useCORS: true,
    });
    return canvas;
  }, []);

  const handleDownload = async () => {
    const canvas = await captureCard();
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `rocket-music-stats-${period.toLowerCase()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
    toast.success("Imagem baixada!");
  };

  const handleShare = async () => {
    const canvas = await captureCard();
    if (!canvas) return;
    canvas.toBlob(async (blob) => {
      if (!blob) return;
      if (navigator.share) {
        try {
          await navigator.share({
            title: `Minhas stats no Rocket Music - ${period}`,
            files: [new File([blob], "rocket-stats.png", { type: "image/png" })],
          });
        } catch {
          toast.info("Compartilhamento cancelado");
        }
      } else {
        await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
        toast.success("Imagem copiada para a área de transferência!");
      }
    });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copiado!");
  };

  return (
    <div className="space-y-4">
      {/* The card to capture */}
      <div
        ref={cardRef}
        className="rounded-2xl overflow-hidden p-6 max-w-md mx-auto"
        style={{
          background: "linear-gradient(145deg, hsl(222, 47%, 8%), hsl(262, 40%, 12%), hsl(222, 47%, 6%))",
        }}
      >
        <div className="flex items-center gap-2 mb-4">
          <Rocket className="w-5 h-5 text-primary" />
          <span className="font-display font-bold text-sm gradient-primary-text">ROCKET MUSIC</span>
          <span className="ml-auto text-xs text-muted-foreground">{period}</span>
        </div>

        <p className="text-lg font-display font-bold text-foreground mb-1">{user.name}</p>
        <p className="text-xs text-muted-foreground mb-4">{user.username}</p>

        <div className="rounded-xl p-4 mb-4" style={{ background: "hsl(222, 44%, 12%, 0.8)" }}>
          <p className="text-3xl font-display font-bold gradient-primary-text">
            {(stats.totalMinutes / 60).toFixed(0)}h
          </p>
          <p className="text-xs text-muted-foreground">de música ouvida</p>
        </div>

        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Top 5 Músicas</p>
        {stats.topTracks.slice(0, 5).map((track, i) => (
          <div key={track.title} className="flex items-center gap-2 py-1">
            <span className="text-xs font-bold gradient-primary-text w-4">{i + 1}</span>
            <span className="text-sm text-foreground flex-1 truncate">{track.title}</span>
            <span className="text-xs text-muted-foreground">{track.artist}</span>
          </div>
        ))}

        <div className="mt-4 pt-3 border-t border-border/30">
          <p className="text-[10px] text-muted-foreground text-center">rocketmusic.app • Compartilhe sua jornada</p>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex justify-center gap-3">
        <button onClick={handleDownload} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-sm font-medium text-foreground hover:bg-rocket-surface-hover transition-colors">
          <Download className="w-4 h-4" /> Baixar
        </button>
        <button onClick={handleShare} className="flex items-center gap-2 px-4 py-2 rounded-lg gradient-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
          <Share2 className="w-4 h-4" /> Compartilhar
        </button>
        <button onClick={handleCopyLink} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-sm font-medium text-foreground hover:bg-rocket-surface-hover transition-colors">
          <Copy className="w-4 h-4" /> Link
        </button>
      </div>
    </div>
  );
};

export default ShareableStatsCard;
