import { createContext, useContext, useState, ReactNode, useCallback } from "react";

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
  isAuthenticated: boolean;
  showAuthModal: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  requireAuth: (callback: () => void) => void;
  login: (email: string, password: string) => void;
  register: (name: string, email: string, password: string) => void;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

const mockLoggedUser: User = {
  id: "current-user",
  name: "Rafael Martins",
  username: "@rafaelm",
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=128&h=128&fit=crop",
  bio: "Amante de música desde sempre 🎵 | Rock, Hip Hop & Eletrônica",
  status: "Ouvindo Paranoid no repeat 🎸",
  socialLinks: [
    { platform: "instagram", url: "https://instagram.com/rafaelm" },
    { platform: "twitter", url: "https://x.com/rafaelm" },
  ],
  followers: 1243,
  following: 567,
  reviews: 89,
  lists: 12,
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const openAuthModal = useCallback(() => setShowAuthModal(true), []);
  const closeAuthModal = useCallback(() => setShowAuthModal(false), []);

  const requireAuth = useCallback(
    (callback: () => void) => {
      if (user) {
        callback();
      } else {
        setShowAuthModal(true);
      }
    },
    [user]
  );

  const login = useCallback((_email: string, _password: string) => {
    setUser(mockLoggedUser);
    setShowAuthModal(false);
  }, []);

  const register = useCallback((_name: string, _email: string, _password: string) => {
    setUser(mockLoggedUser);
    setShowAuthModal(false);
  }, []);

  const logout = useCallback(() => setUser(null), []);

  const updateProfile = useCallback((data: Partial<User>) => {
    setUser((prev) => (prev ? { ...prev, ...data } : prev));
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: !!user, showAuthModal, openAuthModal, closeAuthModal, requireAuth, login, register, logout, updateProfile }}
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
