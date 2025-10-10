const obj = {
  a: 1,
  b: 2,
  c: 3,
};
// 遍历对象的所有属性名
// Object.keys(obj).forEach(function (key) {
//   console.log(key)
// })


// 遍历对象的所有属性值
// Object.values(obj).forEach(function (value) {
//   console.log(value)
// })

// 遍历对象的所有属性名和属性值

// Object.keys(obj).forEach(function (key,value) {
//   console.log(key,value)
// })
// Object.entries(obj).forEach(function (k, v) {
//   console.log(k, v)
// })


// 复制obj的所有属性到一个新的对象
// const newObj = {
//   ...obj
// }
// console.log(newObj)

// 复制obj除a以外的所有属性到一个新的对象
const { a, ...newObj } = obj;
console.log(newObj)