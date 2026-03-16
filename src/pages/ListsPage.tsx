import { motion } from "framer-motion";
import { mockPopularLists } from "@/data/mockData";

const ListsPage = () => (
  <div className="container mx-auto px-4 py-8">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <h1 className="text-3xl font-display font-bold mb-2">Listas</h1>
      <p className="text-muted-foreground mb-8">Coleções curadas pela comunidade</p>
    </motion.div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {mockPopularLists.map((list, i) => (
        <motion.div
          key={list.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="gradient-card border border-border rounded-xl p-5 hover:border-primary/30 transition-all cursor-pointer group"
        >
          <div className="flex -space-x-6 mb-4">
            {list.covers.map((cover, j) => (
              <img key={j} src={cover} alt="" className="w-20 h-20 rounded-xl object-cover border-2 border-card shadow-lg" style={{ zIndex: 3 - j }} />
            ))}
          </div>
          <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{list.title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{list.description}</p>
          <p className="text-sm text-rocket-cyan mt-3 font-medium">{list.count} álbuns</p>
        </motion.div>
      ))}
    </div>
  </div>
);

export default ListsPage;
