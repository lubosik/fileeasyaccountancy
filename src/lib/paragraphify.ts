export function paragraphify(input: string): string {
  // If already has block tags, return as-is
  if (/<(p|h1|h2|h3|ul|ol|table|section|article|figure|div|blockquote)/i.test(input)) {
    return input;
  }

  // Split by double newlines and wrap in <p> tags
  const parts = input.split(/\n{2,}/).map((s) => s.trim()).filter(Boolean);
  return parts.map((p) => `<p>${p}</p>`).join('\n');
}

