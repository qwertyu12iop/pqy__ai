# 性能优化

## 重绘重排

- 重绘
    当元素样式改变但不影响布局时，浏览器会重新绘制元素的过程。如改变颜色、背景等。
- 重排
    DOM 元素的尺寸、位置发生变化时，浏览器需要重新计算布局，影响其他元素位置的过程。

### DEMO 1 批量修改DOM
```js
// 是不对的 会多次操作 可能触发多次重排
//虽然现代浏览器会合并多次操作 但是还是建议避免
//需要避免 
const el = document.querySelectorAll('myEl')
el.style.width = '100px'
el.style.height = '100px'
el.style.margin="10px"

// 正确的方式
el.style.cssText='width:100px;height:100px;margin:10px'
el.className='my-class' //用类名而不是一堆js代码
```

### 使用文档碎片
```js
const fragment = document.createDocumentFragment();
for(let i=0;i<10;i++){
    const el=document.createElement('div')
    fragment.appendChild(el);//没有触发重排重绘
}
document.body.appendChild(fragment);//一次触发重排重绘
//批量添加元素时，使用document.createDocumentFragment()优化
```

## 脱离文档流进行操作  下线
```js
const el=document.getElementById('myEl')
el.style.position='absolute'
el.style.display='none';
//...大量的操作
el.style.display='block'
el.style.position='static'
```

### 缓存布局信息
```js
//offsetTop 读取 但是每次都会触发重排以获得盒子的布局信息
for(let i=0;i<100;i++){
    el.style.top=el.offsetTop+1+'px'
}

let top=el.offsetTop;//缓存布局信息
for(let i=0;i<100;i++){
    top++;
    el.style.top=top+'px'
}
```

### 使用transform代替位置调整
```js
el.style.left='100px';
//只触发重绘，性能更好
el.style.transform='translateX(100px)'
```


## 资源加载优化
  - 图片懒加载
  - 路由懒加载
        代码文件上，code spliting 代码分割
  - 资源预加载
        提前加载资源
        <link rel="prefetch" href="/next-page.js">
        dns-prefetch 提前解析域名dns
        preload 当前页面必须加载的资源
  - script 资源的加载
        默认没有
        async 并发
        defer
        module //功能
    - webp 格式图片
        图片的优化,显著的减少体积,并不影响质量
    - 图标字体库
        图标字体库的使用,可以减少http请求,同时可以使用font-size调整图标大小
## JS执行优先
    - 防抖节流
    - web workers 处理复杂计算
    - requestAnimationFrame
        动画的优化,可以减少重绘重排的次数
    - requestIdleCallback
        空闲时间执行回调
        react fiber scheduler 机制

## 框架层优化
    - memo,useCallback,useMemo 避免不必要的渲染
    - shadcn-ui 按需加载组件库
    - 合理使用key 优化列表渲染

## 缓存策略
    - 强缓存和协商缓存
        Expires(客户端时间不准确) / Cache-Control  不发送请求
        Last-Modified If-Modified-Since 时间戳  304
        ETag If-None-Match
    - localStorage / sessionStorage / cookie

## 网络优化
    - CDN 加速
         静态资源,分流,会缓存文件
         多路复用 多域名服务器 img1.baidu.com img2.baidu.com
    - Gzip压缩
    - HTTP/2 多路复用
    - DNS 预解析

## 首屏优化
- SSR
   组件渲染在服务器端已经完成编译 执行,浏览器端直接显示
- 骨架屏
- http2.0 server push 首屏数据推送

## 性能测试
    - chrome的performance面板
    可以看到各项性能指标，针对性能有啊，给出优化建议

    - 减少首屏JS/css体积 (code splitting)
    代码分割（Code Splitting）是一种将代码库拆分成更小、更易管理的块的技术，以便按需加载或并行加载，从而优化应用的加载性能和执行效率。
    - 使用transform 代替位置调整，预加载相关资源
    juejin js = (vue + vue-router) + App.vue +Home.vue + Components
    vue + vue-router 单独拆分 缓存 基本是不会变的
    App.vue +Home.vue + Components  业务代码 经常改，单独
    做了一次升级，把业务代码单独拆分，缓存基本是不会变的，业务代码经常改，单独拆分，缓存业务代码，减少首屏加载时间

- lighthouse
    是chrome 的一款性能测试工具
    会在性能、无障碍、最佳实践、SEO 四个方面进行测试打分
    并给出问题和优化建议
    - 图片大小优化 webp
    - 字体库
    - 渲染屏蔽请求

## 性能的关键指标
- FCP First Contentful Paint  首次内容绘制
    首内容绘制（First Contentful Paint, FCP）是衡量网页加载性能的指标，表示浏览器首次渲染出页面内容（如文本、图片等）的时间。
- LCP Largest Contentful Paint  最大内容绘制
    最大内容绘制（Largest Contentful Paint, LCP）是衡量网页加载性能的关键指标，表示页面中最大可见内容元素（如图片、视频或文本块）完全渲染完成的时间。