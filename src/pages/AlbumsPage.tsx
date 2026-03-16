import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { mockAlbums } from "@/data/mockData";
import StarRating from "@/components/StarRating";

const AlbumsPage = () => (
  <div className="container mx-auto px-4 py-8">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <h1 className="text-3xl font-display font-bold mb-2">Músicas & Álbuns</h1>
      <p className="text-muted-foreground mb-8">Explore e descubra novos sons</p>
    </motion.div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {mockAlbums.map((album, i) => (
        <motion.div key={album.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
          <Link to={`/album/${album.id}`} className="group block">
            <div className="relative overflow-hidden rounded-xl">
              <img src={album.cover} alt={album.title} className="w-full aspect-square object-cover transition-transform group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <StarRating rating={album.rating} size={12} />
              </div>
            </div>
            <h3 className="text-sm font-semibold mt-2 truncate text-foreground group-hover:text-primary transition-colors">{album.title}</h3>
            <p className="text-xs text-muted-foreground truncate">{album.artist}</p>
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
);

export default AlbumsPage;
