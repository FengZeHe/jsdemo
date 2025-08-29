
for (var i = 0; i < 3; i++) {
    help(i)
}

function help(a) {
    //每次循环产生一个新的作用域，作用域中的变量跟i相同
    setTimeout(function () {
        console.log(a)
    }, 1000)
}