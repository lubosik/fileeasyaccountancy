'use client';

import React from 'react';

type Props = {
  title: string;
  updated?: string;
  hero?: { src: string; alt?: string } | null;
  toc?: Array<{ id: string; text: string }>;
  children: React.ReactNode;
};

export default function ArticleLayout({ title, updated, hero, toc, children }: Props) {
  return (
    <div className="article-page">
      <header className="article-hero">
        <div className="article-hero__inner">
          <h1 className="article-title">{title}</h1>
          {updated ? <p className="article-updated">Updated {updated}</p> : null}
        </div>
        {hero?.src ? (
          <figure className="article-figure">
            <img 
              src={hero.src} 
              alt={hero.alt || title || 'Article hero image'} 
              loading="eager"
              width={1200}
              height={630}
            />
          </figure>
        ) : null}
      </header>

      <div className="article-shell">
        {/* Main content - comes first in grid */}
        <main className="article" id="article">
          {children}
        </main>

        {/* Sticky ToC on desktop - comes second in grid (right sidebar) */}
        {toc && toc.length > 0 && (
          <aside className="article-toc" aria-label="Table of contents">
            <nav>
              <h2>On this page</h2>
              <ol id="toc-list">
                {toc.map((i) => (
                  <li key={i.id}>
                    <a href={`#${i.id}`}>{i.text}</a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>
        )}
      </div>
      {/* TocClient script will be added separately via script tag */}
    </div>
  );
}

