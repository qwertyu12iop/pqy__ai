// let a: any = 1;//any 任何类型 ts新手，狂用any
// a = "2";//不能滥用,学会用泛型
// function getFirstElement(arr: any[]): any {
//     return arr[0];
// }
// //提高复用性，函数参数返回值需要指定类型
// const numbers = [1, 2, 3];
// const firstNumber = getFirstElement(numbers);

// const strs = ["1", "2", "3"]
// const firstStr = getFirstElement(strs);
// console.log(firstStr);

//复用这个函数的同时，传入类型参数

function getFirstElement<T>(arr: T[]): T | undefined {
    return arr.length>0?arr[0]:undefined
}
const strings=["hello","world"]
const firstString=getFirstElement(strings);//ts会自动推导类型
console.log(firstString);

// const numbers=[1,2,3];
// const firstNum=getFirstElement<number>(numbers);
// firstNum?.toFixed(2);

