/*
 * @Author: your name
 * @Date: 2021-05-03 13:16:15
 * @LastEditTime: 2021-06-29 15:31:43
 * @LastEditors: Please set LastEditors
 * @Description: 数据结构--链表
 * @FilePath: \JSData\LearnJSData\LinkedList.js
 */
function defaultEquals(a, b) {
  //该方法的目的就是找到一个特定的元素，
  return a === b;
}
/* 
Node
类表示我们想要添加到链表中的项。它包含一个 element 属性，该属性表示要加入链表元素的
值；以及一个 next 属性:该属性是指向链表中下一个元素的指针

 */
class Node {
  //表示我们想要添加到链表中的项
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}
/**
 * @description: 基础链表的创建
 * @param {*}
 * @return {*}
 */
class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0; //表示元素的数量
    this.head = undefined; //用于保存第一个元素的引用
    this.equalsFn = equalsFn; // {4} 比较链表中的元素是否相等
  }
  //向链表尾部添加元
  push(el) {
    const node = new Node(el); // {1}
    let current; // {2}
    if (this.head == null) {
      // {3}
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        // {5} 获得最后一项
        current = current.next;
      }
      // 将其 next 赋为新元素，建立链接
      current.next = node; // {6}
    }
    this.count++; // {7}
  }
  //从列表中删除元素 ：特定位置
  removeAt(index) {
    if (index > 0 && index < this.count) {
      //校验index 是否有效
      let current = this.head; // 创建第一个元素的引用~
      //移除第一项
      if (index === 0) {
        // {3}移除第一项
        this.head = current.next;
      } else {
        //这里主要是删除最后一个节点和中间某个节点
        /*  

       let previous; // {4}
        for (let i = 0; i < index; i++) {
          // {5}
          previous = current; // {6}  当前元素的前一个引用
          current = current.next; // {7}current变量总是当前的元素的引用
        }
        // 将 previous 与 current 的下一项链接起来：跳过 current，从而移除它
        previous.next = current.next; // {8}
        
        */
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--; // {9}
      return current.element;
    }
    return undefined; // {10}
  }

  //重构代码 获取 当前 index 元素
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      //参数合法
      // {1}
      let node = this.head; // {2} 首个元素
      for (let i = 0; i < index && node != null; i++) {
        // {3}
        node = node.next;
      }
      return node; // {4} 返回index位置的元素
    }
    return undefined; // {5}
  }

  // 在任意位置插入元素
  insert(el, index) {
    if (index >= 0 && index <= this.count) {
      //检查界限,如果越界了，就返回 false 值
      const node = new Node(el);
      //在头部(起点)插入
      if (index === 0) {
        // 在第一个位置添加
        const current = this.head; //current 永远表示第一个元素的应用...
        node.next = current; // {2}
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1); // {3}
        const current = previous.next; // {4}
        node.next = current; // {5}
        previous.next = node; // {6}
      }
      this.count++; // 更新链表的长度
      return true;
    }
    return false; // {7}
  }

  //indxof方法返回一个元素的位置:  indexOf 方法接收一个元素的值，如果在链表中找到了它，就返回元素的位置，否则返回-1
  indexOf(el) {
    let current = this.head;
    for (let i = 0; i < this.count && current !== null; i++) {
      if (this.equalsFn(el, current.el)) {
        //验证current元素是否和目标元素相等 ,如果 当前位置的元素是我们要找的元素,就retuen返回他的位子
        return i;
      } else {
        //否则,就迭代下一个节点
        current = current.next;
      } ///没有找到返回 -1
      return -1; // {6}
    }
  }

  // 从链表中移除元素
  remove(element) {
    const index = this.indexOf(element); //获取当前元素的位置
    return this.removeAt(index); //删除当前元素
  }

  //size方法 :返回了链表元素的个数
  size() {
    return this.count;
  }

  //isEmpty方法
  isEmpty() {
    return this.size() === 0;
  }

  //getHead方法
  getHead() {
    return this.head;
  }

  //toString方法:吧LinkedList对象转换城一个字符串
  /* 
    相关逻辑 :
    如果链表为空（head 为 null 或 undefined），我们就返回一个空字符串（行{1}）。

  */
  toString() {
    if (this.head == null) {
      // {1}
      return '';
    }
    let objString = `${this.head.element}`; // {2}
    let current = this.head.next; // {3}
    for (let i = 1; i < this.size() && current != null; i++) {
      // {4}
      objString = `${objString},${current.element}`;
      current = current.next;
    }
    return objString; // {5}
  }
}
/* const list = new LinkedList();
list.push(15);
list.push(10);
console.log(list); */



