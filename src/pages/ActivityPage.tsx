import { motion } from "framer-motion";
import { Heart, Star, Users, ListMusic, MessageSquare, Trophy } from "lucide-react";
import { mockActivityFeed } from "@/data/mockAchievements";
import AdPlaceholder from "@/components/AdPlaceholder";

const typeIcons: Record<string, React.ReactNode> = {
  follow: <Users className="w-4 h-4 text-primary" />,
  review: <Star className="w-4 h-4 text-rocket-orange" />,
  achievement: <Trophy className="w-4 h-4 text-rocket-cyan" />,
  list: <ListMusic className="w-4 h-4 text-primary" />,
  community: <MessageSquare className="w-4 h-4 text-rocket-cyan" />,
  favorite: <Heart className="w-4 h-4 text-destructive" />,
  post: <MessageSquare className="w-4 h-4 text-rocket-orange" />,
};

const ActivityPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-display font-bold text-foreground mb-6">Atividade dos Amigos</h1>
      <div className="flex gap-6">
        <div className="hidden lg:block shrink-0">
          <AdPlaceholder size="sidebar" />
        </div>
        <div className="flex-1 max-w-2xl space-y-3">
          {mockActivityFeed.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="gradient-card border border-border rounded-xl p-4 flex items-center gap-3"
            >
              <img src={item.avatar} alt="" className="w-10 h-10 rounded-full object-cover shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground">
                  <span className="font-semibold">{item.user}</span>{" "}
                  <span className="text-muted-foreground">{item.action}</span>{" "}
                  <span className="font-medium text-primary">{item.target}</span>
                  {"rating" in item && item.rating && <span className="text-rocket-orange ml-1">{"⭐".repeat(item.rating)}</span>}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">{item.timestamp}</p>
              </div>
              <div className="shrink-0">{typeIcons[item.type]}</div>
            </motion.div>
          ))}
          <AdPlaceholder size="inline" className="mt-4" />
        </div>
        <div className="hidden lg:block shrink-0">
          <AdPlaceholder size="sidebar" />
        </div>
      </div>
    </div>
  );
};

export default ActivityPage;
