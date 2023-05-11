/*
 * @Author: thunderchen
 * @Date: 2023-05-11 23:23:57
 * @LastEditTime: 2023-05-11 23:46:28
 * @email: 853524319@qq.com
 * @Description: 深度优先
 */
function dfs(node) {
    const stack = [];
    stack.push(node);
    while (stack.length > 0) {
      const cur = stack.pop();
      console.log(cur.value);
      if (cur.children) {
        for (let i = cur.children.length - 1; i >= 0; i--) {
          stack.push(cur.children[i]);
        }
      }
    }
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
          { value: 'H', children: [] },

        ],
      },
    ],
  };
  
  console.log(dfs(tree));
  