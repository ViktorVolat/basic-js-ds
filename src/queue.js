const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Queue {
  constructor() {
    this.root = null;
  }

  getUnderlyingList() {
    return this.root;
  }

  enqueue(value) {
    const node = new ListNode(value);
    if (!this.root) {
      this.root = node;
    } else {
      let currentNode = this.root;
      while(currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
  }

  dequeue() {
    const data = this.root.value;
    this.root = this.root.next;

    return data;
  }
}

module.exports = {
  Queue
};
