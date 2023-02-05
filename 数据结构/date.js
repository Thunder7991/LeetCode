let now = new Date()
// let someDate = new Date(Date.parse("May 23, 2019")); 
// let someData = new Date("May 23, 2019");
// let allFives = new Date(2005, 4, 5, 17, 55, 55);
now.toLocaleString()//2021/5/3 下午8:35:09
now.toString()//Mon May 03 2021 20:35:28 GMT+0800 (中国标准时间)
now.valueOf()//1620045345750
now.toLocaleDateString()//2021/5/3
now.toLocaleTimeString()//下午8:36:30
now.toTimeString() //20:36:50 GMT+0800 (中国标准时间)
now.toUTCString()//Mon, 03 May 2021 12:37:09 GMT
/* 

*/

now.getTime() //1620045457864
now.getFullYear() //2021
now.getUTCFullYear() //2021
now.setFullYear(2022) //1651581853029
now.getMonth() //4 + 1月
now.getDate()//3号
now.getHours()//20时
now.getMinutes()//45分
now.getSeconds()//3秒
console.log(now.getSeconds());