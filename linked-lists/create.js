// create a linked list given an array of elements
import { traverse } from "./traverse.js";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  getHead() {
    return this.head;
  }

  getSize() {
    return this.size;
  }

  setHead(node) {
    this.head = node;
  }

  add(value) {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }
}

export function createLinkedList(array) {
  const ll = new LinkedList();
  array.map((value) => ll.add(value));
  console.log("Creating..");
  traverse(ll.getHead());
  return ll;
}

// const ll = createLinkedList([1, 2, 3, 4, 5]);
