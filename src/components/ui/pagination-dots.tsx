
import React from 'react';
import { cn } from '@/lib/utils';

interface PaginationDotsProps {
  total: number;
  active: number;
  onDotClick?: (index: number) => void;
  className?: string;
  dotClassName?: string;
  activeDotClassName?: string;
}

export const PaginationDots = ({
  total,
  active,
  onDotClick,
  className,
  dotClassName,
  activeDotClassName,
}: PaginationDotsProps) => {
  return (
    <div className={cn("flex items-center justify-center gap-2", className)}>
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          className={cn(
            "transition-all duration-300",
            active === index 
              ? cn("scale-125", activeDotClassName || "bg-dinero-red w-2 h-2 rounded-full") 
              : cn("hover:bg-gray-400/70", dotClassName || "bg-gray-500/50 w-2 h-2 rounded-full")
          )}
          onClick={() => onDotClick && onDotClick(index)}
          aria-label={`Go to testimonial ${index + 1} of ${total}`}
        />
      ))}
    </div>
  );
};
