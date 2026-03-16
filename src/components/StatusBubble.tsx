import { motion } from "framer-motion";

interface StatusBubbleProps {
  text: string | null;
}

const StatusBubble = ({ text }: StatusBubbleProps) => {
  if (!text) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 5 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full"
    >
      <div className="relative bg-secondary border border-border rounded-xl px-3 py-1.5 max-w-[200px]">
        <p className="text-xs text-foreground whitespace-nowrap overflow-hidden text-ellipsis">{text}</p>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full">
          <div className="w-2.5 h-2.5 bg-secondary border-r border-b border-border rotate-45 -translate-y-1.5" />
        </div>
      </div>
    </motion.div>
  );
};

export default StatusBubble;
