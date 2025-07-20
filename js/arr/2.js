//fill  一样的
//Array 构造函数上的静态方法
console.log(Array.of(1, 2, 3));//满足不同值的初始化需求
//复杂的计算或转变
console.log(Array.from(new Array(26),
(val,index)=>String.fromCodePoint(65+index)
));
