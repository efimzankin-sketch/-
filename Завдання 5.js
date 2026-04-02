// ============================================================
// Задача 5 — Піднесення до степеня pow(x, n)
// ============================================================

// --- Головна рекурсія ---

function powHead(x, n) {
  if (n === 0) return 1;
  if (n < 0) return powHead(1 / x, -n); 
  if (n % 2 === 0) {
    const half = powHead(x, n / 2); 
    return half * half;
  }
  return x * powHead(x, n - 1);     
}

// --- Хвостова рекурсія ---

function powTail(x, n, acc = 1) {
  if (n === 0) return acc;
  if (n < 0) return powTail(1 / x, -n, acc); 

  if (n % 2 === 0) {
    // Хвостовий виклик — остання операція
    return powTail(x * x, n / 2, acc);
  }
  return powTail(x, n - 1, acc * x);          
}


const tests = [
  [2,    10],
  [2.1,   3],
  [2,    -2],
  [3,     5],
  [0.5,   4],
  [-2,    3],
  [1,   100],
  [2,     0],
];

console.log("=== Задача 5: Піднесення до степеня ===\n");
tests.forEach(([x, n]) => {
  const h = +powHead(x, n).toFixed(5);
  const t = +powTail(x, n).toFixed(5);
  console.log(`pow(${String(x).padEnd(5)}, ${String(n).padStart(3)}):  Головна = ${String(h).padStart(12)}  |  Хвостова = ${t}`);
});
