# 图片懒加载

- <img src=""/>
  - 浏览器的下载线程
  - src http 应用层协议
  - https://img.36krcdn.com/hsossms/20250312/v2_aeaa7a1d51e74c3a8f909c96cd73a687@000000_oswg169950oswg1440oswg600_img_jpeg?x-oss-process=image/format,webp
   ip地址 
  - 发送 网路带宽有限
    并发 同时下载多个css ,img 支持的比较好的
    tcp/ip
  - 网页(电商)图片太多了，滚动加载
  - 如果一开始就src 所有的图片，会影响页面的加载速度
## 懒加载
  - 只加载需要加载的图片 
    - 可视区
    - 滚动区域 scroll
  - 不加载 src不能直接给 data-original
    src 是img的功能函数  占位图
  - 占位图
    - src 应该设置 但不能请求原来图片的地址（并发太多，图片太大）
    - 给个占位的图片(比较小)
      缓存，只需要请求一次
- 等页面渲染完成后 
  img 太多会严重影响页面的打开速度 第一重要的
  data-original中 自定义属性  data- 数据属性
  图片的原地址是img  

- 性能问题
  - 解决了性能问题  首屏加载速度
  - onScroll 触发太频繁 JS 
  - forEach imgs 
- 防抖 截流

