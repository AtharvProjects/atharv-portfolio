import { useEffect, useRef, useState } from 'react';

export function ThunderRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [flashOpacity, setFlashOpacity] = useState(0);

  // Thunder logic
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    
    const triggerThunder = () => {
      // Randomly trigger thunder every 4 to 12 seconds
      const nextThunder = Math.random() * 8000 + 4000;
      
      timeout = setTimeout(() => {
        // First strike
        setFlashOpacity(0.7);
        setTimeout(() => setFlashOpacity(0), 80);
        
        // Random double or triple strike
        const extraStrikes = Math.random();
        if (extraStrikes > 0.4) {
          setTimeout(() => {
            setFlashOpacity(0.5);
            setTimeout(() => setFlashOpacity(0), 50);
          }, 150);
        }
        if (extraStrikes > 0.8) {
          setTimeout(() => {
            setFlashOpacity(0.8);
            setTimeout(() => setFlashOpacity(0), 100);
          }, 350);
        }
        
        triggerThunder();
      }, nextThunder);
    };

    // Initial thunder trigger
    triggerThunder();
    return () => clearTimeout(timeout);
  }, []);

  // Rain logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);

    const particles: {x: number, y: number, length: number, velocity: number, opacity: number}[] = [];
    const maxParticles = window.innerWidth < 768 ? 100 : 250; // Responsive particle count

    for (let i = 0; i < maxParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        length: Math.random() * 20 + 15,
        velocity: Math.random() * 3 + 3.5, // Much slower drifting rain
        opacity: Math.random() * 0.2 + 0.05
      });
    }

    let animationFrameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Rain angle (slight slant)
      const angle = 0.15; // radians

      particles.forEach(p => {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + Math.sin(angle) * p.length, p.y + Math.cos(angle) * p.length);
        ctx.strokeStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        p.y += p.velocity;
        p.x += p.velocity * Math.sin(angle);

        // Reset particle when it goes off screen
        if (p.y > height) {
          p.y = -p.length;
          p.x = Math.random() * width;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Thunder Flash Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none mix-blend-overlay z-[2] bg-white"
        style={{ 
          opacity: flashOpacity,
          transition: 'opacity 0.05s ease-out'
        }}
      />
      
      {/* Rain Canvas */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[3] mix-blend-screen opacity-80"
      />
    </>
  );
}
