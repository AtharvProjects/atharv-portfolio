import { useEffect, useRef } from 'react';

interface ScrubbableVideoProps {
  src: string;
  className?: string;
}

export function ScrubbableVideo({ src, className = '' }: ScrubbableVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isSeekingRef = useRef(false);
  const targetTimeRef = useRef(0);
  const prevXRef = useRef<number | null>(null);
  
  const SENSITIVITY = 0.8;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!video.duration) return;
      
      const currentX = e.clientX;
      if (prevXRef.current === null) {
        prevXRef.current = currentX;
        return;
      }

      const delta = currentX - prevXRef.current;
      prevXRef.current = currentX;

      const offset = (delta / window.innerWidth) * SENSITIVITY * video.duration;
      
      targetTimeRef.current = Math.max(0, Math.min(targetTimeRef.current + offset, video.duration));

      if (!isSeekingRef.current) {
        isSeekingRef.current = true;
        video.currentTime = targetTimeRef.current;
      }
    };

    const handleSeeked = () => {
      isSeekingRef.current = false;
      if (!video.duration) return;
      
      if (Math.abs(targetTimeRef.current - video.currentTime) > 0.05) {
        isSeekingRef.current = true;
        video.currentTime = targetTimeRef.current;
      }
    };

    const handleLoadedMetadata = () => {
      targetTimeRef.current = video.currentTime;
    };

    window.addEventListener('mousemove', handleMouseMove);
    video.addEventListener('seeked', handleSeeked);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      video.removeEventListener('seeked', handleSeeked);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      muted
      playsInline
      preload="auto"
    />
  );
}
