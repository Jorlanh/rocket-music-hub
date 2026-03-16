import { useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, Clock, Music, Disc, Users, Heart, ListMusic } from "lucide-react";
import StarRating from "@/components/StarRating";
import ShareableStatsCard from "@/components/ShareableStatsCard";
import { mockUser, mockUserStats, mockAlbums } from "@/data/mockData";

const timeFilters = ["Dia", "Semana", "Mês", "Ano", "Todos os Tempos"] as const;
type TimeFilter = typeof timeFilters[number];

const ProfilePage = () => {
  const [activeFilter, setActiveFilter] = useState<TimeFilter>("Mês");
  const [showShareCard, setShowShareCard] = useState(false);

  const formatMinutes = (min: number) => {
    if (min >= 1000) return `${(min / 1000).toFixed(1)}k`;
    return min.toString();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-10"
      >
        <img
          src={mockUser.avatar}
          alt={mockUser.name}
          className="w-28 h-28 rounded-full object-cover border-4 border-primary/30 glow-primary"
        />
        <div className="text-center md:text-left flex-1">
          <h1 className="text-3xl font-display font-bold">{mockUser.name}</h1>
          <p className="text-muted-foreground">{mockUser.username}</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 text-sm">
            <div className="text-center">
              <p className="font-display font-bold text-lg text-foreground">{mockUser.followers.toLocaleString()}</p>
              <p className="text-muted-foreground">Seguidores</p>
            </div>
            <div className="text-center">
              <p className="font-display font-bold text-lg text-foreground">{mockUser.following}</p>
              <p className="text-muted-foreground">Seguindo</p>
            </div>
            <div className="text-center">
              <p className="font-display font-bold text-lg text-foreground">{mockUser.reviews}</p>
              <p className="text-muted-foreground">Reviews</p>
            </div>
            <div className="text-center">
              <p className="font-display font-bold text-lg text-foreground">{mockUser.lists}</p>
              <p className="text-muted-foreground">Listas</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => setShowShareCard(!showShareCard)}
          className="gradient-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          📊 Compartilhar Stats
        </button>
      </motion.div>

      {/* Shareable Stats Card */}
      {showShareCard && (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mb-10">
          <ShareableStatsCard stats={mockUserStats} user={mockUser} period={activeFilter} />
        </motion.div>
      )}

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { icon: Clock, label: "Minutos Ouvidos", value: formatMinutes(mockUserStats.totalMinutes), color: "text-rocket-cyan" },
          { icon: Music, label: "Faixas Ouvidas", value: formatMinutes(mockUserStats.totalTracks), color: "text-rocket-orange" },
          { icon: Disc, label: "Top Artista", value: mockUserStats.topArtists[0].name, color: "text-primary" },
          { icon: Heart, label: "Top Música", value: mockUserStats.topTracks[0].title, color: "text-destructive" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="gradient-card border border-border rounded-xl p-4"
          >
            <stat.icon className={`w-5 h-5 ${stat.color} mb-2`} />
            <p className="text-xl font-display font-bold text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Time Filters */}
      <div className="flex gap-2 mb-8 overflow-x-auto scrollbar-hide">
        {timeFilters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
              activeFilter === filter
                ? "gradient-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Top 10s */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Top Artists */}
        <div>
          <h2 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            Top 10 Artistas
          </h2>
          <div className="gradient-card border border-border rounded-xl overflow-hidden">
            {mockUserStats.topArtists.map((artist, i) => (
              <div key={artist.name} className="flex items-center gap-3 px-4 py-3 border-b border-border last:border-0 hover:bg-rocket-surface-hover transition-colors">
                <span className={`text-sm font-bold w-6 text-right ${i < 3 ? "gradient-primary-text" : "text-muted-foreground"}`}>
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate text-foreground">{artist.name}</p>
                  <p className="text-xs text-muted-foreground">{artist.plays} plays</p>
                </div>
                <span className="text-xs text-rocket-cyan">{formatMinutes(artist.minutes)} min</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Tracks */}
        <div>
          <h2 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
            <Music className="w-5 h-5 text-rocket-orange" />
            Top 10 Músicas
          </h2>
          <div className="gradient-card border border-border rounded-xl overflow-hidden">
            {mockUserStats.topTracks.map((track, i) => (
              <div key={track.title} className="flex items-center gap-3 px-4 py-3 border-b border-border last:border-0 hover:bg-rocket-surface-hover transition-colors">
                <span className={`text-sm font-bold w-6 text-right ${i < 3 ? "gradient-primary-text" : "text-muted-foreground"}`}>
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate text-foreground">{track.title}</p>
                  <p className="text-xs text-muted-foreground">{track.artist}</p>
                </div>
                <span className="text-xs text-rocket-cyan">{track.plays}x</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Albums */}
        <div>
          <h2 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
            <Disc className="w-5 h-5 text-rocket-cyan" />
            Top 10 Álbuns
          </h2>
          <div className="gradient-card border border-border rounded-xl overflow-hidden">
            {mockUserStats.topAlbums.map((album, i) => (
              <div key={album.title} className="flex items-center gap-3 px-4 py-3 border-b border-border last:border-0 hover:bg-rocket-surface-hover transition-colors">
                <span className={`text-sm font-bold w-6 text-right ${i < 3 ? "gradient-primary-text" : "text-muted-foreground"}`}>
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate text-foreground">{album.title}</p>
                  <p className="text-xs text-muted-foreground">{album.artist}</p>
                </div>
                <span className="text-xs text-rocket-cyan">{album.plays}x</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
