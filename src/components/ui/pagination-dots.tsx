
import React from 'react';
import { cn } from '@/lib/utils';

interface PaginationDotsProps {
  total: number;
  active: number;
  onDotClick?: (index: number) => void;
  className?: string;
}

export const PaginationDots = ({
  total,
  active,
  onDotClick,
  className,
}: PaginationDotsProps) => {
  return (
    <div className={cn("flex items-center justify-center gap-2", className)}>
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          className={cn(
            "w-2 h-2 rounded-full transition-all duration-300",
            active === index 
              ? "bg-dinero-red scale-125" 
              : "bg-gray-500/50 hover:bg-gray-400/70"
          )}
          onClick={() => onDotClick && onDotClick(index)}
          aria-label={`Go to testimonial ${index + 1} of ${total}`}
        />
      ))}
    </div>
  );
};
