//全局的 js 代码在执行之前会有一个编译的过程
// 1. 找到所有的var 进行变量提升 （var 声明的变量会在当前作用域的最前面声明）
//变量提升了
console.log(value, '----');
var a;
a = 1;
if (false) {
    var value = 1;//申明变量
}
//undefined
console.log(value);
