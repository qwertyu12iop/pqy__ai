/**
 * @func 反转字符串
 * @param {string} str 
 * @return string
 */

function reverseString(str) {
    //str 是什么类型？ 字符串 简单数据类型 primitive
    return str.split('').reverse().join('')
}
console.log(reverseString('abcdefg'));

//函数表达式  
//es5 函数表达式
const reverseString1 = function (str) {
    return str.split('').reverse().join('')
}
// es6 箭头函数  简洁 function不要了 用箭头代替  当只有一句话{}省略
//他是返回值的时候 renturn省略

const reverseString2 = () => str.split('').reverse().join('')
//当只有一个参数的时候 （）省略
const reverseString3 = str => str.split('').reverse().join('')
