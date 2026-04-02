// ============================================================
// Задача 4 — Підйом по сходах (1 або 2 кроки за раз)
// ============================================================

// --- Головна рекурсія ---

function climbHead(n) {
  if (n <= 1) return 1;
  if (n === 2) return 2;
  
  return climbHead(n - 1) + climbHead(n - 2);
}

// --- Хвостова рекурсія ---

function climbTail(n, a = 1, b = 2) {
  if (n === 1) return a;
  if (n === 2) return b;
 
  return climbTail(n - 1, b, a + b);
}


const tests = [1, 2, 3, 4, 5, 10, 20, 45];

console.log("=== Задача 4: Підйом по сходах ===\n");
tests.forEach((n) => {
  console.log(`n=${String(n).padStart(2)}: Головна = ${climbHead(n).toString().padStart(12)}  |  Хвостова = ${climbTail(n)}`);
});
