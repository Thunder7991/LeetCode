/**
 *
 * 字典 Map
 */

function defaultToString(item) {
  if (item === null) {
    return 'NULL';
  } else if (item === undefined) {
    return 'UNDEFINED';
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
}

class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn; // {1}将key转换成字符串
    this.table = {}; // {2}
  }
  hasKey(key) {
    return this.table[this.toStrFn(key)] != null;
  }
  set(key, value) {
    //在字典中设置键 和 值
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key); // {1}
      this.table[tableKey] = new ValuePair(key, value); // {2} 创建一个新的键值对赋值给 table对象上的 key属性（tableKey）
      return true;
    }
    return false;
  }

  remove(key) {
    //移除字典中的一个值
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;
  }

  get(key) {
    //在字典中检索一个值
    const valuePair = this.table[this.toStrFn(key)]; // {1}
    return valuePair == null ? undefined : valuePair.value; // {2}
  }

  //    keyValues() {  //已数组的形式返回字典中的对象
  //     return Object.values(this.table);
  //    }

  keyValues() {
    //兼容版
    const valuePairs = [];
    for (const k in this.table) {
      // {1}
      if (this.hasKey(k)) {
        valuePairs.push(this.table[k]); // {2}
      }
    }
    console.log(valuePairs);
    return valuePairs;
  }

  keys() {
    //返回字典中用于识别值的所有键名
    return this.keyValues().map((valuePair) => valuePair.key);
  }
  values() {
    return this.keyValues().map((valuePair) => valuePair.value);
  }
  forEach(callbackFn) {
    //遍历, forEach((item,index) => {})
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
      if (result === false) {
        break;
      }
    }
  }
  size() {
    return Object.keys(this.table).length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  clear() {
    this.table = {};
  }
  toString() { 
    if (this.isEmpty()) { 
    return ''; 
    } 
    const valuePairs = this.keyValues(); 
    let objString = `${valuePairs[0].toString()}`; // {1} 
    console.log('98',valuePairs[0].toString());
    for (let i = 1; i < valuePairs.length; i++) { 
    objString = `${objString},${valuePairs[i].toString()}`; // {2} 
    } 
    return objString; // {3} 
   }
}

//该方法是为在字典中保存key:value,
class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}
const dictionary = new Dictionary(); 
dictionary.set('Gandalf', 'gandalf@email.com'); 
dictionary.set('John', 'johnsnow@email.com'); 
dictionary.set('Tyrion', 'tyrion@email.com'); 

console.log(dictionary.hasKey('Gandalf'));
// console.log(dictionary.toString());

console.log(dictionary.keys()); 
console.log(dictionary.values()); 
console.log(dictionary.keyValues());