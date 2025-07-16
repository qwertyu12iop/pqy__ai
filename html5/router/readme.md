# 路由

history
hash

- 传统页面开发
    a标签
    重要的用户体验缺失
    - 需要去到后端拿到新的html，重新渲染
         白屏
    - a 链接切换页面
    - 相比于react-router-dom 局部热更新
    前端路由 去负责

- 新的react-router-dom  SPA 单页应用
  做到只有一个页面 但能带来多页面效果

## SPA 单页应用
- Single Page Application
- 只有一个页面 但能带来多页面效果
   - react组件
      页面级别组件
   - Routes/Router 申明，文档流中占位
   - Routers外面 Outlet外面 不要更新的
   - url 变化，路由组件更新
   - Route内部显示哪个页面组件
     热更新

   - 用一个页面完成了多个页面的显示
   - SPA 用户体验特别棒，

## 核心
- url 切换
  不能用a
  Link
  不去重新发送请求
  作为事件，js动态加载
- 事件 hashchange/pushState 
- 根据当前的url，取到对应的组件
   替换掉之前的页面级别组件
- 用户体验是：
   URL 改变了 不用刷新整个页面
   不再看白屏  页面展示很快
   - About Home全是前端组件

## url改变，但不会重新渲染的解决方案
- hash的改变
   原来是用来做页面锚点，用于长页面的电梯(跳转某个地方)
   不会刷新页面
   #/
   #/about
- 事件
   hashchange