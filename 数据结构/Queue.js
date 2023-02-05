/**
 * @description: 队列
 * @param {*}{}
 * @return {*}
 */
class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  //向队列添加元素
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }
  //从队列移除元素
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount]; // {1}
    delete this.items[this.lowestCount]; // {2}
    this.lowestCount++; // {3}
    return result; // {4}
  }
  //查看队列头元素
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }
  //检查队列是否为空并获取它的长度

  size() {
    return this.count - this.lowestCount;
  }
  isEmpty() {
    return this.size() === 0;
  }
  //清空队列
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  //创建toString方法
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}

const queue = new Queue()
console.log(queue.isEmpty());
queue.enqueue('John')
console.log(queue.toString());



// 循环队列——击鼓传花游戏 :在这个游戏中，孩子们围成一个圆圈，把花尽快地传递给旁边的人。某一时刻传花停止，
// 这个时候花在谁手里，谁就退出圆圈、结束游戏。重复这个过程，直到只剩一个孩子（胜者）。
function hotPotato(el, num) {
  const queue = new Queue();
  const elimitatedList = [];
  for (let i = 0; i < elimitatedList.length; i++) {
    queue.enqueue(elimitatedList[i]);
  }
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue()); // {3}
    }
    elimitatedList.push(queue.dequeue()); // {4}
  }
  return {
    eliminated: elimitatedList,
    winner: queue.dequeue(), // {5}
  };
}

