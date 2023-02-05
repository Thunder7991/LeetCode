/**
 * 
 * 数组栈
 */

class Stack {
  constructor() {
    this.count = 0;
    this.items = [];
  }
  push(el) {
    this.items[this.count] = el;
    this.count++;
  }
  pop() {
    if (this.isEmpty()) {
      // {1}
      return undefined;
    }
    this.count--; // {2}
    const result = this.items[this.count]; // {3}
    delete this.items[this.count]; // {4}
    return result; // {5}
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }
  isEmpty() {
    return this.count === 0;
  }
  clear() {
    this.items = {};
    this.count = 0;
  }
  size() {
    return this.count;
  }
}
//
/**
 * @description:十进制转换为二进制
 * @param {*} decNumber
 * @return {*}
 */
function decimalToBinary(decNumber) {
  const remStack = new Stack();
  let number = decNumber;
  let rem;
  let binaryString = ''
  while(number > 0) {
      rem = Math.floor(number % 2)
      remStack.push(rem)
      number = Math.floor(number / 2)

  }
  while (!remStack.isEmpty()) { // {5} 
    binaryString += remStack.pop().toString(); 
    } 
  return binaryString;
}

console.log(decimalToBinary(10)); 