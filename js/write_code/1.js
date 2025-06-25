// 完成的功能
function objectFactory() {
    var obj = {};
    //类数组上没有shift方法，所以借助数组的shift方法
    var Constructor = [].shift.call(arguments);//拿到了构造函数
    obj.__proto__ = Constructor.prototype;
    var ret=Constructor.apply(obj, arguments);
    // || null 的情况 仍然会返回object 构造函数 return简单类型 忽略
    return typeof ret === 'object' ? ret || obj : obj;
    // Constructor.apply(obj, arguments);
    // return obj;

}
function Person(name, age) {
    this.name = name;
    this.age = age;
  //  return 1;
    return {
        name:name,
        age:age,
        label:'haha'
    }
    
}
Person.prototype.say = function () {
    console.log(`你好，我是${this.name}`);
    
}
let p1=new Person('张三',18);
console.log(p1);

let p=objectFactory(Person,'张三',18);
console.log(p);
p.say();
console.log(p instanceof Person);

//new Person(...)->function [[construct]]->{} &&this ->{} ->[[call]]
//->{}.__proto__  -> Constructor.prototype ->return {}