export function injectCtaAfterSecondH2(html: string, snippet: string): string {
  let count = 0;
  return html.replace(/<\/h2>/gi, (m) => {
    count++;
    return count === 2 ? `${m}\n${snippet}` : m;
  });
}

