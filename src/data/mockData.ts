// Mock data for the entire application
export const mockAlbums = [
  { id: "1", title: "Paranoid", artist: "Black Sabbath", genre: "Heavy Metal", year: 1970, duration: "41:52", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop", rating: 4.8, tracks: 8 },
  { id: "2", title: "OK Computer", artist: "Radiohead", genre: "Alternative Rock", year: 1997, duration: "53:21", cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop", rating: 4.9, tracks: 12 },
  { id: "3", title: "To Pimp a Butterfly", artist: "Kendrick Lamar", genre: "Hip Hop", year: 2015, duration: "78:51", cover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=300&h=300&fit=crop", rating: 4.7, tracks: 16 },
  { id: "4", title: "Rumours", artist: "Fleetwood Mac", genre: "Soft Rock", year: 1977, duration: "39:43", cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop", rating: 4.6, tracks: 11 },
  { id: "5", title: "Random Access Memories", artist: "Daft Punk", genre: "Electronic", year: 2013, duration: "74:24", cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop", rating: 4.5, tracks: 13 },
  { id: "6", title: "Abbey Road", artist: "The Beatles", genre: "Rock", year: 1969, duration: "47:23", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop", rating: 4.9, tracks: 17 },
  { id: "7", title: "Blonde", artist: "Frank Ocean", genre: "R&B", year: 2016, duration: "60:06", cover: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300&h=300&fit=crop", rating: 4.7, tracks: 17 },
  { id: "8", title: "The Dark Side of the Moon", artist: "Pink Floyd", genre: "Progressive Rock", year: 1973, duration: "42:49", cover: "https://images.unsplash.com/photo-1446057032654-9d8885db76c6?w=300&h=300&fit=crop", rating: 4.9, tracks: 10 },
];

export const mockFeedActivities = [
  { id: "1", user: "João Silva", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop", action: "avaliou", target: "Paranoid - Black Sabbath", rating: 5, timeAgo: "2h atrás" },
  { id: "2", user: "Maria Costa", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop", action: "adicionou à lista", target: "OK Computer - Radiohead", timeAgo: "4h atrás" },
  { id: "3", user: "Pedro Santos", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop", action: "escreveu uma review sobre", target: "To Pimp a Butterfly", timeAgo: "6h atrás" },
  { id: "4", user: "Ana Lima", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop", action: "favoritou", target: "Random Access Memories - Daft Punk", timeAgo: "8h atrás" },
  { id: "5", user: "Lucas Oliveira", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop", action: "avaliou", target: "Blonde - Frank Ocean", rating: 4.5, timeAgo: "12h atrás" },
];

export const mockPopularLists = [
  { id: "1", title: "Melhores do Rock", description: "Os álbuns essenciais do rock de todos os tempos", count: 50, covers: [mockAlbums[0].cover, mockAlbums[5].cover, mockAlbums[7].cover] },
  { id: "2", title: "Melhores do POP", description: "O que há de melhor na música pop", count: 40, covers: [mockAlbums[3].cover, mockAlbums[4].cover, mockAlbums[1].cover] },
  { id: "3", title: "Hip Hop Essencial", description: "Clássicos e modernos do hip hop", count: 35, covers: [mockAlbums[2].cover, mockAlbums[6].cover, mockAlbums[0].cover] },
  { id: "4", title: "Eletrônica & Synthwave", description: "Viagem sonora eletrônica", count: 30, covers: [mockAlbums[4].cover, mockAlbums[7].cover, mockAlbums[1].cover] },
];

export const mockReviews = [
  { id: "1", user: "João Silva", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop", rating: 5, text: "Obra-prima absoluta. Cada faixa é uma jornada sonora que transcende o tempo. A produção é impecável e as letras são profundas.", likes: 234, date: "2024-01-15" },
  { id: "2", user: "Maria Costa", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop", rating: 4.5, text: "Um álbum que definiu uma geração. A experimentação sonora aqui é incrível, cada ouvida revela novos detalhes.", likes: 189, date: "2024-02-20" },
  { id: "3", user: "Carlos Mendes", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop", rating: 4, text: "Excelente álbum, embora alguns momentos sejam mais fracos. No geral, uma experiência auditiva memorável.", likes: 98, date: "2024-03-10" },
];

export const mockTracks = [
  { number: 1, title: "War Pigs", duration: "7:54" },
  { number: 2, title: "Paranoid", duration: "2:48" },
  { number: 3, title: "Planet Caravan", duration: "4:30" },
  { number: 4, title: "Iron Man", duration: "5:55" },
  { number: 5, title: "Electric Funeral", duration: "4:50" },
  { number: 6, title: "Hand of Doom", duration: "7:08" },
  { number: 7, title: "Rat Salad", duration: "2:30" },
  { number: 8, title: "Fairies Wear Boots", duration: "6:13" },
];

export const mockUserStats = {
  totalMinutes: 127843,
  totalTracks: 15234,
  topArtists: [
    { name: "Black Sabbath", plays: 342, minutes: 1580 },
    { name: "Radiohead", plays: 298, minutes: 1420 },
    { name: "Kendrick Lamar", plays: 276, minutes: 1350 },
    { name: "Pink Floyd", plays: 245, minutes: 1280 },
    { name: "Daft Punk", plays: 223, minutes: 1150 },
    { name: "Frank Ocean", plays: 198, minutes: 980 },
    { name: "The Beatles", plays: 187, minutes: 890 },
    { name: "Fleetwood Mac", plays: 176, minutes: 840 },
    { name: "Tame Impala", plays: 165, minutes: 780 },
    { name: "Arctic Monkeys", plays: 154, minutes: 720 },
  ],
  topTracks: [
    { title: "Paranoid", artist: "Black Sabbath", plays: 87 },
    { title: "Karma Police", artist: "Radiohead", plays: 76 },
    { title: "Alright", artist: "Kendrick Lamar", plays: 72 },
    { title: "Get Lucky", artist: "Daft Punk", plays: 68 },
    { title: "Dreams", artist: "Fleetwood Mac", plays: 65 },
    { title: "Nights", artist: "Frank Ocean", plays: 61 },
    { title: "Come Together", artist: "The Beatles", plays: 58 },
    { title: "Comfortably Numb", artist: "Pink Floyd", plays: 55 },
    { title: "The Less I Know", artist: "Tame Impala", plays: 52 },
    { title: "Do I Wanna Know?", artist: "Arctic Monkeys", plays: 49 },
  ],
  topAlbums: [
    { title: "Paranoid", artist: "Black Sabbath", plays: 156 },
    { title: "OK Computer", artist: "Radiohead", plays: 143 },
    { title: "To Pimp a Butterfly", artist: "Kendrick Lamar", plays: 132 },
    { title: "The Dark Side of the Moon", artist: "Pink Floyd", plays: 128 },
    { title: "Random Access Memories", artist: "Daft Punk", plays: 119 },
  ],
};

export const mockUser = {
  name: "Rafael Martins",
  username: "@rafaelm",
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=128&h=128&fit=crop",
  followers: 1243,
  following: 567,
  reviews: 89,
  lists: 12,
};
