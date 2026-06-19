import { useEffect, useRef } from 'react';

interface FadingVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

export function FadingVideo({ src, className = '', style = {} }: FadingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadeRafRef = useRef<number | null>(null);
  const fadingOutRef = useRef(false);

  const FADE_MS = 500;
  const FADE_OUT_LEAD = 0.55; // start fade out 0.55s before end

  const fadeTo = (targetOpacity: number, duration: number) => {
    if (fadeRafRef.current) {
      cancelAnimationFrame(fadeRafRef.current);
    }

    const video = videoRef.current;
    if (!video) return;

    const startOpacity = parseFloat(video.style.opacity || '0');
    const startTime = performance.now();

    const animateFade = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing: easeOutQuad
      const easeProgress = progress * (2 - progress);
      
      const currentOpacity = startOpacity + (targetOpacity - startOpacity) * easeProgress;
      video.style.opacity = currentOpacity.toString();

      if (progress < 1) {
        fadeRafRef.current = requestAnimationFrame(animateFade);
      }
    };

    fadeRafRef.current = requestAnimationFrame(animateFade);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.style.opacity = '0';

    const handleLoadedData = () => {
      video.style.opacity = '0';
      video.play().catch(console.error);
      fadeTo(1, FADE_MS);
    };

    const handleTimeUpdate = () => {
      if (!video.duration) return;
      const timeLeft = video.duration - video.currentTime;
      
      if (!fadingOutRef.current && timeLeft <= FADE_OUT_LEAD && timeLeft > 0) {
        fadingOutRef.current = true;
        fadeTo(0, FADE_MS);
      }
    };

    const handleEnded = () => {
      video.style.opacity = '0';
      setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(console.error);
        fadingOutRef.current = false;
        fadeTo(1, FADE_MS);
      }, 100);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      if (fadeRafRef.current) {
        cancelAnimationFrame(fadeRafRef.current);
      }
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      style={{ ...style, opacity: 0 }}
      autoPlay
      muted
      playsInline
      preload="auto"
    />
  );
}
