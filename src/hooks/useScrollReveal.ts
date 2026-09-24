import { useEffect } from 'react';

/**
 * Hook to automatically observe all elements with the .reveal class
 * and trigger smooth sliding/fade-in entrance animations when scrolling down.
 * When scrolling back up, elements reset so the sliding effect replays on subsequent scrolls.
 */
export const useScrollReveal = () => {
  useEffect(() => {
    // If user prefers reduced motion or IntersectionObserver is unsupported, reveal all immediately
    if (
      typeof window === 'undefined' ||
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      document.querySelectorAll('.reveal').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          } else {
            // When an element scrolls out of view, remove is-revealed
            // so it can slide in again when the user scrolls back down
            entry.target.classList.remove('is-revealed');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.08
      }
    );

    const observeElements = () => {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach((el) => observer.observe(el));
    };

    observeElements();

    // Re-check after images or components mount
    const timeout = setTimeout(observeElements, 250);

    // MutationObserver to capture dynamically rendered elements
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
};
