# deep router

- router
- 401  Unauthorized (未授权)
    - 表示请求需要用户认证
- 301 Moved Permanently (永久重定向)
    - 表示请求的资源已被永久移动到新位置
    - 浏览器会自动跳转到新的URL
    - 302 Found （临时重定向）
- 性能优化

- SPA 带来了优质的用户体验
  - 快
  - 不会白屏，不依赖http去服务器端请求页面
- 前端首先加路由  SPA应用
   React
   ReactRouter
   Redux
- 导航，封装
- 路由懒加载
    lazyload
    - / home
    - /about
    只加载当前需要的
- es6 module引入模块并且会执行
- 懒加载的流程
    - import es6 加载并执行太多的非必要组件
        影响首页的加载速度，特别是页面多的时候
    - 导入lazy,Suspense
        lazy 高阶组件(返回值是组件)
    - import('./pages/about')动态加载
    - <Route />匹配到 才会去动态加载相应的组件
    - Suspense 在还未加载前 fallback 占位

## 路由守卫