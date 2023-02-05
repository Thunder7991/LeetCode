const set = new Set();

const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
const setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);
//并集运算

const union = (setA, setB) => {
  const unionAb = new Set();
  setA.forEach((value) => unionAb.add(value));
  setB.forEach((value) => unionAb.add(value));
  return unionAb;
};
console.log(union(setA, setB));

//交集运算
const intersection = (setA, setB) => {
  const intersectionSet = new Set();
  setA.forEach((value) => {
    if (setB.has(value)) {
      intersectionSet.add(value);
    }
  });
  return intersectionSet;
};
console.log(intersection(setA, setB));

//差集运算

const difference = (setA, setB) => {
  const differenceSet = new Set();
  setA.forEach((value) => {
    if (!setB.has(value)) {
      // {1}
      differenceSet.add(value);
    }
  });
  return differenceSet;
};
console.log(difference(setA, setB));


//使用扩展运算符进行并集运算
console.log(new Set([...setA, ...setB]));

//使用扩展运算符进行交集运算
console.log(new Set([...setA, ...setB]));

//使用扩展运算符进行差集运算
console.log(new Set([...setA].filter(x => !setB.has(x))));