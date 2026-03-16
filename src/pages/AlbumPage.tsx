import { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Clock, ListPlus, Share2, Music } from "lucide-react";
import StarRating from "@/components/StarRating";
import { mockAlbums, mockTracks, mockReviews } from "@/data/mockData";

const AlbumPage = () => {
  const { id } = useParams();
  const album = mockAlbums.find((a) => a.id === id) || mockAlbums[0];
  const [userRating, setUserRating] = useState(0);
  const [favorited, setFavorited] = useState(false);
  const [review, setReview] = useState("");

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row gap-8 mb-10"
      >
        <div className="shrink-0">
          <motion.img
            src={album.cover}
            alt={album.title}
            className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-2xl glow-primary mx-auto"
            whileHover={{ scale: 1.02 }}
          />
        </div>
        <div className="flex-1 flex flex-col justify-end">
          <p className="text-sm text-rocket-cyan font-medium uppercase tracking-wider mb-1">{album.genre}</p>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-2">{album.title}</h1>
          <p className="text-xl text-muted-foreground mb-4">{album.artist}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <span>{album.year}</span>
            <span>•</span>
            <span>{album.duration}</span>
            <span>•</span>
            <span>{album.tracks} faixas</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <StarRating rating={album.rating} size={14} />
              <span className="text-foreground font-semibold">{album.rating}</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setFavorited(!favorited)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all text-sm font-medium ${
                favorited
                  ? "bg-destructive/10 border-destructive/30 text-destructive"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
              }`}
            >
              <Heart className={`w-4 h-4 ${favorited ? "fill-current" : ""}`} />
              Favoritar
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all">
              <Clock className="w-4 h-4" />
              Ouvir mais tarde
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all">
              <ListPlus className="w-4 h-4" />
              Adicionar à lista
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all">
              <Share2 className="w-4 h-4" />
              Compartilhar
            </button>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left - Tracks + Review form */}
        <div className="lg:col-span-2 space-y-8">
          {/* Rate */}
          <div className="gradient-card border border-border rounded-xl p-6">
            <h2 className="font-display font-semibold text-lg mb-3">Avalie este álbum</h2>
            <StarRating rating={userRating} size={28} interactive onChange={setUserRating} />
            <textarea
              placeholder="Escreva sua review..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full mt-4 bg-secondary border border-border rounded-lg p-3 text-sm text-foreground placeholder:text-muted-foreground resize-none h-24 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button className="mt-3 gradient-primary text-primary-foreground px-6 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
              Publicar Review
            </button>
          </div>

          {/* Track list */}
          <div>
            <h2 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
              <Music className="w-5 h-5 text-primary" />
              Faixas
            </h2>
            <div className="gradient-card border border-border rounded-xl overflow-hidden">
              {mockTracks.map((track) => (
                <div
                  key={track.number}
                  className="flex items-center gap-4 px-4 py-3 border-b border-border last:border-0 hover:bg-rocket-surface-hover transition-colors"
                >
                  <span className="text-sm text-muted-foreground w-6 text-right">{track.number}</span>
                  <span className="text-sm font-medium text-foreground flex-1">{track.title}</span>
                  <span className="text-sm text-muted-foreground">{track.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right - Reviews */}
        <div>
          <h2 className="font-display font-semibold text-lg mb-4">Reviews Populares</h2>
          <div className="space-y-4">
            {mockReviews.map((rev) => (
              <motion.div
                key={rev.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="gradient-card border border-border rounded-xl p-4"
              >
                <div className="flex items-center gap-3 mb-2">
                  <img src={rev.avatar} alt={rev.user} className="w-8 h-8 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{rev.user}</p>
                    <StarRating rating={rev.rating} size={12} />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{rev.text}</p>
                <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                  <span>❤️ {rev.likes}</span>
                  <span>{rev.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumPage;
