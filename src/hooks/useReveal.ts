import { useEffect, useLayoutEffect, useRef, useState } from 'react';

// Falls back to useEffect during SSG prerendering (no `window`), avoiding the
// React warning about useLayoutEffect having no effect on the server.
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

// Elements start visible (correct for SSG output and no-JS fallback). Once
// hydrated, we arm the hidden state in a layout effect (before paint, so
// there's no flash of visible-then-hidden), then reveal on scroll-into-view.
export function useReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [armed, setArmed] = useState(false);
  const [visible, setVisible] = useState(true);

  useIsomorphicLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setVisible(false);
    setArmed(true);
  }, []);

  useEffect(() => {
    if (!armed) return;
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -10% 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [armed, threshold]);

  return { ref, visible };
}
