/*
 * @Author: thunderchen
 * @Date: 2023-07-17 22:56:28
 * @LastEditTime: 2023-07-17 23:30:41
 * @email: 853524319@qq.com
 * @Description: 二分搜索
 */

/**
 * (1) 选择数组的中间值。
 * (2) 如果选中值是待搜索值，那么算法执行完毕（值找到了）。
 * (3) 如果待搜索值比选中值要小，则返回步骤 1 并在选中值左边的子数组中寻找（较小）。
 * (4) 如果待搜索值比选中值要大，则返回步骤 1 并在选种值右边的子数组中寻找（较大）。
 * 
 */
const { quickSort, defaultCompare, Compare,DOES_NOT_EXIST }  = require("./快速排序")  

function lesserOrEquals (a, b, compareFn) {
    const comp = compareFn(a, b);
    return comp === Compare.LESS_THAN || comp === Compare.EQUALS;
}
function binarySearch (array, value, compareFn = defaultCompare) {
    const sortedArray = quickSort(array) //{1} 首先将数组排序, 这里是使用快排
    let low = 0 //{2} 指针
    let high = sortedArray.length - 1; //{3} 指针 
    while (lesserOrEquals(low, high, compareFn)) { //{4} 当low比high小时 计算得到中间项索引并取得中间项的值
        const mid = Math.floor((low + high) / 2); //{5} 
        const element = sortedArray[mid] //{6}
        if (compareFn(element, value) === Compare.LESS_THAN) { // {7} 比较选中项的值和搜索值
            low = mid + 1; // {8}
        } else if (compareFn(element, value) === Compare.BIGGER_THAN) { // {9}
            high = mid - 1; // {10}
        } else {
            console.log(mid);
            return mid; // {11}
        }
    }
    return DOES_NOT_EXIST; // {12} 意味着该该搜索值不存在 并返回 -1



}

let result = binarySearch([2,4,5,6,7,9,8],8)
console.log(44,result);