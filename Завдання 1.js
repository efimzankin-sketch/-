// ============================================================
// Задача 1 — Реверс рядка
// ============================================================

// --- Головна рекурсія ---

function reverseHead(s) {
  if (s.length <= 1) return s;
  return reverseHead(s.slice(1)) + s[0];
}

// --- Хвостова рекурсія ---

function reverseTail(s, acc = "") {
  if (s.length === 0) return acc;
  return reverseTail(s.slice(1), s[0] + acc);
}

// --- Тести ---
const tests = ["tiger"];

console.log("=== Задача 1: Реверс рядка ===\n");
tests.forEach((t) => {
  console.log(`Вхід: "${t}"`);
  console.log(`  Головна  → "${reverseHead(t)}"`);
  console.log(`  Хвостова → "${reverseTail(t)}"\n`);
});
