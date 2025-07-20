# Array 的高级考点？

- 怎么认识数组？
    - 可遍历的对象
- new Array(5)
    类似于c++等大型语言一样，对其进行固定大小的分配  v8引擎对arr进行了设计
    - 灵活地扩展，不限类型，还有hash的特性
    - empty*5 表示key并没有被释放 for key in不可以迭代
    - new Array(5).fill(undefined)统一
- [] 数组字面量
- 静态方法
    - Array.of() 已经有了数据，直接返回一个数组
    - Array.from() 转换 将类数组对象转化为数组

## 如何遍历数组
- for(let i=0;..) 计数循环  性能好可读性不好  
- while
- forEach  
- map filter find some every...
- for of



