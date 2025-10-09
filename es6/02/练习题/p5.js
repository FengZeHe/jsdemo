// 得到一个随机数组成的数组，数组长度为10，随机数的范围在0-1之间
// 结果类似于：[0.262, 0.167, 0.841, ...]

// 得到一个随机数组成的数组，数组长度为10，随机数的范围在10-100之间
// 结果类似于：[35, 66, 45, ...]

// 判断某个字符串s是否为 .jpg、.png、.bmp、.gif 中的一个

const randomArr1 = Array.from({ length: 10 }, () => +Math.random().toFixed(3));

const randomArr2 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 91) + 10);


const s = '.png';
const arr = ['.jpg', '.png', '.bmp', '.gif'];

const result = arr.includes(s);