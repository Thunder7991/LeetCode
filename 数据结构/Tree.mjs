import { Compare, defaultCompare } from './util.mjs';
// 二叉搜索树
export class Node {
  constructor(key) {
    this.key = key; //节点值
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn; //用来比较节点指
    this.root = null; //类型的根节点
  }

  /**
   * 要向树中插入一个新的节点（或键），要经历三个步骤
   *    第一步是验证插入操作是否是特殊情况
   */
  insert(key) {
    if (this.root == null) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key); //将节点添加到根节点以外的其他位置
    }
  }
  insertNode(node, key) {
    // key : 新插入的节点 ; node.key:当前的节点
    //如果新节点的键小于当前节点的键（现在，当前节点就是根节点)
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left === null) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else {
      if (node.right === null) {
        node.right = new Node(key);
      } else {
        this.insertNode(node.right, key);
      }
    }
  }
}

