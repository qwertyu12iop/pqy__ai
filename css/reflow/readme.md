# 回流重绘
- 布局的难点 列式布局和理解BFC/FFC
  - html 根元素 最外层的第一个BFC元素
    BFC Block Formatting Context 块级格式化上下文
    块级从上到下，行内从左到右 
    有了文档流
  - float overflow:hidden  flex
  - 有没有什么标签可以做列式布局table
  tr td
  - 为什么不用？
    - 触发太多的回流和重绘
    - 语义不和 table数据表
      tr row
      td column
    - 不够灵活
  
## 回流和重绘
- 回流 reflow
  当RenderTree 中的一部分(或全部)因为元素的规模尺寸，布局，隐藏等改变时，浏览器重新渲染部分或全部文档的过程称为回流(reflow)。
  table 不适合，table中局部的改变，会触发整个table的回流重排
  火烧赤壁
  display:none 不参与回流重绘  性能优化的一种方案
   - 触发回流(重排 reflow)的方式
      1.页面首次渲染 严格意义不是 0 -》 有 最耗时
        网页每慢0.1s 少1000万
      2.浏览器窗口的大小改变
      3.元素尺寸或位置改变(transition,transform/opacity 新图层除外)
      4.元素内容的变化
        appendChild 插入元素
        removeChild 删除元素
      5.display:none/block
      6.字体大小的变化
      7.激活css伪类 :hover
        color: ? 浏览器需要重新计算元素的样式和布局
      8.查询某些属性或调用某些方法
        img.getBoundingClientRect() 浏览器需要重新计算元素的位置和大小  触发回流
        rect{

        }


- 重绘 repaint
  当元素的外观发生改变并不影响它在文档流中的位置
  color background-color visibility:hidden/show

## 页面是怎么渲染的？
- 输入url
- 下载html
  - 下载字节
  - "UTF-8"编码 html字符
  - 根据开关标签 属性... 解析html 
  - 节点对象
  - 构建DOM树

- link css 下载css
   - 下载字节码 Content-Type text/html  text/css
   - 编码UTF-8 得到css文本
   - token 词法分析 
   - css rule 节点
   - cssOM 树
   - RenderTree 渲染树
   - Layout树
     布局，盒模型，大小 确定元素在文档流中的位置和大小
   - 图层概念
     - z-index position:fixed 弹窗 transtion+transform 动画 tranlate3d
     - translate(50%,50%,50%) GPU加速
     一个图层 主要文档流图层=DOM树+cssOM树 -》 RenderTree <-> Layout树
  - 图层的合并 
  - 浏览器的渲染引擎 绘制平面 像素点绘制

- js会动态操作DOM 阻塞

DOM树 + cssOM树 = RenderTree渲染树
 


