# 大数相加

- 高精度
  js 只有Number 类型，不分整数、浮点数、高精度...
  js 不太适合计算 python适合
  表现力强
- 大数字
  边界问题 
  Infinity
  -Infinity
  Number.MAX_VALUE
- 字符串化
  
- es6 提供了BigInt 类型，用来表示任意精度的整数。

## BigInt
安全 2^53 - 1  
Number.MAX_SAFE_INTEGER
  9007199254740991

es6 新增的第六种简单数据类型
后面加 n
BigInt("123"),不能new
无限大，无溢出问题
js 适合大型项目开发