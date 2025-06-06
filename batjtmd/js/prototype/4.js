function Person(name, age) {
    //this 指向实例化对象
    this.name = name;
    this.age = age;
}
Person.prototype.say= function () {
        console.log(`hello,我是${this.name}`);
    }

var hu=new Person('吉他胡',18)
var a={
    name:'孔子',
    country:'中国',
}
hu.__proto__=a;
console.log(hu.__proto__);
console.log(hu.country);
console.log(Person.prototype.constructor==Person);
console.log(hu.eee);


