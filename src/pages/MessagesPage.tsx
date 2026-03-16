import { useState } from "react";
import { motion } from "framer-motion";
import { Send, ArrowLeft } from "lucide-react";
import { mockConversations, mockMessages } from "@/data/mockMessages";
import { useAuth } from "@/hooks/useAuth";

const MessagesPage = () => {
  const { isAuthenticated, openAuthModal } = useAuth();
  const [selectedConvo, setSelectedConvo] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState("");

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-display font-bold text-foreground mb-4">Mensagens</h1>
        <p className="text-muted-foreground mb-6">Faça login para acessar suas mensagens.</p>
        <button onClick={openAuthModal} className="gradient-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
          Entrar
        </button>
      </div>
    );
  }

  const messages = mockMessages.filter((m) => m.conversationId === selectedConvo);
  const selectedUser = mockConversations.find((c) => c.id === selectedConvo);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="gradient-card border border-border rounded-xl overflow-hidden h-[calc(100vh-10rem)]">
        <div className="flex h-full">
          {/* Conversation List */}
          <div className={`${selectedConvo ? "hidden md:flex" : "flex"} flex-col w-full md:w-80 border-r border-border`}>
            <div className="p-4 border-b border-border">
              <h2 className="font-display font-bold text-foreground">Mensagens</h2>
            </div>
            <div className="flex-1 overflow-y-auto">
              {mockConversations.map((convo) => (
                <button
                  key={convo.id}
                  onClick={() => setSelectedConvo(convo.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-rocket-surface-hover transition-colors text-left ${selectedConvo === convo.id ? "bg-rocket-surface-hover" : ""}`}
                >
                  <div className="relative shrink-0">
                    <img src={convo.user.avatar} alt="" className="w-10 h-10 rounded-full object-cover" />
                    {convo.unread && <div className="absolute -top-0.5 -right-0.5 w-3 h-3 gradient-primary rounded-full border-2 border-card" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className={`text-sm truncate ${convo.unread ? "font-semibold text-foreground" : "text-foreground"}`}>{convo.user.name}</p>
                      <span className="text-xs text-muted-foreground shrink-0 ml-2">{convo.timestamp}</span>
                    </div>
                    <p className={`text-xs truncate ${convo.unread ? "text-foreground" : "text-muted-foreground"}`}>{convo.lastMessage}</p>
                  </div>
                  {convo.unreadCount > 0 && (
                    <span className="gradient-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold shrink-0">
                      {convo.unreadCount}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className={`${selectedConvo ? "flex" : "hidden md:flex"} flex-col flex-1`}>
            {selectedConvo ? (
              <>
                <div className="flex items-center gap-3 p-4 border-b border-border">
                  <button onClick={() => setSelectedConvo(null)} className="md:hidden text-muted-foreground">
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <img src={selectedUser?.user.avatar} alt="" className="w-8 h-8 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{selectedUser?.user.name}</p>
                    <p className="text-xs text-muted-foreground">{selectedUser?.user.username}</p>
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${msg.senderId === "current-user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[70%] px-3.5 py-2 rounded-2xl text-sm ${
                          msg.senderId === "current-user"
                            ? "gradient-primary text-primary-foreground rounded-br-md"
                            : "bg-secondary text-foreground rounded-bl-md"
                        }`}
                      >
                        <p>{msg.text}</p>
                        <p className={`text-[10px] mt-1 ${msg.senderId === "current-user" ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{msg.timestamp}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="p-4 border-t border-border">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Escreva uma mensagem..."
                      className="flex-1 bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <button className="gradient-primary text-primary-foreground w-10 h-10 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity shrink-0">
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-muted-foreground text-sm">
                Selecione uma conversa
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
