// 根据下面的调用示例，编写User类
// function User(count, passwd) {
//     this.count = count;
//     this.passwd = passwd;
// }

// User.prototype.sayHello = function () {
//     console.log(`账号 —— ${this.count} , 密码 —— ${this.passwd}`)
// }

class User {
    constructor(account, passwd) {
        this.account = account;
        this.passwd = passwd;
    }

    sayHello() {
        console.log(`账号 —— ${this.count} , 密码 —— ${this.passwd}`)
    }
}


const u = new User('account', 'pwd123'); // 创建用户
u.sayHello(); // 输出：账号 —— account，密码 —— pwd123

