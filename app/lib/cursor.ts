// lib/cursor.ts
export function initCursor(cursorEl: HTMLElement) {
  document.addEventListener("mousemove", (e) => {
    cursorEl.style.left = `${e.clientX}px`;
    cursorEl.style.top = `${e.clientY}px`;
  });
}
