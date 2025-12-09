'use client';

import { useEffect } from 'react';

export default function TocHighlight() {
  useEffect(() => {
    const links = Array.from(document.querySelectorAll('.article-toc a'));
    if (links.length === 0) return;

    const map = new Map<string, HTMLAnchorElement>();
    links.forEach((a) => {
      const href = a.getAttribute('href');
      if (href) {
        map.set(href, a as HTMLAnchorElement);
      }
    });

    const headings = Array.from(document.querySelectorAll('h2[id]'));
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = `#${entry.target.id}`;
          const link = map.get(id);
          if (!link) return;

          // Remove active class from all links
          links.forEach((l) => l.classList.remove('active'));

          // Add active class to intersecting heading's link
          if (entry.isIntersecting) {
            link.classList.add('active');
          }
        });
      },
      {
        rootMargin: '-40% 0% -55% 0%',
        threshold: [0, 1],
      }
    );

    headings.forEach((h) => observer.observe(h));

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}

