'use client';
import { useEffect, useRef } from 'react';

export default function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (ringRef.current) {
        ringRef.current.style.left = `${e.clientX - 10}px`;
        ringRef.current.style.top  = `${e.clientY - 10}px`;
      }
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX - 2}px`;
        dotRef.current.style.top  = `${e.clientY - 2}px`;
      }
    };
    const over = () => { if (ringRef.current) { ringRef.current.style.transform = 'scale(2)'; ringRef.current.style.opacity = '.5'; } };
    const out  = () => { if (ringRef.current) { ringRef.current.style.transform = 'scale(1)'; ringRef.current.style.opacity = '1'; } };

    document.addEventListener('mousemove', move);
    document.querySelectorAll('a,button,input,select,textarea').forEach(el => {
      el.addEventListener('mouseenter', over);
      el.addEventListener('mouseleave', out);
    });
    return () => document.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      <div ref={ringRef} style={{
        position: 'fixed', zIndex: 9999, width: 20, height: 20,
        border: '1px solid var(--accent)', borderRadius: '50%',
        pointerEvents: 'none', mixBlendMode: 'screen',
        transition: 'transform .1s, opacity .2s',
      }} />
      <div ref={dotRef} style={{
        position: 'fixed', zIndex: 9999, width: 4, height: 4,
        background: 'var(--accent)', borderRadius: '50%',
        pointerEvents: 'none',
      }} />
    </>
  );
}
