# 原型
- OO机制 Object Oriented Programming
- 封装、**继承**、多态  接口

## JS OOP
- 对象字面量如果是一堆一样的对象创建  麻烦
- 类的概念 没有class 关键字
- 构造函数不能省的
- 赋予函数新的使命，身兼两职
  类+构造函数

## JS 面向对象更强大，它是原型式的
- 任何对象 默认指向Object  
- __proto__
  任何对象都有这个私有属性，对象和构造函数和类之间没什么血缘关系(代孕)

  - JS 本没有类
    只不过用function 大写 来表示类
  - JS 对象和类，构造函数 没有血缘关系
    __proto__ 指向构造函数的prototype
  - __proto__ 指向任何Object
  - 不指默认是Object
  - 原型对象、原型链
  - 类是大写的函数
  - 实例是new出来的对象
  - 任何函数都有一个prototype属性，指向原型对象

## new的过程
new -> {}空对象 -> constructor 运行 -> this -> {}空对象 ->完成了构造
-> __proto__  -> constructor的prototype -> Object  原型链
原型链的终点是null