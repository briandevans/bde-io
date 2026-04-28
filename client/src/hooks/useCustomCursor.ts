import { useEffect, useRef, useCallback } from 'react';

export function useCustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const pos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const isHovering = useRef(false);
  const rafId = useRef(0);

  const onMouseMove = useCallback((e: MouseEvent) => {
    pos.current.targetX = e.clientX;
    pos.current.targetY = e.clientY;
  }, []);

  const onMouseEnterInteractive = useCallback(() => {
    isHovering.current = true;
    if (cursorRef.current) cursorRef.current.classList.add('cursor-expanded');
  }, []);

  const onMouseLeaveInteractive = useCallback(() => {
    isHovering.current = false;
    if (cursorRef.current) cursorRef.current.classList.remove('cursor-expanded');
  }, []);

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (isTouch) return;

    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 6px;
      height: 6px;
      background: #B8956A;
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: difference;
      transform: translate(-50%, -50%) scale(1);
      transition: width 0.3s ease, height 0.3s ease, background 0.3s ease, border 0.3s ease;
      will-change: transform;
    `;
    document.body.appendChild(cursor);
    cursorRef.current = cursor;

    const animate = () => {
      // Use direct position for immediate response, no lag
      pos.current.x = pos.current.targetX;
      pos.current.y = pos.current.targetY;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);

    window.addEventListener('mousemove', onMouseMove);

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button') || target.closest('[role="button"]') || target.closest('[data-cursor="expand"]')) {
        onMouseEnterInteractive();
      }
    };
    const handleOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button') || target.closest('[role="button"]') || target.closest('[data-cursor="expand"]')) {
        onMouseLeaveInteractive();
      }
    };

    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
      cursor.remove();
    };
  }, [onMouseMove, onMouseEnterInteractive, onMouseLeaveInteractive]);

  return cursorRef;
}
