
/* 
    双端队列：是一种允许我们同时向前端和后端添加和移除元素的特殊队列
*/

class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0; //键名来获取元素值
    this.items = {};
  }
  // 向双端队列的前端添加元素
  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element); //元素会被添加到双端队列的后端
    } else if (this.lowestCount > 0) {
      //一个元素已经被从双端队列的前端移除
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      //lowestCount 为 0 的情况
      //
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element; // {4}
    }
  }
  //在双端队列后端添加新的元素
  addBack(element) {
    //向队列添加元素
    this.items[this.count] = element;
    this.count++;
  }
  //从队列移除元素
  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount]; // {1}
    delete this.items[this.lowestCount]; // {2}
    this.lowestCount++; // {3}
    return result; // {4}
  }
  //从双端队列后端移除第一个元素
  removeBack() {
    if (this.isEmpty()) {
      // {1}
      return undefined;
    }
    this.count--; // {2}
    const result = this.items[this.count]; // {3}
    delete this.items[this.count]; // {4}
    return result; // {5}
  }
  //查看队列头元素
  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }
  //返回双端队列后端的第一个元素
  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }
  isEmpty() {
    return this.count === 0;
  }
}

const deque = new Deque();



// 回文检查器:双端队列解决问题, 简单的举例:正向单词和反向单词先相同

/**
 * 
 */
function palindromCheck(aString) {
  if (aString === undefined || aString === null || (aString !== null && aString.length === 0)) {
    // {1}
    return false;
  }
  const deque = new Deque(); // {2}
  const lowerString = aString.toLocaleLowerCase().split(' ').join(''); // {3}
  let isEqual = true;
  let firstChar, lastChar;
  for (let i = 0; i < lowerString.length; i++) {
    // {4}
    deque.addBack(lowerString.charAt(i));
  }
  console.log(deque);
  while (deque.size() > 1 && isEqual) {
    // {5}
    firstChar = deque.removeFront(); // {6}
    lastChar = deque.removeBack(); // {7}
    if (firstChar !== lastChar) {
      isEqual = false; // {8}
    }
  }
  return isEqual;
}

palindromCheck('abcba')

