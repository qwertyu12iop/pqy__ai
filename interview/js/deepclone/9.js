let obj1={
    name:'张三',
    age:18,
}
//没有实现拷贝
let obj2=obj1;//不是复印 而是引用传递 只是换个名字 还是一个东西
obj2.age=99;

let arr1=[1,2,3];
let arr2=arr1;
arr2.push(4);
//怎么实现数组对象的拷贝
