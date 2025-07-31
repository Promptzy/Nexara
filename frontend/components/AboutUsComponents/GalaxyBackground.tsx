import React, { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
  color: string;
}

interface Nebula {
  x: number;
  y: number;
  radius: number;
  color: string;
  opacity: number;
  pulseSpeed: number;
  pulsePhase: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  life: number;
  maxLife: number;
}

export const GalaxyBackground: React.FC = () => {
  const { isDarkMode } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const nebulaeRef = useRef<Nebula[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const animationRef = useRef<number | undefined>(undefined);
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      const stars: Star[] = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 6000);
      
      const colors = [
        'rgba(255, 255, 255, 1)',
        'rgba(147, 51, 234, 1)', // purple
        'rgba(59, 130, 246, 1)', // blue
        'rgba(236, 72, 153, 1)', // pink
        'rgba(168, 85, 247, 1)', // violet
      ];
      
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2.5 + 0.5,
          speed: Math.random() * 0.8 + 0.2,
          opacity: Math.random() * 0.9 + 0.1,
          twinkleSpeed: Math.random() * 0.03 + 0.01,
          twinklePhase: Math.random() * Math.PI * 2,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
      
      starsRef.current = stars;
    };

    const createNebulae = () => {
      const nebulae: Nebula[] = [];
      const numNebulae = 8;
      
      const nebulaColors = [
        'rgba(147, 51, 234, 0.15)', // purple
        'rgba(59, 130, 246, 0.12)', // blue
        'rgba(236, 72, 153, 0.18)', // pink
        'rgba(168, 85, 247, 0.14)', // violet
        'rgba(99, 102, 241, 0.16)', // indigo
      ];

      for (let i = 0; i < numNebulae; i++) {
        nebulae.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 400 + 200,
          color: nebulaColors[Math.floor(Math.random() * nebulaColors.length)],
          opacity: Math.random() * 0.3 + 0.1,
          pulseSpeed: Math.random() * 0.02 + 0.005,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }

      nebulaeRef.current = nebulae;
    };

    const drawNebulae = () => {
      nebulaeRef.current.forEach((nebula) => {
        const pulse = Math.sin(timeRef.current * nebula.pulseSpeed + nebula.pulsePhase);
        const currentOpacity = nebula.opacity + pulse * 0.1;
        const currentRadius = nebula.radius + pulse * 50;

        const gradient = ctx.createRadialGradient(
          nebula.x, nebula.y, 0,
          nebula.x, nebula.y, currentRadius
        );

        gradient.addColorStop(0, nebula.color.replace(/[\d.]+\)$/g, `${currentOpacity})`));
        gradient.addColorStop(0.4, nebula.color.replace(/[\d.]+\)$/g, `${currentOpacity * 0.6})`));
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });
    };

    const drawStarField = () => {
      // Create distant star field
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      for (let i = 0; i < 200; i++) {
        const x = (Math.random() * canvas.width + timeRef.current * 10) % canvas.width;
        const y = (Math.random() * canvas.height + timeRef.current * 5) % canvas.height;
        ctx.fillRect(x, y, 1, 1);
      }
    };

    const createShootingStar = () => {
      const angles = [Math.PI / 4, Math.PI / 3, Math.PI / 6]; // Different angles for variety
      const angle = angles[Math.floor(Math.random() * angles.length)];
      
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.4, // Keep in upper area
        length: Math.random() * 120 + 80,
        speed: Math.random() * 6 + 8,
        angle,
        opacity: 1,
        life: 0,
        maxLife: Math.random() * 60 + 40, // Frames to live
      };
    };

    const updateShootingStars = () => {
      // Remove dead shooting stars
      shootingStarsRef.current = shootingStarsRef.current.filter(star => star.life < star.maxLife);
      
      // Add new shooting stars if we have less than 3 and random chance
      if (shootingStarsRef.current.length < 3 && Math.random() < 0.008) {
        shootingStarsRef.current.push(createShootingStar());
      }
      
      // Update existing shooting stars
      shootingStarsRef.current.forEach(star => {
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        star.life++;
        
        // Fade out effect
        const lifeRatio = star.life / star.maxLife;
        if (lifeRatio > 0.7) {
          star.opacity = 1 - (lifeRatio - 0.7) / 0.3;
        }
      });
    };

    const drawShootingStars = () => {
      shootingStarsRef.current.forEach(star => {
        const tailX = star.x - Math.cos(star.angle) * star.length;
        const tailY = star.y - Math.sin(star.angle) * star.length;
        
        // Main trail
        const gradient = ctx.createLinearGradient(
          star.x, star.y,
          tailX, tailY
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
        gradient.addColorStop(0.3, `rgba(173, 216, 230, ${star.opacity * 0.8})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();
        
        // Bright head
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Glow effect
        const glowGradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, 8
        );
        glowGradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity * 0.3})`);
        glowGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, 8, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const animate = () => {
      timeRef.current += 0.016;
      
      // Clear canvas with theme-appropriate gradient
      const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      
      if (isDarkMode) {
        // Pure black background for dark mode - keeping all stars and effects
        bgGradient.addColorStop(0, '#000000');
        bgGradient.addColorStop(0.5, '#000000');
        bgGradient.addColorStop(1, '#000000');
      } else {
        // Original purple space theme for light mode
        bgGradient.addColorStop(0, '#0c0a1a');
        bgGradient.addColorStop(0.5, '#1a0b2e');
        bgGradient.addColorStop(1, '#0f0a1f');
      }
      
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw distant star field
      drawStarField();

      // Draw nebulae
      drawNebulae();

      // Draw main stars
      starsRef.current.forEach((star, index) => {
        // Update position with parallax effect
        star.y += star.speed;
        star.x += Math.sin(timeRef.current * 0.001 + index) * 0.1;
        
        if (star.y > canvas.height + star.size) {
          star.y = -star.size;
          star.x = Math.random() * canvas.width;
        }

        // Twinkling effect
        const twinkle = Math.sin(timeRef.current * star.twinkleSpeed + star.twinklePhase);
        const currentOpacity = Math.max(0.1, star.opacity + twinkle * 0.4);

        // Draw star with enhanced glow effect
        const glowSize = star.size * 4;
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, glowSize
        );
        
        const baseColor = star.color.replace('1)', `${currentOpacity * 0.8})`);
        const glowColor = star.color.replace('1)', `${currentOpacity * 0.3})`);
        
        gradient.addColorStop(0, baseColor);
        gradient.addColorStop(0.2, glowColor);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, glowSize, 0, Math.PI * 2);
        ctx.fill();

        // Core star with cross pattern for brighter stars
        if (star.size > 1.5) {
          ctx.strokeStyle = star.color.replace('1)', `${currentOpacity})`);
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(star.x - star.size * 2, star.y);
          ctx.lineTo(star.x + star.size * 2, star.y);
          ctx.moveTo(star.x, star.y - star.size * 2);
          ctx.lineTo(star.x, star.y + star.size * 2);
          ctx.stroke();
        }

        // Core star
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Update and draw shooting stars
      updateShootingStars();
      drawShootingStars();

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createStars();
    createNebulae();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createStars();
      createNebulae();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -10
      }}
    />
  );
};

export default GalaxyBackground;