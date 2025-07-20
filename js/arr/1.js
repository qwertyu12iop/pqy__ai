//{}对象字面量 key:value O(1) HashMap Map 
//{}第一种重要数据结构 
//[]第二种重要的数据结构 链表 队列 栈
//其他语言有长度类型的限定
//js 可以限定长度 但是可以动态自动扩容
const arr=[1,2,3];
const arr2= new Array(5).fill(undefined)
//console.log(arr2);
arr2[8]=undefined;
//console.log(arr2);
for(let key in arr2){
    console.log(key,arr2[key]);
}
for(let item of arr2){
    console.log(item);
}


