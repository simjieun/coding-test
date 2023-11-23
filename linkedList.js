class LinkedList {
  length = 0;
  head = null;

  add(value) {
    if (this.head) {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value, current.value);
      this.length++;
    } else {
      this.head = new Node(value, null);
      this.length++;
    }
    return this.length;
  }
  search(index) {
    return this.#search(index)[1]?.value;
  }
  #search(index) {
    let count = 0;
    let prev;
    let current = this.head;
    while (count < index) {
      prev = current;
      current = current?.next;
      count++;
    }
    return [prev, current];
  }
  remove(index) {
    const [prev, current] = this.#search(index);
    if (prev && current) {
      prev.next = current.next;
      current.prev = prev.value;
      this.length--;
      return this.length;
    } else if (current) {
      // index가 0일때
      this.head = current.next;
      this.head.prev = null;
      this.length--;
      return this.length;
    }
    // 삭제하고자 하는 대상이 없을때
    // 아무것도 안함
  }
}

class Node {
  prev = null;
  next = null;
  constructor(value, prev) {
    this.value = value;
    this.prev = prev;
  }
}

const ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
ll.add(6);
console.log(ll.search(6));
ll.remove(4);
console.log(ll.search(4));
// console.log(ll.remove(4));
console.log("hi");
