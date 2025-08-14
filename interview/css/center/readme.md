# 居中
- 听清要的是什么居中
     - 水平垂直
- 方式不是关键，而是区别和优劣
     - 水平居中 text-align: center;
     - 单行文本垂直居中 line-height=height padding,
     - 固定宽高块级盒子水平垂直居中  absolute + margin 负值
          缺点是需要知道盒子的宽高
          absolute + margin: auto(重要);
          absolute + calc(css calc 计算函数); 缺点是性能差,很少用
     - 不固定宽高块级盒子水平垂直居中
          absolute + transform  translate(-50%,-50%) 
          line-height + vertical-align
          writing-mode
          
