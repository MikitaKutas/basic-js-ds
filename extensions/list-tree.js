class Node {
  constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
  }

  add(data) {
      if (data < this.data || data < this.data[0]) {
          this.addLeft(data);
      } else if (data > this.data || data > this.data[0]) {
          this.addRight(data);
      }
  }

  addLeft(data) {
      if (this.left !== null) {
          return this.left.add(data);
      }

      this.left = new Node(data);
  }

  addRight(data) {
      if (this.right !== null) {
          return this.right.add(data);
      }

      this.right = new Node(data);
  }

  remove(data) {
      if (data < this.data || data < this.data[0]) {
          this.removeLeft(data);
      } else if (data > this.data || data > this.data[0]) {
          this.removeRight(data);
      }
  }

  removeLeft(data) {
      if (this.left === null) {
          return;
      }
      if (data !== this.left.data) {
          return this.left.remove(data);
      }

      this.left.data = [data];
  }

  removeRight(data) {
      if (this.right === null) {
          return;
      }
      if (data !== this.right.data) {
          return this.right.remove(data);
      }

      this.right.data = [data];
  }
}

module.exports = {
  Node
};