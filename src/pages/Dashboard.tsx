import { useState, useEffect, useRef, memo } from "react";
import { motion } from "framer-motion";
import { Star, Heart, MessageSquare, ListPlus, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import StarRating from "@/components/StarRating";
import { useAuth } from "@/hooks/useAuth";
import { mockAlbums, mockFeedActivities, mockPopularLists } from "@/data/mockData";

// ASPAS: Otimização de renderização para o Feed
const FeedCard = memo(({ activity }: { activity: typeof mockFeedActivities[0] }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    className="gradient-card border border-border rounded-xl p-4 hover:border-primary/30 transition-colors"
  >
    <div className="flex items-start gap-3">
      <img src={activity.avatar} alt={activity.user} className="w-10 h-10 rounded-full object-cover" loading="lazy" />
      <div className="flex-1 min-w-0">
        <p className="text-sm">
          <span className="font-semibold text-foreground">{activity.user}</span>{" "}
          <span className="text-muted-foreground">{activity.action}</span>{" "}
          <span className="font-medium text-rocket-cyan">{activity.target}</span>
        </p>
        {activity.rating && (
          <div className="mt-1">
            <StarRating rating={activity.rating} size={14} />
          </div>
        )}
        <p className="text-xs text-muted-foreground mt-2">{activity.timeAgo}</p>
      </div>
    </div>
  </motion.div>
));

// ASPAS: Componente restaurado para corrigir o erro de compilação
const PopularListCard = memo(({ list }: { list: typeof mockPopularLists[0] }) => (
  <motion.div
    whileHover={{ y: -4 }}
    className="gradient-card border border-border rounded-xl p-4 hover:border-primary/30 transition-all cursor-pointer group"
  >
    <div className="flex -space-x-4 mb-3">
      {list.covers.map((cover, i) => (
        <img
          key={i}
          src={cover}
          alt=""
          className="w-16 h-16 rounded-lg object-cover border-2 border-card shadow-lg"
          style={{ zIndex: 3 - i }}
          draggable="false"
        />
      ))}
    </div>
    <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">{list.title}</h3>
    <p className="text-xs text-muted-foreground mt-1">{list.description}</p>
    <p className="text-xs text-rocket-cyan mt-2">{list.count} álbuns</p>
  </motion.div>
));

const AlbumCarouselCard = memo(({ album }: { album: typeof mockAlbums[0] }) => (
  <Link to={`/album/${album.id}`} className="shrink-0 w-40 group select-none">
    <motion.div 
      whileHover={{ y: -5 }} 
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <div className="relative overflow-hidden rounded-lg bg-muted">
        <img 
          src={album.cover} 
          alt={album.title} 
          className="w-40 h-40 object-cover transition-transform duration-500 group-hover:scale-110 will-change-transform" 
          draggable="false" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <h3 className="text-sm font-semibold mt-2 truncate text-foreground">{album.title}</h3>
      <p className="text-xs text-muted-foreground truncate">{album.artist}</p>
    </motion.div>
  </Link>
));

const Dashboard = () => {
  const { user, openAuthModal } = useAuth();
  const carouselRef1 = useRef<HTMLDivElement>(null);
  const carouselRef2 = useRef<HTMLDivElement>(null);
  const [width1, setWidth1] = useState(0);
  const [width2, setWidth2] = useState(0);

  useEffect(() => {
    const calculateWidths = () => {
      if (carouselRef1.current) setWidth1(carouselRef1.current.scrollWidth - carouselRef1.current.offsetWidth);
      if (carouselRef2.current) setWidth2(carouselRef2.current.scrollWidth - carouselRef2.current.offsetWidth);
    };

    calculateWidths();
    window.addEventListener("resize", calculateWidths);
    return () => window.removeEventListener("resize", calculateWidths);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 overflow-x-hidden">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-3 tracking-tight">
          Sua jornada musical, <span className="gradient-primary-text">rastreada.</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto font-light">
          Analise seu gosto, descubra novos sons e conecte-se com a elite musical.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="font-display text-xl font-semibold flex items-center gap-2 text-foreground">
            <MessageSquare className="w-5 h-5 text-primary" /> Atividade dos Amigos
          </h2>
          <div className="space-y-3">
            {user ? (
              mockFeedActivities.map((activity) => <FeedCard key={activity.id} activity={activity} />)
            ) : (
              <div className="bg-secondary/20 border border-dashed border-border rounded-xl p-12 text-center">
                <Lock className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground mb-4 font-medium">Faça login para ver a atividade da sua rede.</p>
                <button onClick={openAuthModal} className="gradient-primary text-primary-foreground px-8 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform active:scale-95">
                  Entrar com Spotify
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="font-display text-xl font-semibold flex items-center gap-2 text-foreground">
            <ListPlus className="w-5 h-5 text-primary" /> Listas Populares
          </h2>
          <div className="space-y-3">
            {mockPopularLists.map((list) => (
              <PopularListCard key={list.id} list={list} />
            ))}
          </div>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2 text-foreground">
          <Star className="w-5 h-5 text-rocket-orange" /> Lançamentos
        </h2>
        <div className="relative overflow-visible">
          <motion.div 
            ref={carouselRef1} 
            className="flex gap-4 cursor-grab active:cursor-grabbing will-change-transform"
            drag="x"
            dragConstraints={{ right: 0, left: -width1 }}
            dragElastic={0.05}
          >
            {mockAlbums.map((album) => (
              <AlbumCarouselCard key={album.id} album={album} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="mt-10 mb-10">
        <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2 text-foreground">
          <Heart className="w-5 h-5 text-destructive" /> Recomendados
        </h2>
        <div className="relative overflow-visible">
          <motion.div 
            ref={carouselRef2} 
            className="flex gap-4 cursor-grab active:cursor-grabbing will-change-transform"
            drag="x"
            dragConstraints={{ right: 0, left: -width2 }}
            dragElastic={0.05}
          >
            {[...mockAlbums].reverse().map((album) => (
              <AlbumCarouselCard key={`rec-${album.id}`} album={album} />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;