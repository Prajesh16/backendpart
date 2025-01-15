class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    const value = this.front.value;
    this.front = this.front.next;
    if (!this.front) {
      this.rear = null;
    }
    this.size--;
    return value;
  }

  isEmpty() {
    return this.size === 0;
  }

  peek() {
    return this.isEmpty() ? "Queue is empty" : this.front.value;
  }
}

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(10);
console.log(queue.dequeue());
console.log(queue.peek());
