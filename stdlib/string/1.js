// 生成一个a-z的字符串
// 1. 使用ASCII码的方式实现

var result = '';

for (let i=97;i<=122;i++){
    result += String.fromCharCode(i)
}
console.log(result)
