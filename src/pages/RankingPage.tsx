import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Trophy } from "lucide-react";
import StarRating from "@/components/StarRating";
import { mockAlbums } from "@/data/mockData";

const RankingPage = () => {
  const sorted = [...mockAlbums].sort((a, b) => b.rating - a.rating);

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-display font-bold mb-2 flex items-center gap-3">
          <Trophy className="w-8 h-8 text-rocket-orange" />
          Ranking Global
        </h1>
        <p className="text-muted-foreground mb-8">Os álbuns mais bem avaliados pela comunidade</p>
      </motion.div>

      <div className="space-y-3">
        {sorted.map((album, i) => (
          <motion.div
            key={album.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Link
              to={`/album/${album.id}`}
              className="flex items-center gap-4 gradient-card border border-border rounded-xl p-4 hover:border-primary/30 transition-all group"
            >
              <span className={`text-2xl font-display font-bold w-10 text-center ${i < 3 ? "gradient-primary-text" : "text-muted-foreground"}`}>
                {i + 1}
              </span>
              <img src={album.cover} alt={album.title} className="w-14 h-14 rounded-lg object-cover" />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">{album.title}</p>
                <p className="text-sm text-muted-foreground">{album.artist} • {album.year}</p>
              </div>
              <div className="text-right shrink-0">
                <StarRating rating={album.rating} size={14} />
                <p className="text-sm font-display font-bold text-foreground mt-1">{album.rating}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RankingPage;
