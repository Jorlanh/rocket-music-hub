import { createContext, useContext, useState, ReactNode, useCallback, useEffect } from "react";

interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio: string;
  status: string | null;
  socialLinks: { platform: "instagram" | "twitter" | "tiktok"; url: string }[];
  followers: number;
  following: number;
  reviews: number;
  lists: number;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  showAuthModal: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  requireAuth: (callback: () => void) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Efeito de inicialização: Checa sessão e remove o loader
  useEffect(() => {
    const initialize = async () => {
      try {
        // Simulação de check de cookie/sessão
        await new Promise(resolve => setTimeout(resolve, 600));
        setUser(null); // Começa como visitante
      } finally {
        setIsLoading(false);
      }
    };
    initialize();
  }, []);

  const openAuthModal = useCallback(() => setShowAuthModal(true), []);
  const closeAuthModal = useCallback(() => setShowAuthModal(false), []);

  const requireAuth = useCallback((callback: () => void) => {
    if (user) callback();
    else setShowAuthModal(true);
  }, [user]);

  const login = useCallback((_email: string, _password: string) => {
    // Integração futura com backend
    setShowAuthModal(false);
  }, []);

  const logout = useCallback(() => setUser(null), []);

  const updateProfile = useCallback((data: Partial<User>) => {
    setUser((prev) => (prev ? { ...prev, ...data } : prev));
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isLoading, isAuthenticated: !!user, showAuthModal, openAuthModal, closeAuthModal, requireAuth, login, logout, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}