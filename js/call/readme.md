# 手写call

- 手动指定函数内部的this指向
- 参数 一个个传入  apply []
- 第一个参数是null 或者 undefine 指向window
  严格模式下报错
- 应用场景区别
  - call apply 立即执行的， 区别是参数传递的方式，可以互换使用
  - bind 延迟执行

## 手写call
- call是属于所有函数的，Function 原型链上的方法

## 包含的技能点
- 原型 Function
- 函数参数的理解
  context , rest运算符
- contxt为空 null undefined 指向window 严格模式下报错
- 在context 上挂载方法，轻松实现函数内部的this 指向 context
  js 动态性 污染了context
  es6 sybmol 唯一值，不会覆盖原对象上的属性
  delete context 上的方法
- return 返回值
