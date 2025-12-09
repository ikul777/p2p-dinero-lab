import { useState, useEffect, useRef } from 'react';

interface UseCounterAnimationOptions {
  end: number;
  duration?: number;
  delay?: number;
}

export const useCounterAnimation = ({ end, duration = 2000, delay = 0 }: UseCounterAnimationOptions) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            setTimeout(() => {
              const startTime = performance.now();
              
              const animate = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function for smooth animation
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const currentCount = Math.floor(easeOutQuart * end);
                
                setCount(currentCount);
                
                if (progress < 1) {
                  requestAnimationFrame(animate);
                } else {
                  setCount(end);
                }
              };
              
              requestAnimationFrame(animate);
            }, delay);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [end, duration, delay, hasAnimated]);

  return { count, ref };
};
