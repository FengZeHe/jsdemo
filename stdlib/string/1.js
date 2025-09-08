// 生成一个a-z的字符串
// 1. 使用ASCII码的方式实现

// var result = '';

// for (let i=97;i<=122;i++){
//     result += String.fromCharCode(i)
// }
// console.log(result)


// 将下面的字符串分割成一个单词数组，同时去掉数组中每一项的,和.
var str =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci impedit voluptatem cupiditate, est corporis, quis sunt quod tempore officiis hic voluptates eaque commodi. Repudiandae provident animi quia qui harum quasi.';

// var res = str.split(' ').join(' ').split(',').join('').split('.').join('');
// console.log(res)

// 得到下面字符串中第一个i和最后一个i之间的子串
var iarr = [];
for (var k = 0; k < str.length; k++) {
    if (str[k] === 'i') {
        iarr.push(k)
    }
}
var istr = str.slice(iarr[0], iarr[iarr.length])
// console.log(istr)

// 将下面的rgb格式转换成为HEX格式
var rgb = 'rgb(253, 183, 25)';

var rgbv = rgb.match(/\d+/g);
function toHex(num) {
    var hex = parseInt(num, 10).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}

var hex = '#' + toHex(rgbv[0]) + toHex(rgbv[1]) + toHex(rgbv[2]);
console.log(hex);