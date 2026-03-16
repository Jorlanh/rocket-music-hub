export const mockCommunities = [
  { id: "1", name: "Black Sabbath Brasil", description: "Comunidade dos fãs de Black Sabbath no Brasil", members: 12450, cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=200&fit=crop", linkedTo: "Black Sabbath" },
  { id: "2", name: "Radiohead Lovers", description: "Discussões e análises sobre a discografia do Radiohead", members: 8920, cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=200&fit=crop", linkedTo: "Radiohead" },
  { id: "3", name: "Hip Hop Heads BR", description: "O melhor do Hip Hop nacional e internacional", members: 23100, cover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400&h=200&fit=crop", linkedTo: null },
  { id: "4", name: "Eletrônica Underground", description: "Techno, House, IDM e experimentações sonoras", members: 5670, cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=200&fit=crop", linkedTo: null },
  { id: "5", name: "Rock Progressivo", description: "De Pink Floyd a King Crimson - explorando o prog rock", members: 7890, cover: "https://images.unsplash.com/photo-1446057032654-9d8885db76c6?w=400&h=200&fit=crop", linkedTo: "Pink Floyd" },
];

export const mockCommunityPosts = [
  { id: "1", communityId: "1", user: "João Silva", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop", text: "War Pigs ao vivo é uma experiência transcendental. Alguém mais viu o show de 1974?", likes: 45, comments: 12, timeAgo: "1h atrás" },
  { id: "2", communityId: "1", user: "Maria Costa", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop", text: "Qual vocês consideram o melhor álbum? Pra mim é entre Paranoid e Master of Reality.", likes: 32, comments: 28, timeAgo: "3h atrás" },
  { id: "3", communityId: "1", user: "Pedro Santos", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop", text: "Acabei de ouvir Vol. 4 pela centésima vez e continuo descobrindo detalhes novos 🤯", likes: 67, comments: 8, timeAgo: "5h atrás" },
];
