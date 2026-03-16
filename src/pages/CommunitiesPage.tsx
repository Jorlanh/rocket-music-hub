import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Plus, Users, MessageSquare, Heart } from "lucide-react";
import { mockCommunities, mockCommunityPosts } from "@/data/mockCommunities";
import { useAuth } from "@/hooks/useAuth";
import AdPlaceholder from "@/components/AdPlaceholder";

const CommunitiesPage = () => {
  const { requireAuth } = useAuth();
  const [search, setSearch] = useState("");
  const [selectedCommunity, setSelectedCommunity] = useState<string | null>(null);

  const filtered = mockCommunities.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const communityPosts = mockCommunityPosts.filter(
    (p) => p.communityId === selectedCommunity
  );

  const selectedData = mockCommunities.find((c) => c.id === selectedCommunity);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Ad */}
        <div className="hidden lg:block shrink-0">
          <AdPlaceholder size="sidebar" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <h1 className="text-2xl font-display font-bold text-foreground">Comunidades</h1>
            <button
              onClick={() => requireAuth(() => {})}
              className="gradient-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Plus className="w-4 h-4" /> Criar Comunidade
            </button>
          </div>

          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar comunidades..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-secondary border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          <AdPlaceholder size="inline" className="mb-6" />

          {!selectedCommunity ? (
            /* Community List */
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filtered.map((community, i) => (
                <motion.div
                  key={community.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setSelectedCommunity(community.id)}
                  className="gradient-card border border-border rounded-xl overflow-hidden cursor-pointer hover:border-primary/30 transition-colors"
                >
                  <img src={community.cover} alt={community.name} className="w-full h-28 object-cover" />
                  <div className="p-4">
                    <h3 className="font-display font-semibold text-foreground">{community.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{community.description}</p>
                    <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
                      <Users className="w-3.5 h-3.5" />
                      <span>{community.members.toLocaleString()} membros</span>
                      {community.linkedTo && (
                        <span className="ml-auto text-primary text-xs">🎵 {community.linkedTo}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            /* Community Feed */
            <div>
              <button onClick={() => setSelectedCommunity(null)} className="text-sm text-primary hover:underline mb-4">&larr; Voltar</button>
              <div className="gradient-card border border-border rounded-xl overflow-hidden mb-6">
                <img src={selectedData?.cover} alt="" className="w-full h-36 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-display font-bold text-foreground">{selectedData?.name}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{selectedData?.description}</p>
                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={() => requireAuth(() => {})}
                      className="gradient-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
                    >
                      Participar
                    </button>
                  </div>
                </div>
              </div>

              {/* Post input */}
              <div className="gradient-card border border-border rounded-xl p-4 mb-4">
                <textarea
                  placeholder="Compartilhe algo com a comunidade..."
                  onFocus={() => requireAuth(() => {})}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  rows={2}
                />
              </div>

              {/* Posts */}
              {communityPosts.map((post) => (
                <motion.div key={post.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="gradient-card border border-border rounded-xl p-4 mb-3">
                  <div className="flex items-center gap-3 mb-3">
                    <img src={post.avatar} alt="" className="w-9 h-9 rounded-full object-cover" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{post.user}</p>
                      <p className="text-xs text-muted-foreground">{post.timeAgo}</p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground mb-3">{post.text}</p>
                  <div className="flex gap-4 text-xs text-muted-foreground">
                    <button onClick={() => requireAuth(() => {})} className="flex items-center gap-1 hover:text-destructive transition-colors">
                      <Heart className="w-3.5 h-3.5" /> {post.likes}
                    </button>
                    <button onClick={() => requireAuth(() => {})} className="flex items-center gap-1 hover:text-primary transition-colors">
                      <MessageSquare className="w-3.5 h-3.5" /> {post.comments}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Sidebar Ad */}
        <div className="hidden lg:block shrink-0">
          <AdPlaceholder size="sidebar" />
        </div>
      </div>
    </div>
  );
};

export default CommunitiesPage;