/**
 * @description: 双向链表
 * 双向链表和普通链表的区别在于,
 * 在链表中一个节点只有链向下一个节点的链接;
 * 在双向链表中,链接是双向的,一个链向下一个元素,另一个链向前一个元素.
 * @param {*}
 * @return {*}
 */

class DoubleNode extends Node {
  constructor(element, next, prev) {
    super(element, next, prev);
    this.prev = prev; // {3} 新增
  }
}

class DoublyLinkedList extends LinkedList {
  //4 扩展LinkedList 类
  constructor(equalsFn = defaultEquals) {
    super(equalsFn, next);
    this.tail = undefined;
  }

  //在任意位置插入新元素
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element);
      let current = this.head;
      if (index === 0) {
        if (this.head == null) {
          //如果双向链表为空,只需要把head和tail指向新的节点
          // {1} 新增的
          this.head = node; //头部
          this.tail = node; //尾部
        } else {
          //  如果不为空，current变量将是对双向链表中第一个元素的引用:node.next 设为 current（行{2}），而 head 将指向 node
          node.next = this.head; // {2}
          current.prev = node; // {3} 新增的
          this.head = node; // {4}
        }
      } else if (index === this.count) {
        // 最后一项 // 新增的
        current = this.tail; // {5}
        current.next = node; // {6}
        node.prev = current; // {7}
        this.tail = node; // {8}
      } else {
        const previous = this.getElementAt(index - 1); // {9}
        current = previous.next; // {10}
        node.next = current; // {11}
        previous.next = node; // {12}
        current.prev = node; // {13} 新增的
        node.prev = previous; // {14} 新增的
      }
      this.count++;
      return true;
    }
    return false;
  }

  //从任意位置移除元素:从头部、从中间和从尾部移除一个元素.
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head; //current 变量是对双向链表中第一个元素的引用,也就是我们想移除的元素. 需要做的是改变head的引用
      if (index === 0) {//移除头部的元素
        this.head = current.next; // {1} 将current改为下一个元素的指针: 也就是说删除完头部元素后,下一个元素将会变为头部元素~
        // 如果只有一项，更新 tail // 新增的
        if (this.count === 1) { // {2} 元素数量 === 1 这时候尾部的元素和当前元素的前边元素都为undefined
          this.tail = undefined;
        } else {
          this.head.prev = undefined; // {3}
        }
      } else if (index === this.count - 1) {//移除尾部的元素
        // 最后一项 //新增的
        current = this.tail; // {4} //将current改为末尾的元素(即将删除的元素)
        this.tail = current.prev; // {5} 末尾的元素改为当前元素(current)的前一个元素
        this.tail.next = undefined; // {6} 末尾的元素的以一个元素的指针为undefined
      } else { //移除中间部分的元素
        current = this.getElementAt(index); // {7} 获取当前需要移除的元素
        const previous = current.prev; // {8} 当前元素的前一个元素
        // 将 previous 与 current 的下一项链接起来——跳过 current
        previous.next = current.next; // {9} 因为要删除元素所以 当前元素的下一个元素为前一个元素的下一个元素
        current.next.prev = previous; // {10} 当前元素的下一个元素的前一个元素为当前元素(current)的前一个元素
      }
      this.count--;
      return current.element; //返回删除的元素
    }
    return undefined;
  }
}


 //循环列表 : 可以像链表一样只有单向引用,也可以像双向链表一样有双向引用.
  //双向循环链表有的指向head元素的tail.next和指向tail元素的head.prev

  //创建双向链表
  class  CircularLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
      super(equalsFn); 
    } 
    //在任意位置插入新元素 : 与普通链表中的插入元素的逻辑是一样的,不同之处在于我们,需要将循环链表尾部节点的 next 引用指向头部节点
    insert (element,index) {
      if (index >= 0 && index <= this.count) { 
        const node = new Node(element); 
        let current = this.head; 
        if (index === 0) { //第一种情况: 循环列表为空 ~~ 
        if (this.head == null) { 
        this.head = node; // {1} 
        node.next = this.head; //{2}新增的
        } else {  //第二种情况: 在非空循环列表中的第一个位置插入元素, 
        node.next = current; // {3} 
        current = this.getElementAt(this.size()); //{4} 保证最后一个节点指向了这个新的头部元素
        // 更新最后一个元素
        this.head = node; // {5} 
        current.next = this.head; // {6} 新增的
  
        } 
        } else { // 这种场景没有变化
        const previous = this.getElementAt(index - 1); 
        node.next = previous.next; 
        previous.next = node; 
        } 
        this.count++; 
        return true; 
        } 
        return false; 
    }

    //从任意位置中移除元素 :只需要考虑第二种情况,也就是修改循环链表的head元素.
    removeAt(index) { 
      if (index >= 0 && index < this.count) { 
      let current = this.head; 
      if (index === 0) { 
      if (this.size() === 1) { 
      this.head = undefined; 
      } else { 
      const removed = this.head; // {1} 
      current = this.getElementAt(this.size()); // {2} 新增的
      this.head = this.head.next; // {3} 
      current.next = this.head; // {4} 
      current = removed; // {5}
    } 
    } else { 
      // 不需要修改循环链表最后一个元素
      const previous = this.getElementAt(index - 1); 
      current = previous.next; 
      previous.next = current.next; 
      } 
      this.count--; 
      return current.element; // {6} 
      } 
      return undefined; 
     } 

  }

  //有序链表 :是指保持元素有序的链表结构. 除了使用排序算法之外,我们可以将元素插入到正确的位置
  const Compare = { 
    LESS_THAN: -1,
    BIGGER_THAN: 1 
   };
   
   function defaultCompare(a,b) {
    if (a === b) { //{1}
      return 0
    }
    return a < b? Compare.LKSS_THAN : Compare.BIGGER_THAN //{2}
   }
   class SortedLinkedList extends LinkedList { //继承所有的方法.
    constructor(equalsFn = defaultEquals, compareFn = defaultCompare) { 
      super(equalsFn); 
      this.compareFn = compareFn; // {3} 
      }

      //有序插入元素
      insert (element,index = 0) {// {1}
          if (this.isEmpty()) { //如果有序列表为空,直接调用,LinkedList的insert方法传入0作为idnex
            return super.insert(element, 0); // {2}
          }
          const pos = this.getIndexNextSortedElement(element); // {3}  如果不为空,我们会知道插入元素的正确位置
          return super.insert(element, pos); // {4}
      }
      getIndexNextSortedElement(element) {  //该方法,是为了获得元素的正确位置.
        let current = this.head; 
        let i = 0; 
        for (; i < this.size() && current; i++) {  //迭代整个有序链表知道找到需要插入元素的位置
        const comp = this.compareFn(element, current.element); // {5} 每个元素做对比
        if (comp === Compare.LESS_THAN) { // {6} 
        return i; 
        } 
        current = current.next; 
        } 
        return i; // {7} 
       } 

   }

   //创建 StackLinkedList 类
   //我们还可以使用 LinkedList 类及其变种作为内部的数据结构来创建其他数据结构
   class StarckLinkedList {
     constructor() {
       this.items = new DoublyLinkedList() // {1} 将使用 DoublyLinkedList 来存储数据
     }
     push(element) { 
      this.items.push(element); // {2}  将使用 DoublyLinkedList 来存储数据
      } 
      pop() { 
      if (this.isEmpty()) { 
      return undefined; 
      } 
      return this.items.removeAt(this.size() - 1); // {3}  链表尾部移除元素
      }
      
      peek() { 
        if (this.isEmpty()) { 
        return undefined; 
        } 
        return this.items.getElementAt(this.size() - 1).element; 
       } 
       isEmpty() { 
        return this.items.isEmpty(); 
       } 
       size() { 
        return this.items.size(); 
       } 
       clear() { 
        this.items.clear(); 
       } 
       toString() { 
        return this.items.toString(); 
       }
   }
 