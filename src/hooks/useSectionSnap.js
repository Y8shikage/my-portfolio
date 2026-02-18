import { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SECTION_IDS = ['home', 'education', 'skills', 'work'];
const ANIMATION_DURATION = 1.2;
const SCROLL_COOLDOWN = 1400;

export default function useSectionSnap(containerRef) {
  const currentIndex = useRef(0);
  const isAnimating = useRef(false);
  const lastScrollTime = useRef(0);

  const scrollToSection = useCallback((index) => {
    const container = containerRef.current;
    if (!container) return;

    const sections = SECTION_IDS.map(id => document.getElementById(id)).filter(Boolean);
    if (index < 0 || index >= sections.length) return;

    isAnimating.current = true;
    currentIndex.current = index;

    gsap.to(container, {
      scrollTop: sections[index].offsetTop,
      duration: ANIMATION_DURATION,
      ease: 'power2.inOut',
      onComplete: () => {
        isAnimating.current = false;
        ScrollTrigger.refresh();
      }
    });
  }, [containerRef]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      e.preventDefault();

      const now = Date.now();
      if (isAnimating.current || now - lastScrollTime.current < SCROLL_COOLDOWN) return;
      lastScrollTime.current = now;

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextIndex = currentIndex.current + direction;

      if (nextIndex >= 0 && nextIndex < SECTION_IDS.length) {
        scrollToSection(nextIndex);
      }
    };

    const handleKeyDown = (e) => {
      const now = Date.now();
      if (isAnimating.current || now - lastScrollTime.current < SCROLL_COOLDOWN) return;

      let direction = 0;
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        direction = 1;
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        direction = -1;
      }

      if (direction !== 0) {
        e.preventDefault();
        lastScrollTime.current = now;
        const nextIndex = currentIndex.current + direction;
        if (nextIndex >= 0 && nextIndex < SECTION_IDS.length) {
          scrollToSection(nextIndex);
        }
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const now = Date.now();
      if (isAnimating.current || now - lastScrollTime.current < SCROLL_COOLDOWN) return;

      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;

      if (Math.abs(diff) > 50) {
        lastScrollTime.current = now;
        const direction = diff > 0 ? 1 : -1;
        const nextIndex = currentIndex.current + direction;
        if (nextIndex >= 0 && nextIndex < SECTION_IDS.length) {
          scrollToSection(nextIndex);
        }
      }
    };

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const idx = SECTION_IDS.indexOf(hash);
      if (idx !== -1 && idx !== currentIndex.current) {
        scrollToSection(idx);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('keydown', handleKeyDown);
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      document.removeEventListener('keydown', handleKeyDown);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [containerRef, scrollToSection]);
}
