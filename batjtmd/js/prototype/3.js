//没有class的js 如何在苦苦追求 OOP
//首字母大写 约定 1.类的概念
//2.构造函数
function Person(name,age){
    //this 指向实例化对象
    this.name=name;
    this.age=age;
}
//函数对象  原型对象
//类的方法
Person.prototype={
    say:function(){
        console.log(`hello,我是${this.name}`);
    }
}
//new 一下  3.实例化对象
//nwe 运行构造函数
console.log(new Person('张三',18))
let p=new Person('pp',18)
p.say()
console.log(p.__proto__);

let o={a:1}
console.log(o.__proto__);
console.log(o.toString());


