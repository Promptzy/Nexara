import { useEffect, useRef, CSSProperties } from 'react';

const useAdvancedScroll = (threshold: number = 0.1) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.remove('is-visible');
        }
      });
    }, { threshold });

    if (elementRef.current) {
      observerRef.current.observe(elementRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold]);

  const animationStyles: CSSProperties = {
    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
    opacity: 0,
    transform: 'translateY(2rem)',
  };

  return { ref: elementRef, style: animationStyles };
};

export default useAdvancedScroll;
