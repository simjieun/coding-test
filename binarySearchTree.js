class BinarySearchTree {
  root = null;
  #insert(node, value) {
    if (!node) {
      node = new Node(value);
    }

    if (node.value === value) {
      alert("중복된 값은 넣을 수 없습니다.");
      return;
    }

    if (node > value) {
      if (node.left) {
        this.#insert(node.left, value);
      } else {
        node.left = new Node(value);
      }
    } else {
      if (node.right) {
        this.#insert(node.right, value);
      } else {
        node.right = new Node(value);
      }
    }
  }
  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
    }
    this.#insert(this.root, value);
    // 숙제 : 같은값을 넣은 경우 에러 처리(alert, throw)
  }
  search(value) {}
  remove(value) {}
}

class Node {
  left = null;
  right = null;
  constructor(value) {
    this.value = value;
  }
}

const bst = new BinarySearchTree();
bst.insert(8);
bst.insert(10);
bst.insert(3);
bst.insert(1);
bst.insert(14);
bst.insert(6);
bst.insert(7);
bst.insert(4);
bst.insert(13);
