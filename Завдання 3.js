// ============================================================
// Задача 3 — Числа Фібоначчі
// ============================================================

// --- Головна рекурсія ---

function fibHead(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
 
  return fibHead(n - 1) + fibHead(n - 2);
}

// --- Хвостова рекурсія ---

function fibTail(n, a = 0, b = 1) {
  if (n === 0) return a;

  return fibTail(n - 1, b, a + b);
}


const tests = [0, 1, 2, 3, 4, 5, 10, 15];

console.log("=== Задача 3: Числа Фібоначчі ===\n");
tests.forEach((n) => {
  console.log(`F(${n.toString().padStart(2)}):  Головна = ${fibHead(n)}  |  Хвостова = ${fibTail(n)}`);
});
