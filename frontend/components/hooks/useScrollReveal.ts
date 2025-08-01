import { useEffect, useRef, useState } from 'react';

export const useScrollReveal = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
};

export const useSlideIn = (direction: 'up' | 'down' | 'left' | 'right' = 'up', delay = 0) => {
  const { ref, isVisible } = useScrollReveal();
  
  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up': return 'translateY(50px)';
        case 'down': return 'translateY(-50px)';
        case 'left': return 'translateX(50px)';
        case 'right': return 'translateX(-50px)';
        default: return 'translateY(50px)';
      }
    }
    return 'translate(0)';
  };

  return {
    ref,
    style: {
      transform: getTransform(),
      opacity: isVisible ? 1 : 0,
      transition: `all 0.6s ease-out ${delay}s`,
    },
  };
};

export const useFadeIn = (delay = 0) => {
  const { ref, isVisible } = useScrollReveal();
  
  return {
    ref,
    style: {
      opacity: isVisible ? 1 : 0,
      transition: `opacity 0.6s ease-out ${delay}s`,
    },
  };
};

export const useScaleIn = (delay = 0) => {
  const { ref, isVisible } = useScrollReveal();
  
  return {
    ref,
    style: {
      transform: isVisible ? 'scale(1)' : 'scale(0.8)',
      opacity: isVisible ? 1 : 0,
      transition: `all 0.6s ease-out ${delay}s`,
    },
  };
};