import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const mockResponses = [
  "Com base no seu histórico, você adora **rock progressivo** e **metal**! Recomendo:\n\n1. 🎸 **Tool - Lateralus** - Complexidade rítmica incrível\n2. 🎵 **King Crimson - In the Court** - Clássico do prog\n3. 🎶 **Opeth - Blackwater Park** - Metal progressivo perfeito\n4. 🎤 **Porcupine Tree - In Absentia** - Prog moderno\n5. 🎹 **Yes - Close to the Edge** - Épico e grandioso",
  "Percebi que você tem ouvido muito **Daft Punk** e **Frank Ocean**! Que tal explorar:\n\n- 🎧 **Tame Impala - Currents** - Synth-pop psicodélico\n- 🎵 **Tyler, The Creator - IGOR** - R&B experimental\n- 🎶 **Jamie xx - In Colour** - Eletrônica emotiva\n- 🎤 **SZA - Ctrl** - R&B contemporâneo\n- 🎹 **Blood Orange - Freetown Sound** - Art pop",
  "Baseado nos seus **127k minutos** de música, você é um verdadeiro audiófilo! 🚀\n\nSeu perfil combina **nostalgia** com **experimentação**. Recomendo o álbum **Radiohead - Kid A** se ainda não ouviu - é a ponte perfeita entre seus gostos.",
];

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Olá! 🚀 Sou o assistente do **Rocket Music**. Posso recomendar músicas baseadas no seu histórico. O que você gostaria de ouvir?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;
    const userMsg: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const response = mockResponses[Math.floor(Math.random() * mockResponses.length)];
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-primary shadow-xl glow-primary flex items-center justify-center hover:opacity-90 transition-opacity"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X className="w-6 h-6 text-primary-foreground" /> : <MessageCircle className="w-6 h-6 text-primary-foreground" />}
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-h-[500px] rounded-2xl border border-border shadow-2xl overflow-hidden flex flex-col"
            style={{ background: "hsl(222, 47%, 8%)" }}
          >
            {/* Header */}
            <div className="gradient-primary p-4 flex items-center gap-3">
              <Bot className="w-5 h-5 text-primary-foreground" />
              <div>
                <p className="font-display font-semibold text-sm text-primary-foreground">Rocket Music AI</p>
                <p className="text-xs text-primary-foreground/70">Recomendações personalizadas</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-hide" style={{ maxHeight: "340px" }}>
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.role === "assistant" && (
                    <div className="w-7 h-7 rounded-full gradient-primary flex items-center justify-center shrink-0 mt-1">
                      <Bot className="w-3.5 h-3.5 text-primary-foreground" />
                    </div>
                  )}
                  <div
                    className={`rounded-xl px-3 py-2 max-w-[80%] text-sm ${
                      msg.role === "user"
                        ? "gradient-primary text-primary-foreground"
                        : "bg-secondary text-foreground"
                    }`}
                  >
                    <div className="prose prose-sm prose-invert max-w-none [&>p]:m-0 [&>ul]:my-1 [&>ol]:my-1">
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                  </div>
                  {msg.role === "user" && (
                    <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-1">
                      <User className="w-3.5 h-3.5 text-foreground" />
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-2 items-center">
                  <div className="w-7 h-7 rounded-full gradient-primary flex items-center justify-center shrink-0">
                    <Bot className="w-3.5 h-3.5 text-primary-foreground" />
                  </div>
                  <div className="bg-secondary rounded-xl px-4 py-2 text-sm text-muted-foreground">
                    <span className="animate-pulse">Pensando...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Me recomende algo..."
                  className="flex-1 bg-secondary border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="gradient-primary text-primary-foreground p-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatWidget;
