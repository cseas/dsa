// reverse a linked list in-place, given its head
import { createLinkedList } from "./create.js";
import { traverse } from "./traverse.js";

const ll = createLinkedList([1, 2, 3, 4, 5]);

// O(n) time & O(1) space
function reverse(head) {
  let previous = null,
    current = head,
    tmp = null;

  while (current) {
    // save next
    tmp = current.next;

    // reverse pointer
    current.next = previous;

    // step forward
    previous = current;
    current = tmp;
  }

  return previous;
}

console.log("Reversing..");
traverse(reverse(ll.getHead()));
