import { motion } from "framer-motion";
import { Trophy, Lock } from "lucide-react";
import { mockAchievements } from "@/data/mockAchievements";

const AchievementsSection = () => {
  return (
    <div className="mt-10">
      <h2 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
        <Trophy className="w-5 h-5 text-rocket-orange" />
        Conquistas
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {mockAchievements.map((ach, i) => {
          const unlocked = !!ach.unlockedAt;
          return (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className={`gradient-card border rounded-xl p-4 text-center relative ${
                unlocked ? "border-primary/30 glow-primary" : "border-border opacity-50"
              }`}
            >
              {!unlocked && (
                <div className="absolute top-2 right-2">
                  <Lock className="w-3.5 h-3.5 text-muted-foreground" />
                </div>
              )}
              <div className="text-3xl mb-2">{ach.imageUrl}</div>
              <p className="text-sm font-display font-semibold text-foreground">{ach.title}</p>
              <p className="text-xs text-muted-foreground mt-1">{ach.description}</p>
              {unlocked && (
                <p className="text-[10px] text-primary mt-2">
                  {new Date(ach.unlockedAt!).toLocaleDateString("pt-BR")}
                </p>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
