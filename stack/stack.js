class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    const poppedValue = this.top.value;
    this.top = this.top.next;
    this.size--;
    return poppedValue;
  }

  peek() {
    return this.isEmpty() ? "Stack is empty" : this.top.value;
  }

  isEmpty() {
    return this.size === 0;
  }
}

const stack = new Stack();
stack.push(5);
stack.push(10);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
