// 得到规指定范围内的随机整数
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    var rnum = Math.floor(Math.random() * (max - min + 1)) + min;
    return rnum;
}

// console.log(getRandom(5, 10));

//得到一个指定长度的随机字符串,字符串包含：数字、字母
/*
    ASCII  
    数字0-9 48-57
    大写字母 65-90
    小写字母 97-122
*/
function getRandomString(length) {
    let numbers = '';
    let chars = '';
    var numLength = Math.floor(Math.random() * (length - 1)) + 1
    var strLength = length - numLength;

    console.log(numLength, strLength)


    for (let i = 48; i <= 57; i++) {
        numbers += String.fromCharCode(i)
    }

    for (let i = 65; i <= 90; i++) {
        chars += String.fromCharCode(i);
    }

    for (let i = 97; i <= 122; i++) {
        chars += String.fromCharCode(i);
    }

    let result = '';
    for (let i = 0; i < numLength; i++) {
        const randomIndex = Math.floor(Math.random() * numLength);
        result += numbers[randomIndex];
    }

    for (let i = 0; i < strLength; i++) {
        const randomIndex = Math.floor(Math.random() * strLength);
        result += chars[randomIndex]
    }

    console.log(result)

}
// getRandomString(5)

// 从一个数组中随机取出一项
function getRandomItem(arr) {
    if (!arr || arr.length === 0) {
        return;
    }

    const len = arr.length
    const randIndex = Math.floor(Math.random() * len)
    console.log(arr[randIndex])
}
// getRandomItem([1, 2, 3, 4, 5])