/**
 * 集合 : 是有一组无序且唯一(即不能重复)的项组成的.
 *
 * 认识集合 : 一个由大于或等于 0 的整数组成的自然数集合：N = {0, 1, 2, 3, 4, 5, 6, …}。集合中的对象列表用花括号（{}）包围。
 */
class Set {
  constructor() {
    this.items = {};
  }
  //has(element)方法 : 用来检测某个元素是否存在.
  has(element) {
    return element in this.items;
  }
  //add(element)方法:
  add(element) {
    if (!this.has(element)) {
      this.items[element] = element; // {1}
      return true;
    }
    return false;
  }
  //delete方法
  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }
  //clear 方法
  clear() {
    this.items = {};
  }
  //size 方法
  size() {
    return Object.keys(this.items).length; // {1}
  }
  //第二种实现方式
  sizeLegacy() {
    let count = 0;
    for (const key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        count++;
      }
    }
    return count;
  }
  // 获取对象中的value: []
  values() {
    return Object.values(this.items);
  }
  //兼容模式
  valuesLegacy() {
    let values = [];
    for (let key in this.items) {
      // {1}
      if (this.items.hasOwnProperty(key)) {
        values.push(key); // {2}
      }
    }
    return values;
  }
  //集合运算 --- 并集
  union(otherSet) { 
    const unionSet = new Set(); // {1} 
    this.values().forEach(value => unionSet.add(value)); // {2} 
    otherSet.values().forEach(value => unionSet.add(value)); // {3} 
    return unionSet; 
   }
   //交集 1.改进前
  //  intersection(otherSet) {
  //   const intersectionSet = new Set(); // {1} 
  //   const values = this.values()
  //   for (let i = 0; i < values.length; i++) {
  //     if (otherSet.has(values[i])) {
  //       intersectionSet.add(values[i])
  //     } 
  //   }
  //   return intersectionSet
  //  }
   //2.改进后
   intersection(otherSet) { 
    const intersectionSet = new Set(); // {1} 
    const values = this.values(); // {2} 
    const otherValues = otherSet.values(); // {3} 
    let biggerSet = values; // {4} 
    let smallerSet = otherValues; // {5} 
    if (otherValues.length - values.length > 0) { // {6} 
    biggerSet = otherValues; 
    smallerSet = values; 
    } 
    smallerSet.forEach(value => { // {7} 
    if (biggerSet.includes(value)) { 
    intersectionSet.add(value); 
    } 
    }); 
    return intersectionSet; 
   } 


   //差集
    difference(otherSet) {
      const differenceSet = new Set()
      this.values().forEach(value => {
        if (!otherSet.has(value)) {
            differenceSet.add(value)
        }
      })
      return differenceSet;
    }

    //子集
    isSubsetOf(otherSet){
      if (this.size() > otherSet) {
          return false
      }
      let isSubset = true
      this.values().every(value => {
        if (!otherSet.has(value)) {
          isSubset = false
          return false
        }
        return true
      })
      return isSubset
    }

}

//使用set类
const set = new Set();
set.add(1);
console.log(set.values());




