import { motion } from "framer-motion";

interface AdPlaceholderProps {
  size?: "banner" | "sidebar" | "inline";
  className?: string;
}

const AdPlaceholder = ({ size = "inline", className = "" }: AdPlaceholderProps) => {
  const sizeClasses = {
    banner: "h-24 w-full",
    sidebar: "h-[600px] w-[160px]",
    inline: "h-20 w-full",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`${sizeClasses[size]} border border-dashed border-border rounded-lg flex items-center justify-center bg-secondary/30 ${className}`}
    >
      <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">Google Ad</span>
    </motion.div>
  );
};

export default AdPlaceholder;
