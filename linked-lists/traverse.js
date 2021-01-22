// traverse a linked list, given its head
export function traverse(head) {
  let current = head;
  let str = "";
  while (current) {
    str += current.value + " -> ";
    current = current.next;
  }
  str += "null";
  console.log(str);
}
