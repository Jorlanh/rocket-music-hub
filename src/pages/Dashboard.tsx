import { motion } from "framer-motion";
import { Star, Heart, MessageSquare, ListPlus } from "lucide-react";
import { Link } from "react-router-dom";
import StarRating from "@/components/StarRating";
import { mockAlbums, mockFeedActivities, mockPopularLists } from "@/data/mockData";

const FeedCard = ({ activity }: { activity: typeof mockFeedActivities[0] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="gradient-card border border-border rounded-xl p-4 hover:border-primary/30 transition-colors"
  >
    <div className="flex items-start gap-3">
      <img src={activity.avatar} alt={activity.user} className="w-10 h-10 rounded-full object-cover" />
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
);

const AlbumCarouselCard = ({ album }: { album: typeof mockAlbums[0] }) => (
  <Link to={`/album/${album.id}`} className="shrink-0 w-40 group">
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
      <div className="relative overflow-hidden rounded-lg">
        <img src={album.cover} alt={album.title} className="w-40 h-40 object-cover transition-transform group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <h3 className="text-sm font-semibold mt-2 truncate text-foreground">{album.title}</h3>
      <p className="text-xs text-muted-foreground truncate">{album.artist}</p>
    </motion.div>
  </Link>
);

const PopularListCard = ({ list }: { list: typeof mockPopularLists[0] }) => (
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
        />
      ))}
    </div>
    <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">{list.title}</h3>
    <p className="text-xs text-muted-foreground mt-1">{list.description}</p>
    <p className="text-xs text-rocket-cyan mt-2">{list.count} álbuns</p>
  </motion.div>
);

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-3">
          Sua jornada musical,{" "}
          <span className="gradient-primary-text">rastreada.</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Avalie, descubra e compartilhe sua paixão pela música com a comunidade.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Feed */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="font-display text-xl font-semibold flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-primary" />
            Atividade dos Amigos
          </h2>
          <div className="space-y-3">
            {mockFeedActivities.map((activity, i) => (
              <FeedCard key={activity.id} activity={activity} />
            ))}
          </div>
        </div>

        {/* Sidebar - Popular Lists */}
        <div className="space-y-6">
          <h2 className="font-display text-xl font-semibold flex items-center gap-2">
            <ListPlus className="w-5 h-5 text-primary" />
            Listas Populares
          </h2>
          <div className="space-y-3">
            {mockPopularLists.map((list) => (
              <PopularListCard key={list.id} list={list} />
            ))}
          </div>
        </div>
      </div>

      {/* Carousels */}
      <section className="mt-12">
        <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
          <Star className="w-5 h-5 text-rocket-orange" />
          Lançamentos
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {mockAlbums.map((album) => (
            <AlbumCarouselCard key={album.id} album={album} />
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
          <Heart className="w-5 h-5 text-destructive" />
          Recomendados para Você
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {[...mockAlbums].reverse().map((album) => (
            <AlbumCarouselCard key={`rec-${album.id}`} album={album} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
