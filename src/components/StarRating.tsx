import { Star, StarHalf } from "lucide-react";

interface StarRatingProps {
  rating: number;
  size?: number;
  interactive?: boolean;
  onChange?: (rating: number) => void;
}

const StarRating = ({ rating, size = 16, interactive = false, onChange }: StarRatingProps) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  const handleClick = (value: number) => {
    if (interactive && onChange) onChange(value);
  };

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star
          key={`full-${i}`}
          size={size}
          className="fill-rocket-orange text-rocket-orange cursor-pointer"
          onClick={() => handleClick(i + 1)}
        />
      ))}
      {hasHalf && (
        <StarHalf
          size={size}
          className="fill-rocket-orange text-rocket-orange cursor-pointer"
          onClick={() => handleClick(fullStars + 0.5)}
        />
      )}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star
          key={`empty-${i}`}
          size={size}
          className="text-muted-foreground/30 cursor-pointer"
          onClick={() => handleClick(fullStars + (hasHalf ? 1 : 0) + i + 1)}
        />
      ))}
    </div>
  );
};

export default StarRating;
