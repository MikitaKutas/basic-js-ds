const { NotImplementedError } = require('../extensions/index.js');

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

class BinarySearchTree {
  constructor() {
      this.rootObj = null;
  }

  root() {
      if (this.rootObj !== null) {
          return this.rootObj;
      } else return null;
  }

  add(data) {
      if (this.rootObj !== null) {
          return this.rootObj.add(data);
      }

      this.rootObj = new Node(data);
  }

  has(data) {
      return !(this.find(data) === null);
  }

  find(data) {
      if (data === this.rootObj.data) {
          return this.rootObj;
      }

      let current = this.rootObj;

      while (data !== current.data) {
          if (data > current.data || data > current.data[0]) {
              if (current.right === null) {
                  return null;
              }

              current = current.right;
              continue;
          }
          if (data < current.data || data < current.data[0]) {
              if (current.left === null) {
                  return null;
              }

              current = current.left;
          }
          if (data === current.data[0]) {
              return null;
          }
      }
      return data === current.data ? current : null;
  }

  remove(data) {
      if (this.rootObj.data === data) {
          this.rootObj.data = [data];
      } else {
          this.rootObj.remove(data);
      }
  }

  min() {
      if (this.rootObj === null) {
          return null;
      }

      let current = this.rootObj;
      let lastNotDeleted = this.rootObj.data;

      while (current.left !== null) {
          current = current.left;
          lastNotDeleted = current.data instanceof Array ? lastNotDeleted : current.data;
      }

      return lastNotDeleted;
  }

  max() {
      if (this.rootObj === null) {
          return null;
      }

      let current = this.rootObj;
      let lastNotDeleted = this.rootObj.data;

      while (current.right !== null) {
          current = current.right;
          lastNotDeleted = current.data instanceof Array ? lastNotDeleted : current.data;
      }

      return lastNotDeleted;
  }
}

module.exports = {
  BinarySearchTree
};