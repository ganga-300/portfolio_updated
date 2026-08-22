import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  const [cursorText, setCursorText] = useState<string>('');
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

  useEffect(() => {
    // Detect touch device to disable custom cursor on mobile
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Direct DOM update for center dot (zero lag)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
      }
    };

    // Smooth lerp loop for outer ring using requestAnimationFrame
    const updateRing = () => {
      ringX += (mouseX - ringX) * 0.22;
      ringY += (mouseY - ringY) * 0.22;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX - 16}px, ${ringY - 16}px, 0)`;
      }

      rafId = requestAnimationFrame(updateRing);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    rafId = requestAnimationFrame(updateRing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Event listener for context-aware cursor labels
  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const liveBtn = target.closest('a[href*="streamlit"], a[href*="vercel"], a[href*="netlify"], [data-cursor="live"]');
      const githubBtn = target.closest('a[href*="github.com"], [data-cursor="code"]');
      const projectCard = target.closest('.project-card, [data-cursor="view"]');
      const genericLink = target.closest('a, button, [role="button"]');

      if (liveBtn) {
        setCursorText('LIVE');
        setIsHovered(true);
      } else if (githubBtn) {
        setCursorText('CODE');
        setIsHovered(true);
      } else if (projectCard) {
        setCursorText('VIEW');
        setIsHovered(true);
      } else if (genericLink) {
        setCursorText('OPEN');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Center sharp dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-editorial-green rounded-full pointer-events-none z-50 will-change-transform"
      />

      {/* Smooth outer follower ring with context label */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none z-40 flex items-center justify-center transition-all duration-150 ease-out border rounded-full will-change-transform ${
          isHovered
            ? 'w-12 h-12 border-editorial-green bg-editorial-green/15 backdrop-blur-[1px] scale-110'
            : 'w-8 h-8 border-editorial-dark/30 bg-transparent scale-100'
        }`}
      >
        {cursorText && (
          <span
            ref={labelRef}
            className="font-mono text-[9px] font-bold text-editorial-dark tracking-tighter uppercase select-none animate-fadeIn"
          >
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
};
