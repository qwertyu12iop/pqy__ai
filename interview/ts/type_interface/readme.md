# type 和 interface

- 相同点
    - 都可以申明自定义类型

- 区别
    当我们要编写继承类的时候，interface只要extends就好
    type使用的是&  并集

- interface 支持多次声明  合并
    type 不可以

- type 可以用于定义基础类型、联合类型、元祖等，
    interface只能描述对象结构(函数、类)

- type支持简单类型的别名，interface不可以

- interface和type在申明函数类型上有区别

