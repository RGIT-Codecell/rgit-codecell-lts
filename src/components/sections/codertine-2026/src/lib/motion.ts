export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function scrollToId(id: string): void {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
}