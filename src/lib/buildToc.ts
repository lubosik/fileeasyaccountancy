export type TocItem = { id: string; text: string };

export function buildTocFromHtml(html: string): TocItem[] {
  const matches = [...html.matchAll(/<h2[^>]*id="([^"]+)"[^>]*>(.*?)<\/h2>/gi)];
  return matches.map((m) => ({
    id: m[1],
    text: m[2].replace(/<[^>]+>/g, '').trim(),
  }));
}

export function buildTocFromHeadings(headings: NodeListOf<Element> | Element[]): TocItem[] {
  const items: TocItem[] = [];
  headings.forEach((heading) => {
    const id = heading.id || heading.textContent?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') || '';
    const text = heading.textContent?.trim() || '';
    if (id && text) {
      items.push({ id, text });
    }
  });
  return items;
}

