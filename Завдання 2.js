// ============================================================
// Задача 2 — Swap кожних двох сусідніх вузлів зв'язаного списку
// ============================================================

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}


function listFromArray(arr) {
  if (!arr.length) return null;
  return arr.reduceRight((next, val) => new Node(val, next), null);
}

function listToArray(head) {
  const result = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

// --- Головна рекурсія ---

function swapPairsHead(head) {
  if (!head || !head.next) return head;

  const second = head.next;

  
  head.next = swapPairsHead(second.next);
  second.next = head;

  return second;
}

// --- Хвостова рекурсія ---

function swapPairsTail(head, prev = null, newHead = null) {
  if (!head || !head.next) {
    if (prev) prev.next = head; // прив'язуємо непарний хвіст
    return newHead || head;
  }

  const a = head;
  const b = head.next;
  const nextNewHead = newHead || b;


  a.next = b.next;
  b.next = a;
  if (prev) prev.next = b;

  
  return swapPairsTail(a.next, a, nextNewHead);
}


const tests = [
  [1, 2, 3, 4],
  [1],
  [1, 2, 3],
  [1, 2, 3, 4, 5, 6],
];

console.log("=== Задача 2: Заміна пар зв'язаного списку ===\n");
tests.forEach((arr) => {
  const resHead = listToArray(swapPairsHead(listFromArray(arr)));
  const resTail = listToArray(swapPairsTail(listFromArray(arr)));
  console.log(`Вхід:     [${arr}]`);
  console.log(`  Головна  → [${resHead}]`);
  console.log(`  Хвостова → [${resTail}]\n`);
});
