/*
 * @Author: thunderchen
 * @Date: 2023-05-11 22:49:43
 * @LastEditTime: 2023-05-11 23:50:02
 * @email: 853524319@qq.com
 * @Description: 树 广度优先
 */

function bfs(root) {
  const queue = [];
  let rootValue = [];
  queue.push(root);
  while (queue.length > 0) {
    let node = queue.shift();
    rootValue.push(node.value);
    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        const item = node.children[i];
        queue.push(item);
      }
    }
  }
  return rootValue;
}

function dfs(node) {
    console.log(node.value); // 访问节点的值
    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        dfs(node.children[i]); // 递归访问子节点
      }
    }
  }

  function dfs(node, stack = []) {
    if (!node) return;
    console.log(node.value);
    if (node.children) {
      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push(node.children[i]);
      }
    }
    dfs(stack.pop(), stack);
  }
  
const tree = {
  value: 'A',
  children: [
    {
      value: 'B',
      children: [
        { value: 'D', children: [] },
        { value: 'E', children: [] },
      ],
    },
    {
      value: 'C',
      children: [
        { value: 'F', children: [] },
        { value: 'G', children: [] },
      ],
    },
  ],
};

console.log(bfs(tree));
