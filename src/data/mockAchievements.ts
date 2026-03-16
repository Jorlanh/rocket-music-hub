export const mockAchievements = [
  { id: "1", type: "scrobbles_1k", title: "1K Scrobbles", description: "Registrou 1.000 reproduções", imageUrl: "🚀", unlockedAt: "2024-01-15" },
  { id: "2", type: "scrobbles_10k", title: "10K Scrobbles", description: "Registrou 10.000 reproduções", imageUrl: "🔥", unlockedAt: "2024-03-20" },
  { id: "3", type: "scrobbles_100k", title: "100K Scrobbles", description: "Registrou 100.000 reproduções", imageUrl: "⭐", unlockedAt: "2024-08-10" },
  { id: "4", type: "reviewer", title: "Crítico Musical", description: "Escreveu 50 reviews", imageUrl: "📝", unlockedAt: "2024-05-01" },
  { id: "5", type: "social_butterfly", title: "Social Butterfly", description: "Seguiu 100 usuários", imageUrl: "🦋", unlockedAt: "2024-06-12" },
  { id: "6", type: "genre_explorer", title: "Explorador de Gêneros", description: "Ouviu 20 gêneros diferentes", imageUrl: "🌍", unlockedAt: null },
  { id: "7", type: "night_owl", title: "Coruja Noturna", description: "Ouviu música por 8h seguidas", imageUrl: "🦉", unlockedAt: null },
];

export const mockActivityFeed = [
  { id: "1", user: "João Silva", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop", action: "começou a seguir", target: "Maria Costa", timestamp: "5 min atrás", type: "follow" as const },
  { id: "2", user: "Maria Costa", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop", action: "avaliou", target: "OK Computer - Radiohead", timestamp: "15 min atrás", type: "review" as const, rating: 5 },
  { id: "3", user: "Pedro Santos", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop", action: "desbloqueou a conquista", target: "100K Scrobbles ⭐", timestamp: "30 min atrás", type: "achievement" as const },
  { id: "4", user: "Ana Lima", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop", action: "adicionou à lista", target: "Random Access Memories", timestamp: "1h atrás", type: "list" as const },
  { id: "5", user: "Lucas Oliveira", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop", action: "entrou na comunidade", target: "Hip Hop Heads BR", timestamp: "2h atrás", type: "community" as const },
  { id: "6", user: "João Silva", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop", action: "favoritou", target: "Paranoid - Black Sabbath", timestamp: "3h atrás", type: "favorite" as const },
  { id: "7", user: "Maria Costa", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop", action: "postou na comunidade", target: "Radiohead Lovers", timestamp: "4h atrás", type: "post" as const },
];
