//包装类

let a = "abc"
let b = new String("abc")
console.log(a == b)//值相等  true
//js给所有的简单类型提供了 相应类型的类  包装类
console.log(a === b)//类型不同 false
console.log(b.split(""));
//为了统一面向对象写法
//js会主动的吧简单类型转化为相应的包装类对象
//a->new String(a)之后会销毁对象，回归原来的简单类型