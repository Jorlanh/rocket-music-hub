export interface Conversation {
  id: string;
  user: { name: string; avatar: string; username: string };
  lastMessage: string;
  timestamp: string;
  unread: boolean;
  unreadCount: number;
}

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  text: string;
  timestamp: string;
  read: boolean;
}

export const mockConversations: Conversation[] = [
  { id: "1", user: { name: "João Silva", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop", username: "@joaosilva" }, lastMessage: "Cara, ouviu o novo álbum?", timestamp: "10 min", unread: true, unreadCount: 3 },
  { id: "2", user: { name: "Maria Costa", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop", username: "@mariacosta" }, lastMessage: "Vamos naquele show semana que vem?", timestamp: "1h", unread: true, unreadCount: 1 },
  { id: "3", user: { name: "Pedro Santos", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop", username: "@pedrosantos" }, lastMessage: "Valeu pela recomendação!", timestamp: "3h", unread: false, unreadCount: 0 },
  { id: "4", user: { name: "Ana Lima", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop", username: "@analima" }, lastMessage: "Aquela playlist ficou incrível 🔥", timestamp: "1d", unread: false, unreadCount: 0 },
];

export const mockMessages: Message[] = [
  { id: "1", conversationId: "1", senderId: "other", text: "E aí, tudo bem?", timestamp: "10:30", read: true },
  { id: "2", conversationId: "1", senderId: "current-user", text: "Tudo ótimo! E vc?", timestamp: "10:32", read: true },
  { id: "3", conversationId: "1", senderId: "other", text: "Cara, ouviu o novo álbum do Arctic Monkeys?", timestamp: "10:33", read: true },
  { id: "4", conversationId: "1", senderId: "other", text: "Tá muito bom!", timestamp: "10:33", read: true },
  { id: "5", conversationId: "1", senderId: "other", text: "Cara, ouviu o novo álbum?", timestamp: "10:35", read: false },
];
