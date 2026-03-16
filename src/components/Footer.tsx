import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border py-8 mt-16">
    <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © 2026 <span className="gradient-primary-text font-display font-semibold">Rocket Music</span>. Todos os direitos reservados.
      </p>
      <div className="flex gap-6">
        <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Quem somos</Link>
        <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contato</Link>
        <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Termos de Uso</Link>
        <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacidade</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
