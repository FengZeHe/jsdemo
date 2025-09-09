// 将日期格式化为字符串 yyyy MM dd HH mm ss
function formatDate(date) {
    var year = date.getFullYear().toString().padStart(4, '0');
    var month = date.getMonth().toString().padStart(2, '0');

    var d = date.getDate().toString().padStart(2, '0');
    var hours = date.getHours().toString().padStart(2, '0');
    var min = date.getMinutes().toString().padStart(2, '0');
    var seconds = date.getSeconds().toString().padStart(2, '0');

    return `${year}-${month}-${d} ${hours}:${min}:${seconds}`;

}

const t = new Date();

console.log(formatDate(t));