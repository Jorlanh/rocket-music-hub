import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, User, Menu, X, MessageSquare, Activity, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import rocketLogo from "@/assets/rocket-logo.png";
import { useAuth } from "@/hooks/useAuth";

const navLinks = [
  { label: "Ranking", path: "/ranking" },
  { label: "Músicas", path: "/albums" },
  { label: "Listas", path: "/lists" },
  { label: "Comunidades", path: "/communities", icon: Users },
  { label: "Atividade", path: "/activity", icon: Activity },
];

const Navbar = () => {
  const location = useLocation();
  const { isAuthenticated, user, openAuthModal } = useAuth();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={rocketLogo} alt="Rocket Music" className="w-8 h-8" />
          <span className="font-display font-bold text-lg gradient-primary-text hidden sm:block">ROCKET MUSIC</span>
        </Link>

        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input type="text" placeholder="Buscar artistas, álbuns, músicas..." className="w-full bg-secondary border border-border rounded-lg pl-10 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-foreground ${location.pathname === link.path ? "text-foreground" : "text-muted-foreground"}`}
            >
              {link.label}
            </Link>
          ))}

          {isAuthenticated ? (
            <>
              <Link to="/messages" className="relative p-2 text-muted-foreground hover:text-foreground">
                <MessageSquare className="w-5 h-5" />
                <span className="absolute top-0.5 right-0.5 w-2.5 h-2.5 gradient-primary rounded-full" />
              </Link>
              <Link to="/profile" className="w-9 h-9 rounded-full overflow-hidden border-2 border-primary/30">
                <img src={user?.avatar} alt="" className="w-full h-full object-cover" />
              </Link>
            </>
          ) : (
            <button onClick={openAuthModal} className="gradient-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
              Entrar
            </button>
          )}
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button onClick={() => setSearchOpen(!searchOpen)} className="p-2 text-muted-foreground hover:text-foreground">
            <Search className="w-5 h-5" />
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-muted-foreground hover:text-foreground">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {searchOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="md:hidden border-t border-border overflow-hidden">
            <div className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input type="text" placeholder="Buscar..." className="w-full bg-secondary border border-border rounded-lg pl-10 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" autoFocus />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="md:hidden border-t border-border overflow-hidden">
            <div className="p-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} onClick={() => setMobileOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-foreground py-2">
                  {link.label}
                </Link>
              ))}
              {isAuthenticated ? (
                <>
                  <Link to="/messages" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-foreground py-2">Mensagens</Link>
                  <Link to="/profile" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-foreground py-2">Meu Perfil</Link>
                </>
              ) : (
                <button onClick={() => { setMobileOpen(false); openAuthModal(); }} className="text-sm font-medium text-primary hover:text-foreground py-2 text-left">Entrar / Criar Conta</button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
