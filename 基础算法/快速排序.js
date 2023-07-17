//复杂度 O(nlog(n))

 let Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0,
};
 function swap(array, a, b) {
  [array[a], array[b]] = [array[b], array[a]];
}
 function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}
quickSort([3, 5, 1, 6, 4, 7, 2]);
 function quickSort(array, compareFn = defaultCompare) {
  return quick(array, 0, array.length - 1, compareFn);
}
function quick(array, left, right, compareFn) {
  let index; // 将子数组分离为较小值数组和较大值数组。
  if (array.length > 1) {
    index = partition(array, left, right, compareFn); //划分，得到的中间值。 //4

    if (left < index - 1) {
      quick(array, left, index - 1, compareFn);
    }
    if (index < right) {
      quick(array, index, right, compareFn);
    }
  }
  return array;
}
function partition(array, left, right, compareFn) {
  debugger;
  //   1.  首先:从数组中选择一个值作为 主元 , 也就是数组中位置在中间的那个值
  const pivot = array[Math.floor((right + left) / 2)];
  // 2. 创建两个指针 左边一个指向数组第一个值，右边一个指向数组最后一个值
  let i = left;
  let j = right;
  //5. 重复这个过程，直到左指针超过了右指针
  while (i <= j) {
    // 3. 移动左指针直到我们找到一个比主元大的值
    while (compareFn(array[i], pivot) === Compare.LESS_THAN) {
      i++;
    }
    //4. 移动右指针直到找到一个比主元小的值
    while (compareFn(array[j], pivot) === Compare.BIGGER_THAN) {
      j--;
    }

    console.log(i, j);
    if (i <= j) {
      //拖过左边的值小于等于右边的值
      // 然后交换
      swap(array, i, j);
      i++;
      j--;
    }
  }
  // console.log(i);
  return i;
}

module.exports = {
  Compare,
  swap,
  defaultCompare,
  quickSort,
   DOES_NOT_EXIST : -1
}
// ===> 递归算法重写

  function newQuick(array, left, right) {
  let index;
  //获取中间值
  if (array.length > 1) {
    //1. 获取中间值
    const pivot = array[Math.floor((right + left) / 2)];
    //2 创建两个指针 i: 指向数组左边第一个值, j: 指向数组最后一个值
    let i = left;
    let j = right;
    //6. 一直循环下去, 直到i>j
    while (i <= j) {
      //3. 移动左指针直到找到比主元大的值 (i元素 < 中间值)
      while (array[i] < pivot) {
        i++;
      }
      //4. 移动右指针直到找到一个比主元小的值 (j元素 > 中间值)
      while (array[j] > pivot)  {
        j--;
      }
      //5.  三四得到的结果可能是: 最后 i指针 指向的pivot. j指针 不动指向最后位置
      // 此时开始交换结果
      if (i <= j) {
        [array[i], array[j]] = [array[j], array[i]];
        i++;
        j--;
      }
    }
    index = i;
    if (left < index - 1) {
      newQuick(array, left, index - 1);
    }
    if (index < right) {
      newQuick(array, index, right);
    }
  }
  return array;
}
let array = [3, 5, 1, 6, 4, 7, 2];
console.log(newQuick(array, 0, array.length - 1));
