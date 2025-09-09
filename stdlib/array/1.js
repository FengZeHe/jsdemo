// 将下面多个数组拼接成一个数组

// var nums1 = [1, 2, 3];
// var nums2 = [4, 5, 6];
// var nums3 = [7, 8, 9];

// const newArray = nums1.concat(nums2, nums3);
// console.log(newArray)
// push会改变原数组,concat会返回一个新数组

// 删除数组中的所有字符串
// var nums = [1, 1, '1', 'a', 'b', 'a', 3, 5, 3, 7];

// for (let i = 0; i < nums.length; i++) {
//     if (typeof nums[i] === 'string') {
//         const index = nums.indexOf(nums[i])
//         nums.splice(index, 1)
//         i--
//     }
// }

// console.log(nums)

// 数组去重
// var nums = [1, 1, '1', 'a', 'b', 'a', 3, 5, 3, 7];
// const newNums = nums.filter((item, index) => {
//     return nums.indexOf(item) === index;
// })

// 判断下面的文件是否符合后缀名要求
// 合法的后缀名：.jpg  .gif  .bmp .webp  .png
// var validExtensions = ['jpg', 'gif', 'bmp', 'webp', 'png'];
// var filename = 'd://files/mymap/3.jpg';
// let isLegal = false;

// const lastDotIndex = filename.lastIndexOf('.')
// if (lastDotIndex !== -1) {
//     const fileExtension = filename.slice(lastDotIndex + 1).toLowerCase();
//     isLegal = validExtensions.includes(fileExtension);
// }

// if (isLegal) {
//     console.log(`文件名 "${filename}" 符合要求，后缀名为：${filename.slice(lastDotIndex + 1)}`);
// } else {
//     console.log(`文件名 "${filename}" 不符合要求`);
// }

// 将下面的伪数组转换为真数组
var fakeArr = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
};
var arr = [];

for (let i=0;i<fakeArr.length;i++){
    arr.push(fakeArr[i])
}
