let obj={a:1,b:2};
//太常见，大型语言都内置，[] {}
//HashMap 字典 O(1) key:value
const target =new Map();//实例化es6 新的数据结构  强
target.set('c',3);
console.log(target.get('c'));
target.set(obj,4) //和JSON不一样的地方  对象做key
obj=null
console.log(target.get(obj));

let obj2={
    name:'张三'
}
const target2=new WeakMap(); //Weak 弱的
target2.set(obj2,'code迷你')
obj2=null;//内存的回收 垃圾回收
console.log(target2.get(obj2));//undefined



