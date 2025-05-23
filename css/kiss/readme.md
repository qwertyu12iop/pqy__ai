# css animation

- html
  div
  眉毛
  嘴巴
  小酒窝

- css
  ？ 在一起？
  border-radius
  animation 世界

- html结构快捷输入方式 
  div#l-ball.ball   emmet语法 css选择器
  .container>#l-ball.ball+#r-ball.ball

- id 唯一
- class 类名
- .container?
  盒子  页面居中
  水平垂直居中
- .container>l-ball.ball+#r-ball.ball
  >子元素选择器
  +兄弟元素选择器

- display  属性
  div  block
  span,i a inline
  display 切换行内块级的格式化上下文能力
  inline-block行内块级  设置宽高 在一行显示
  block 块级  独占一行
  inline 行内 不可以设置宽高

  面向对象的css
  多态 
  复用  多类名

- 定位
  - position 定位
    static 静态定位  不定位
    relative 相对定位
       - 子元素相对它定位
       - 相对于自身的位置定位

    absolute 绝对定位  找到离它(管着它的)最近的position不为static的属性定位 直到body为止
      - 
    .container absolute 相对于body定位

