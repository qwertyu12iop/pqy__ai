- npx create-next-app@latest my-todo
   基于create-next-app创建了一个my-todo项目 next.js项目
- npx 
   不用先安装，可以直接运行，适合项目的测试
   不会留下痕迹 不影响全局
   npm i -g create-next-app@latest
   尝试一下某种技术的时候，特别有用

- CSR and SSR
   - CSR 组件在客户端运行 模板编译， 挂载，浏览器(client) SPA
   - SSR 服务器端渲染SSR 组件的编译发生在服务器端，SEO非常好
     爬虫爬取的是服务端返回的html,而CSR只有一个#root
     企业栈 SEO 掘金