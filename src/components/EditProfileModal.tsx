import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Camera, Instagram } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

interface EditProfileModalProps {
  open: boolean;
  onClose: () => void;
}

const EditProfileModal = ({ open, onClose }: EditProfileModalProps) => {
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState(user?.name ?? "");
  const [bio, setBio] = useState(user?.bio ?? "");
  const [status, setStatus] = useState(user?.status ?? "");
  const [instagram, setInstagram] = useState(user?.socialLinks.find((l) => l.platform === "instagram")?.url ?? "");
  const [twitter, setTwitter] = useState(user?.socialLinks.find((l) => l.platform === "twitter")?.url ?? "");
  const [tiktok, setTiktok] = useState(user?.socialLinks.find((l) => l.platform === "tiktok")?.url ?? "");

  const handleSave = () => {
    const socialLinks: { platform: "instagram" | "twitter" | "tiktok"; url: string }[] = [];
    if (instagram) socialLinks.push({ platform: "instagram", url: instagram });
    if (twitter) socialLinks.push({ platform: "twitter", url: twitter });
    if (tiktok) socialLinks.push({ platform: "tiktok", url: tiktok });
    updateProfile({ name, bio, status: status || null, socialLinks });
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="gradient-card border border-border rounded-2xl w-full max-w-lg p-6 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-display font-bold text-foreground mb-6">Editar Perfil</h2>

            {/* Avatar */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <img src={user?.avatar} alt="" className="w-24 h-24 rounded-full object-cover border-2 border-border" />
                <button className="absolute bottom-0 right-0 w-8 h-8 gradient-primary rounded-full flex items-center justify-center">
                  <Camera className="w-4 h-4 text-primary-foreground" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Nome de Exibição</label>
                <input value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Bio</label>
                <textarea value={bio} onChange={(e) => setBio(e.target.value)} rows={3} className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Status (balão de fala)</label>
                <input value={status} onChange={(e) => setStatus(e.target.value)} placeholder="O que você está ouvindo?" className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
              </div>

              <div className="border-t border-border pt-4">
                <p className="text-sm font-medium text-foreground mb-3">Redes Sociais</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Instagram className="w-4 h-4 text-rocket-orange shrink-0" />
                    <input value={instagram} onChange={(e) => setInstagram(e.target.value)} placeholder="URL do Instagram" className="flex-1 bg-secondary border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 text-rocket-cyan text-xs font-bold shrink-0">𝕏</span>
                    <input value={twitter} onChange={(e) => setTwitter(e.target.value)} placeholder="URL do X / Twitter" className="flex-1 bg-secondary border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 text-foreground text-xs font-bold shrink-0">TT</span>
                    <input value={tiktok} onChange={(e) => setTiktok(e.target.value)} placeholder="URL do TikTok" className="flex-1 bg-secondary border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button onClick={onClose} className="flex-1 border border-border py-2.5 rounded-lg text-sm text-foreground hover:bg-secondary transition-colors">Cancelar</button>
              <button onClick={handleSave} className="flex-1 gradient-primary text-primary-foreground py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">Salvar</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EditProfileModal;
